"use client";
import { useState } from "react";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextSeo } from 'next-seo';
import { DocumentMetaTags } from '../src/components/DocumentMetaTags/DocumentMetaTags.tsx';
import { PageMetaTags } from '../src/components/PageMetaTags/PageMetaTags.tsx';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookShareCount,
    PinterestShareCount,
    RedditShareCount,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    XIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    EmailIcon,
} from "react-share";
import exampleImage from './imgs/social.png';
import { useTrackingCode } from "react-hubspot-tracking-code-hook";
import ResponsiveCarousel from "../src/components/ResponsiveCarousel/ResponsiveCarousel.tsx";
import styles from "./globals.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

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
                            <img src="./imgs/sass.png" alt="Sass" className="square" />
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
                        Skills
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
                                <li>React</li>
                                <li>Angular</li>
                                <li>Next JS</li>
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
                            <h3>A bit about me</h3>
                            <p>
                                Starting my career as a developer, I’ve always been curious about not just the ‘what,’ but also the ‘how’ and ‘why.’ Empathy for users drives me to optimise their experiences using UX principles and human-centered design.
                            </p>
                            <p>
                                I excel at execution, bridging the gap between business and technology. My strong communication skills make me the conduit for prioritising and understanding their needs. I’m reliable, customer focussed, and results driven.
                            </p>
                            <p><strong>Current Situation:</strong> I am actively looking for new opportunities and open to Freelance, Contract and Permanent. My current availability is immediate if required. I am based in Brisbane and open to roles locally or can relocate to Sydney or Perth at short notice.</p>
                        </div>
                    </div>
                </section>
                <section className="work-experience container">
                    <h2>
                        <small>Recent</small>
                        Work Experience
                    </h2>
                    <div className="jobs">
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/workplace-1.jpg" alt="Workplace 1 - Capgemini" width="100%" />
                                    <figcaption>
                                        Workplace - Capgemini
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>Senior Manager</h3>
                            <div>2022-2024</div>
                            <p>Led enterprise architecture initiatives across diverse sectors, including Perpetual's web and ecommerce platforms, AWS microservices transformation for Pharmacy Guild of Australia, and GIS mapping solutions for LendLease. Spearheaded Western Power's digital transformation program while maintaining expertise through advanced training in Gen AI, Machine Learning, Data Analytics, and cloud platforms including Azure and Databricks.</p>
                            <p><strong>As Lead Architect I delivered:</strong></p>
                            <p><a href="https://www.perpetual.com.au" target="_blank">Perpetual</a></p>
                            <p><a href="https://www.westernpower.com.au" target="_blank">Western Power</a></p>
                        </article>
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Sonic Healthcare" width="100%" />
                                    <figcaption>
                                        Workplace - Sonic Healthcare
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>Sonic Healthcare</h3>
                            <div>2018-2021</div>
                            <p>Led the technical vision and development of EasyVisit, a comprehensive GP booking platform serving over 200 medical practices. Architected and implemented a modern tech stack solution using Angular, .NET Core, and CQRS patterns, featuring integrated location search, patient self-service kiosks, and practice management tools. Delivered the responsive EasyVisit website and digital experience platform, leveraging Umbraco CMS with enterprise-grade integration architecture including microservices and message queues.</p>
                            <p><strong>As a hands on developer I built:</strong></p>
                            <p><a href="https://www.easyvisit.com.au" target="_blank">EasyVisit</a></p>
                        </article>
                        <article>
                            <figure>
                                <div>
                                    <img src="./imgs/workplace-3.jpg" alt="Workplace 3 - SS&C" width="100%" />
                                    <figcaption>
                                        Workplace - SS&C
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>SS&C</h3>
                            <div>2016-2017</div>
                            <p>As Senior Project Manager, I led multiple strategic initiatives with full P&L responsibility, managing diverse teams of up to 25 professionals including scrum masters, product owners, architects, and developers. Key achievements included delivering a white-label wealth management platform with iWatch integration, implementing a messaging bus system, and executing complex data migration projects with budgets ranging from $500,000 to $5 million annually.</p>
                            <p><strong>As a hands on developer I built:</strong></p>
                            <p><a href="https://northonline.amp.com.au" target="_blank">AMP North Online</a></p>
                        </article>
                    </div>
                </section>
                <section id="share" className="bento container">
                    <h2>
                        <small>
                            Share with friends on
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
                            <TwitterShareButton
                                url={shareUrl}
                                title={title}
                                className="share__some-network__share-button"
                            >
                                <XIcon size={48} round />
                            </TwitterShareButton>
                        </div>

                        <div className="share__some-network">
                            <TelegramShareButton
                                url={shareUrl}
                                title={title}
                                className="share__some-network__share-button"
                            >
                                <TelegramIcon size={48} round />
                            </TelegramShareButton>
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
                            <PinterestShareButton
                                url={String(shareUrl)}
                                media={`${String(shareUrl)}/${exampleImage}`}
                                className="share__some-network__share-button"
                            >
                                <PinterestIcon size={48} round />
                            </PinterestShareButton>

                            <div>
                                <PinterestShareCount url={shareUrl} className="share__some-network__share-count" />
                            </div>
                        </div>

                        <div className="share__some-network">
                            <RedditShareButton
                                url={shareUrl}
                                title={title}
                                windowWidth={660}
                                windowHeight={460}
                                className="share__some-network__share-button"
                            >
                                <RedditIcon size={48} round />
                            </RedditShareButton>

                            <div>
                                <RedditShareCount url={shareUrl} className="share__some-network__share-count" />
                            </div>
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
                <section id="projects" className="bento container">
                    <h2>
                        <small>
                            Successfully Delivered
                        </small>
                        Digital Projects
                    </h2>
                    <div className="bento-grid">
                        <a href="#" className="bento-item">
                            <img src="./imgs/bento-1.jpg" alt="Perpetual" width="100%" />
                        </a>
                        <a href="#" className="bento-item">
                            <img src="./imgs/bento-2.jpg" alt="Western Power" width="100%" />
                        </a>
                        <a href="#" className="bento-item">
                            <img src="./imgs/bento-3.jpg" alt="Live Combat Sports" width="100%" />
                        </a>
                        <a href="#" className="bento-item">
                            <img src="./imgs/bento-5.jpg" alt="Bob Jane Racing Heritage" width="100%" />
                        </a>
                        <a href="#" className="bento-item">
                            <img src="./imgs/bento-6.jpg" alt="Easy Visit" width="100%" />
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
                            <p>Chat with my AI assistant built on Azure AI, traineḍ with my skills and experience. Ask questions about my work history, technical expertise, and achievements.</p>
                            <a href="./CV Peter Bardenhagen.docx" className="button black">Download Resume</a>
                            <p>&nbsp;</p>
                            <p><small>Please note on ocassion the AI Assistant does not automatically scroll down for the result</small></p>
                        </div>
                        <div className="chat-box">
                            <div className="scroll-area">
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
                                <input type="text" placeholder="Hi Peter, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
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
                    <iframe src="https://meetings.hubspot.com/peter-bardenhagen?embed=true" className="bookings" scrolling="yes" />
                </section>
                <section id="references">
                    <h2>
                        <small>
                            LinkedIn Recommendations
                        </small>
                        References
                    </h2>
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

                </section>
            </main>
        </>
    );
}
