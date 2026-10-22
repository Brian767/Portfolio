import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiMail,
  FiCopy,
  FiCheck,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

const EMAIL = "brianramirezbro@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/brianramirezo/";
const GITHUB_URL = "https://github.com/Brian767";
const RESUME_URL = "/Brian-Ramirez-Ortega-Resume.pdf"; // file lives in /public

// Used when the Clipboard API isn't available (e.g. non-HTTPS)
function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  return ok;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(EMAIL);
      ok = true;
    } catch {
      ok = fallbackCopy(EMAIL);
    }
    if (!ok) return;

    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-intro">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-lead">
            I'm open to front-end opportunities and always happy to talk about
            projects. Email is the quickest way to reach me.
          </p>
          <a
            className="contact-resume"
            href={RESUME_URL}
            download="Brian-Ramirez-Ortega-Resume.pdf"
          >
            <FiDownload aria-hidden="true" />
            Download resume
          </a>
        </div>

        <ul className="contact-links">
          <li>
            <button
              type="button"
              className={`contact-card ${copied ? "is-copied" : ""}`}
              onClick={handleCopy}
            >
              <span className="contact-card-icon" aria-hidden="true">
                <FiMail />
              </span>
              <span className="contact-card-text">
                <span className="contact-card-label">
                  {copied ? "Copied to clipboard" : "Email"}
                </span>
                <span className="contact-card-value">{EMAIL}</span>
              </span>
              <span className="contact-card-action" aria-hidden="true">
                {copied ? <FiCheck /> : <FiCopy />}
              </span>
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </li>

          <li>
            <a
              className="contact-card"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card-icon" aria-hidden="true">
                <FaLinkedinIn />
              </span>
              <span className="contact-card-text">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">brianramirezo</span>
              </span>
              <span className="contact-card-action" aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </a>
          </li>

          <li>
            <a
              className="contact-card"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card-icon" aria-hidden="true">
                <FaGithub />
              </span>
              <span className="contact-card-text">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">brian767</span>
              </span>
              <span className="contact-card-action" aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}