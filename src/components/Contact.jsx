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
const RESUME_URL = "/BrianRamirezResume.pdf"; // file lives in /public

// Used when the Clipboard API isn't available (e.g. non-HTTPS)
function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  try {
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
}

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
        ok = true;
      }
    } catch {
      // Try the fallback below when the Clipboard API is blocked or unavailable.
    }

    if (!ok) {
      try {
        ok = fallbackCopy(EMAIL);
      } catch {
        ok = false;
      }
    }

    clearTimeout(timer.current);
    setCopyStatus(ok ? "copied" : "failed");
    timer.current = setTimeout(() => setCopyStatus(""), 3000);
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
            download="BrianRamirezResume.pdf"
          >
            <FiDownload aria-hidden="true" />
            Download resume
          </a>
        </div>

        <ul className="contact-links">
          <li>
            <div
              className={`contact-card contact-email-card ${copyStatus ? `is-${copyStatus}` : ""}`}
            >
              <a className="contact-card-email-link" href={`mailto:${EMAIL}`}>
                <span className="contact-card-icon" aria-hidden="true">
                  <FiMail />
                </span>
                <span className="contact-card-text">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">{EMAIL}</span>
                </span>
              </a>
              <button
                type="button"
                className="contact-card-copy"
                onClick={handleCopy}
                aria-label={
                  copyStatus === "copied"
                    ? "Copy email address again"
                    : "Copy email address"
                }
              >
                <span className="contact-card-action" aria-hidden="true">
                  {copyStatus === "copied" ? <FiCheck /> : <FiCopy />}
                </span>
              </button>
            </div>
            {copyStatus && (
              <p
                className={`contact-copy-status ${copyStatus === "failed" ? "is-error" : ""}`}
                role="status"
                aria-live="polite"
              >
                {copyStatus === "copied"
                  ? "Email address copied."
                  : "Could not copy the email address. Use the email link to compose a message."}
              </p>
            )}
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
