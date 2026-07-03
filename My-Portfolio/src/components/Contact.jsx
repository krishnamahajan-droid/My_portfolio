import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-card">
          <h2>Let's Build Something.</h2>
          <p>Open to internships, collaborations, and conversations about frontend engineering or the road into data science.</p>
          <div className="footer-links">
            <a className="social-btn" href="https://github.com/krishnamahajan-droid" target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="social-btn" href="https://www.linkedin.com/in/krishna-mahajan-92b615311" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>Designed &amp; Built For Krishna Mahajan</span>
          <span>Updated 2026</span>
        </div>
      </div>
    </section>
  );
}