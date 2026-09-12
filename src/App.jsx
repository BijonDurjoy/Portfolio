import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  FileCheck2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { portfolio } from "./data/portfolio";
import "./App.css";

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
  const cvPath = `${import.meta.env.BASE_URL}Bijon_Saha.pdf`;
  const navItems = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];
  const closeMenu = () => setMenuOpen(false);

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
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-download" href={cvPath} download>
            <Download size={15} /> CV
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
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
                href={`mailto:${portfolio.email}`}
              >
                Contact me <Mail size={16} />
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

        <section id="about" className="about section-wrap section-block">
          <div className="section-index">
            01 <span>ABOUT</span>
          </div>
          <div className="about-grid">
            <SectionHeading
              eyebrow="A practical approach to quality"
              title="Good testing is a conversation with the product."
            />
            <div className="about-content">
              <p className="large-copy">{portfolio.summary}</p>
              <p>
                I work across product surfaces and user journeys, combining
                careful manual exploration with API testing, automation, data
                verification, and clear defect reporting.
              </p>
              <a className="text-link" href={cvPath} download>
                Download my CV <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="experience section-wrap section-block"
        >
          <div className="section-index">
            02 <span>EXPERIENCE</span>
          </div>
          <SectionHeading
            eyebrow="Where I have contributed"
            title="A record of shipping with care."
          />
          <div className="experience-list">
            {portfolio.experience.map((item) => (
              <article
                className="experience-item"
                key={`${item.company}-${item.role}`}
              >
                <div className="experience-dates">{item.dates}</div>
                <div className="experience-marker">
                  <span className={item.current ? "active" : ""} />
                </div>
                <div className="experience-detail">
                  <p className="eyebrow">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects section-block">
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

        <section id="skills" className="skills section-wrap section-block">
          <div className="section-index">
            04 <span>CAPABILITIES</span>
          </div>
          <SectionHeading
            eyebrow="Tools for thoughtful testing"
            title="Broad enough to see the system. Focused enough to find the flaw."
          />
          <div className="skills-grid">
            {portfolio.skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
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

        <section className="credentials section-wrap section-block">
          <div className="credential-column">
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
          <div className="credential-column">
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

        <section id="contact" className="contact section-wrap section-block">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Let&apos;s talk quality</p>
              <h2>Have a product that deserves a closer look?</h2>
            </div>
            <a
              className="button button-light"
              href={`mailto:${portfolio.email}`}
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <div className="contact-details">
              <a href={`mailto:${portfolio.email}`}>
                <Mail size={16} />
                {portfolio.email}
              </a>
              <a href={`tel:${portfolio.phone}`}>
                <Phone size={16} />
                {portfolio.phone}
              </a>
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
