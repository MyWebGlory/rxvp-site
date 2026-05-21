import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";

const aboutDescription =
  "Learn how the RxVP experience works and why senior life sciences leaders join the invitation-only speakers bureau.";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://rxvp.org/about/",
  url: "https://rxvp.org/about/",
  name: "About RxVP",
  description: aboutDescription,
  inLanguage: "en-US",
};

export default function About() {
  return (
    <div className="page-template-about">
      <SEO
        title="About RxVP"
        description={aboutDescription}
        canonicalPath="/about/"
        structuredData={[
          aboutPageSchema,
          breadcrumbSchema([
            { name: "RxVP", path: "/" },
            { name: "About", path: "/about/" },
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
          className="rxvp-about-hero relative flex items-center mt-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url('/assets/rxvp-people-map.jpeg')",
          }}
          aria-label="About hero"
        >
          <div className="container relative z-10">
            <h1 className="rxvp-about-hero-title text-white font-Primary">
              About
            </h1>
          </div>
        </section>

        <section className="section-full py-16 lg:py-24 bg-dark relative">
          <img className="absolute opacity-60 top-0 w-full h-full object-cover" src="/assets/circlesbg.webp" alt="circle pattern bg" />
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              <div className="lg:w-1/2">
                <p className="rxvp-section-kicker rxvp-section-kicker--light">Membership standard</p>
                <h2 className="text-6xl text-white font-Primary mb-4">Why Join RxVP?</h2>
                <p className="text-lg text-white font-Secondary">Who you are:</p>
                <ul className="text-white my-10 font-Secondary max-w-[450px]">
                  <li className="mb-4 text-lg text-[#F4DB97]">
                    &bull; You've led teams through uncharted territories of science and strategy, shaping what's next for the life sciences industry.
                  </li>
                  <li className="mb-4 text-lg text-[#F4DB97]">
                    &bull; You operate at the VP level or higher, guiding innovation with vision and influence.
                  </li>
                  <li className="mb-4 text-lg text-[#F4DB97]">
                    &bull; You are bold, driven to make an impact, and ready to share your story with the world.
                  </li>
                </ul>
                <p className="text-lg text-white font-Secondary">
                  RxVP was built for executives like you: poised to inspire as a solo speaker, panelist, or fireside
                  guest, while engaging in real-time conversations through live Q&amp;A.
                </p>
              </div>
              <div className="lg:w-1/2 my-6 lg:my-0" />
            </div>
            <div className="mx-auto mt-6 md:mt-12 flex items-center justify-center">
              <a href="/contact/" className="btn btn-alt btn-large inline-block sm:w-[500px] max-w-full">
                Apply for a Speaker Invitation
              </a>
            </div>
          </div>
        </section>

        <section className="left-right-section section-full bg-[#125E90] py-12 lg:py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/3 flex justify-center md:justify-start">
                <img src="/assets/RxVPExperience.webp" alt="The RxVP Experience Logo" className="max-w-sm w-full" />
              </div>

              <div className="w-full lg:w-2/3 text-white space-y-6 font-Secondary">
                <p className="leading-2xl text-lg">
                  Each <span className="font-semibold">RxVP panel brings together three accomplished senior leaders</span>{" "}
                  from distinct life science companies, guided by a skilled moderator for a{" "}
                  <span className="font-semibold">dynamic one-hour virtual discussion</span> including{" "}
                  <span className="font-semibold">25-minute live Q&amp;A</span>.
                </p>

                <p className="leading-2xl text-lg">Topics:</p>
                <ul style={{ listStyle: "unset", fontSize: "inherit", gap: "8px" }} className="flex flex-col font-Secondary">
                  <li>
                    <span className="font-semibold">Executive career advancement</span>, featuring authentic stories,
                    leadership insights and <span className="font-semibold">actionable takeaways</span> that resonate
                    with emerging and established leaders alike.
                  </li>
                  <li>Diversity aligned with Employee Resource groups featuring leaders from ERGs sharing best practices globally</li>
                  <li>Global Market Insights featuring executives from high growth markets sharing geographic and cultural knowledge</li>
                </ul>

                <p className="leading-2xl text-lg">
                  Our purpose is clear: to <span className="font-semibold">shift mindsets</span>, inspiring every
                  participant to see themselves reflected in today's trailblazers and go{" "}
                  <span className="font-semibold">farther, faster</span>.
                </p>

                <div className="pt-4 space-y-4">
                  <p className="leading-2xl text-lg">
                    <span className="font-semibold">Speaker Commitment:</span> One high-impact, virtual engagement.
                  </p>

                  <p className="leading-2xl text-lg">Each speaker will be given complimentary event tickets for their company employees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
