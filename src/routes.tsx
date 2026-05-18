import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PublicSpeaking from "@/pages/PublicSpeaking";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/public-speaking", element: <PublicSpeaking /> },
  { path: "/public-speaking/", element: <PublicSpeaking /> },
  { path: "/contact", element: <Contact /> },
  { path: "/contact/", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];
