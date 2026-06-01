import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";

const panelsDescription =
  "Two RxVP panel offerings: customized panels for your company and the RxVP panel series partnership package.";

const panelsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://rxvp.org/panels/",
  url: "https://rxvp.org/panels/",
  name: "Panels",
  description: panelsDescription,
  inLanguage: "en-US",
};

const stats = [
  { value: "12", label: "Virtual panels" },
  { value: "60", label: "Minutes per event" },
  { value: "30", label: "Minutes of live Q&A" },
];

const celebrationEvents = [
  { date: "February 2027", title: "Black History Month", tone: "gold" },
  { date: "February 11, 2027", title: "International Day of Women and Girls in Science", tone: "teal" },
  { date: "March 2027", title: "International Women's Day" },
  { date: "May 2027", title: "Asian History Month", tone: "gold" },
  { date: "June 2027", title: "Pride Month" },
  { date: "September 15 - October 15, 2026", title: "Hispanic Heritage Month", tone: "teal" },
  { date: "May 2027", title: "Mother's Day", tone: "gold" },
];

const engagementPoints = [
  "Employees gain firsthand exposure to leadership strategies and emerging market dynamics, supporting both individual growth and organizational success.",
  "Each event is designed for live audience engagement through a substantial Q&A segment.",
  "ERG partners can align the program with their goals, budgets, audience needs, and annual calendars.",
];

const markets = [
  {
    date: "September 2026",
    title: "China",
    text: "The world's second-largest pharmaceutical market and third-largest medical device market, with strong demand for talent and continued production growth.",
  },
  {
    date: "October 2026",
    title: "Japan",
    text: "The world's fourth-largest pharmaceutical market, with continued strategic importance in the global industry.",
  },
  {
    date: "November 2026",
    title: "India",
    text: "Projected to grow by 200%-250% by 2030, reaching $130 billion, and expected to remain a leading market for pharmaceutical employment and production.",
  },
  {
    date: "January 2027",
    title: "Brazil",
    text: "Growth is driven by expanded universal healthcare access through SUS, rising middle-class healthcare spending, and increased focus on rare diseases.",
  },
  {
    date: "February 2027",
    title: "Saudi Arabia",
    text: "Growth is driven by the Vision 2030 initiative and major healthcare privatization efforts.",
  },
];

const packageIncludes = [
  "Choose six events, each offered across multiple time zones.",
  "Up to two speakers from your company may serve as moderators or panelists, subject to RxVP approval.",
  "Receive pre- and post-event coaching for each speaker from RxVP Practitioner Coaches.",
  "Work with a dedicated RxVP advisor to support your ERG leaders and drive engagement.",
  "Receive 1,200 total seats, averaging 200 per event, with additional seats available for purchase.",
  "Feature your company logo as an RxVP sponsor at all events and on the RxVP website.",
];

export default function Panels() {
  return (
    <div className="page-template-panels">
      <SEO
        title="Panels"
        description={panelsDescription}
        canonicalPath="/panels/"
        structuredData={[
          panelsSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "Panels", path: "/panels/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <section
          className="panels-hero"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53, 18, 63, 0.28), rgba(53, 18, 63, 0.28)), url('/assets/rxvp-people-map.jpeg')",
          }}
          aria-label="RxVP panel series package"
        >
          <div className="panels-hero-copy">
            <h1>RxVP Panels</h1>
          </div>
          <svg className="panels-wave" viewBox="0 0 1000 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 64 C180 34 326 76 492 58 C674 38 806 22 1000 70 L1000 130 L0 130 Z" fill="#fffdf8" />
            <path d="M0 50 C180 20 326 62 492 44 C674 24 806 8 1000 56 L1000 76 C806 28 674 44 492 64 C326 82 180 40 0 70 Z" fill="#c9a532" opacity="0.92" />
          </svg>
        </section>

        <section className="panels-section panels-custom-intro">
          <div className="container">
            <p className="panels-label">Offering 01</p>
            <h2>Customized panels for your company</h2>
            <div className="panels-custom-copy">
              <p>It is often difficult to find external speakers.</p>
              <p>Your budget for speakers is limited.</p>
              <p>
                We can help you save time and money. RxVP has an extensive network of speakers globally. All are
                available virtually and some in-person.
              </p>
            </div>
          </div>
        </section>

        <section className="panels-section panels-overview">
          <div className="container panels-intro-grid">
            <div>
              <p className="panels-label">Offering 02</p>
              <h2 className="offering-two-title">RxVP Panel Series Partnership Package</h2>
              
              <p className="panels-lead">
                <span className="panels-lead-first">Twelve virtual panels,</span> each offered across multiple time zones, designed for employees who want firsthand
                access to senior life sciences leaders.
              </p>
              <p>
                Each 60-minute event features vice president-level and above speakers who provide insight into leadership
                journeys, market trends, and potential career paths. Every session includes 30 minutes of live Q&amp;A to
                encourage audience engagement.
              </p>
              <p>
                Based on 2025-2026 industry data, about 69% of pharmaceutical employees report being engaged and
                generally satisfied with their careers, with some indicators suggesting that one third of employees are
                not satisfied with their L&amp;D offerings.
              </p>

              <div className="panels-stats-strip">
                {stats.map((stat) => (
                  <div className="panels-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="panels-package-panel">
              <p className="panels-label">Partnership package</p>
              <h2>Choose six events from one combined package.</h2>
              <ul>
                <li>Celebration Days Series and Emerging Markets Series are sold together.</li>
                <li>Events are offered across multiple time zones.</li>
                <li>
                  RxVP partners with Employee Resource Groups (ERGs) to align senior-level speakers with your
                  organization's goals, budgets, and annual calendars.
                </li>
              </ul>
            </aside>
          </div>

          <div className="container panels-series-grid">
            <article className="panels-series-card panels-series-card-celebration">
              <p className="panels-label">Series 01</p>
              <h2>Celebration Days</h2>
              <p>
                Seven Featured observances from September 2026 through June 2027, built for ERG engagement, leadership
                visibility, and cross-functional employee learning.
              </p>
            </article>

            <article className="panels-series-card panels-series-card-market">
              <p className="panels-label">Series 02</p>
              <h2>Emerging Markets</h2>
              <p>
                Five market-focused panels from September 2026 through February 2027, spotlighting China, India, Japan,
                Brazil, and Saudi Arabia.
              </p>
            </article>
          </div>
        </section>

        <section className="panels-section panels-celebration">
          <div className="container">
            <div className="panels-feature-lead">
              <div className="panels-celebration-panel">
                <h2>Celebration Days Series</h2>
                <p>
                  Seven Featured observances from September 2026 through June 2027, with senior speakers curated for employee
                  resource groups and leadership audiences.
                </p>
              </div>

              <div className="panels-feature-summary">
                <h3>Built to help employees break down silos.</h3>
              </div>
            </div>

            <div className="panels-celebration-grid">
              {celebrationEvents.map((event) => (
                <article className={`panels-celebration-tile ${event.tone ? `is-${event.tone}` : ""}`} key={`${event.date}-${event.title}`}>
                  <p className="panels-label">{event.date}</p>
                  <h3>{event.title}</h3>
                </article>
              ))}
            </div>

            <div className="panels-engagement-band">
              <ul>
                {engagementPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="panels-section panels-markets">
          <div className="container">
            <div className="panels-feature-lead">
              <div className="panels-map-panel">
                <p className="panels-eyebrow">September 2026 - February 2027</p>
                <h2>Emerging Markets Series</h2>
                <p>Panels featuring vice president-level and above speakers from key emerging markets.</p>
              </div>

              <div className="panels-feature-summary">
                <p className="panels-lead">
                  Employees gain regional leadership perspective and a clearer view of the trends shaping growth markets.
                </p>
                <p>
                  Five market-focused panels spotlighting China, India, Japan, Brazil, and Saudi Arabia, regions
                  critical to the future of life sciences.
                </p>
              </div>
            </div>

            <div className="panels-market-grid">
              {markets.map((market) => (
                <article className="panels-market-card" key={market.title}>
                  <p className="panels-label">{market.date}</p>
                  <h3>{market.title}</h3>
                  <p>{market.text}</p>
                </article>
              ))}
            </div>

            <section className="panels-includes">
              <div>
                <h2>Partnership Package Includes</h2>
                <ul>
                  {packageIncludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <aside className="panels-closing-card">
                <div className="panels-price">
                  <strong>
                    <span>US</span> $2,950
                  </strong>
                  <strong>
                    <span>EUR</span> 2,540
                  </strong>
                  <em>Combined package</em>
                </div>
                <p>
                  Cost may be divided between ERGs or functional areas. The Celebration Days Series and Emerging Markets
                  Series are sold together as one RxVP package.
                </p>
                <p>
                  For more information please contact Bonnie Lappin{" "}
                  <a href="mailto:bonnie@rxvp.org">bonnie@rxvp.org</a> or Dr. Deepa Desai{" "}
                  <a href="mailto:deepa@rxvp.org">deepa@rxvp.org</a>.
                </p>
              </aside>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
