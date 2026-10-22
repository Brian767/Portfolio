import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const LINKEDIN_URL = "https://www.linkedin.com/in/brianramirezo/";
const GITHUB_URL = "https://github.com/Brian767";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© {year} Brian Ramirez Ortega</p>

        <nav aria-label="Social links">
          <ul className="footer-socials">
            <li>
              <a
                className="footer-social"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in a new tab)"
              >
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                className="footer-social"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}