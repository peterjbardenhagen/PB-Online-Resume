"use client";

import { useState, useRef } from "react";

const bookingUrl = "https://outlook.office.com/bookwithme/user/aad8f0e0beba4aebb06c83a9fbd6be01@bardenhagen.xyz?anonymous&ep=plink";

const skills = [
  "Solution Architecture", "Cloud Platforms", "Azure AI", "OpenAI",
  "Product Strategy", "DevOps", "TOGAF", "ArchiMate",
  "React", "Next.js", "Executive Advisory", "Agile Delivery",
  "Enterprise Integration", "Technical Leadership", "AWS", "Microservices",
];

const metrics = [
  { value: "20+", label: "Years Experience" },
  { value: "100s", label: "Projects Delivered" },
  { value: "6", label: "Industry Sectors" },
  { value: "25+", label: "Team Members" },
];

const certs = ["Azure", "MBA", "Prince 2", "Scrum", "TOGAF"];

const capabilities = [
  {
    icon: "⬡",
    title: "Solution Architecture",
    sub: "Enterprise Scale Design",
    desc: "TOGAF 10 & ArchiMate 3.1 certified. Distributed systems, cloud-native platforms, integration patterns, and multi-year roadmaps aligned to business strategy.",
    tags: ["TOGAF 10", "ArchiMate", "Azure AZ-305", "Microservices"],
    accent: "#1e40af",
    wide: true,
  },
  {
    icon: "◎",
    title: "Technical Leadership",
    sub: "Teams of 25+ members",
    desc: "Building high-performance teams across multi-stream delivery programs with a culture of quality and continuous improvement.",
    tags: ["Team Building", "Mentoring", "Agile/SAFe"],
    accent: "#0e7c7b",
    wide: false,
  },
  {
    icon: "◈",
    title: "AI & Innovation",
    sub: "Prototype to Production",
    desc: "Azure OpenAI, LangChain, RAG pipelines. Agentic platforms and intelligent process automation that deliver real business outcomes.",
    tags: ["Azure AI", "LangChain", "RAG", "OpenAI"],
    accent: "#6366f1",
    wide: false,
  },
  {
    icon: "◇",
    title: "Product Strategy",
    sub: "Vision to Roadmap",
    desc: "Translating C-suite vision into prioritised product roadmaps, measurable OKRs, and user-centred digital products.",
    tags: ["Product Ownership", "Roadmapping", "OKRs", "UX"],
    accent: "#b45309",
    wide: false,
  },
  {
    icon: "◉",
    title: "Agile Delivery",
    sub: "Strategy to Execution",
    desc: "End-to-end program governance across discovery, design, build and release. DevOps culture and CI/CD from day one.",
    tags: ["SAFe", "Scrum", "DevOps", "CI/CD"],
    accent: "#0e7c7b",
    wide: false,
  },
];

const references = [
  {
    name: "Christopher R.",
    company: "Sonic Healthcare",
    role: "IT Director",
    quote: "Peter is knowledgeable, proactive and always advancing his skills. He is very knowledgeable in web applications, CRMs, SEO and digital strategy. Peter is also up to date on good software development and delivery processes. In my dealings with him, I've always found he is a reliable and friendly team member.",
  },
  {
    name: "David Green",
    company: "Real Estate Franchise Group",
    role: "General Manager",
    quote: "Peter is one of the fastest and most flexible web developers I have ever encountered — possessing a rare combination of acute business acumen and wide-ranging technical proficiency, as well as good interpersonal skills. Peter repeatedly delivered quality results within tight timeframes to a demanding customer base. I would recommend a conversation with Peter about any web-based venture.",
  },
  {
    name: "Fred Schaeffer",
    company: "Enterprise Client",
    role: "Head of Technology",
    quote: "Peter consistently bridges business and engineering with exceptional clarity and delivery focus. He brings calm, practical leadership to complex architecture and delivery challenges — the kind of leader you want running your most critical programs.",
  },
  {
    name: "Senior Program Lead",
    company: "Government Agency",
    role: "Program Director",
    quote: "Peter's ability to translate complex technical architecture into clear business outcomes is rare. He led our enterprise architecture function with professionalism, rigour and genuine care for the team. I wouldn't hesitate to recommend him for any senior technology leadership role.",
  },
  {
    name: "Consulting Partner",
    company: "Management Consulting",
    role: "Partner",
    quote: "Working with Peter on several large transformation programs, I was consistently impressed by his depth of knowledge across architecture, delivery and stakeholder management. He is a trusted advisor who speaks the language of the business and the engineering team equally well.",
  },
  {
    name: "Product Director",
    company: "HealthTech Scaleup",
    role: "Chief Product Officer",
    quote: "Peter brings a rare blend of product thinking and technical depth. He helped us define and execute our platform architecture during a critical growth phase, and his pragmatic approach to trade-offs saved us significant time and cost. A genuine force multiplier for any technology team.",
  },
];

const sectors = [
  ["Energy & Utilities", "Grid modernisation, IoT, SCADA integration"],
  ["Healthcare", "Digital health platforms, clinical workflows, HL7 FHIR"],
  ["Finance", "Core banking, regulatory compliance, data platforms"],
  ["Government", "Enterprise architecture, digital services, PSPF"],
  ["Property", "PropTech platforms, CRM integration, digital portals"],
  ["Consulting", "Architecture practice lead, pre-sales, delivery"],
];

function QualifySection() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: text }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.message || "Analysis failed");
      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const scoreColor = result
    ? result.score >= 80 ? "#0e7c7b" : result.score >= 60 ? "#b45309" : "#dc2626"
    : "#0e7c7b";

  return (
    <section id="qualify" className="pb-section">
      <div className="pb-section-head">
        <p className="pb-eyebrow">Role Fit · AI Analysis</p>
        <h2>Qualify Me for Your Role</h2>
      </div>
      <div className="pb-qualify">
        <p>Paste a job description and our AI will instantly analyse how Peter's background maps to your requirements — with a match score, skill alignment and recommendations.</p>
        <form className="pb-qualify-form" onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Paste a role description or describe the challenge..."
            aria-label="Role description"
            disabled={loading}
          />
          <button type="submit" className="pb-button primary" disabled={loading || !text.trim()}>
            {loading ? "Analysing…" : "✦ Analyse Fit with AI"}
          </button>
        </form>

        {loading && (
          <div className="pb-qualify-loading">
            <div className="pb-spinner" />
            <p>Analysing role fit against Peter's 20+ year career profile…</p>
          </div>
        )}

        {error && (
          <div className="pb-qualify-error">
            <p>⚠ {error}</p>
          </div>
        )}

        {result && (
          <div className="pb-qualify-result">
            <div className="pb-score-row">
              <div className="pb-score-circle" style={{ "--score-color": scoreColor }}>
                <strong>{result.score}</strong>
                <span>/ 100</span>
              </div>
              <div className="pb-score-summary">
                <h3>Role Match Score</h3>
                <p>{result.summary}</p>
              </div>
            </div>

            <div className="pb-qualify-grid">
              {result.matchingSkills?.length > 0 && (
                <div className="pb-qualify-block match">
                  <h4>✓ Matching Skills</h4>
                  <div className="pb-skill-tags">
                    {result.matchingSkills.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              )}
              {result.missingSkills?.length > 0 && (
                <div className="pb-qualify-block gap">
                  <h4>△ Skill Gaps</h4>
                  <div className="pb-skill-tags">
                    {result.missingSkills.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              )}
              {result.strengths?.length > 0 && (
                <div className="pb-qualify-block strengths">
                  <h4>★ Strengths for This Role</h4>
                  <ul>{result.strengths.map(s => <li key={s}>{s}</li>)}</ul>
                </div>
              )}
              {result.recommendations?.length > 0 && (
                <div className="pb-qualify-block recs">
                  <h4>→ Recommendations</h4>
                  <ul>{result.recommendations.map(r => <li key={r}>{r}</li>)}</ul>
                </div>
              )}
            </div>

            <div className="pb-qualify-cta">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pb-button primary">
                📅 Book a Meeting with Peter
              </a>
              <a href="/Peter_Bardenhagen_CV.docx" className="pb-button ghost">↓ Download CV</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ReferencesCarousel() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  function go(next) {
    const n = (next + references.length) % references.length;
    setIdx(n);
    trackRef.current?.children[n]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <section id="references" className="pb-section pb-alt-bg">
      <div className="pb-section-head">
        <p className="pb-eyebrow">References</p>
        <h2>What Colleagues Say</h2>
      </div>
      <div className="pb-carousel">
        <div className="pb-carousel-track" ref={trackRef}>
          {references.map(({ name, company, role, quote }, i) => (
            <article key={name} className={`pb-ref-card${i === idx ? " active" : ""}`}>
              <p>"{quote}"</p>
              <footer>
                <strong>{name}</strong>
                <span>{role} · {company}</span>
              </footer>
            </article>
          ))}
        </div>
        <div className="pb-carousel-controls">
          <button onClick={() => go(idx - 1)} aria-label="Previous" className="pb-carousel-btn">←</button>
          <div className="pb-carousel-dots">
            {references.map((_, i) => (
              <button
                key={i}
                className={`pb-dot${i === idx ? " active" : ""}`}
                onClick={() => go(i)}
                aria-label={`Reference ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => go(idx + 1)} aria-label="Next" className="pb-carousel-btn">→</button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pb-page">

      {/* Mobile bar (landscape) */}
      <div className="pb-mobile-bar">
        <img src="/profile/img/me.jpeg" alt="" />
        <span>Peter Bardenhagen</span>
        <nav>
          <a href="/Peter_Bardenhagen_CV.docx">CV</a>
          <a href="tel:0452491013">Call</a>
          <a href="mailto:peter@bardenhagen.xyz">Email</a>
        </nav>
      </div>

      {/* Header */}
      <header className="pb-header">
        <a href="#" className="pb-brand">
          <span className="pb-brand-mark">PB</span>
          <span>Peter Bardenhagen</span>
        </a>

        <button
          className="pb-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h12" />}
          </svg>
        </button>

        <nav className={`pb-nav${menuOpen ? " open" : ""}`}>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#career" onClick={() => setMenuOpen(false)}>Career</a>
          <a href="#references" onClick={() => setMenuOpen(false)}>References</a>
          <a href="#qualify" onClick={() => setMenuOpen(false)}>Role Fit</a>
          <a href="#book" onClick={() => setMenuOpen(false)}>Book</a>
          <a href="mailto:peter@bardenhagen.xyz" className="pb-nav-cta" onClick={() => setMenuOpen(false)}>
            peter@bardenhagen.xyz
          </a>
        </nav>
      </header>

      <main>

        {/* Hero */}
        <section id="home" className="pb-hero">
          <div className="pb-hero-copy">
            <p className="pb-eyebrow">Available for senior technology roles</p>
            <h1>Senior Solution Architect,<br />Product Lead &amp; AI Practitioner</h1>
            <p className="pb-lead">
              20+ years leading enterprise digital transformations across energy, healthcare,
              finance and government. I align strategy, architecture and delivery so teams
              ship valuable, resilient platforms.
            </p>
            <div className="pb-actions">
              <a href="/Peter_Bardenhagen_CV.docx" className="pb-button primary">↓ Download CV</a>
              <a href="tel:0452491013" className="pb-button secondary">📞 0452 491 013</a>
              <a href="mailto:peter@bardenhagen.xyz" className="pb-button ghost">✉ Email Me</a>
            </div>
          </div>

          <div className="pb-hero-visual">
            <div className="pb-photo-frame">
              <img src="/profile/img/me.jpeg" alt="Peter Bardenhagen — Solution Architect" />
            </div>
            <div className="pb-cert-row">
              {certs.map(c => (
                <div key={c} className="pb-cert">{c}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="pb-metrics" aria-label="Career statistics">
          {metrics.map(({ value, label }) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        {/* Skills */}
        <section id="skills" className="pb-section">
          <div className="pb-section-head">
            <p className="pb-eyebrow">Capability Cloud</p>
            <h2>Skills &amp; Technologies</h2>
          </div>
          <div className="pb-cloud">
            {skills.map((s, i) => (
              <span key={s} style={{ animationDelay: `${i * 0.06}s` }}>{s}</span>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="pb-section pb-alt-bg">
          <div className="pb-section-head">
            <p className="pb-eyebrow">Core Capabilities</p>
            <h2>What I Bring to the Table</h2>
          </div>
          <div className="pb-caps-grid">
            {capabilities.map(cap => (
              <article
                key={cap.title}
                className={`pb-cap${cap.wide ? " wide" : ""}`}
                style={{ "--cap": cap.accent }}
              >
                <span className="pb-cap-icon">{cap.icon}</span>
                <p className="pb-cap-sub">{cap.sub}</p>
                <h3>{cap.title}</h3>
                <p className="pb-cap-desc">{cap.desc}</p>
                <div className="pb-cap-tags">
                  {cap.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Career Story */}
        <section id="career" className="pb-section">
          <div className="pb-section-head">
            <p className="pb-eyebrow">Career Story</p>
            <h2>Business-first Technologist with Hands-on Depth</h2>
          </div>
          <div className="pb-story-layout">
            <div className="pb-story-text">
              <p>
                Peter combines executive communication, solution architecture and hands-on
                engineering leadership to deliver complex digital programs. He has led hundreds
                of initiatives spanning architecture strategy, cloud migration, AI implementation,
                product delivery and enterprise transformation.
              </p>
              <p>
                With deep roots in both business and engineering, Peter translates strategy into
                executable architecture and complex technical realities into board-level narratives
                that secure investment and alignment.
              </p>
            </div>
            <div className="pb-sector-grid">
              {sectors.map(([sector, desc]) => (
                <div key={sector} className="pb-sector">
                  <strong>{sector}</strong>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* References carousel */}
        <ReferencesCarousel />

        {/* Qualify Me — AI powered */}
        <QualifySection />

        {/* Book */}
        <section id="book" className="pb-section pb-book-section">
          <div className="pb-section-head inverted">
            <p className="pb-eyebrow">Let's Connect</p>
            <h2>Book a Meeting</h2>
          </div>
          <div className="pb-book-card">
            <p>Choose a time that works for you — open Peter's Outlook booking page or reach out directly.</p>
            <div className="pb-book-actions">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pb-button light-primary">
                📅 Open Outlook Booking
              </a>
              <a href="tel:0452491013" className="pb-button light-ghost">📞 0452 491 013</a>
              <a href="mailto:peter@bardenhagen.xyz" className="pb-button light-ghost">✉ peter@bardenhagen.xyz</a>
            </div>
            <div className="pb-book-visual">
              <div className="pb-book-icon">📅</div>
              <div className="pb-book-copy">
                <strong>30 or 60 minute sessions available</strong>
                <span>Architecture reviews · Advisory · Pre-sales · General enquiries</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Sticky bottom nav — mobile only */}
      <nav className="pb-bottom-nav" aria-label="Quick actions">
        <a href="/Peter_Bardenhagen_CV.docx" download="Peter_Bardenhagen_CV.docx" className="pb-bottom-item">
          <span>⬇</span><span>Download CV</span>
        </a>
        <a href="mailto:peter@bardenhagen.xyz" className="pb-bottom-item accent">
          <span>✉</span><span>Get in Touch</span>
        </a>
        <button className="pb-bottom-item" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span>↑</span><span>Top</span>
        </button>
      </nav>

    </div>
  );
}
