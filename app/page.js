"use client";
import { useState, useRef, useEffect } from "react"; // Add these imports
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextSeo } from 'next-seo';
import { DocumentMetaTags } from '../src/components/DocumentMetaTags/DocumentMetaTags.tsx';
import { PageMetaTags } from '../src/components/PageMetaTags/PageMetaTags.tsx';
import { BackToTop } from '../src/components/BackToTop/BackToTop.tsx';
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
import exampleImage from './imgs/social.png';
import { useTrackingCode } from "react-hubspot-tracking-code-hook";
import ResponsiveCarousel from "../src/components/ResponsiveCarousel/ResponsiveCarousel.tsx";
import styles from "./globals.css";

export default function Home() {
    const scrollAreaRef = useRef(null); // Add this ref
    const [menuOpen, setMenuOpen] = useState(false);
    const [messageInput, setMessageInput] = useState('');

    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'How can I help you learn more about Peter and his Resume?'
        }
    ]);

    const submitForm = async (e) => {
        e.preventDefault();
        let newMessages = [...messages, { role: 'user', content: messageInput }]
        setMessages(newMessages);
        setMessageInput('');
        const apiMessage = await fetch(
            '/api',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: newMessages })
            }
        ).then(res => res.json());
        setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
    }

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const shareUrl = 'https://peter.bardenhagen.xyz';
    const title = 'Peter Bardenhagen - Online Resume';

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            <header>
                <a href="#" className="logo-holder">
                    <div className="logo">PB</div>
                    <div className="logo-text">Online Resume</div>
                </a>
                <nav>
                    <ul id="menu" className={menuOpen ? "active" : ""}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#chatbot">AI Assistant</a>
                        </li>
                        <li>
                            <a href="#book">Book a Time</a>
                        </li>
                        <li>
                            <a href="#references">References</a>
                        </li>
                        <li>
                            <a href="tel:+61452491013" className="button">Call</a>
                        </li>
                        <li>
                            <a href="mailto:peter@bardenhagen.xyz" className="button">Email</a>
                        </li>
                    </ul>
                    <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                        </svg>
                    </a>
                </nav>
            </header>
            <main>
                <SpeedInsights />
                <BackToTop />
                <section className="hero container">
                    <div className="hero-blue">
                        <div>
                            <h1><small>Hi I'm</small>
                                Peter Bardenhagen
                            </h1>
                            <p>I design and deliver enterprise-scale digital solutions with measurable ROI, partnering with leading businesses, government agencies and top-tier consultancy firms.</p>
                            <p>&nbsp;</p>
                            <p>Specialising in cloud-based custom applications, I transform complex business challenges into scalable technical solutions. My implementations have optimised operations and accelerated growth for organisations across multiple industries, consistently exceeding KPI targets while reducing operational costs.</p>
                            <div className="call-to-action">
                                <a href="./CV Peter Bardenhagen.docx" className="button black">
                                    Resume
                                </a>
                                <a href="tel:+61452491013" className="button white">
                                    Call
                                </a>
                                <a href="mailto:peter@bardenhagen.xyz" className="button white">
                                    Email
                                </a>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/peterjbardenhagen">
                                    <img src="./imgs/github.png" alt="GitHub" width="48" />
                                </a>
                                <a href="https://www.linkedin.com/in/peterbardenhagen">
                                    <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-green">
                        <img src="./imgs/hero-image.png" alt="Peter Bardenhagen" width="100%" />
                    </div>
                </section>
                <section className="logos container">
                    <div className="marquee">
                        <div className="track">
                            <img src="./imgs/archi.png" alt="ArchiMate 3.2" className="archimate landscape" />
                            <img src="./imgs/Togaf.jpg" alt="TOGAF" className="togaf landscape" />
                            <img src="./imgs/Itil.png" alt="ITIL" className="itil landscape" />
                            <img src="./imgs/pspo.png" alt="Professional Product Owner I" className="square" />
                            <img src="./imgs/PSM.jpg" alt="Professional Scrum Master I" className="square" />
                            <img src="./imgs/prince2.png" alt="Prince 2 Practitioner" className="square" />
                            <img src="./imgs/safe.png" alt="SAFe Agilst 5.0" className="square" />
                            <img src="./imgs/databricks.png" alt="Databricks" className="databricks landscape" />
                            <img src="./imgs/datadog.png" alt="Datadog" className="datadog landscape" />
                            <img src="./imgs/flutterflow.png" alt="Flutterflow" className="flutterflow landscape" />
                            <img src="./imgs/Webflow.jpg" alt="WebFlow" className="webflow landscape" />
                            <img src="./imgs/optimizely.png" alt="Optimizely" className="optimizely landscape" />
                            <img src="./imgs/umbraco.png" alt="Umbraco" className="square" />
                            <img src="./imgs/azure.png" alt="Azure" className="square" />
                            <img src="./imgs/vscode.png" alt="VS Code" className="square" />
                            <img src="./imgs/dotnetcore.png" alt=".Net Core" className="square" />
                            <img src="./imgs/html.png" alt="HTML" className="square" />
                            <img src="./imgs/css.png" alt="CSS" className="square" />
                            <img src="./imgs/javascript.png" alt="JS" className="square" />
                            <img src="./imgs/react.png" alt="React" className="square" />
                            <img src="./imgs/nextjs.png" alt="Next JS" className="square" />
                            <img src="./imgs/angular.png" alt="Angular" className="square" />
                            <img src="./imgs/python.png" alt="Python" className="square" />
                        </div>
                    </div>
                </section>
                <section id="skills" className="skills container">
                    <h2>
                        <small>About Me</small>
                        Skills & Experience
                    </h2>
                    <div className="holder-blue">
                        <div className="left-column">
                            <h3>Cloud</h3>
                            <ul>
                                <li>AWS</li>
                                <li>Azure</li>
                                <li>GCP</li>
                            </ul>
                            <h3>Frontend</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Angular</li>
                                <li>Next.js</li>
                                <li>Vue</li>
                            </ul>
                            <h3>Backend</h3>
                            <ul>
                                <li>ASP.Net</li>
                                <li>C#</li>
                                <li>Node.js</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <p>
                                Starting my career as a developer, I’ve always been curious about not just the ‘what,’ but also the ‘how’ and ‘why.’ Empathy for users drives me to optimise their experiences using UX principles and human-centered design.
                            </p>
                            <p>I have a broad set of business & technical skills, with recent experience spanning across the following capabiltiies:</p>
                            <ul className="list">
                                <li><strong>Technical Leadership:</strong> Led teams of 25+ technologists across multiple delivery streams</li>
                                <li><strong>Development:</strong> Recent hands on development with Optimizely, Umbraco, AWS & Azure, .Net, React and Next.js</li>
                                <li><strong>Solution Architecture:</strong> Enterprise-scale distributed systems, cloud platforms, integration patterns</li>
                                <li><strong>Presales & Consulting:</strong> Technical discovery, solution design, client engagement</li>
                                <li><strong>Project Management:</strong> Agile methodologies, DevOps practices, program governance</li>
                                <li><strong>Stakeholder Management:</strong> C-level engagement, technical advisory, team mentoring</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="work-experience container">
                    <h2>
                        <small>Recent</small>
                        Experience
                    </h2>
                    <div className="jobs">
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/workplace-1.jpg" alt="Workplace 1 - Capgemini" width="100%" />
                                    <figcaption>
                                        Capgemini
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>Senior Manager</h3>
                            <div>2022-2024</div>
                            <p>Drove major digital transformation projects for well-known Australian organisations. Notable achievements include:</p>
                            <ul className="list">
                                <li>Modernising Perpetual's online customer platforms</li>
                                <li>Rebuilding Pharmacy Guild's systems using cloud technology to improve efficiency</li>
                                <li>Creating mapping solutions for LendLease's property developments</li>
                                <li>Leading Western Power's shift to digital operations</li>
                            </ul>
                            <p>Stayed at the forefront of technology through ongoing training in artificial intelligence, data analytics, and modern cloud platforms like Microsoft Azure and Databricks. Specialised in helping businesses use technology to work smarter and serve customers better.</p>
                        </article>
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Sonic Healthcare" width="100%" />
                                    <figcaption>
                                        Sonic Healthcare
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>Sonic Healthcare</h3>
                            <div>2018-2021</div>
                            <p>Led the creation of EasyVisit, a successful medical appointment booking system now used by more than 200 GP practices across Australia. The platform makes it easy for:</p>
                                <ul className="list">
                                    <li>Patients to find and book appointments online</li>
                                    <li>Medical practices to manage their schedules efficiently</li>
                                    <li>Front desk staff to check in patients using self-service kiosks</li>
                                </ul>
                                <p>Built EasyVisit, and IPN corporate websites using modern technology to ensure the system is fast, reliable and secure. The website works smoothly on all devices (phones, tablets, computers) and integrates seamlessly with existing medical practice software. Designed to handle high volumes of bookings while maintaining patient privacy and data security.</p>
                        </article>
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/workplace-3.jpg" alt="Workplace 3 - SS&C" width="100%" />
                                    <figcaption>
                                        SS&C
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>SS&C</h3>
                            <div>2016-2017</div>
                            <p>As Senior Project Manager, I successfully delivered major business technology projects with budgets between $500,000 and $5 million. Led teams of up to 25 people and was accountable for project financials and outcomes.</p>
                            <ul className="list">
                                <li>Built a customisable wealth management platform that works on mobile and smart watches</li>
                                <li>Improved how different business systems communicate with each other</li>
                                <li>Managed complex data transfers between old and new systems</li>
                            </ul>
                            <p>Specialised in bringing together technical and business teams to deliver projects on time and within budget, while meeting business goals and customer needs.</p>
                        </article>
                    </div>
                </section>
                <section id="projects" className="bento container">
                    <h2>
                        <small>
                            Successfully Delivered
                        </small>
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
                <section id="chatbot" className="chatbot container">
                    <h2>
                        <small>
                            Talk to my
                        </small>
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
                                <p><a href="./CV Peter Bardenhagen.docx" className="button black">Download Resume</a></p>
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
                                <input type="text" placeholder="Enter your question here such as 'What is Peter's availability?'" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                                <button className="button black">Send</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section id="book">
                    <h2>
                        <small>
                            Make a time to meet on Teams
                        </small>
                        Book a Time
                    </h2>
                    <iframe src="https://meetings.hubspot.com/peter-bardenhagen?embed=true" className="bookings" scrolling="no" />
                </section>
                <section id="share" className="bento container">
                    <h2>
                        <small>
                            Share with colleagues on
                        </small>
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
                <section id="references">
                    <h2>
                        <small>
                            LinkedIn
                        </small>
                        Recommendations
                    </h2>
                    <div className="holder-blue">
                        <iframe src="/portfolio/index.html" className="references_iframe"></iframe>
                        <div
                            type="div"
                            onLoad={() => {
                                ReactTagManager.action({
                                    event: 'pageView',
                                    pagePath: 'https://peter.bardenhagen.xyz',
                                    pageTitle: 'Peter Bardenhagen - Online Resume',
                                    visitorType: 'Customer'
                                });
                            }}
                        ></div>
                    </div>
                </section>
            </main>
        </>
    );
}
