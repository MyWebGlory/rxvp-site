import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";
import { PRESS_RELEASES } from "@/lib/pressReleases";
import { Link } from "react-router-dom";

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
              Press releases, announcements, and media coverage from RxVP.
            </p>
          </div>
        </section>

        <section className="section-full py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="press-release-list">
              {PRESS_RELEASES.map((release) => (
                <Link key={release.slug} to={`/press-release/${release.slug}/`} className="event-card press-release-card">
                  <div className="event-card-media press-release-card__media">
                    <h2 className="event-card-title press-release-card__title">{release.title}</h2>
                  </div>
                  <div className="event-card-body">
                    <p className="event-card-kicker">{release.category} - {release.displayDate}</p>
                    <div className="event-card-meta">
                    </div>
                    <p className="event-card-summary press-release-card__excerpt">{release.excerpt}</p>
                    <span className="event-card-cta">Read press release</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
