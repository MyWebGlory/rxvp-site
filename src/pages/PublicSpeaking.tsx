import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";

const publicSpeakingDescription =
  "IGNITE is a premium, hands-on development experience. Led by seasoned life sciences industry leaders and coaching experts who speak from lived experience, this program moves far beyond theory: It utilizes immersive, gamified workshops, high-stakes live role-play, and challenging coaching to master public speaking and build a definitive professional leadership signature.";

const publicSpeakingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://rxvp.org/public-speaking/",
  url: "https://rxvp.org/public-speaking/",
  name: "Public Speaking",
  description: publicSpeakingDescription,
  inLanguage: "en-US",
};

function formatCompanyLocation(company: string | null, location: string | null) {
  const cleanCompany = company?.trim() || "your company";
  const cleanLocation = location?.trim();

  return cleanLocation ? `${cleanCompany} in ${cleanLocation}` : cleanCompany;
}

export default function PublicSpeaking() {
  const [searchParams] = useSearchParams();
  const companyName = searchParams.get("company")?.trim() || "your company";
  const companyLocation = useMemo(
    () => formatCompanyLocation(searchParams.get("company"), searchParams.get("location")),
    [searchParams],
  );

  return (
    <div className="page-template-public-speaking">
      <SEO
        title="Public Speaking"
        description={publicSpeakingDescription}
        canonicalPath="/public-speaking/"
        structuredData={[
          publicSpeakingSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "Public Speaking", path: "/public-speaking/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <section className="public-speaking-hero home-hero relative default-hero min-h-[580px] lg:min-h-[700px]">
          <div className="absolute inset-y-0 left-0 w-1/2 hidden lg:block">
            <img src="/assets/Gold.webp" alt="Gold texture" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="overlay absolute w-full h-full bg-black opacity-50 z-10"></div>
          </div>

          <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:flex lg:pb-12">
            <img src="/assets/Crowd.webp" alt="Crowd" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

          <div className="lg:hidden flex flex-col lg:min-h-[580px]">
            <div className="relative w-full h-1/2">
              <img src="/assets/Gold.webp" alt="Gold texture" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="overlay absolute w-full h-full bg-black opacity-50 z-10"></div>
              <div className="lg:hidden container relative">
                <div className="relative z-20 flex flex-col justify-center h-full text-white max-w-lg pt-48 ml-10 md:pt-40 pb-20">
                  <p className="public-speaking-tagline">The first and only speaker's bureau in life sciences</p>
                  <p className="public-speaking-kicker">Proudly presents</p>
                  <h1 className="font-Primary text-white">IGNITE</h1>
                  <p className="mt-4 text-xl font-Secondary text-white">
                    Training Life Sciences leaders for high impact public speaking
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full flex h-[450px]">
              <img src="/assets/Crowd.webp" alt="Crowd" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          <div className="hidden lg:block container relative">
            <div className="relative z-20 flex flex-col justify-center h-full text-white max-w-lg pt-40 public-speaking-hero-copy">
              <p className="public-speaking-tagline">The first and only speaker's bureau in life sciences</p>
              <p className="public-speaking-kicker">Proudly presents</p>
              <h1 className="font-Primary text-white">IGNITE</h1>
              <p className="mt-4 text-xl font-Secondary text-white">
                Training Life Sciences leaders for high impact public speaking
              </p>
            </div>
          </div>

          <img src="/assets/Mic.webp" alt="Microphone" className="absolute left-1 lg:left-3 xl:left-6 bottom-[450px] lg:bottom-0 w-20 md:w-24 lg:w-32 z-20" />
          <img src="/assets/Woman.webp" alt="Speaker" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block h-[85%]" />
          <svg className="panels-wave hero-wave" viewBox="0 0 1000 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 64 C180 34 326 76 492 58 C674 38 806 22 1000 70 L1000 130 L0 130 Z" fill="#fffdf8" />
            <path d="M0 50 C180 20 326 62 492 44 C674 24 806 8 1000 56 L1000 76 C806 28 674 44 492 64 C326 82 180 40 0 70 Z" fill="#c9a532" opacity="0.92" />
          </svg>
        </section>

        <section className="bg-white public-speaking-intro">
          <div className="container public-speaking-grid">
            <div>
              <h2 className="font-Primary text-dark">
                Igniting next-in-line talent to excel as enterprise leaders
              </h2>
              <p className="font-Secondary text-dark">
                IGNITE is a premium, hands-on development experience. Led by seasoned life sciences industry leaders
                and coaching experts who speak from lived experience, this program moves far beyond theory: It
                utilizes immersive, gamified workshops, high-stakes live role-play, and challenging coaching to
                master public speaking and build a definitive professional leadership signature.
              </p>
            </div>
            <aside className="public-speaking-card">
              <p className="public-speaking-label">Core advantages</p>
              <ul>
                <li>Speaking practice on 3 different panel events</li>
                <li>Practitioner speaking coaches who know the life sciences stage</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="public-speaking-program bg-[#F8F9FA]">
          <div className="container">
            <div className="public-speaking-columns">
              <article>
                <p className="public-speaking-label">Real-World Speaking Opportunities</p>
                <h2 className="font-Primary text-dark">Real-World Speaking Opportunities</h2>
                <ul className="public-speaking-pills">
                  <li>RxVP panels</li>
                  <li>RxVP fireside chats</li>
                  <li>Strategic stakeholder engagements</li>
                  <li>Industry conferences</li>
                  <li>RxVP/ERG collaborations</li>
                </ul>
                <p className="font-Secondary text-dark">
                  Each participant receives three high-value speaking opportunities over six months. Experiences may be
                  virtual or in person and designed for internal or external audiences.
                </p>
              </article>
              <article>
                <p className="public-speaking-label">Practitioner-Led Coaching</p>
                <h2 className="font-Primary text-dark">Practitioner-Led Coaching</h2>
                <p className="font-Secondary text-dark">
                  RxVP Speaker coaches are active public speakers.
                </p>
                <ul className="public-speaking-list">
                  <li>The Art of the Narrative: Crafting and telling your strategic story with impact</li>
                  <li>The Art of the Stage: How to engage both virtual and in-person audiences</li>
                  <li>The Art of the Pivot: Reading the panel flow and seamlessly adjusting</li>
                  <li>The Art of the Hot Seat: Navigating difficult live questions and delivering interesting answers on the spot.</li>
                </ul>
              </article>
            </div>

            <div className="public-speaking-columns public-speaking-detail">
              <article>
                <p className="public-speaking-label">Program objectives</p>
                <ul className="public-speaking-list">
                  <li>Communicate with executive-level confidence and credibility in internal meetings</li>
                  <li>Strengthen leadership presence in high-visibility forums</li>
                  <li>Deliver clear, concise, and compelling messages under pressure</li>
                  <li>Engage diverse audiences with authenticity and authority</li>
                  <li>Represent {companyName} with thought leadership impact</li>
                  <li>Navigate panel discussions and live Q&amp;A with agility and confidence</li>
                </ul>
              </article>
              <article>
                <p className="public-speaking-label">Delivery Skills</p>
                <ul className="public-speaking-list">
                  <li>Speaker delivery</li>
                  <li>Concise storytelling</li>
                  <li>Audience engagement</li>
                  <li>Mastering Q&amp;A</li>
                  <li>Appropriate self-effacing humor</li>
                  <li>Engagement with panelists, moderators, and interviewers</li>
                  <li>Enhanced executive presence</li>
                </ul>
              </article>
            </div>

            <section className="public-speaking-card public-speaking-custom">
              <p className="public-speaking-label">Program design can be customized based on:</p>
              <ul className="public-speaking-list">
                <li>Cohort size</li>
                <li>Audience composition and geography</li>
                <li>Strategic panel themes</li>
                <li>Number and cadence of speaking opportunities</li>
                <li>Defined success metrics and developmental outcomes</li>
              </ul>
            </section>

            <section className="public-speaking-coaches">
              <p className="public-speaking-detail-lead">
                Participants leave the program better prepared to communicate with executive-level confidence, represent
                the organization with thought leadership impact, and navigate high-visibility forums with agility.
              </p>
              <p className="public-speaking-label">Our Practitioner Coaches</p>
              <div className="public-speaking-coach-grid">
                <article>
                  <h3>Deepa Desai</h3>
                  <p>
                    Dr. Deepa Desai is a globally recognized healthcare executive, public speaker, leadership strategist, and executive presence advisor with more than 20 years of experience leading transformation across the life sciences sector. She serves as Founder and CEO of D Cube Consultancy, Head of Asia Pacific for RxVP, Global Board Director at the Healthcare Businesswomen's Association, and has held numerous VP roles in major corporations. Through these leadership roles, she helps emerging leaders strengthen executive presence, elevate strategic communication, and speak with confidence, credibility, and influence.
                  </p>
                  <p>
                    Deepa is a frequent speaker at life sciences conferences and leadership forums across the United States and Europe. She has also expanded the Healthcare Businesswomen’s Association in India to a growing community of 700 members by building panels, summits, and chapters across the country.
                  </p>
                </article>
                <article>
                  <h3>Bonnie Lappin</h3>
                  <p>
                    Bonnie Lappin co-founded the Ambassador Program for the Healthcare Businesswomen's Association in
                    2013. Designed as a global leadership development program for HBA corporate partners, it grew under
                    her leadership from 2013 to 2025 into a signature, often life-changing experience for more than
                    11,000 participants.
                  </p>
                  <p>
                    Her leadership impact spans globally, having spoken on leadership and career development in the U.S., Switzerland, Austria, Belgium, India, Malaysia, Japan, France, UK, Germany, Singapore, Spain and Ireland.
                    Bonnie has mentored hundreds of professionals worldwide and is internationally recognized for advancing leadership in the life sciences industry. She was awarded the PharmaVOICE 100 Award in 2017 and is the sole recipient of the HBA Visionary Leader Award.
                  </p>
                  <p>
                    She also led panel development, launch and graduation events, and coached
                    hundreds of panelists and moderators.
                  </p>
                  <p>
                    Today, Bonnie continues this work through RxVP, a global speakers bureau that curates panels for
                    experienced and emerging speakers.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
