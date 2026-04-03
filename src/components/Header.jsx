import { useState } from "react";
import "./Header.css";

const NAV = [
  {
    label: "About Us",
    children: ["Who We Are", "Our Impact", "Our Approach", "Our People", "Awards & Recognition", "Work with us", "Contact Us"],
  },
  {
    label: "Areas of Work",
    children: ["Local Governance", "Water & Sanitation", "Public Health", "Public Finance", "Justice Delivery", "Other Sectors"],
  },
  {
    label: "Products & Solutions",
    children: ["Citizen Complaint Resolution", "Property Tax System", "Water & Sewerage", "Trade License", "Building Plan Approval", "Health Campaign Management", "Works Management", "Social Benefit Delivery"],
  },
  {
    label: "Our Platform",
    children: ["DIGIT"],
  },
  {
    label: "Ecosystem",
    children: ["Partnerships", "Academy", "COE", "Community"],
  },
  {
    label: "Resources",
    children: ["Articles", "Whitepapers", "Strategy Papers", "Case Studies", "News & Media", "Videos", "Newsletters"],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  return (
    <header className="egov-header">
      {/* Top utility bar — Events & Contact */}
      <div className="header-topbar">
        <div className="container topbar-inner">
          <span className="topbar-left"></span>
          <div className="topbar-right">
            <a href="#">Events</a>
            <span className="sep">|</span>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>

      {/* Main sticky bar */}
      <div className="header-main">
        <div className="container header-main-inner">
          {/* Logo — same image as real site */}
          <a href="/" className="header-logo">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png"
              alt="eGov Foundation"
            />
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="nav-item"
                onMouseEnter={() => setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <span className="nav-link">
                  {item.label}
                  <svg className="nav-arrow" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                {openDrop === item.label && (
                  <div className="nav-dropdown">
                    {item.children.map((c) => (
                      <a key={c} href="#" className="dropdown-item">{c}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search icon */}
          <button className="header-search-btn" aria-label="Search">
            <svg viewBox="0 0 512 512" width="18" height="18" fill="currentColor">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
            </svg>
          </button>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <span className={`hline ${mobileOpen ? "open" : ""}`}></span>
            <span className={`hline ${mobileOpen ? "open" : ""}`}></span>
            <span className={`hline ${mobileOpen ? "open" : ""}`}></span>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="nav-mobile fade-in">
            {NAV.map((item) => (
              <div key={item.label} className="mobile-nav-group">
                <button
                  className="mobile-nav-toggle"
                  onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                >
                  {item.label}
                  <span className={`mobile-arrow ${openDrop === item.label ? "up" : ""}`}>▾</span>
                </button>
                {openDrop === item.label && (
                  <div className="mobile-nav-sub">
                    {item.children.map((c) => (
                      <a key={c} href="#" className="mobile-nav-link">{c}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}