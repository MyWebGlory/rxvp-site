import SEO from "@/components/SEO";
import { Footer, Header } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <div className="page-template-contact">
      <SEO
        title="404 - Page not found | RxVP"
        description="The requested RxVP page could not be found."
        canonicalPath="/404/"
        noIndex
      />
      <Header />
      <main className="main-content-wrap">
        <section className="bg-white py-16 lg:py-24">
          <div className="container text-center">
            <h1 className="font-Primary text-6xl text-dark mb-6">Page not found</h1>
            <p className="font-Secondary text-lg text-dark mb-8">The page you requested is not available.</p>
            <a className="btn btn-alt inline-block" href="/">
              Return to RxVP
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
