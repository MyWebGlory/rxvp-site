import SEO, { breadcrumbSchema } from "@/components/SEO";
import StaticHtmlPage from "@/components/StaticHtmlPage";
import { Footer, Header } from "@/components/SiteChrome";
import { INTERNATIONAL_WOMENS_DAY_EVENT } from "@/lib/events";

const eventDescription =
  "Explore RXvP's International Women's Day event, a global leadership conversation bringing together senior life sciences leaders across five continents.";

const eventPageSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://rxvp.org/events/international-womens-day/",
  url: "https://rxvp.org/events/international-womens-day/",
  name: INTERNATIONAL_WOMENS_DAY_EVENT.title,
  description: eventDescription,
  eventStatus: "https://schema.org/EventCompleted",
  startDate: "2026-03-04",
  endDate: "2026-03-06",
  image: [`https://rxvp.org${INTERNATIONAL_WOMENS_DAY_EVENT.image}`],
  inLanguage: "en-US",
};

export default function EventInternationalWomensDay() {
  return (
    <div className="page-template-event">
      <SEO
        title={INTERNATIONAL_WOMENS_DAY_EVENT.title}
        description={eventDescription}
        canonicalPath={INTERNATIONAL_WOMENS_DAY_EVENT.path}
        structuredData={[
          eventPageSchema,
          breadcrumbSchema([
            { name: "RXvP", path: "/" },
            { name: "Events", path: "/events/" },
            { name: INTERNATIONAL_WOMENS_DAY_EVENT.title, path: INTERNATIONAL_WOMENS_DAY_EVENT.path },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <h1 className="sr-only">{INTERNATIONAL_WOMENS_DAY_EVENT.title}</h1>
        <StaticHtmlPage
          contentUrl="/content/home.html"
          containerId="legacy-event-international-womens-day-content"
          sectionKey="event-international-womens-day"
        />
      </main>
      <Footer />
    </div>
  );
}
