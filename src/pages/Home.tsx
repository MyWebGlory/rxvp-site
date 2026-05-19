import SEO, { breadcrumbSchema } from "@/components/SEO";
import StaticHtmlPage from "@/components/StaticHtmlPage";
import { Footer, Header } from "@/components/SiteChrome";
import { DEFAULT_DESCRIPTION } from "@/lib/site";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://rxvp.org/",
  url: "https://rxvp.org/",
  name: "RXvP | Exclusive Global Speakers Bureau",
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
};

export default function Home() {
  return (
    <>
      <SEO
        title="RXvP | Exclusive Global Speakers Bureau"
        description={DEFAULT_DESCRIPTION}
        canonicalPath="/"
        structuredData={[homePageSchema, breadcrumbSchema([{ name: "RXvP", path: "/" }])]}
      />
      <Header />
      <h1 className="sr-only">RXvP | Exclusive Global Speakers Bureau for Life Science Executives</h1>
      <StaticHtmlPage contentUrl="/content/home.html" containerId="legacy-home-content" />
      <Footer />
    </>
  );
}
