import SEO, { breadcrumbSchema } from "@/components/SEO";
import StaticHtmlPage from "@/components/StaticHtmlPage";
import { Footer, Header } from "@/components/SiteChrome";
import { DEFAULT_DESCRIPTION } from "@/lib/site";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://rxvp.org/",
  url: "https://rxvp.org/",
  name: "RxVP | Exclusive Global Speakers Bureau",
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en-US",
};

export default function Home() {
  return (
    <>
      <SEO
        title="RxVP | Exclusive Global Speakers Bureau"
        description={DEFAULT_DESCRIPTION}
        canonicalPath="/"
        structuredData={[homePageSchema, breadcrumbSchema([{ name: "RxVP", path: "/" }])]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <h1 className="sr-only">RxVP | Exclusive Global Speakers Bureau for Life Science Executives</h1>
        <StaticHtmlPage contentUrl="/content/home.html" containerId="legacy-home-content" sectionKey="home" />
      </main>
      <Footer />
    </>
  );
}
