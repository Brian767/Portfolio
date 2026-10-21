import { useEffect, useState } from "react";

const SCROLL_DELTA = 8; // ignore tiny scroll movements

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      if (currentY < 10) {
        setIsVisible(true);
        lastScrollY = currentY;
      } else if (Math.abs(currentY - lastScrollY) > SCROLL_DELTA) {
        setIsVisible(currentY < lastScrollY); // scrolling up = show
        lastScrollY = currentY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = [
    "header",
    isVisible ? "visible" : "hidden",
    isScrolled ? "scrolled" : "",
  ].join(" ");

  return (
    <header className={classes}>
      <a className="header-name" href="#home">
        Brian Ramirez Ortega
      </a>
      <div className="header-contacts">
        <a className="header-link" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}