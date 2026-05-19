import { useEffect, useState } from "react";

export type LegacySectionKey = "home" | "speakers" | "events" | "event-international-womens-day" | "about" | "leadership";

interface StaticHtmlPageProps {
  contentUrl: string;
  containerId: string;
  sectionKey?: LegacySectionKey;
}

function readPrerenderedMarkup(containerId: string) {
  if (typeof document === "undefined") {
    return "";
  }

  return document.getElementById(containerId)?.innerHTML ?? "";
}

function appendSectionClones(wrapper: HTMLDivElement, sections: Element[], indexes: number[]) {
  indexes.forEach((index) => {
    const section = sections[index];

    if (section) {
      wrapper.appendChild(section.cloneNode(true));
    }
  });
}

function buildHomeMarkup(documentFragment: Document, sections: Element[]) {
  const wrapper = documentFragment.createElement("div");
  const heroSection = sections[0]?.cloneNode(true);
  const logosSection = sections[1]?.cloneNode(true) as HTMLElement | undefined;

  if (heroSection) {
    wrapper.appendChild(heroSection);
  }

  if (logosSection) {
    const slider = logosSection.querySelector(".logo-slider");
    const track = logosSection.querySelector(".logo-track");

    if (slider && track) {
      const grid = documentFragment.createElement("div");
      const seenImages = new Set<string>();
      const logoCards = Array.from(track.children)
        .filter((child): child is HTMLElement => child instanceof HTMLElement)
        .filter((child) => child.getAttribute("aria-hidden") !== "true")
        .map((child) => child.cloneNode(true) as HTMLElement)
        .filter((child) => {
          const image = child.querySelector("img");
          const source = image?.getAttribute("src") ?? "";

          if (!source || seenImages.has(source)) {
            return false;
          }

          seenImages.add(source);
          return true;
        });

      grid.className = "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5";
      grid.append(...logoCards);
      slider.replaceWith(grid);
    }

    wrapper.appendChild(logosSection);
  }

  return wrapper.innerHTML;
}

function buildLeadershipMarkup(documentFragment: Document, sections: Element[]) {
  const wrapper = documentFragment.createElement("div");
  const apacSection = sections[9]?.cloneNode(true) as HTMLElement | undefined;
  const foundersSection = sections[7]?.cloneNode(true);

  if (apacSection) {
    apacSection.classList.add("rxvp-apac-section--leadership");

    const container = apacSection.querySelector(".rxvp-apac-container");
    const split = apacSection.querySelector(".rxvp-apac-split");

    if (split) {
      const cards = Array.from(split.children) as HTMLElement[];
      const highlightCard = cards.find((card) => card.classList.contains("rxvp-apac-card--highlight"));
      const copyCard = cards.find((card) => !card.classList.contains("rxvp-apac-card--highlight"));

      if (highlightCard && copyCard) {
        split.replaceChildren(highlightCard, copyCard);
      }
    }

    if (container) {
      const children = Array.from(container.children) as HTMLElement[];
      const kicker = children.find((child) => child.classList.contains("rxvp-apac-kicker"));
      const title = children.find((child) => child.tagName === "H2");
      const lede = children.find((child) => child.classList.contains("rxvp-apac-lede"));
      const leadershipHeading = children.find((child) => child.tagName === "H3" && child.textContent?.includes("Leadership in Asia Pacific"));
      const footerLine = children.find((child) => child.classList.contains("rxvp-apac-footerline"));
      const reorderedChildren = children.filter(
        (child) => child !== kicker && child !== title && child !== lede && child !== leadershipHeading && child !== split && child !== footerLine,
      );
      const orderedNodes = [kicker, title, leadershipHeading, split, lede, ...reorderedChildren, footerLine].filter(
        (child): child is Element => Boolean(child),
      );

      container.replaceChildren(...orderedNodes);
    }

    wrapper.appendChild(apacSection);
  }

  if (foundersSection) {
    wrapper.appendChild(foundersSection);
  }

  return wrapper.innerHTML;
}

function extractMarkup(html: string, sectionKey?: LegacySectionKey) {
  if (!sectionKey || typeof DOMParser === "undefined") {
    return html;
  }

  const parsedDocument = new DOMParser().parseFromString(html, "text/html");
  const mainContent = parsedDocument.querySelector("main#main_content");

  if (!mainContent) {
    return html;
  }

  const sections = Array.from(mainContent.children);
  const wrapper = parsedDocument.createElement("div");

  switch (sectionKey) {
    case "home":
      return buildHomeMarkup(parsedDocument, sections);
    case "speakers":
      appendSectionClones(wrapper, sections, [2, 5]);
      return wrapper.innerHTML;
    case "events":
      appendSectionClones(wrapper, sections, [3]);
      return wrapper.innerHTML;
    case "event-international-womens-day":
      appendSectionClones(wrapper, sections, [3]);
      return wrapper.innerHTML;
    case "about":
      appendSectionClones(wrapper, sections, [6, 4]);
      return wrapper.innerHTML;
    case "leadership":
      return buildLeadershipMarkup(parsedDocument, sections);
    default:
      return html;
  }
}

export default function StaticHtmlPage({ contentUrl, containerId, sectionKey }: StaticHtmlPageProps) {
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
      .then((html) => setMarkup(extractMarkup(html, sectionKey)))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error(error);
          setHasError(true);
        }
      });

    return () => controller.abort();
  }, [contentUrl, markup, sectionKey]);

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
