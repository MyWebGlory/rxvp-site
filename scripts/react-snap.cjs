const { run } = require("react-snap");

const defaultChromePath =
  process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "/usr/bin/google-chrome-stable";

run({
  source: "dist",
  include: ["/", "/contact/"],
  inlineCss: false,
  skipThirdPartyRequests: true,
  concurrency: 1,
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  puppeteerExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH || defaultChromePath,
}).catch((error) => {
  console.error("react-snap failed:", error);
  process.exit(1);
});
