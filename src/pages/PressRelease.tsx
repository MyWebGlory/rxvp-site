import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";

const pressReleaseDescription = "In the News: press releases and media coverage for RxVP.";

const pressReleasePageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://rxvp.org/press-release/",
  url: "https://rxvp.org/press-release/",
  name: "In the News",
  description: pressReleaseDescription,
  inLanguage: "en-US",
};

export default function PressRelease() {
  return (
    <div className="page-template-press-release">
      <SEO
        title="In the News | RxVP"
        description={pressReleaseDescription}
        canonicalPath="/press-release/"
        structuredData={[
          pressReleasePageSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "In the News", path: "/press-release/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <section className="section-full py-16 lg:py-24 bg-dark relative">
          <img className="absolute opacity-60 top-0 w-full h-full object-cover" src="/assets/circlesbg.webp" alt="circle pattern bg" />
          <div className="container relative z-10">
            <p className="rxvp-section-kicker rxvp-section-kicker--light">Press Release</p>
            <h1 className="text-6xl text-white font-Primary mb-4">In the News</h1>
            <p className="font-Secondary text-lg text-white max-w-2xl">
              World record article and future press coverage will be published here.
            </p>
          </div>
        </section>

        <section className="section-full py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="rounded-md border border-gray-200 bg-gray-50 px-6 py-10 min-h-[240px]">
              <h2 className="text-2xl lg:text-3xl font-Primary mb-3">Ready Space</h2>
              <p className="font-Secondary text-base text-gray-700">
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
