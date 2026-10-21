import { useState, useEffect, useLayoutEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
];

// Where on the screen the "current section" is decided (0.4 = 40% down)
const REFERENCE_LINE = 0.4;

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const listRef = useRef(null);
  const linkRefs = useRef({});
  const isClickScrolling = useRef(false);
  const unlockTimer = useRef(null);

  // Figure out the active section from scroll position
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    const getCurrentSection = () => {
      // At the very bottom of the page, the last section always wins
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) return sections[sections.length - 1]?.id;

      const line = window.innerHeight * REFERENCE_LINE;
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      return current;
    };

    const lock = () => {
      isClickScrolling.current = true;
    };

    const unlock = () => {
      isClickScrolling.current = false;
      clearTimeout(unlockTimer.current);
    };

    let frame = null;
    const onScroll = () => {
      if (isClickScrolling.current) {
        // A click-triggered scroll is still running: keep extending the lock
        // until scroll events stop for 150ms, then hand control back
        clearTimeout(unlockTimer.current);
        unlockTimer.current = setTimeout(() => {
          unlock();
          const id = getCurrentSection();
          if (id) setActiveLink(id);
        }, 150);
        return;
      }
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const id = getCurrentSection();
        if (id) setActiveLink(id);
      });
    };

    // If the user grabs the scroll mid-animation, stop ignoring their scrolling
    const interrupt = () => unlock();

    onScroll(); // set the correct section on first load (e.g. after a refresh)
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", interrupt, { passive: true });
    window.addEventListener("touchmove", interrupt, { passive: true });
    window.addEventListener("keydown", interrupt);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("touchmove", interrupt);
      window.removeEventListener("keydown", interrupt);
      clearTimeout(unlockTimer.current);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Clicking a link: highlight it immediately, ignore scroll updates until the scroll settles
  const handleClick = (id) => {
    setActiveLink(id);
    isClickScrolling.current = true;
    clearTimeout(unlockTimer.current);
    // Fallback in case the click doesn't cause any scrolling (already there)
    unlockTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 200);
  };

  // Move the sliding pill to the active link
  useLayoutEffect(() => {
    const update = () => {
      const el = linkRefs.current[activeLink];
      if (!el) return;
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(listRef.current);
    return () => resizeObserver.disconnect();
  }, [activeLink]);

  // Enable the transition only after the first paint
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <nav id="navbar" aria-label="Primary">
      <ul className="nav-links" ref={listRef}>
        <span
          className={`nav-indicator ${ready ? "ready" : ""}`}
          style={{
            width: indicator.width,
            transform: `translateX(${indicator.left}px)`,
          }}
          aria-hidden="true"
        />
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              ref={(el) => (linkRefs.current[link.id] = el)}
              className={activeLink === link.id ? "active" : ""}
              aria-current={activeLink === link.id ? "true" : undefined}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}