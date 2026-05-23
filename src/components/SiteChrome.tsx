import { useEffect, useState } from "react";
import { CONTACTS, PRIMARY_NAV_ITEMS } from "@/lib/site";
import { NavLink, useLocation } from "react-router-dom";

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-wrap bg-transparent w-full z-[999] transition-all duration-300 fixed top-0">
      <nav className="container rxvp-header-nav flex items-center justify-between py-3 sm:py-6" aria-label="Global">
        <div className="flex">
          <a href="/" className="max-w-32 sm:max-w-36 xl:max-w-[150px]">
            <span className="sr-only">Home</span>
            <img src="/assets/RxVP-logo.svg" alt="RxVP RXVP Logo" width="276" height="160" decoding="async" />
          </a>
        </div>

        <div className="rxvp-header-actions flex items-center gap-3">
          <button
            type="button"
            className="rxvp-mobile-menu-toggle"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="rxvp-mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <a className="btn btn-alt rxvp-mobile-apply" href="/contact/">
            Apply
          </a>
        </div>

        <div className="rxvp-header-links flex items-center gap-4">
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
      <div id="rxvp-mobile-menu" className={`rxvp-mobile-menu ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="rxvp-mobile-menu-inner">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <NavLink key={item.to} className="rxvp-nav-link rxvp-mobile-menu-link" to={item.to} end={item.end} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
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
