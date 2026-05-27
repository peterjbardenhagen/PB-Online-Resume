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
import dynamic from 'next/dynamic';
import { motion } from "motion/react"
import { useInView } from 'framer-motion';

const WordCloud = dynamic(() => import('../src/components/WordCloud/WordCloudClient.js'), { ssr: false });
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
import CareerTimeline from "../src/components/CareerTimeline/CareerTimeline.tsx";

const inter = Inter({ subsets: ['latin'] });
const logUserAction = () => { };
const bookingUrl = "https://outlook.office.com/bookwithme/user/peter@bardenhagen.xyz";

export default function Home() {
  const scrollAreaRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const { setPathPageView, setIdentity, setContentType } = useTrackingCode();
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'How can I help you learn more about Peter and his Resume?' }]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      if (currentUrl.includes('digitalresponse.com.au')) window.location.replace('https://digitalresponse.webflow.io');
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }];
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch('/api', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: newMessages })
    }).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  };

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
  const handleJobDescriptionSubmit = (formData) => logUserAction('JobDescription_Submitted', { contentLength: formData.jobDescription?.length, hasFile: !!formData.file });
  const handleJobDescriptionError = (error) => logUserAction('JobDescription_Error', { error: error.message });
  const handleJobDescriptionSuccess = (response) => logUserAction('JobDescription_Completed', { responseLength: response?.length, success: true });

  setPathPageView("/"); setIdentity("anonymous"); setContentType("landing-page");
  const shareUrl = 'https://peter.bardenhagen.xyz';
  const title = 'Peter Bardenhagen - Technology Leader & Innovator';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (typeof window !== 'undefined') logUserAction('PageView', { path: window.location.pathname, referrer: document.referrer, userAgent: navigator.userAgent });
    if (scrollAreaRef.current) scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className={inter.className}>
        <section className="mobile-landscape-cta" aria-label="Quick contact options">
          <img src="/profile/img/me.jpeg" alt="Peter Bardenhagen" />
          <div><p>Peter Bardenhagen</p><h1>Solution Architect & Technology Leader</h1></div>
          <nav>
            <a href="/Peter_Bardenhagen_CV.docx">CV</a>
            <a href="tel:0452491013">Mobile</a>
            <a href="mailto:peter@bardenhagen.xyz">Email</a>
          </nav>
        </section>

        <header>
          <motion.a href="#" className="logo-holder" initial={{ opacity: 0.2, scale: 0 }} animate={{ opacity: 1, scale: 1, duration: 0.3, ease: "linear" }}>
            <div className="logo">PB</div><div className="logo-text">Peter Bardenhagen</div>
          </motion.a>
          <nav aria-label="Main navigation">
            <ul id="menu" className={menuOpen ? "active" : ""}>
              <li><a href="#">Home</a></li><li><a href="#skills">Skills</a></li><li><a href="#career-timeline">Experience</a></li><li><a href="#chatbot">AI Assistant</a></li><li><a href="#book">Book a Time</a></li><li><a href="#references">References</a></li>
              <li><a href="mailto:peter@bardenhagen.xyz" className="button contact-email-nowrap"><span aria-hidden="true">✉️</span><span>peter@bardenhagen.xyz</span></a></li>
            </ul>
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu" aria-expanded={menuOpen}><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" /></svg></button>
          </nav>
        </header>

        <main>
          <SpeedInsights /><BackToTop />
          <section className="hero container" aria-label="Hero section">
            <div className="hero-blue"><div><motion.h1 initial={{ opacity: 0.2, scale: 0 }} animate={{ opacity: 1, scale: 1, duration: 0.3, ease: "linear" }}><small>Hi I&apos;m</small>Peter Bardenhagen</motion.h1><motion.p initial={{ opacity: 0.2, scale: 0 }} animate={{ opacity: 1, scale: 1, duration: 0.3, ease: "linear" }}>I lead enterprise-scale digital transformations, align technology strategy with business outcomes, and build high-performance teams. Recent work spans multi-year strategic architecture and functional roadmaps, and regulatory-compliant platforms across energy & utilities, healthcare, finance, and government.</motion.p><div className="call-to-action"><a href="/Peter_Bardenhagen_CV.docx" className="button black">Resume</a><a href="#skills" className="button black">Capability Pack</a><a href="mailto:peter@bardenhagen.xyz" className="button white">Email Me</a></div><div className="social-links"><IconButton aria-label="GitHub" href="https://github.com/peterjbardenhagen" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" /></IconButton><IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/peterbardenhagen" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize="large" /></IconButton></div></div></div>
            <div className="hero-green"><motion.img initial={{ opacity: 0.1, scale: 1.25 }} animate={{ opacity: 1, scale: 1, duration: 3, ease: "linear" }} src="/profile/img/me.jpeg" alt="Peter Bardenhagen" width="100%" /></div>
          </section>

          <section className="logos container"><div className="marquee"><div className="track"><img src="./imgs/archi.png" alt="ArchiMate 3.1" className="archimate landscape" /><img src="./imgs/Togaf.jpg" alt="TOGAF 10" className="togaf landscape" /><img src="./imgs/Itil.png" alt="ITIL Foundation" className="itil landscape" /><img src="./imgs/pspo.png" alt="Professional Product Owner I" className="square" /><img src="./imgs/PSM.jpg" alt="Professional Scrum Master I" className="square" /><img src="./imgs/prince2.png" alt="Prince 2 Practitioner" className="square" /><img src="./imgs/safe.png" alt="SAFe Agilist 5.0" className="square" /><img src="./imgs/azure.png" alt="Microsoft Azure" className="square" /><img src="./imgs/databricks.png" alt="Databricks" className="databricks landscape" /><img src="./imgs/datadog.png" alt="Datadog" className="datadog landscape" /><img src="./imgs/flutterflow.png" alt="Flutterflow" className="flutterflow landscape" /><img src="./imgs/optimizely.png" alt="Optimizely" className="optimizely landscape" /><img src="./imgs/umbraco.png" alt="Umbraco" className="square" /><img src="./imgs/Webflow.jpg" alt="WebFlow" className="webflow landscape" /><img src="./imgs/dotnetcore.png" alt=".Net Core" className="square" /><img src="./imgs/react.png" alt="React" className="square" /><img src="./imgs/nextjs.png" alt="Next JS" className="square" /><img src="./imgs/python.png" alt="Python" className="square" /></div></div></section>
          <section id="qualify" className="chatbot container"><h2><small>Business &amp; Technical</small>Certifications</h2><div className="chatbot-blue"><div className="chat-info"><ResponsiveCarousel /></div></div></section>
          <section id="skills" className="skills container"><h2><small>About Me</small>Skills &amp; Experience</h2><div className="holder-blue"><div className="left-column"><h3>Cloud</h3><ul><li>AWS</li><li>Azure</li><li>GCP</li></ul><h3>Frontend</h3><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>TypeScript</li><li>React</li><li>Angular</li><li>Next.js</li><li>Vue</li></ul><h3>Backend</h3><ul><li>ASP.Net</li><li>C#</li><li>Java</li><li>Node.js</li><li>Python</li></ul></div><div className="right-column"><p>Starting as a developer, I’ve always cared about the what, how, and why—aligning architecture to business outcomes and enabling teams to deliver.</p><p>Drawing on extensive business and technical expertise, I specialise in:</p><ul className="list"><li><strong>Technical Leadership:</strong> Led teams of 25+ technologists across multi-stream delivery</li><li><strong>Engineering:</strong> Recent hands-on work with Optimizely, Umbraco, AWS &amp; Azure, .NET, React, Next.js</li><li><strong>Solution Architecture:</strong> Distributed systems, cloud platforms, integration patterns</li><li><strong>Presales &amp; Consulting:</strong> Discovery, solution design, client engagement, proposals</li><li><strong>Project Delivery:</strong> Agile, DevOps, program governance, P&amp;L awareness</li><li><strong>Stakeholders:</strong> C-level advisory, Architecture Forum, change leadership</li></ul></div></div></section>
          <section id="career-timeline" className="container"><h2><small>My Professional Journey</small>Career Story</h2><CareerTimeline /></section>
          <section id="projects" className="bento container"><h2><small>Successfully Delivered</small>Digital Projects</h2><div className="bento-grid"><a href="#" className="bento-item"><img src="./imgs/recusant-intelligence.png" alt="Recusant Intelligence" height="100%" width="auto" /></a><a href="#" className="bento-item"><img src="./imgs/agbuddy.png" alt="AgBuddy" height="100%" width="auto" /></a><a href="#" className="bento-item"><img src="./imgs/csenergy.png" alt="CS Energy" /></a><a href="#" className="bento-item"><img src="./imgs/aims.png" alt="AIMS" /></a></div></section>
          <section id="wordcloud" className="container"><h2><small>What I Use</small>Word Cloud</h2><div ref={ref}><WordCloud /></div></section>
          <section id="career" className="work-experience container"><h2><small>Recent</small>Work Experience</h2></section>
          <section id="recommendations" className="container"><h2><small>What they say about me</small>Recommendations</h2><Recommendations /></section>
          <section id="references" className="container"><h2><small>References</small>What Colleagues Say</h2><Recommendations /></section>
          <section id="chatbot" className="chatbot container"><h2><small>Talk to my AI Resume</small>Chatbot</h2><div className="chatbot-blue"><div className="chat-info"><h3>Ask me anything</h3><p>Questions about Peter’s experience, skills, leadership style or project history.</p></div><div className="chat-box"><div className="scroll-area" ref={scrollAreaRef}>{messages.map((message, index) => (<div key={index} className={`message ${message.role}`}>{message.content}</div>))}</div><form onSubmit={submitForm} className="chat-message"><input type="text" placeholder="Ask about Peter’s experience..." value={messageInput} onChange={e => setMessageInput(e.target.value)} /><button className="button primary-btn" type="submit">Send</button></form></div></div></section>
          <section id="job-description" className="container job-description-section"><h2><small>Role Fit Analysis</small>Qualify Me for Your Role</h2><JobDescriptionForm onSubmit={handleJobDescriptionSubmit} onError={handleJobDescriptionError} onSuccess={handleJobDescriptionSuccess} /></section>
          <section id="book" className="book container"><h2><small>Let&apos;s Connect</small>Book a Meeting</h2><div className="book-card"><p>Choose a time that works for you using the embedded Outlook booking page, or open it in a new tab.</p><iframe title="Book a meeting with Peter Bardenhagen" src={bookingUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={bookingUrl} className="button primary-btn" target="_blank" rel="noopener noreferrer">Open Outlook Booking</a></div></section>
          <section className="container share"><h2><small>Share</small>Share My Profile</h2><div className="share-buttons"><FacebookShareButton url={shareUrl} quote={title}><FacebookIcon size={40} round /></FacebookShareButton><LinkedinShareButton url={shareUrl} title={title}><LinkedinIcon size={40} round /></LinkedinShareButton><WhatsappShareButton url={shareUrl} title={title}><WhatsappIcon size={40} round /></WhatsappShareButton><EmailShareButton url={shareUrl} subject={title} body="Check out Peter Bardenhagen's profile:"><EmailIcon size={40} round /></EmailShareButton></div></section>
        </main>
      </div>
    </>
  );
}
