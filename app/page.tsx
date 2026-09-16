import Image from "next/image";
import { projects } from "../src/data/projects";

const github = "https://github.com/vietanh1109a";
const upwork = "https://www.upwork.com/freelancers/~015f59105dfd2e6d25";

const services = [
  {
    title: "Automation & Data",
    intro: "Small Python workflows that turn repetitive file and data tasks into repeatable outputs.",
    items: ["Python automation", "CSV/Excel processing", "Cleaning and validation", "Reporting"],
  },
  {
    title: "APIs & Backend",
    intro: "Practical services that receive data, apply business rules, and pass useful results to the next step.",
    items: ["REST APIs", "Webhook workflows", "FastAPI/Flask utilities", "API-to-file/data workflows"],
  },
  {
    title: "Web Scraping & Extraction",
    intro: "Public web data collection with structured outputs that are ready to review or reuse.",
    items: ["Public data extraction", "HTTP/browser automation", "CSV/Excel outputs", "Change monitoring when appropriate"],
  },
];

const stack = [
  ["Core", "Python · SQL · JSON"],
  ["Data", "pandas · Excel · openpyxl"],
  ["APIs", "FastAPI · Flask · REST APIs"],
  ["Scraping", "httpx · BeautifulSoup · Playwright"],
  ["Database", "PostgreSQL · SQLite · SQLAlchemy"],
  ["Testing", "pytest"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Anh N. home">
          Anh N.<i />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="github-link" href={github} target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </details>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker">Anh N. · Hanoi, Vietnam</p>
          <h1>Python Developer for Automation, APIs &amp; Data Work</h1>
          <p className="specialism">Automation · APIs · Data Processing · Web Scraping</p>
          <p className="lead">I help businesses automate repetitive work, process data, connect APIs, and build practical Python tools.</p>
          <div className="actions">
            <a className="button primary" href="#projects">View Projects <Arrow /></a>
            <a className="button quiet" href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a className="text-link" href={upwork} target="_blank" rel="noreferrer">Upwork Profile <Arrow /></a>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Real outputs from portfolio projects">
          <p>Real project outputs</p>
          <div className="hero-proof-main">
            <Image src="/projects/sales-report-proof.webp" alt="Actual sales report output" fill sizes="(max-width: 780px) 100vw, 430px" priority />
          </div>
          <div className="hero-proof-inset">
            <Image src="/projects/api-proof.webp" alt="Actual API endpoint documentation" fill sizes="(max-width: 780px) 45vw, 220px" />
          </div>
        </aside>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading">
          <p className="kicker">Services</p>
          <h2>Python tools for repetitive business workflows.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <div>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
              </div>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell section-heading project-heading">
          <p className="kicker">Projects</p>
          <h2>Projects with real outputs.</h2>
          <p>Each project links to its public source and shows output produced by the project itself.</p>
        </div>
        <div className="shell project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="proof-frame">
                <Image src={project.image} alt={project.alt} fill loading="eager" sizes="(max-width: 760px) 100vw, 470px" />
              </div>
              <div className="project-copy">
                <p className="proof-note">{project.proof}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-points">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell stack-section" id="stack">
        <div className="section-heading">
          <p className="kicker">Tools</p>
          <h2>Tools I work with.</h2>
        </div>
        <dl className="stack-list">
          {stack.map(([group, tools]) => <div key={group}><dt>{group}</dt><dd>{tools}</dd></div>)}
        </dl>
      </section>

      <section className="section shell about-section" id="about">
        <div className="section-heading">
          <p className="kicker">About</p>
          <h2>How I Work</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>I build small Python tools for repetitive, testable business workflows.</p>
            <p>I focus on automation scripts, spreadsheet workflows, API integrations, public-data extraction, and lightweight backend utilities.</p>
            <p>I prefer solutions with clear inputs, clear outputs, and results that can be tested before delivery.</p>
          </div>
          <aside className="profile-info" aria-label="Profile information">
            <div><strong>Based in</strong><span>Hanoi, Vietnam</span></div>
            <div><strong>Education</strong><span>Phenikaa University<br />Mechatronics Engineering<br />2024–2027 expected</span></div>
            <div><strong>Languages</strong><span>Vietnamese — Native or Bilingual<br />English — Conversational</span></div>
          </aside>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div>
            <p className="kicker">Contact</p>
            <h2>Need a Small Python Workflow Automated?</h2>
            <p>Tell me what goes in, what should come out, and what you currently do manually. I can help determine a practical way to automate it.</p>
          </div>
          <div className="actions">
            <a className="button primary" href={upwork} target="_blank" rel="noreferrer">Upwork <Arrow /></a>
            <a className="button quiet" href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="shell">
        <div><strong>Anh N.</strong><span>Python Developer · Hanoi, Vietnam</span></div>
        <a href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
