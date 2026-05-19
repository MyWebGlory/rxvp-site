import SEO, { breadcrumbSchema } from "@/components/SEO";
import StaticHtmlPage from "@/components/StaticHtmlPage";
import { Footer, Header } from "@/components/SiteChrome";

const aboutDescription =
  "Learn how the RXvP experience works and why senior life sciences leaders join the invitation-only speakers bureau.";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://rxvp.org/about/",
  url: "https://rxvp.org/about/",
  name: "About RXvP",
  description: aboutDescription,
  inLanguage: "en-US",
};

export default function About() {
  return (
    <div className="page-template-about">
      <SEO
        title="About RXvP"
        description={aboutDescription}
        canonicalPath="/about/"
        structuredData={[
          aboutPageSchema,
          breadcrumbSchema([
            { name: "RXvP", path: "/" },
            { name: "About", path: "/about/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <h1 className="sr-only">About RXvP</h1>
        <StaticHtmlPage contentUrl="/content/home.html" containerId="legacy-about-content" sectionKey="about" />
      </main>
      <Footer />
    </div>
  );
}
