import { useEffect, useState } from "react";

interface StaticHtmlPageProps {
  contentUrl: string;
  containerId: string;
}

function readPrerenderedMarkup(containerId: string) {
  if (typeof document === "undefined") {
    return "";
  }

  return document.getElementById(containerId)?.innerHTML ?? "";
}

export default function StaticHtmlPage({ contentUrl, containerId }: StaticHtmlPageProps) {
  const [markup, setMarkup] = useState(() => readPrerenderedMarkup(containerId));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (markup) {
      return;
    }

    const controller = new AbortController();

    fetch(contentUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${contentUrl}: ${response.status}`);
        }

        return response.text();
      })
      .then((html) => setMarkup(html))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error(error);
          setHasError(true);
        }
      });

    return () => controller.abort();
  }, [contentUrl, markup]);

  if (hasError) {
    return (
      <main className="main-content-wrap">
        <section className="bg-white py-16">
          <div className="container">
            <h1 className="font-Primary text-6xl text-dark">RXvP</h1>
            <p className="font-Secondary text-lg text-dark">
              The site content could not be loaded. Please refresh the page.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div
      id={containerId}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
