import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";
import { CONTACTS } from "@/lib/site";

const contactDescription =
  "Contact Bonnie Lappin or Suzette DiMascio at RXvP to learn about membership, speaking opportunities, and partnerships in the global life science community.";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://rxvp.org/contact/",
  url: "https://rxvp.org/contact/",
  name: "Connect with the Global Life Science Speakers Bureau",
  description: contactDescription,
  inLanguage: "en-US",
};

const emailSubject = encodeURIComponent("RXvP Speaker Invitation Application");

function emailBody(name: string) {
  return encodeURIComponent(
    [
      `Hello ${name.split(" ")[0]},`,
      "",
      "I would like to apply for a speaker invitation with RXvP.",
      "",
      "Name:",
      "Title:",
      "Company:",
      "Years of experience in life sciences:",
      "Public speaking experience:",
      "Speaker profile summary:",
    ].join("\n"),
  );
}

export default function Contact() {
  return (
    <div className="page-template-contact contact">
      <SEO
        title="Connect with the Global Life Science Speakers Bureau"
        description={contactDescription}
        canonicalPath="/contact/"
        structuredData={[
          contactSchema,
          breadcrumbSchema([
            { name: "RXvP", path: "/" },
            { name: "Connect with the Global Life Science Speakers Bureau", path: "/contact/" },
          ]),
        ]}
      />
      <div id="banner"></div>
      <a href="#main_content" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main_content" className="main-content-wrap">
        <section className="bg-white py-8 lg:py-16">
          <div className="container">
            <div className="contact-hero text-dark">
              <h1 className="font-Primary text-6xl text-center mb-6">Ready to Speak, Lead, and Inspire?</h1>
              <h2 className="font-Secondary text-2xl text-center">
                We're here to help you connect and grow your global impact.
              </h2>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FA] pt-6 pb-12 sm:pb-16 sm:pt-12 lg:pb-24 contact-panel-section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 contact-grid">
              <div className="bg-white rounded-xl shadow p-8 static-contact-card">
                <p className="contact-kicker">Speaker invitation</p>
                <h2 className="font-Primary text-4xl text-dark">Apply by email</h2>
                <p className="font-Secondary text-lg text-dark">
                  Send your speaker profile details to Bonnie Lappin or Suzette DiMascio. The RXvP team will follow up
                  about fit, timing, and upcoming opportunities.
                </p>
                <div className="contact-options" aria-label="RXvP contacts">
                  {CONTACTS.map((contact) => (
                    <article className="contact-person-card" key={contact.email}>
                      <img src={contact.image} alt={contact.name} width="160" height="160" loading="lazy" decoding="async" />
                      <div>
                        <h3 className="font-Secondary text-2xl text-dark">{contact.name}</h3>
                        <p className="contact-person-title">{contact.title}</p>
                        <a
                          className="btn btn-alt contact-email-button"
                          href={`mailto:${contact.email}?subject=${emailSubject}&body=${emailBody(contact.name)}`}
                        >
                          Email {contact.name.split(" ")[0]}
                        </a>
                        <p className="font-Secondary text-base contact-email-text">
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-8 flex flex-col justify-between font-Secondary text-lg text-dark contact-info-card">
                <div>
                  <p className="mb-8">
                    <span className="font-semibold">Confirm your participation and complete a short speaker profile.</span>
                  </p>
                  <p className="mb-8">
                    As a member of the RxVP Speakers Bureau, you'll join an exclusive global network of VP-level leaders
                    shaping the future of life sciences. Complete your speaker profile to be featured on our Speakers
                    Bureau platform and considered for upcoming events.
                  </p>
                  <p className="mb-8">
                    Beta phase will be Fall, 2025.
                    <br />
                    1-2 speaking engagements per person.
                  </p>
                </div>
                <div className="mt-auto flex justify-center">
                  <img src="/assets/promo.webp" alt="Speaker Bureau Promo" className="rounded shadow w-full" />
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
