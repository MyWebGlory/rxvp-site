export const SITE_URL = "https://rxvp.org";
export const SITE_NAME = "RxVP";
export const CONTACT_EMAIL = "bonnie@rxvp.org";
export const PRIMARY_NAV_ITEMS = [
  { label: "Home", to: "/", end: true },
  { label: "Speakers", to: "/speakers/", end: false },
  { label: "In the News", to: "/press-release/", end: false },
  { label: "About", to: "/about/", end: false },
  { label: "Leadership", to: "/leadership/", end: false },
  { label: "Public Speaking", to: "/public-speaking/", end: false },
  { label: "Panels", to: "/panels/", end: false },
] as const;
export const CONTACTS = [
  {
    name: "Bonnie Lappin",
    title: "Creator, Co-Founder",
    email: "bonnie@rxvp.org",
    image: "/assets/bonnie-lappin.webp",
  },
  {
    name: "Suzette DiMascio",
    title: "Co-Founder, Executive Healthcare Strategist",
    email: "suzette@rxvp.org",
    image: "/assets/suzette-dimascio.jpeg",
  },
] as const;
export const DEFAULT_DESCRIPTION =
  "Join RxVP, the invitation-only global speakers bureau for life science leaders, curated speaking engagements, and executive leadership conversations.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/cropped-archivehero-scaled-1.webp`;
