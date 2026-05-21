import SEO, { breadcrumbSchema } from "@/components/SEO";
import StaticHtmlPage from "@/components/StaticHtmlPage";
import { Footer, Header } from "@/components/SiteChrome";

const leadershipDescription =
  "Meet the RxVP leadership team, including the founders and Asia Pacific leadership shaping the future of life sciences conversations.";

const leadershipPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://rxvp.org/leadership/",
  url: "https://rxvp.org/leadership/",
  name: "RxVP Leadership",
  description: leadershipDescription,
  inLanguage: "en-US",
};

export default function Leadership() {
  return (
    <div className="page-template-leadership">
      <SEO
        title="RxVP Leadership"
        description={leadershipDescription}
        canonicalPath="/leadership/"
        structuredData={[
          leadershipPageSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "Leadership", path: "/leadership/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <h1 className="sr-only">RxVP Leadership</h1>
        <StaticHtmlPage contentUrl="/content/home.html" containerId="legacy-leadership-content" sectionKey="leadership" />
      </main>
      <Footer />
    </div>
  );
}
