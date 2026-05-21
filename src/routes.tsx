import About from "@/pages/About";
import Contact from "@/pages/Contact";
import EventInternationalWomensDay from "@/pages/EventInternationalWomensDay";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import Leadership from "@/pages/Leadership";
import NotFound from "@/pages/NotFound";
import Panels from "@/pages/Panels";
import PressRelease from "@/pages/PressRelease";
import PublicSpeaking from "@/pages/PublicSpeaking";
import Speakers from "@/pages/Speakers";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/speakers", element: <Speakers /> },
  { path: "/speakers/", element: <Speakers /> },
  { path: "/events", element: <Events /> },
  { path: "/events/", element: <Events /> },
  { path: "/events/international-womens-day", element: <EventInternationalWomensDay /> },
  { path: "/events/international-womens-day/", element: <EventInternationalWomensDay /> },
  { path: "/press-release", element: <PressRelease /> },
  { path: "/press-release/", element: <PressRelease /> },
  { path: "/about", element: <About /> },
  { path: "/about/", element: <About /> },
  { path: "/leadership", element: <Leadership /> },
  { path: "/leadership/", element: <Leadership /> },
  { path: "/public-speaking", element: <PublicSpeaking /> },
  { path: "/public-speaking/", element: <PublicSpeaking /> },
  { path: "/panels", element: <Panels /> },
  { path: "/panels/", element: <Panels /> },
  { path: "/contact", element: <Contact /> },
  { path: "/contact/", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];
