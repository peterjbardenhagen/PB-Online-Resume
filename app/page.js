"use client";

const bookingUrl = "https://outlook.office.com/bookwithme/user/peter@bardenhagen.xyz";

const skills = ["Solution Architecture", "Cloud Platforms", "Azure AI", "OpenAI", "Product Strategy", "DevOps", "TOGAF", "ArchiMate", "React", "Next.js", "Executive Advisory", "Agile Delivery"];
const references = [
  ["Enterprise clarity", "Peter consistently bridges business and engineering with exceptional clarity and delivery focus."],
  ["Technical leadership", "He brings calm, practical leadership to complex architecture and delivery challenges."],
  ["Trusted advisor", "Peter is reliable, transparent and able to translate complexity into business outcomes."],
];

export default function Home() {
  return (
    <main className="pb-page">
      <section className="mobile-landscape-cta" aria-label="Quick contact options">
        <img src="/profile/img/me.jpeg" alt="Peter Bardenhagen" />
        <div><p>Peter Bardenhagen</p><h1>Solution Architect & Technology Leader</h1></div>
        <nav><a href="/Peter_Bardenhagen_CV.docx">CV</a><a href="tel:0452491013">Mobile</a><a href="mailto:peter@bardenhagen.xyz">Email</a></nav>
      </section>

      <header className="pb-header">
        <a href="#home" className="pb-brand"><span>PB</span>Peter Bardenhagen</a>
        <nav>
          <a href="#skills">Skills</a><a href="#career-story">Career Story</a><a href="#references">References</a><a href="#book">Book</a>
          <a href="mailto:peter@bardenhagen.xyz" className="pb-email"><span aria-hidden="true">✉️</span><span>peter@bardenhagen.xyz</span></a>
        </nav>
      </header>

      <section id="home" className="pb-hero pb-section">
        <div className="pb-hero-copy">
          <p className="pb-eyebrow">Available for senior technology roles</p>
          <h1>Senior Solution Architect, Product Lead & AI Practitioner</h1>
          <p className="pb-lead">20+ years leading enterprise digital transformations across energy, healthcare, finance and government. I align strategy, architecture and delivery so teams ship valuable, resilient platforms.</p>
          <div className="pb-actions"><a href="/Peter_Bardenhagen_CV.docx" className="pb-button primary">Download CV</a><a href="tel:0452491013" className="pb-button secondary">Call 0452 491 013</a><a href="mailto:peter@bardenhagen.xyz" className="pb-button ghost">Email Me</a></div>
        </div>
        <div className="pb-photo-card"><img src="/profile/img/me.jpeg" alt="Peter Bardenhagen" /><div><strong>100's of projects</strong><span>Ranging from $500k to $10m</span></div></div>
      </section>

      <section className="pb-section pb-metrics" aria-label="Career metrics">
        <article><strong>20+ Years</strong><span>Enterprise leadership</span></article><article><strong>100's</strong><span>Projects from $500k to $10m</span></article><article><strong>6 Industries</strong><span>Energy, health, finance, government and more</span></article><article><strong>25+</strong><span>Teams and delivery streams led</span></article>
      </section>

      <section id="skills" className="pb-section">
        <div className="pb-section-heading"><p className="pb-eyebrow">Capability Cloud</p><h2>High-impact architecture, AI and delivery skills</h2></div>
        <div className="pb-cloud">{skills.map((s, i) => <span key={s} style={{"--i": i}}>{s}</span>)}</div>
      </section>

      <section id="career-story" className="pb-section pb-card-section">
        <div className="pb-section-heading"><p className="pb-eyebrow">Career Story</p><h2>Business-first technologist with hands-on depth</h2></div>
        <div className="pb-story-card"><p>Peter combines executive communication, solution architecture and hands-on engineering leadership to deliver complex digital programs. He has led hundreds of initiatives spanning architecture strategy, cloud migration, AI implementation, product delivery and enterprise transformation.</p></div>
      </section>

      <section id="references" className="pb-section">
        <div className="pb-section-heading"><p className="pb-eyebrow">References</p><h2>What Colleagues Say</h2></div>
        <div className="pb-reference-grid">{references.map(([name, quote]) => <article className="pb-reference-card" key={name}><p>“{quote}”</p><footer>{name}</footer></article>)}</div>
      </section>

      <section id="qualify" className="pb-section pb-card-section">
        <div className="pb-section-heading"><p className="pb-eyebrow">Role Fit</p><h2>Qualify Me for Your Role</h2></div>
        <form className="pb-role-form"><textarea placeholder="Paste a role description or describe the challenge..." aria-label="Role description" /><button type="submit" className="pb-button primary">Send</button></form>
      </section>

      <section id="book" className="pb-section pb-book-section">
        <div className="pb-section-heading"><p className="pb-eyebrow">Let&apos;s Connect</p><h2>Book a Meeting</h2></div>
        <div className="pb-book-card"><p>Choose a time that works for you using Outlook booking, or open the booking page in a new tab.</p><iframe title="Book a meeting with Peter Bardenhagen" src={bookingUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="pb-button primary">Open Outlook Booking</a></div>
      </section>
    </main>
  );
}
