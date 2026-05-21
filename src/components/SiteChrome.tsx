import { CONTACTS, PRIMARY_NAV_ITEMS } from "@/lib/site";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="navbar-wrap bg-transparent w-full z-[999] transition-all duration-300 fixed top-0">
      <nav className="container flex flex-col sm:flex-row gap-8 sm:gap-2 items-center justify-between py-3 sm:py-6" aria-label="Global">
        <div className="flex">
          <a href="/" className="max-w-32 sm:max-w-36 xl:max-w-[150px]">
            <span className="sr-only">Home</span>
            <img src="/assets/RxVP-logo.svg" alt="RxVP RXVP Logo" width="276" height="160" decoding="async" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <NavLink key={item.to} className="rxvp-nav-link" to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
            <div className="flex">
              <a className="btn btn-alt" href="/contact/">
                Apply for a Speaker Invitation
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section-full bg-dark py-8 lg:py-16 rxvp-footer">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 rxvp-footer-top">
          <div className="flex">
            <a href="/" className="max-w-32 sm:max-w-36 xl:max-w-[200px]">
              <span className="sr-only">Home</span>
              <img src="/assets/RxVP-logo.svg" alt="RxVP RXVP Logo" width="276" height="160" decoding="async" />
            </a>
          </div>
        </div>
        <div className="text-gray-300 font-Secondary text-lg w-full pt-4 mt-4 border-t border-solid border-gray-300 rxvp-footer-bottom">
          <p>© 2026 RxVP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
