import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState(null);


  return (
    <header>
        <a href="/">Brian Ramirez Ortega</a>
      <nav>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a onClick={() => setActiveLink(link.id)} key={link.id} href={`#${link.id}`} className={activeLink === link.id ? "active" : ""}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
