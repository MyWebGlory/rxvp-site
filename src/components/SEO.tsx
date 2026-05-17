import { Helmet } from "react-helmet-async";
import { CONTACTS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: object | object[];
  noIndex?: boolean;
}

const organizationId = `${SITE_URL}/#/schema/Organization`;
const websiteId = `${SITE_URL}/#/schema/WebSite`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/cropped-RxVP-logo-192x192.webp`,
    width: 192,
    height: 192,
  },
  description: "Exclusive Global Speakers Bureau for Life Science Executives",
  contactPoint: CONTACTS.map((contact) => ({
    "@type": "ContactPoint",
    name: contact.name,
    email: contact.email,
    contactType: "speaker bureau inquiries",
    availableLanguage: "English",
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: SITE_URL,
  name: SITE_NAME,
  description: "Exclusive Global Speakers Bureau for Life Science Executives",
  inLanguage: "en-US",
  publisher: {
    "@id": organizationId,
  },
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export default function SEO({
  title,
  description,
  canonicalPath = "/",
  ogImage = DEFAULT_OG_IMAGE,
  structuredData,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} - ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const schema = structuredData
    ? Array.isArray(structuredData)
      ? [organizationSchema, websiteSchema, ...structuredData]
      : [organizationSchema, websiteSchema, structuredData]
    : [organizationSchema, websiteSchema];

  return (
    <Helmet>
      <html lang="en-US" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
