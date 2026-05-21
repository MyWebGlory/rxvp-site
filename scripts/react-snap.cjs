const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { run } = require("react-snap");

const defaultChromePath =
  process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "/usr/bin/google-chrome-stable";

const source = "dist";
const sourceDir = path.resolve(source);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
]);

const resolveDistPath = (requestUrl) => {
  const { pathname } = new URL(requestUrl, "http://localhost");
  const decodedPath = decodeURIComponent(pathname);
  const candidatePath = path.normalize(path.join(sourceDir, decodedPath));
  const relativePath = path.relative(sourceDir, candidatePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
    return candidatePath;
  }

  const indexPath = path.join(candidatePath, "index.html");
  if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
    return indexPath;
  }

  const fallbackPath = path.join(sourceDir, "200.html");
  if (fs.existsSync(fallbackPath) && fs.statSync(fallbackPath).isFile()) {
    return fallbackPath;
  }

  return path.join(sourceDir, "index.html");
};

const createStaticServer = () =>
  http.createServer((request, response) => {
    const filePath = resolveDistPath(request.url || "/");

    if (!filePath) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.createReadStream(filePath)
      .on("error", () => {
        response.writeHead(404);
        response.end("Not found");
      })
      .once("open", () => {
        response.setHeader(
          "Content-Type",
          contentTypes.get(path.extname(filePath)) || "application/octet-stream",
        );
      })
      .pipe(response);
  });

const listen = (server) =>
  new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      resolve(server.address().port);
    });
  });

const close = (server) =>
  new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

(async () => {
  const server = createStaticServer();
  const port = await listen(server);

  try {
    await run({
      source,
      port,
      externalServer: true,
      include: ["/", "/contact/"],
      crawl: false,
      inlineCss: false,
      skipThirdPartyRequests: true,
      concurrency: 1,
      puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
      puppeteerExecutablePath:
        process.env.PUPPETEER_EXECUTABLE_PATH || defaultChromePath,
    });
  } finally {
    await close(server);
  }
})().catch((error) => {
  console.error("react-snap failed:", error);
  process.exit(1);
});
