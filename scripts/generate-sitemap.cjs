const fs = require("node:fs");
const path = require("node:path");

const siteUrl = "https://rxvp.org";
const routes = ["/", "/contact/"];
const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join("dist", "sitemap.xml"), sitemap);
fs.writeFileSync(
  path.join("dist", "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
);

const notFoundHtml = `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>404 - Page not found | RxVP</title>
    <link rel="icon" href="/assets/cropped-RxVP-logo-32x32.webp" sizes="32x32" />
    <link rel="stylesheet" href="/assets/google-fonts-core.css" />
    <link rel="stylesheet" href="/assets/google-fonts-cormorant.css" />
    <link rel="stylesheet" href="/assets/index-43658645.css" />
  </head>
  <body>
    <main class="main-content-wrap page-template-contact">
      <section class="bg-white py-16 lg:py-24">
        <div class="container text-center">
          <h1 class="font-Primary text-6xl text-dark mb-6">404 - Page not found</h1>
          <p class="font-Secondary text-lg text-dark mb-8">The requested RxVP page could not be found.</p>
          <a class="btn btn-alt inline-block" href="/">Return to RxVP</a>
        </div>
      </section>
    </main>
  </body>
</html>
`;

fs.writeFileSync(path.join("dist", "404.html"), notFoundHtml);

console.log("Generated sitemap.xml, robots.txt, and 404.html");
