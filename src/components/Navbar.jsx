import { useState, useEffect } from "react";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const navLinks = [
      { label: "Home", id: "home" },
      { label: "Projects", id: "projects" },
      { label: "About", id: "about" },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav id="navbar">
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeLink === link.id ? "active" : ""}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
