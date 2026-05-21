import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";
import { EVENTS } from "@/lib/events";
import { Link } from "react-router-dom";

const eventsDescription =
  "Explore RxVP events and featured leadership conversations, including the International Women's Day experience.";

const eventsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://rxvp.org/events/",
  url: "https://rxvp.org/events/",
  name: "RxVP Events",
  description: eventsDescription,
  inLanguage: "en-US",
};

export default function Events() {
  const upcomingEvents = EVENTS.filter((event) => !/concluded/i.test(event.status));
  const pastEvents = EVENTS.filter((event) => /concluded/i.test(event.status));

  return (
    <div className="page-template-events">
      <SEO
        title="RxVP Events"
        description={eventsDescription}
        canonicalPath="/events/"
        structuredData={[
          eventsPageSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "Events", path: "/events/" },
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
            <p className="rxvp-section-kicker rxvp-section-kicker--light">Events</p>
            <h1 className="text-6xl text-white font-Primary mb-4">RxVP Events</h1>
            <p className="font-Secondary text-lg text-white max-w-2xl">
              Explore featured RxVP events and open each program for the full event experience.
            </p>
          </div>
        </section>

        <section className="section-full py-12 lg:py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl lg:text-3xl font-Primary mb-2">Upcoming</h2>
            <p className="font-Secondary text-base text-gray-700 max-w-2xl">
              Check back for newly announced RxVP events and webinars.
            </p>

            {upcomingEvents.length === 0 ? (
              <div className="mt-8 rounded-md border border-gray-200 bg-gray-50 px-6 py-6">
                <p className="font-Secondary text-base text-gray-700">
                  No upcoming events yet.
                </p>
              </div>
            ) : (
              <div className="events-grid mt-8">
                {upcomingEvents.map((event) => (
                  <Link key={event.slug} to={event.path} className="event-card">
                    <div className="event-card-media">
                      <img src={event.image} alt={event.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="event-card-body">
                      <p className="event-card-kicker">{event.kicker}</p>
                      <h3 className="event-card-title">{event.title}</h3>
                      <div className="event-card-meta">
                        <span>{event.status}</span>
                        <span>{event.dateLabel}</span>
                      </div>
                      <p className="event-card-summary">{event.summary}</p>
                      <span className="event-card-cta">View event</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section-full py-12 lg:py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl lg:text-3xl font-Primary mb-2">Past</h2>
            <p className="font-Secondary text-base text-gray-700 max-w-2xl">
              Explore prior RxVP webinars and event experiences.
            </p>

            {pastEvents.length === 0 ? (
              <div className="mt-8 rounded-md border border-gray-200 bg-gray-50 px-6 py-6">
                <p className="font-Secondary text-base text-gray-700">No past events yet.</p>
              </div>
            ) : (
              <div className="events-grid mt-8">
                {pastEvents.map((event) => (
                  <Link key={event.slug} to={event.path} className="event-card">
                    <div className="event-card-media">
                      <img src={event.image} alt={event.title} loading="lazy" decoding="async" />
                    </div>
                    <div className="event-card-body">
                      <p className="event-card-kicker">{event.kicker}</p>
                      <h3 className="event-card-title">{event.title}</h3>
                      <div className="event-card-meta">
                        <span>{event.status}</span>
                        <span>{event.dateLabel}</span>
                      </div>
                      <p className="event-card-summary">{event.summary}</p>
                      <span className="event-card-cta">View event</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
