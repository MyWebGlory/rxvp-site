import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";
import { INTERNATIONAL_WOMENS_DAY_PRESS_RELEASE } from "@/lib/pressReleases";

const release = INTERNATIONAL_WOMENS_DAY_PRESS_RELEASE;

const articleDescription = release.excerpt;
const articlePath = `/press-release/${release.slug}/`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id": `https://rxvp.org${articlePath}`,
  url: `https://rxvp.org${articlePath}`,
  headline: release.title,
  description: articleDescription,
  datePublished: release.datePublished,
  dateModified: release.datePublished,
  articleSection: release.category,
  inLanguage: "en-US",
  mainEntityOfPage: `https://rxvp.org${articlePath}`,
  publisher: {
    "@type": "Organization",
    name: "RxVP",
    url: "https://rxvp.org",
  },
};

export default function PressReleaseInternationalWomensDay() {
  return (
    <div className="page-template-press-release-article">
      <SEO
        title={`${release.title} | Press Release`}
        description={articleDescription}
        canonicalPath={articlePath}
        structuredData={[
          articleSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "In the News", path: "/press-release/" },
            { name: release.title, path: articlePath },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <section className="press-release-article-hero">
          <div className="container">
            <p className="press-release-article-hero__eyebrow">{release.heroEyebrow}</p>
            <div className="press-release-article-hero__frame">
              <div className="press-release-article-hero__meta">
                <span>{release.displayDate}</span>
                <span>08:59 AM CET</span>
                <span>Health &amp; Medicine</span>
              </div>
              <h1>{release.title}</h1>
              <p className="press-release-article-hero__subheading">{release.subheading}</p>
              <div className="press-release-article-hero__actions">
                <a href="/press-release/">Back to In the News</a>
                <a href={release.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View original source
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="press-release-article-shell">
          <div className="container">
            <div className="press-release-article-layout">
              <article className="press-release-article">
                {release.sections.map((section) => (
                  <section key={section.heading} className="press-release-article__section">
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </article>

              <aside className="press-release-sidebar">
                <div className="press-release-sidebar__block">
                  <p className="press-release-sidebar__label">Release Details</p>
                  <dl className="press-release-sidebar__list">
                    <div>
                      <dt>Date</dt>
                      <dd>{release.displayDate}</dd>
                    </div>
                    <div>
                      <dt>Type</dt>
                      <dd>{release.category}</dd>
                    </div>
                    <div>
                      <dt>Source</dt>
                      <dd>{release.sourceName}</dd>
                    </div>
                  </dl>
                </div>

                <div className="press-release-sidebar__block">
                  <p className="press-release-sidebar__label">Media Contact</p>
                  <p className="press-release-sidebar__contact">{release.mediaContact.name}</p>
                  <a href={`mailto:${release.mediaContact.email}`}>{release.mediaContact.email}</a>
                  <a href={`https://${release.mediaContact.website}`} target="_blank" rel="noopener noreferrer">
                    {release.mediaContact.website}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
