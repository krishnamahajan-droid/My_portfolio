import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  // menuOpen tracks whether the mobile hamburger menu is open or closed.
  // Every time we call setMenuOpen, React re-renders this component.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          <span className="mark">KM</span>
          Krishna Mahajan
        </a>

        {/* Desktop links — hidden on small screens via CSS */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href="#contact">Get In Touch</a>

        {/* Hamburger button — clicking it flips menuOpen true/false */}
        <button
          className="nav-burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu — only shown when menuOpen is true.
          The "open" class (added conditionally) is what CSS uses to display it. */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {[...navLinks, "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}