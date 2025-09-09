"use client";
import { Inter } from 'next/font/google';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState, useRef, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { BackToTop } from '../src/components/BackToTop/BackToTop.tsx';
import JobDescriptionForm from '../src/components/JobDescriptionForm/JobDescriptionForm.tsx';
import Recommendations from '../src/components/Recommendations/Recommendations.tsx';
import WordCloud from '../src/components/WordCloud/WordCloud.js';
import { motion } from "motion/react"
import { useInView } from 'framer-motion';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookShareCount,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import { useTrackingCode } from "react-hubspot-tracking-code-hook";
import ResponsiveCarousel from "../src/components/ResponsiveCarousel/ResponsiveCarousel.tsx";

const inter = Inter({ subsets: ['latin'] });

// no-op logger (App Insights wiring optional)
const logUserAction = (actionName, properties) => { /* no-op */ };

export default function Home() {
  const scrollAreaRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const { setPathPageView, setIdentity, setContentType } = useTrackingCode();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'How can I help you learn more about Peter and his Resume?'
    }
  ]);

  useEffect(() => {
    // Redirect legacy domain to Webflow (client-only)
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      if (currentUrl.includes('digitalresponse.com.au')) {
        window.location.replace('https://digitalresponse.webflow.io');
      }
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }];
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages })
    }).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  };

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  // JD form telemetry (optional)
  const handleJobDescriptionSubmit = (formData) => {
    logUserAction('JobDescription_Submitted', {
      contentLength: formData.jobDescription?.length,
      hasFile: !!formData.file
    });
  };
  const handleJobDescriptionError = (error) => {
    logUserAction('JobDescription_Error', { error: error.message });
  };
  const handleJobDescriptionSuccess = (response) => {
    logUserAction('JobDescription_Completed', {
      responseLength: response?.length,
      success: true
    });
  };

  // HubSpot tracking
  setPathPageView("/");
  setIdentity("anonymous");
  setContentType("landing-page");

  const shareUrl = 'https://peter.bardenhagen.xyz';
  const title = 'Peter Bardenhagen - Technology Leader & Innovator';

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      logUserAction('PageView', {
        path: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent
      });
    }
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className={inter.className}>
        <header>
          <motion.a
            href="#"
            className="logo-holder"
            initial={{ opacity: 0.2, scale: 0 }}
            animate={{ opacity: 1, scale: 1, duration: 0.3, ease: "linear" }}
          >
            <div className="logo">PB</div>
            <div className="logo-text">Peter Bardenhagen</div>
          </motion.a>
          <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
              <li><a href="#">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              {/* NEW: Experience anchor */}
              <li><a href="#experience">Experience</a></li>
              <li><a href="#chatbot">AI Assistant</a></li>
              <li><a href="#book">Book a Time</a></li>
              <li><a href="#references">References</a></li>
              <li><a href="tel:+61452491013" className="button">Call</a></li>
              <li><a href="mailto:peter@bardenhagen.xyz" className="button">Email</a></li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
              </svg>
            </a>
          </nav>
        </header>

        <main>
          <SpeedInsights />
          <BackToTop />

          {/* HERO */}
          <section className="hero container">
            <div className="hero-blue">
              <div>
                <motion.h1
                  initial={{ opacity: 0.2, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, duration: 0.3, ease: "linear" }}
                >
                  <small>Hi I&apos;m</small>
                  Peter Bardenhagen
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0.2, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, duration: 0.3, ease: "linear" }}
                > 
                  I lead enterprise-scale digital transformations, align technology strategy with business outcomes, and build high-performance teams. Recent work spans multi-year strategic architecture and functional roadmaps, and regulatory-compliant platforms across energy & utilities, healthcare, finance, and government.
                </motion.p>
                <div className="call-to-action">
                  {/* UPDATED: resume file path */}
                  <a href="/Peter_Bardenhagen_CV.docx" className="button black">Resume</a>
                  <a href="tel:+61452491013" className="button white">Call</a>
                  <a href="mailto:peter@bardenhagen.xyz" className="button white">Email</a>
                </div>
                <div className="social-links">
                  <IconButton aria-label="GitHub" href="https://github.com/peterjbardenhagen" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/peterbardenhagen" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="hero-green">
              <motion.img
                initial={{ opacity: 0.1, scale: 1.25 }}
                animate={{ opacity: 1, scale: 1, duration: 3, ease: "linear" }}
                src="./imgs/hero-image.png"
                alt="Peter Bardenhagen"
                width="100%"
              />
            </div>
          </section>

          {/* CERT LOGOS */}
          <section className="logos container">
            <div className="marquee">
              <div className="track">
                <img src="./imgs/archi.png" alt="ArchiMate 3.1" className="archimate landscape" />
                <img src="./imgs/Togaf.jpg" alt="TOGAF 10" className="togaf landscape" />
                <img src="./imgs/Itil.png" alt="ITIL Foundation" className="itil landscape" />
                <img src="./imgs/pspo.png" alt="Professional Product Owner I" className="square" />
                <img src="./imgs/PSM.jpg" alt="Professional Scrum Master I" className="square" />
                <img src="./imgs/prince2.png" alt="Prince 2 Practitioner" className="square" />
                <img src="./imgs/safe.png" alt="SAFe Agilst 5.0" className="square" />
                <img src="./imgs/azure.png" alt="Microsoft Azure" className="square" />
                <img src="./imgs/databricks.png" alt="Databricks" className="databricks landscape" />
                <img src="./imgs/datadog.png" alt="Datadog" className="datadog landscape" />
                <img src="./imgs/flutterflow.png" alt="Flutterflow" className="flutterflow landscape" />
                <img src="./imgs/optimizely.png" alt="Optimizely" className="optimizely landscape" />
                <img src="./imgs/umbraco.png" alt="Umbraco" className="square" />
                <img src="./imgs/Webflow.jpg" alt="WebFlow" className="webflow landscape" />
                <img src="./imgs/dotnetcore.png" alt=".Net Core" className="square" />
                <img src="./imgs/react.png" alt="React" className="square" />
                <img src="./imgs/nextjs.png" alt="Next JS" className="square" />
                <img src="./imgs/python.png" alt="Python" className="square" />
              </div>
            </div>
          </section>

          {/* CERTS CAROUSEL */}
          <section id="qualify" className="chatbot container">
            <h2>
              <small>Business &amp; Technical</small>
              Certifications
            </h2>
            <div className="chatbot-blue">
              <div className="chat-info">
                <ResponsiveCarousel />
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="skills container">
            <h2>
              <small>About Me</small>
              Skills &amp; Experience
            </h2>
            <div className="holder-blue">
              <div className="left-column">
                <h3>Cloud</h3>
                <ul><li>AWS</li><li>Azure</li><li>GCP</li></ul>
                <h3>Frontend</h3>
                <ul>
                  <li>HTML</li><li>CSS</li><li>JavaScript</li><li>TypeScript</li>
                  <li>React</li><li>Angular</li><li>Next.js</li><li>Vue</li>
                </ul>
                <h3>Backend</h3>
                <ul>
                  <li>ASP.Net</li><li>C#</li><li>C++</li><li>Java</li><li>Node.js</li><li>Python</li>
                </ul>
              </div>
              <div className="right-column">
                <p>
                  Starting as a developer, I’ve always cared about the what, how, and why—aligning architecture to business outcomes and enabling teams to deliver.
                </p>
                <p>Drawing on extensive business and technical expertise, I specialise in:</p>
                <ul className="list">
                  <li><strong>Technical Leadership:</strong> Led teams of 25+ technologists across multi-stream delivery</li>
                  <li><strong>Engineering:</strong> Recent hands-on work with Optimizely, Umbraco, AWS &amp; Azure, .NET, React, Next.js</li>
                  <li><strong>Solution Architecture:</strong> Distributed systems, cloud platforms, integration patterns</li>
                  <li><strong>Presales &amp; Consulting:</strong> Discovery, solution design, client engagement, proposals</li>
                  <li><strong>Project Delivery:</strong> Agile, DevOps, program governance, P&amp;L awareness</li>
                  <li><strong>Stakeholders:</strong> C-level advisory, Architecture Forum, change leadership</li>
                </ul>
              </div>
            </div>
          </section>

{/* CURRENT ROLE → Recusant / CS Energy */}
<section id="experience" className="work-experience container">
  <h2>
    <small>Current Role</small>
    Solution Architect @ Recusant
  </h2>
  <div className="jobs">
    <article id="current-role">
      <h3>Retail Solution Architect – CS Energy</h3>
      <div>March 2025 – September 2025</div>
      <p>
        Established the architectural foundations and roadmap for CS Energy’s retail uplift, with formal governance through the Architecture Forum.
      </p>
      <ul className="list">
        <li>Baselined the <strong>current state architecture</strong>, defined the <strong>future state architecture vision</strong>, and authored a multi-year <strong>architectural roadmap</strong>.</li>
        <li>Produced a <strong>functional roadmap</strong>; created multiple <strong>Initiative Canvases</strong> and scored them against a <strong>functional priority matrix</strong> to inform investment decisions.</li>
        <li>Wrote and presented <strong>Architecture Impact Assessments (AIAs)</strong> and <strong>High-Level Designs (HLDs)</strong> to the Architecture Forum.</li>
        <li>Explicitly called out <strong>regulatory compliance obligations</strong> and <strong>operational risks</strong> as part of the proposed uplift.</li>
      </ul>

      {/* Availability + Recusant logo */}
      <div
        className="role-cta"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginTop: "12px",
          flexWrap: "wrap"
        }}
      >
        <img
          src="https://cdn.prod.website-files.com/67e37366806acb8fe9d88830/67e37366806acb8fe9d888af_Recusant_logo_red.svg"
          alt="Recusant"
          style={{ height: 28 }}
        />
        <p style={{ margin: 0 }}>
          <strong>Upcoming Availability:</strong> I have room for new engagements!
          <br/>{" "}
          <a
            href="https://www.recusant.com.au/who-we-are#peterbardenhagen"
            target="_blank"
            rel="noopener noreferrer"
            class="recusant-link"
          >
            View my Recusant profile →
          </a>
        </p>
      </div>
    </article>
  </div>
</section>

          {/* Existing experience cards */}
          <section className="work-experience container">
            <h2>
              <small>Previous</small>
              Experience
            </h2>
            <div className="jobs">
              <article>
                <figure>
                  <div>
                    <img src="./imgs/workplace-1.jpg" alt="Workplace 1 - Capgemini" width="100%" />
                    <figcaption>Capgemini</figcaption>
                  </div>
                </figure>
                <h3>Senior Manager</h3>
                <div>2022-2024</div>
                <p>Drove major digital transformation for leading Australian organisations. Highlights:</p>
                <ul className="list">
                  <li>Modernising Perpetual&apos;s online customer platforms</li>
                  <li>Rebuilding Pharmacy Guild systems on cloud to improve efficiency</li>
                  <li>Creating mapping solutions for LendLease developments</li>
                  <li>Leading Western Power&apos;s shift to digital operations</li>
                </ul>
                <p>Kept skillset current across AI, data analytics, and Azure/Databricks.</p>
              </article>
              <article>
                <figure>
                  <div>
                    <img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Sonic Healthcare" width="100%" />
                    <figcaption>Sonic Healthcare</figcaption>
                  </div>
                </figure>
                <h3>Senior Consultant</h3>
                <div>2018-2021</div>
                <p>Led EasyVisit—medical bookings used by 200+ GP practices.</p>
                <ul className="list">
                  <li>Patients book online</li>
                  <li>Practices manage schedules efficiently</li>
                  <li>Self-service kiosks for check-in</li>
                </ul>
              </article>
              <article>
                <figure>
                  <div>
                    <img src="./imgs/workplace-3.jpg" alt="Workplace 3 - SS&C" width="100%" />
                    <figcaption>SS&amp;C</figcaption>
                  </div>
                </figure>
                <h3>Technical Project Manager</h3>
                <div>2016-2017</div>
                <p>Delivered digital programs ($500k–$5m) leading teams up to 25 and owning outcomes.</p>
                <ul className="list">
                  <li>Customisable wealth platform incl. mobile &amp; watch</li>
                  <li>Improved inter-system messaging</li>
                  <li>Managed complex data migrations</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="bento container">
            <h2>
              <small>Successfully Delivered</small>
              Digital Projects
            </h2>
            <div className="bento-grid">
              <a href="#" className="bento-item">
                <img src="./imgs/per.png" alt="Perpetual" height="100%" width="auto" />
              </a>
              <a href="#" className="bento-item">
                <img src="./imgs/wp.png" alt="Western Power" width="100%" />
              </a>
              <a href="#" className="bento-item">
                <img src="./imgs/lcs.jpg" alt="Live Combat Sports" height="100%" width="auto" />
              </a>
              <a href="#" className="bento-item">
                <img src="./imgs/bento-5.jpg" alt="Bob Jane Racing Heritage" width="auto" height="100%" />
              </a>
              <a href="#" className="bento-item">
                <img src="./imgs/ev.png" alt="Easy Visit" width="100%" />
              </a>
            </div>
          </section>

          {/* AI Assistant */}
          <section id="chatbot" className="chatbot container">
            <h2>
              <small>Talk to my</small>
              AI Assistant
            </h2>
            <div className="chatbot-blue">
              <div className="chat-info">
                <p>Chat with my AI Assistant to learn more about my profile:</p>
                <ul className="list">
                  <li>Experience delivering technical projects</li>
                  <li>Career achievements and expertise</li>
                  <li>Current availability for roles</li>
                  <li>Skills and qualifications</li>
                </ul>
                {/* UPDATED: resume link */}
                <p><a href="/Peter_Bardenhagen_CV.docx" className="button black">Download Resume</a></p>
              </div>
              <div className="chat-box">
                <div className="scroll-area" ref={scrollAreaRef}>
                  <ul id="chat-log">
                    {messages.map((message, index) => (
                      <li key={index} className={`${message.role}`}>
                        <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                        <div className="message">{message.content}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <form onSubmit={submitForm} className="chat-message">
                  <input
                    type="text"
                    placeholder="Enter your question here such as 'What is Peter's availability?'"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)}
                  />
                  <button className="button black">Send</button>
                </form>
              </div>
            </div>
          </section>

          {/* Qualify */}
          <section id="qualify" className="chatbot container">
            <h2>
              <small>Qualify Me</small>
              For a New Role
            </h2>
            <div className="chatbot-blue">
              <div className="chat-info">
                <JobDescriptionForm
                  onSubmit={handleJobDescriptionSubmit}
                  onError={handleJobDescriptionError}
                  onSuccess={handleJobDescriptionSuccess}
                />
              </div>
            </div>
          </section>

          {/* Book a time */}
          <section id="book">
            <h2>
              <small>Make a time to meet on Teams</small>
              Book a Time
            </h2>
            <iframe
              src="https://meetings.hubspot.com/peter-bardenhagen?embed=true"
              className="bookings"
              scrolling="no"
            />
          </section>

          {/* Share */}
          <section id="share" className="bento container">
            <h2>
              <small>Share with colleagues on</small>
              Social Media
            </h2>
            <div className="share__container">
              <div className="share__some-network">
                <FacebookShareButton url={shareUrl} className="share__some-network__share-button">
                  <FacebookIcon size={48} round />
                </FacebookShareButton>
                <div>
                  <FacebookShareCount url={shareUrl} className="share__some-network__share-count">
                    {count => count}
                  </FacebookShareCount>
                </div>
              </div>

              <div className="share__some-network">
                <FacebookMessengerShareButton
                  url={shareUrl}
                  appId="521270401588372"
                  className="share__some-network__share-button"
                >
                  <FacebookMessengerIcon size={48} round />
                </FacebookMessengerShareButton>
              </div>

              <div className="share__some-network">
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  className="share__some-network__share-button"
                >
                  <WhatsappIcon size={48} round />
                </WhatsappShareButton>
              </div>

              <div className="share__some-network">
                <LinkedinShareButton url={shareUrl} className="share__some-network__share-button">
                  <LinkedinIcon size={48} round />
                </LinkedinShareButton>
              </div>

              <div className="share__some-network">
                <EmailShareButton
                  url={shareUrl}
                  subject={title}
                  body="body"
                  className="share__some-network__share-button"
                >
                  <EmailIcon size={48} round />
                </EmailShareButton>
              </div>
            </div>
          </section>

          {/* References */}
          <section id="references">
            <h2>
              <small>LinkedIn</small>
              References
            </h2>
            <div className="holder-blue">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <WordCloud />
              </motion.div>
              <Recommendations />
            </div>
          </section>
        </main>
      </div>

      {/* Guarded GTM call (avoid reference errors) */}
      <div
        onLoad={() => {
          try {
            // eslint-disable-next-line no-undef
            ReactTagManager?.action?.({
              event: 'pageView',
              pagePath: 'https://peter.bardenhagen.xyz',
              pageTitle: 'Peter Bardenhagen - Online Resume',
              visitorType: 'Customer'
            });
          } catch {}
        }}
      />
    </>
  );
}
