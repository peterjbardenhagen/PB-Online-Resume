"use client";

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState, useRef, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackToTop } from '../src/components/BackToTop/BackToTop.tsx';
import JobDescriptionForm from '../src/components/JobDescriptionForm/JobDescriptionForm.tsx';
import Recommendations from '../src/components/Recommendations/Recommendations.tsx';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'framer-motion';
import {
  EmailShareButton, FacebookShareButton, LinkedinShareButton, WhatsappShareButton,
  FacebookShareCount, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton,
  WhatsappIcon, LinkedinIcon, EmailIcon,
} from "react-share";
import { useTrackingCode } from "react-hubspot-tracking-code-hook";
import ResponsiveCarousel from "../src/components/ResponsiveCarousel/ResponsiveCarousel.tsx";
import CareerTimeline from "../src/components/CareerTimeline/CareerTimeline.tsx";

const WordCloud = dynamic(() => import('../src/components/WordCloud/WordCloudClient.js'), { ssr: false });

const logUserAction = () => {};

const ROLES = ['Solution Architect', 'Product Lead', 'Engineering Manager', 'AI Practitioner'];

const CAPABILITIES = [
  {
    id: 'architecture',
    icon: '⬡',
    title: 'Solution Architecture',
    subtitle: 'Enterprise Scale Design',
    description: 'TOGAF 10 & ArchiMate 3.1 certified. Distributed systems, cloud-native platforms, integration patterns, and multi-year architecture roadmaps aligned to business strategy.',
    tags: ['TOGAF 10', 'ArchiMate', 'Azure AZ-305', 'Microservices', 'Event-Driven'],
    accent: '#3b82f6',
    wide: true,
  },
  {
    id: 'leadership',
    icon: '◎',
    title: 'Technical Leadership',
    subtitle: 'Teams of 25+',
    description: 'Building high-performance engineering teams across multi-stream delivery programs with a culture of quality and continuous improvement.',
    tags: ['Team Building', 'Mentoring', 'Agile/SAFe'],
    accent: '#10b981',
    wide: false,
  },
  {
    id: 'ai',
    icon: '◈',
    title: 'AI & Innovation',
    subtitle: 'Prototype to Production',
    description: 'Azure OpenAI, LangChain, RAG pipelines. AI-powered agentic platforms, chatbots, and intelligent process automation that deliver real business outcomes.',
    tags: ['Azure AI', 'LangChain', 'RAG', 'OpenAI', 'ML'],
    accent: '#8b5cf6',
    wide: false,
  },
  {
    id: 'product',
    icon: '◇',
    title: 'Product Strategy',
    subtitle: 'Vision to Roadmap',
    description: 'Translating C-suite vision into prioritised product roadmaps, measurable OKRs, and user-centred digital products that win in the market.',
    tags: ['Product Ownership', 'Roadmapping', 'OKRs', 'UX'],
    accent: '#f59e0b',
    wide: false,
  },
  {
    id: 'delivery',
    icon: '◉',
    title: 'Agile Delivery',
    subtitle: 'Strategy to Execution',
    description: 'End-to-end program governance across discovery, design, build and release. DevOps culture, CI/CD pipelines, and observability from day one.',
    tags: ['SAFe', 'Scrum', 'DevOps', 'CI/CD', 'Observability'],
    accent: '#10b981',
    wide: false,
  },
  {
    id: 'advisory',
    icon: '△',
    title: 'Executive Advisory',
    subtitle: 'Board to Build',
    description: 'C-suite advisory, Architecture Forum governance, and presales for $5M+ engagements across energy, healthcare, government and financial services.',
    tags: ['Presales', 'C-Suite', 'Architecture Forum', 'Governance'],
    accent: '#3b82f6',
    wide: true,
  },
];

const BUSINESS_CAPS = [
  { icon: '⊕', label: 'Digital Strategy',      desc: 'Multi-year technology & platform roadmaps' },
  { icon: '⊙', label: 'C-Suite Engagement',     desc: 'Board presentations & executive advisory' },
  { icon: '⊗', label: 'Product Ownership',      desc: 'Vision, backlog, OKRs & prioritisation' },
  { icon: '⊛', label: 'Commercial Acumen',      desc: 'P&L awareness, presales, $5M+ bid leadership' },
  { icon: '⊞', label: 'Change Leadership',      desc: 'Enterprise digital transformation & org change' },
];

const TECH_CAPS = [
  { icon: '◈', label: 'Solution Architecture',  desc: 'Enterprise patterns, TOGAF 10, ArchiMate 3.1' },
  { icon: '◉', label: 'Cloud Platforms',         desc: 'Azure (AZ-305), AWS, GCP, AKS/EKS' },
  { icon: '◇', label: 'AI Engineering',           desc: 'Azure OpenAI, LangChain, RAG, AI-102' },
  { icon: '◎', label: 'Software Engineering',    desc: '.NET, React, Node.js, Python, TypeScript' },
  { icon: '⬡', label: 'DevOps & Observability', desc: 'Terraform, GitHub Actions, Datadog, Splunk' },
];

const INDUSTRIES = [
  { name: 'Energy & Utilities',        clients: 'CS Energy, Western Power, APA Group',              icon: '⚡' },
  { name: 'Healthcare',                clients: 'Sonic Healthcare, Sullivan Nicolaides, IPN',        icon: '⊕' },
  { name: 'Financial Services',        clients: 'SS&C Technologies, Perpetual, Super funds',         icon: '◎' },
  { name: 'Government',                clients: 'Brisbane City Council, Queensland Government',      icon: '⬡' },
  { name: 'Automotive',                clients: 'Mercedes-Benz, Chrysler, Isuzu, Bob Jane',         icon: '◉' },
  { name: 'Professional Services',     clients: 'Carter Capner Law, Totalmobile UK, Capgemini',     icon: '◈' },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  const scrollAreaRef = useRef(null);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [roleIndex, setRoleIndex]     = useState(0);
  const [scrollPct, setScrollPct]     = useState(0);
  const { setPathPageView, setIdentity, setContentType } = useTrackingCode();

  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'How can I help you learn more about Peter and his resume?' },
  ]);

  const statsRef       = useRef(null);
  const isStatsInView  = useInView(statsRef, { once: true });
  const wcloudRef      = useRef(null);
  const isWcloudInView = useInView(wcloudRef, { once: true });

  // Redirect legacy domain
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.href.includes('digitalresponse.com.au')) {
      window.location.replace('https://digitalresponse.webflow.io');
    }
  }, []);

  // Role cycling
  useEffect(() => {
    const id = setInterval(() => setRoleIndex(p => (p + 1) % ROLES.length), 3000);
    return () => clearInterval(id);
  }, []);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll chat to bottom
  useEffect(() => {
    if (scrollAreaRef.current) scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }, [messages]);

  const submitForm = async (e) => {
    e.preventDefault();
    const newMessages = [...messages, { role: 'user', content: messageInput }];
    setMessages(newMessages);
    setMessageInput('');
    const res = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    }).then(r => r.json());
    setMessages([...newMessages, { role: 'assistant', content: res.message }]);
  };

  const toggleMobileMenu = () => setMenuOpen(o => !o);

  setPathPageView("/");
  setIdentity("anonymous");
  setContentType("landing-page");

  const shareUrl = 'https://peter.bardenhagen.xyz';
  const shareTitle = 'Peter Bardenhagen — Technology Leader & AI Practitioner';

  return (
    <>
      <div>

        {/* ── Scroll progress ── */}
        <div className="scroll-progress-bar" style={{ width: `${scrollPct}%` }} />

        {/* ══════════════════════════════════
            HEADER
        ══════════════════════════════════ */}
        <header>
          <motion.a href="#" className="logo-holder"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="logo">PB</div>
            <div className="logo-text">Peter Bardenhagen</div>
          </motion.a>

          <nav aria-label="Main navigation">
            <ul id="menu" className={menuOpen ? 'active' : ''}>
              <li><a href="#"              aria-label="Home">Home</a></li>
              <li><a href="#skills"        aria-label="Skills">Skills</a></li>
              <li><a href="#career-timeline" aria-label="Experience">Experience</a></li>
              <li><a href="#chatbot"       aria-label="AI Assistant">AI Assistant</a></li>
              <li><a href="#book"          aria-label="Book a meeting">Book a Time</a></li>
              <li><a href="#references"    aria-label="References">References</a></li>
              <li>
                <div className="contact-dropdown">
                  <button className="button" aria-label="Contact options" title="0452 491 013 | peter@bardenhagen.xyz">
                    Contact
                  </button>
                  <div className="contact-options-dropdown">
                    <a href="tel:0452491013" className="contact-opt">📞 0452 491 013</a>
                    <a href="mailto:peter@bardenhagen.xyz" className="contact-opt">✉️ peter@bardenhagen.xyz</a>
                  </div>
                </div>
              </li>
            </ul>
            <button className="mobile-toggle" onClick={toggleMobileMenu}
              aria-label="Toggle navigation" aria-expanded={menuOpen}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
              </svg>
            </button>
          </nav>
        </header>

        <main>
          <SpeedInsights />
          <BackToTop />

          {/* ══════════════════════════════════
              HERO
          ══════════════════════════════════ */}
          <section className="hero-section container" aria-label="Introduction">
            <div className="hero-grid">

              {/* Left — text */}
              <div className="hero-text">
                <motion.div className="hero-badge" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                  <span className="badge-dot" />
                  Available for New Roles
                </motion.div>

                <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
                  <small>Hi, I&apos;m</small>
                  Peter Bardenhagen
                </motion.h1>

                <motion.div className="hero-role" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
                  <span className="role-prefix">Senior&nbsp;</span>
                  <AnimatePresence mode="wait">
                    <motion.span key={roleIndex} className="role-value"
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.38, ease: 'easeInOut' }}>
                      {ROLES[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>

                <motion.p className="hero-tagline" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
                  20+ years leading enterprise digital transformations across energy, healthcare, finance
                  and government. Equal parts business strategist and hands-on engineer — from C-suite
                  advisory to shipping production AI systems.
                </motion.p>

                <motion.div className="hero-cta" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.5 }}>
                  <a href="/Peter_Bardenhagen_CV.docx" className="button primary-btn">Download CV</a>
                  <a href="mailto:peter@bardenhagen.xyz" className="button outline-btn">Get in Touch</a>
                </motion.div>

                <motion.div className="hero-social" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.6 }}>
                  <IconButton aria-label="GitHub profile"
                    href="https://github.com/peterjbardenhagen" target="_blank" rel="noopener noreferrer"
                    sx={{ color: '#64748b', '&:hover': { color: '#f1f5f9', backgroundColor: 'rgba(255,255,255,0.08)' } }}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton aria-label="LinkedIn profile"
                    href="https://www.linkedin.com/in/peterbardenhagen" target="_blank" rel="noopener noreferrer"
                    sx={{ color: '#64748b', '&:hover': { color: '#0a66c2', backgroundColor: 'rgba(10,102,194,0.1)' } }}>
                    <LinkedInIcon />
                  </IconButton>
                </motion.div>
              </div>

              {/* Right — photo */}
              <motion.div className="hero-photo"
                initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
                <div className="photo-ring-outer">
                  <div className="photo-ring-inner">
                    <img src="./imgs/hero-image.png" alt="Peter Bardenhagen" />
                  </div>
                </div>
                <div className="photo-accent-1" />
                <div className="photo-accent-2" />
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="hero-stats" ref={statsRef}>
              {[
                { value: '20+',  label: 'Years Experience',  sub: 'Developer → CTO-level' },
                { value: '$15M+',label: 'Projects Delivered', sub: 'Enterprise programs' },
                { value: '6',    label: 'Industries',         sub: 'Energy to Healthcare' },
                { value: '25+',  label: 'Team Size Led',      sub: 'Multi-stream delivery' },
              ].map((s, i) => (
                <motion.div key={s.label} className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-sub">{s.sub}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════
              CERT / TECH LOGO STRIP
          ══════════════════════════════════ */}
          <section className="logos container" aria-label="Certifications and technologies">
            <div className="marquee">
              <div className="track">
                {[
                  { src: './imgs/archi.png',      alt: 'ArchiMate 3.1',   cls: 'landscape' },
                  { src: './imgs/Togaf.jpg',       alt: 'TOGAF 10',        cls: 'landscape' },
                  { src: './imgs/Itil.png',        alt: 'ITIL Foundation', cls: 'landscape' },
                  { src: './imgs/pspo.png',        alt: 'PSPO I',          cls: 'square'    },
                  { src: './imgs/PSM.jpg',         alt: 'PSM I',           cls: 'square'    },
                  { src: './imgs/prince2.png',     alt: 'Prince 2',        cls: 'square'    },
                  { src: './imgs/safe.png',        alt: 'SAFe 5.0',        cls: 'square'    },
                  { src: './imgs/azure.png',       alt: 'Azure',           cls: 'square'    },
                  { src: './imgs/databricks.png',  alt: 'Databricks',      cls: 'landscape' },
                  { src: './imgs/datadog.png',     alt: 'Datadog',         cls: 'landscape' },
                  { src: './imgs/flutterflow.png', alt: 'FlutterFlow',     cls: 'landscape' },
                  { src: './imgs/optimizely.png',  alt: 'Optimizely',      cls: 'landscape' },
                  { src: './imgs/umbraco.png',     alt: 'Umbraco',         cls: 'square'    },
                  { src: './imgs/Webflow.jpg',     alt: 'Webflow',         cls: 'landscape' },
                  { src: './imgs/dotnetcore.png',  alt: '.NET Core',       cls: 'square'    },
                  { src: './imgs/react.png',       alt: 'React',           cls: 'square'    },
                  { src: './imgs/nextjs.png',      alt: 'Next.js',         cls: 'square'    },
                  { src: './imgs/python.png',      alt: 'Python',          cls: 'square'    },
                ].flatMap((img, _, arr) => [img, ...arr]).slice(0, 36).map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} className={img.cls} />
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              DUAL ADVANTAGE
          ══════════════════════════════════ */}
          <section id="skills" className="container" aria-labelledby="dual-heading">
            <motion.h2 id="dual-heading"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>The Rare Combination</small>
              Business Strategy Meets Technical Depth
            </motion.h2>
            <p className="section-lead">
              Most leaders are strong on one side. Peter bridges both — translating C-suite vision into
              shipped products, and engineering decisions into measurable business value.
            </p>

            <div className="dual-grid">
              {/* Business card */}
              <motion.div className="dual-card business-card"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="dual-card-header">
                  <span className="dual-card-tag business-tag">Business</span>
                  <h3>Strategic Leadership</h3>
                </div>
                <ul className="dual-list">
                  {BUSINESS_CAPS.map(item => (
                    <li key={item.label}>
                      <span className="dual-icon">{item.icon}</span>
                      <div>
                        <strong>{item.label}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Centre */}
              <motion.div className="dual-center"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <div className="dual-center-circle">
                  <span className="dual-center-label">Where<br />Value is<br />Created</span>
                </div>
                <div className="dual-roles">
                  {['Solution Architect', 'Product Lead', 'Engineering Manager'].map(r => (
                    <span key={r} className="dual-role-tag">{r}</span>
                  ))}
                </div>
              </motion.div>

              {/* Technical card */}
              <motion.div className="dual-card tech-card"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <div className="dual-card-header">
                  <span className="dual-card-tag tech-tag">Technical</span>
                  <h3>Engineering Excellence</h3>
                </div>
                <ul className="dual-list">
                  {TECH_CAPS.map(item => (
                    <li key={item.label}>
                      <span className="dual-icon">{item.icon}</span>
                      <div>
                        <strong>{item.label}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════
              CAPABILITIES BENTO
          ══════════════════════════════════ */}
          <section className="container" aria-labelledby="cap-heading">
            <motion.h2 id="cap-heading"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>What I Bring</small>
              Core Capabilities
            </motion.h2>

            <div className="capabilities-bento">
              {CAPABILITIES.map((cap, i) => (
                <motion.div key={cap.id}
                  className={`cap-card${cap.wide ? ' cap-wide' : ''}`}
                  style={{ '--cap-accent': cap.accent }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <span className="cap-icon">{cap.icon}</span>
                  <div className="cap-label">{cap.subtitle}</div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.description}</p>
                  <div className="cap-tags">
                    {cap.tags.map(t => <span key={t} className="cap-tag">{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════
              CAREER TIMELINE
          ══════════════════════════════════ */}
          <section id="career-timeline" className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>My Professional Journey</small>
              Career Story
            </motion.h2>
            <CareerTimeline />
          </section>

          {/* ══════════════════════════════════
              CERTIFICATIONS CAROUSEL
          ══════════════════════════════════ */}
          <section id="certifications" className="container" aria-labelledby="cert-heading">
            <motion.h2 id="cert-heading"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>Business &amp; Technical</small>
              Certifications
            </motion.h2>
            <ResponsiveCarousel />
          </section>

          {/* ══════════════════════════════════
              PROJECTS BENTO
          ══════════════════════════════════ */}
          <section id="projects" className="bento container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>Successfully Delivered</small>
              Digital Projects
            </motion.h2>
            <div className="bento-grid">
              {[
                { src: './imgs/recusant-intelligence.png', alt: 'Recusant Intelligence', label: 'Recusant Intelligence AI Platform' },
                { src: './imgs/wp.png',    alt: 'Western Power',         label: 'Western Power Digital Transformation' },
                { src: './imgs/lcs.jpg',   alt: 'Live Combat Sports',    label: 'Live Combat Sports' },
                { src: './imgs/bento-5.jpg', alt: 'Bob Jane T-Marts',   label: 'Bob Jane Racing Heritage' },
                { src: './imgs/easyvisit.png', alt: 'EasyVisit',         label: 'EasyVisit — 500K+ Bookings' },
              ].map((p, i) => (
                <a key={i} href="#" className="bento-item">
                  <img src={p.src} alt={p.alt} />
                  <div className="bento-overlay"><span>{p.label}</span></div>
                </a>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════
              INDUSTRIES
          ══════════════════════════════════ */}
          <section className="container" aria-labelledby="ind-heading">
            <motion.h2 id="ind-heading"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>Cross-Sector Experience</small>
              Industries Served
            </motion.h2>
            <div className="industries-grid">
              {INDUSTRIES.map((ind, i) => (
                <motion.div key={ind.name} className="industry-card-new"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}>
                  <span className="industry-icon">{ind.icon}</span>
                  <h4>{ind.name}</h4>
                  <p>{ind.clients}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════
              AI ASSISTANT
          ══════════════════════════════════ */}
          <section id="chatbot" className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>Powered by Azure OpenAI</small>
              Ask My AI Assistant
            </motion.h2>

            <div className="chatbot-layout">
              <div className="chatbot-info">
                <div className="chatbot-feature-list">
                  {[
                    { icon: '◈', text: 'Project experience & case studies' },
                    { icon: '◉', text: 'Career achievements & skills' },
                    { icon: '◎', text: 'Role fit & availability' },
                    { icon: '⬡', text: 'Preferred engagement models' },
                  ].map(f => (
                    <div key={f.text} className="chatbot-feature">
                      <span className="chatbot-feature-icon">{f.icon}</span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
                <div className="chatbot-actions">
                  <a href="/Peter_Bardenhagen_CV.docx" className="button primary-btn">Download CV</a>
                </div>
              </div>

              <div className="chat-box">
                <div className="scroll-area" ref={scrollAreaRef}>
                  <ul id="chat-log">
                    {messages.map((msg, i) => (
                      <li key={i} className={msg.role}>
                        <span className="avatar">{msg.role === 'user' ? 'You' : 'AI'}</span>
                        <div className="message">{msg.content}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <form onSubmit={submitForm} className="chat-message">
                  <input
                    type="text"
                    placeholder="Ask about Peter's experience, skills, or availability…"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                  />
                  <button className="button primary-btn">Send</button>
                </form>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              QUALIFY ME
          ══════════════════════════════════ */}
          <section className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>AI-Powered Job Matching</small>
              Qualify Me for Your Role
            </motion.h2>

            <div className="qualify-layout">
              <div className="qualify-info">
                <p>
                  Paste a job description and my AI will instantly assess how well my profile
                  aligns to your requirements.
                </p>
                <ul className="qualify-benefits">
                  <li>Instant skills gap analysis</li>
                  <li>Experience alignment scoring</li>
                  <li>Customised talking points</li>
                </ul>
              </div>
              <div className="qualify-form">
                <JobDescriptionForm
                  onSubmit={() => {}} onError={() => {}} onSuccess={() => {}}
                />
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              BOOK A TIME
          ══════════════════════════════════ */}
          <section id="book" className="container booking-section">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>Let&apos;s Connect</small>
              Book a Meeting
            </motion.h2>
            <motion.div className="booking-options"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <a href="https://outlook.office.com/bookwithme/user/aad8f0e0beba4aebb06c83a9fbd6be01@bardenhagen.xyz?anonymous&ep=plink"
                 target="_blank" rel="noopener noreferrer" className="cta-button primary">
                Schedule on Outlook
              </a>
              <a href="tel:0452491013" className="cta-button secondary">
                Call: 0452 491 013
              </a>
              <a href="mailto:peter@bardenhagen.xyz" className="cta-button secondary">
                Email: peter@bardenhagen.xyz
              </a>
            </motion.div>
          </section>

          {/* ══════════════════════════════════
              REFERENCES
          ══════════════════════════════════ */}
          <section id="references" className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>LinkedIn</small>
              What Colleagues Say
            </motion.h2>
            <div className="references-layout">
              <motion.div className="wordcloud-wrapper"
                ref={wcloudRef}
                initial={{ opacity: 0, y: 40 }}
                animate={isWcloudInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}>
                <WordCloud />
              </motion.div>
              <Recommendations />
            </div>
          </section>

          {/* ══════════════════════════════════
              SHARE
          ══════════════════════════════════ */}
          <section id="share" className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <small>Know someone who should meet Peter?</small>
              Share This Profile
            </motion.h2>
            <div className="share__container">
              <div className="share__some-network">
                <FacebookShareButton url={shareUrl}><FacebookIcon size={48} round /></FacebookShareButton>
                <FacebookShareCount url={shareUrl} className="share__some-network__share-count">{c => c}</FacebookShareCount>
              </div>
              <div className="share__some-network">
                <FacebookMessengerShareButton url={shareUrl} appId="521270401588372"><FacebookMessengerIcon size={48} round /></FacebookMessengerShareButton>
              </div>
              <div className="share__some-network">
                <WhatsappShareButton url={shareUrl} title={shareTitle} separator=" — "><WhatsappIcon size={48} round /></WhatsappShareButton>
              </div>
              <div className="share__some-network">
                <LinkedinShareButton url={shareUrl}><LinkedinIcon size={48} round /></LinkedinShareButton>
              </div>
              <div className="share__some-network">
                <EmailShareButton url={shareUrl} subject={shareTitle} body="Check out this profile:"><EmailIcon size={48} round /></EmailShareButton>
              </div>
            </div>
          </section>
        </main>

        {/* ═════════════════════════════════════════
            STICKY BOTTOM NAVIGATION (Mobile)
        ═════════════════════════════════════════ */}
        <nav className="sticky-bottom-nav">
          <motion.a
            href="/Peter_Bardenhagen_CV.docx"
            download="Peter_Bardenhagen_CV.docx"
            className="nav-item"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="nav-icon">⬇</span>
            <span className="nav-label">Download CV</span>
          </motion.a>

          <motion.a
            href="mailto:peter@bardenhagen.xyz"
            className="nav-item primary"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="nav-icon">✉</span>
            <span className="nav-label">Get in Touch</span>
          </motion.a>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="nav-item back-to-top"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="nav-icon">↑</span>
            <span className="nav-label">Back to Top</span>
          </motion.button>
        </nav>
      </div>

      {/* GTM */}
      <div onLoad={() => {
        try {
          if (typeof window !== 'undefined' && window.ReactTagManager) {
            window.ReactTagManager.action({
              event: 'pageView',
              pagePath: 'https://peter.bardenhagen.xyz',
              pageTitle: 'Peter Bardenhagen — Online Resume',
              visitorType: 'Customer',
            });
          }
        } catch (_) {}
      }} />
    </>
  );
}
