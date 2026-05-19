import SEO, { breadcrumbSchema } from "@/components/SEO";
import StaticHtmlPage from "@/components/StaticHtmlPage";
import { Footer, Header } from "@/components/SiteChrome";

const speakersDescription =
  "Browse RXvP speakers and explore curated speaking opportunities for senior life sciences leaders across global markets.";

const speakersPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://rxvp.org/speakers/",
  url: "https://rxvp.org/speakers/",
  name: "RXvP Speakers",
  description: speakersDescription,
  inLanguage: "en-US",
};

export default function Speakers() {
  return (
    <div className="page-template-speakers">
      <SEO
        title="RXvP Speakers"
        description={speakersDescription}
        canonicalPath="/speakers/"
        structuredData={[
          speakersPageSchema,
          breadcrumbSchema([
            { name: "RXvP", path: "/" },
            { name: "Speakers", path: "/speakers/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <h1 className="sr-only">RXvP Speakers and Opportunities</h1>
        <StaticHtmlPage contentUrl="/content/home.html" containerId="legacy-speakers-content" sectionKey="speakers" />
      </main>
      <Footer />
    </div>
  );
}
