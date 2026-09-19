import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileCheck2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { portfolio } from "./data/portfolio";
import aboutPhoto from "./assets/about-photo.jpg";
import aboutImageFallback from "./assets/hero.png";
import "./App.css";

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [activeExperience, setActiveExperience] = useState(0);
  const cvPath = `${import.meta.env.BASE_URL}Bijon_Saha.pdf`;
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}`;
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="Back to top"
        >
          <span>Bijon Saha</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav
          id="site-nav"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              className={activeSection === id ? "is-active" : ""}
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <a className="nav-download" href={cvPath} download>
            <Download size={15} /> CV
          </a>
        </nav>
      </header>

      <main id="top">
        <section
          className="hero section-wrap"
          data-reveal="hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="status-line">
              <span className="status-dot" /> Software QA Engineer / Deep Mind
              Labs
            </div>
            <p className="eyebrow">Software quality / testing / automation</p>
            <h1 id="hero-title">
              Making software
              <br />
              <em>worth trusting.</em>
            </h1>
            <p className="hero-summary">
              I&apos;m {portfolio.name}, a {portfolio.role} focused on finding
              the signal in complex products and making every release more
              dependable.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-quiet"
                href={emailComposeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Send Email <Mail size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> {portfolio.location}
              </span>
              <span>
                <ShieldCheck size={15} /> Quality-led mindset
              </span>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Quality assurance testing workflow illustration"
          >
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="signal-card signal-card-main">
              <div className="signal-card-top">
                <FileCheck2 size={19} />
                <span>release_check.log</span>
                <span className="signal-live">LIVE</span>
              </div>
              <div className="signal-title">Quality signal detected</div>
              <div className="signal-row">
                <span>Cross-platform coverage</span>
                <strong>Web / iOS / Android</strong>
              </div>
              <div className="signal-row">
                <span>Test suite status</span>
                <strong className="pass">
                  <CheckCircle2 size={15} /> Verified
                </strong>
              </div>
              <div className="signal-bar">
                <span />
              </div>
            </div>
            <div className="signal-card signal-card-small">
              <span className="mini-check">
                <CheckCircle2 size={15} />
              </span>
              <span>Regression testing</span>
            </div>
            <div className="visual-label">
              01 / observe
              <br />
              02 / validate
              <br />
              03 / improve
            </div>
          </div>
        </section>

        <section
          id="about"
          className="about section-wrap section-block"
          data-reveal="section"
        >
          <div className="section-index">
            01 <span>ABOUT</span>
          </div>
          <div className="about-grid">
            <div className="about-portrait-wrap" data-reveal="card">
              <div className="about-portrait-frame">
                <div className="about-portrait-grid" />
                <div className="portrait-corner portrait-corner-top" />
                <div className="portrait-corner portrait-corner-bottom" />
                <div className="about-portrait-image">
                  <img
                    src={aboutPhoto}
                    alt={`${portfolio.name} sitting outdoors`}
                    onError={(event) => {
                      if (event.currentTarget.src !== aboutImageFallback) {
                        event.currentTarget.src = aboutImageFallback;
                      }
                    }}
                  />
                </div>
                <div className="portrait-caption">
                  <span>01 / personal note</span>
                  <strong>Curious by nature.</strong>
                </div>
              </div>
              <span className="portrait-orbit" />
            </div>
            <div className="about-content">
              <SectionHeading
                eyebrow="A practical approach to quality"
                title="Good testing is a conversation with the product."
              />
              <p className="large-copy">{portfolio.about.intro}</p>
              <p>
                {portfolio.about.detailLead}{" "}
                <a
                  className="about-company-link"
                  href={portfolio.about.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {portfolio.about.company}
                </a>
                {portfolio.about.detailContinuation}
              </p>
              <div className="about-markers">
                {portfolio.about.markers.map((marker, index) => (
                  <div className="about-marker" key={marker.label}>
                    {index === 0 ? (
                      <MapPin size={16} />
                    ) : index === 1 ? (
                      <BriefcaseBusiness size={16} />
                    ) : (
                      <GraduationCap size={16} />
                    )}
                    <span>
                      <small>{marker.label}</small>
                      <strong>{marker.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
              <a className="text-link" href={cvPath} download>
                Download my CV <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="experience section-wrap section-block"
          data-reveal="section"
        >
          <div className="section-index">
            02 <span>EXPERIENCE</span>
          </div>
          <SectionHeading
            eyebrow="Where I have contributed"
            title="Two chapters that shaped how I build and test."
            copy="Select a company to see the role, the lessons, and the tools I carried forward."
          />
          <div className="experience-tabs">
            <div className="experience-rail" role="tablist" aria-label="Experience by company">
              {portfolio.experience.map((item, index) => (
                <button
                  className={`experience-tab ${activeExperience === index ? "is-active" : ""}`}
                  key={`${item.company}-${item.role}`}
                  id={`experience-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeExperience === index}
                  aria-controls={`experience-panel-${index}`}
                  tabIndex={activeExperience === index ? 0 : -1}
                  onClick={() => setActiveExperience(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      setActiveExperience((index + 1) % portfolio.experience.length);
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      setActiveExperience((index - 1 + portfolio.experience.length) % portfolio.experience.length);
                    }
                  }}
                >
                  <span className="experience-tab-index">0{index + 1}</span>
                  <span className="experience-tab-logo"><img src={item.logo} alt="" /></span>
                  <span className="experience-tab-copy">
                    <strong>{item.company}</strong>
                    <small>{item.dates}</small>
                  </span>
                  <ArrowUpRight size={17} />
                </button>
              ))}
            </div>
            {portfolio.experience.map((item, index) => (
              <article
                className="experience-panel"
                key={`${item.company}-panel`}
                id={`experience-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`experience-tab-${index}`}
                hidden={activeExperience !== index}
              >
                <div className="experience-panel-topline">
                  <span>{item.current ? "CURRENT ROLE" : "EARLY CAREER"}</span>
                  <span>{item.dates}</span>
                </div>
                <div className="experience-company-heading">
                  <div className="experience-logo-large"><img src={item.logo} alt={`${item.company} logo`} /></div>
                  <div>
                    <p className="eyebrow">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <p className="experience-description">{item.description}</p>
                <div className="experience-panel-bottom">
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}><CheckCircle2 size={16} /><span>{highlight}</span></li>
                    ))}
                  </ul>
                  <div className="experience-stack">
                    <span>TOOLS / STACK</span>
                    <div className="tag-list">
                      {item.stack.map((tool) => <span key={tool}>{tool}</span>)}
                    </div>
                  </div>
                </div>
                <a className="experience-company-link" href={item.companyUrl} target="_blank" rel="noreferrer">
                  Visit {item.company} <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="projects section-block"
          data-reveal="section"
        >
          <div className="section-wrap">
            <div className="section-index">
              03 <span>SELECTED PROJECTS</span>
            </div>
            <SectionHeading
              eyebrow="Quality in context"
              title="The work behind the checks."
              copy="A closer look at the products, workflows, and edge cases I have helped validate."
            />
            <div className="project-list">
              {portfolio.projects.map((project) => (
                <article
                  className={`project-card ${project.accent}`}
                  key={project.name}
                  data-reveal="card"
                >
                  <div className="project-topline">
                    <span>{project.number}</span>
                    <span>{project.dates}</span>
                  </div>
                  <div className="project-heading">
                    <div>
                      <p className="eyebrow">{project.domain}</p>
                      <h3>{project.name}</h3>
                      <p className="project-client">{project.client}</p>
                    </div>
                    <span className="project-icon">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="project-contributions">
                    {project.contributions.map((contribution) => (
                      <li key={contribution}>
                        <CheckCircle2 size={16} />
                        {contribution}
                      </li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="skills section-wrap section-block"
          data-reveal="section"
        >
          <div className="section-index">
            04 <span>CAPABILITIES</span>
          </div>
          <SectionHeading
            eyebrow="Tools for thoughtful testing"
            title="Broad enough to see the system. Focused enough to find the flaw."
          />
          <div className="skills-grid">
            {portfolio.skills.map((skill) => (
              <article
                className="skill-card"
                key={skill.title}
                data-reveal="card"
              >
                <span className="skill-number">{skill.label}</span>
                <h3>{skill.title}</h3>
                <div className="tag-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="credentials section-wrap section-block"
          data-reveal="section"
        >
          <div className="credential-column" data-reveal="column">
            <div className="section-index">
              05 <span>EDUCATION</span>
            </div>
            <h2>Learning that keeps moving.</h2>
            {portfolio.education.map((item) => (
              <article className="credential-item" key={item.degree}>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                </div>
                <div className="credential-result">
                  <strong>{item.year}</strong>
                  <span>{item.result}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="credential-column" data-reveal="column">
            <div className="section-index">
              06 <span>COURSES</span>
            </div>
            <h2>Curiosity, made practical.</h2>
            <div className="course-list">
              {portfolio.courses.map((course) => (
                <article className="course-item" key={course.name}>
                  <CheckCircle2 size={17} />
                  <div>
                    <h3>{course.name}</h3>
                    <p>{course.provider}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact section-wrap section-block"
          data-reveal="section"
        >
          <div className="contact-panel" data-reveal="panel">
            <div>
              <p className="eyebrow">Let&apos;s talk quality</p>
              <h2>Let&apos;s make your product more reliable.</h2>
            </div>
            <a
              className="button button-light"
              href={emailComposeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Send Email <ArrowUpRight size={17} />
            </a>
            <div className="contact-details">
              <div className="social-links" aria-label="Social links">
                {portfolio.socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];

                  return (
                    <a
                      className="social-link"
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <span>
          © {new Date().getFullYear()} {portfolio.name}
        </span>
        <span>{portfolio.role}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
