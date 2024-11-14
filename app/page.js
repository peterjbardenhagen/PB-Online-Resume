"use client";
import { useState } from "react";
import Image from "next/image";

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

    return (
        <>
            <header>
                <a href="#" className="logo-holder">
                    <div className="logo">PB</div>
                    <div className="logo-text">Peter Bardenhagen Online Resume</div>
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
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#chatbot">Chatbot</a>
                        </li>
                        <li>
                            <a href="#book">Book</a>
                        </li>
                        <li>
                            <a href="#books">Reading</a>
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
                <section className="hero container">
                    <div className="hero-blue">
                        <div>
                            <h1><small>Hi I'm</small>
                                Peter Bardenhagen
                            </h1>
                            <p>AI & Digital Architect, Senior Delivery Manager and Coder focussed on bridging technology and business strategy. From hands-on development to enterprise solutions, I deliver user-focused innovations that drive business growth. Proven track record of transforming complex requirements into practical, scalable solutions.</p>
                            {/* Experienced in the full project lifecycle, from presales to delivery, with proven success partnering with global consulting firms. */}
                            <div className="call-to-action">
                                <a href="./CV Peter Bardenhagen.docx" className="button black">
                                    View Resume
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
                            <img src="./imgs/archi.png" alt="ArchiMate 3.2" className="landscape" />
                            <img src="./imgs/Togaf.jpg" alt="TOGAF" className="landscape" />
                            <img src="./imgs/Itil.png" alt="ITIL" className="landscape" />
                            <img src="./imgs/pspo.png" alt="Professional Product Owner I" />
                            <img src="./imgs/PSM.jpg" alt="Professional Scrum Master I" />
                            <img src="./imgs/prince2.png" height="128" alt="Prince 2 Practitioner" />
                            <img src="./imgs/safe.png" alt="SAFe Agilst 5.0" />
                            <img src="./imgs/databricks.png" alt="Databricks" height="128" className="landscape" />
                            <img src="./imgs/Webflow.jpg" alt="WebFlow" className="landscape" />
                            <img src="./imgs/optimizely.png" alt="Optimizely" className="landscape" />
                            <img src="./imgs/umbraco.png" height="128" alt="Umbraco" />
                            <img src="./imgs/azure.png" alt="Azure" />
                            <img src="./imgs/vscode.png" alt="VS Code" />
                            <img src="./imgs/dotnetcore.png" alt=".Net Core" />
                            <img src="./imgs/html.png" alt="HTML" />
                            <img src="./imgs/css.png" alt="CSS" />
                            <img src="./imgs/javascript.png" alt="JS" />
                            <img src="./imgs/sass.png" alt="Sass" />
                            <img src="./imgs/react.png" alt="React" />
                            <img src="./imgs/nextjs.png" alt="Next JS" />
                            <img src="./imgs/angular.png" alt="Angular" />
                            <img src="./imgs/python.png" alt="Python" />
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
                                Hi I'm Peter Bardenhagen, an Enterprise Solution Architect, Developr and Project Manager who with over 20 years experience working with leading private sector, public, and Government organisations.
                            </p>
                            <p>
                                I'm currently working on a project that uses Azure AI to create a chatbot that knows everything there is to know about a business. I'm also working on a solution to make and receive phone calls with a realistic voice that is able to interview customers, take notes and analyse the conversation before saving into a database.
                            </p>
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
                            Talk to My AI
                        </small>
                        Chatbot
                    </h2>
                    <div className="chatbot-blue">
                        <div className="chat-info">
                            <h3>Peter's Resume Chatbot</h3>
                            <p>Chat with an AI trained chatbot I built on Azure AI loaded with my skills and experience. Ask questions about my work history, technical expertise, and achievements.</p>
                            <p>I am actively looking for new opportunities. Please keep me in mind for any new project. I am based in Brisbane and open to relocation to Sydney or Perth.</p>
                            <a href="./CV Peter Bardenhagen.docx" className="button black">Download Resume</a>
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
                        Book a time
                    </h2>
                    <iframe src="https://outlook.office365.com/owa/calendar/InterviewPeterBardenhagen@digitalresponsecomau.onmicrosoft.com/bookings/" className="bookings" scrolling="yes" />
                </section>
                <section id="books">
                    <h2>
                        <small>
                            Peter's Books
                        </small>
                        Good Reads
                    </h2>
                    <div className="gr_container" id="gr_grid_widget_1731301205">
                        <a className="gr_link" rel="nofollow" href="https://www.goodreads.com/review/list/181135748-peter-bardenhagen?shelf=read&utm_medium=api&utm_source=grid_widget">Peter Bardenhagen's bookshelf: read</a>
                        <div className="gr_grid_container">
                            <div className="gr_grid_book_container"><a title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" rel="nofollow" href="https://www.goodreads.com/book/show/12969025-the-lean-startup"><img alt="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1645396848l/12969025._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Practice of Enterprise Architecture : Method, Techniques and Artefacts" rel="nofollow" href="https://www.goodreads.com/book/show/211032093-the-practice-of-enterprise-architecture"><img alt="The Practice of Enterprise Architecture : Method, Techniques and Artefacts" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1712565618l/211032093._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Hacking Sales: The Playbook for Building a High-Velocity Sales Machine" rel="nofollow" href="https://www.goodreads.com/book/show/30241165-hacking-sales"><img alt="Hacking Sales: The Playbook for Building a High-Velocity Sales Machine" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463764773l/30241165._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Burning Entrepreneur: How to Launch, Fund, and Set Your Startup on Fire" rel="nofollow" href="https://www.goodreads.com/book/show/15733579-burning-entrepreneur"><img alt="Burning Entrepreneur: How to Launch, Fund, and Set Your Startup on Fire" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343002968l/15733579._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Startup Metrics: Making Sense of the Numbers in Your Startup" rel="nofollow" href="https://www.goodreads.com/book/show/17395634-startup-metrics"><img alt="Startup Metrics: Making Sense of the Numbers in Your Startup" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387716145l/17395634._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Startup Community Way: How to Build an Entrepreneurial Ecosystem That Thrives" rel="nofollow" href="https://www.goodreads.com/book/show/50043900-the-startup-community-way"><img alt="The Startup Community Way: How to Build an Entrepreneurial Ecosystem That Thrives" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585145509l/50043900._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Startup Opportunities: Know When to Quit Your Day Job" rel="nofollow" href="https://www.goodreads.com/book/show/32957259-startup-opportunities"><img alt="Startup Opportunities: Know When to Quit Your Day Job" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494338264l/32957259._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Screw the Valley: A Coast-to-Coast Tour of America's New Tech Startup Culture: New York, Boulder, Austin, Raleigh, Detroit, Las Vegas, Kansas City" rel="nofollow" href="https://www.goodreads.com/book/show/21413887-screw-the-valley"><img alt="Screw the Valley: A Coast-to-Coast Tour of America's New Tech Startup Culture: New York, Boulder, Austin, Raleigh, Detroit, Las Vegas, Kansas City" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398195660l/21413887._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Leading the Life You Want: Skills for Integrating Work and Life" rel="nofollow" href="https://www.goodreads.com/book/show/23340775-leading-the-life-you-want"><img alt="Leading the Life You Want: Skills for Integrating Work and Life" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428976162l/23340775._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Crazy Is a Compliment: The Power of Zigging When Everyone Else Zags" rel="nofollow" href="https://www.goodreads.com/book/show/20821082-crazy-is-a-compliment"><img alt="Crazy Is a Compliment: The Power of Zigging When Everyone Else Zags" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347213l/20821082._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Alliance: Managing Talent in the Networked Age" rel="nofollow" href="https://www.goodreads.com/book/show/20763746-the-alliance"><img alt="The Alliance: Managing Talent in the Networked Age" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411447561l/20763746._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Founder's Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup (The Kauffman Foundation Series on Innovation and Entrepreneurship)" rel="nofollow" href="https://www.goodreads.com/book/show/13234710-the-founder-s-dilemmas"><img alt="The Founder's Dilemmas: Anticipating and Avoiding the Pitfalls That Can Sink a Startup" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356093515l/13234710._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration" rel="nofollow" href="https://www.goodreads.com/book/show/19816540-creativity-inc"><img alt="Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387742041l/19816540._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Dark Matter" rel="nofollow" href="https://www.goodreads.com/book/show/27833670-dark-matter"><img alt="Dark Matter" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Seven Figure Agency Roadmap: How to Build a Million Dollar Digital Marketing Agency" rel="nofollow" href="https://www.goodreads.com/book/show/57750405-the-seven-figure-agency-roadmap"><img alt="The Seven Figure Agency Roadmap: How to Build a Million Dollar Digital Marketing Agency" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618527382l/57750405._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The SaaS Sales Method: Sales As a Science (Sales Blueprints Book 1)" rel="nofollow" href="https://www.goodreads.com/book/show/42104078-the-saas-sales-method"><img alt="The SaaS Sales Method: Sales As a Science" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538327503l/42104078._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="From 0 to 130 Properties in 3.5 Years" rel="nofollow" href="https://www.goodreads.com/book/show/19178610-from-0-to-130-properties-in-3-5-years"><img alt="From 0 to 130 Properties in 3.5 Years" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386172147l/19178610._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Architects Of Opportunity : A Playbook On How To Create Meaningful Impact Around Us" rel="nofollow" href="https://www.goodreads.com/book/show/215616432-architects-of-opportunity"><img alt="Architects Of Opportunity : A Playbook On How To Create Meaningful Impact Around Us" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1719677025l/215616432._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Strategy to Reality: Making the Impossible Possible for Business Architects, Change Makers and Strategy Execution Leaders" rel="nofollow" href="https://www.goodreads.com/book/show/61404817-strategy-to-reality"><img alt="Strategy to Reality: Making the Impossible Possible for Business Architects, Change Makers and Strategy Execution Leaders" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657172458l/61404817._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Lean Marketing: More leads. More profit. Less marketing. (Lean Marketing Series)" rel="nofollow" href="https://www.goodreads.com/book/show/203939843-lean-marketing"><img alt="Lean Marketing: More leads. More profit. Less marketing." border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1702833575l/203939843._SX98_.jpg" /></a></div>

                            <div className="gr_grid_book_container"><a title="Scrum - The Art of Doing Twice the Work in Half the Time" rel="nofollow" href="https://www.goodreads.com/book/show/23664693-scrum---the-art-of-doing-twice-the-work-in-half-the-time"><img alt="Scrum - The Art of Doing Twice the Work in Half the Time" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442549706l/23664693._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Trump on the Couch: Inside the Mind of the President" rel="nofollow" href="https://www.goodreads.com/book/show/38821040-trump-on-the-couch"><img alt="Trump on the Couch: Inside the Mind of the President" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534321550l/38821040._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Intelligent Investor" rel="nofollow" href="https://www.goodreads.com/book/show/106835.The_Intelligent_Investor"><img alt="The Intelligent Investor" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409602421l/106835._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Invent and Wander: The Collected Writings of Jeff Bezos" rel="nofollow" href="https://www.goodreads.com/book/show/54505323-invent-and-wander"><img alt="Invent and Wander: The Collected Writings of Jeff Bezos" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600744841l/54505323._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The Wise Enterprise: Reshape your organisation for the age of uncertainty" rel="nofollow" href="https://www.goodreads.com/book/show/58707790-the-wise-enterprise"><img alt="The Wise Enterprise: Reshape your organisation for the age of uncertainty" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628180440l/58707790._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Zero To One" rel="nofollow" href="https://www.goodreads.com/book/show/23346490-zero-to-one"><img alt="Zero To One" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435515337l/23346490._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones" rel="nofollow" href="https://www.goodreads.com/book/show/60616246-atomic-habits"><img alt="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647263101l/60616246._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="SPRINT" rel="nofollow" href="https://www.goodreads.com/book/show/25705830-sprint"><img alt="SPRINT" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457260548l/25705830._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Humble Inquiry: The Gentle Art of Asking Instead of Telling" rel="nofollow" href="https://www.goodreads.com/book/show/56302857-humble-inquiry"><img alt="Humble Inquiry: The Gentle Art of Asking Instead of Telling" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608062146l/56302857._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="How Will You Measure Your Life?" rel="nofollow" href="https://www.goodreads.com/book/show/44570498-how-will-you-measure-your-life"><img alt="How Will You Measure Your Life?" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553280522l/44570498._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Talking to Humans: Success starts with understanding your customers" rel="nofollow" href="https://www.goodreads.com/book/show/24813980-talking-to-humans"><img alt="Talking to Humans: Success starts with understanding your customers" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422954418l/24813980._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Power And Prediction: The Disruptive Economics of Artificial Intelligence" rel="nofollow" href="https://www.goodreads.com/book/show/60623908-power-and-prediction"><img alt="Power And Prediction: The Disruptive Economics of Artificial Intelligence" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647362522l/60623908._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Thinking In Systems: A Primer" rel="nofollow" href="https://www.goodreads.com/book/show/3828902-thinking-in-systems"><img alt="Thinking In Systems: A Primer" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390169859l/3828902._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Recursion" rel="nofollow" href="https://www.goodreads.com/book/show/44773737-recursion"><img alt="Recursion" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554251283l/44773737._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Quantum Computing for the Quantum Curious" rel="nofollow" href="https://www.goodreads.com/book/show/59247706-quantum-computing-for-the-quantum-curious"><img alt="Quantum Computing for the Quantum Curious" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633808660l/59247706._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Growth Hacker Marketing: A Primer on the Future of PR, Marketing and Advertising" rel="nofollow" href="https://www.goodreads.com/book/show/18917888-growth-hacker-marketing"><img alt="Growth Hacker Marketing: A Primer on the Future of PR, Marketing and Advertising" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416181895l/18917888._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="Think Like A CEO: Stop reacting, get out of your own head and take control of your role (The Effective CEO)" rel="nofollow" href="https://www.goodreads.com/book/show/59772437-think-like-a-ceo"><img alt="Think Like A CEO: Stop reacting, get out of your own head and take control of your role" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638940230l/59772437._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The SaaS Sales Method Fundamentals: How to Have Customer Conversations (Sales Blueprints Book 3)" rel="nofollow" href="https://www.goodreads.com/book/show/39782171-the-saas-sales-method-fundamentals"><img alt="The SaaS Sales Method Fundamentals: How to Have Customer Conversations" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523197661l/39782171._SX98_.jpg" /></a></div>
                            <div className="gr_grid_book_container"><a title="The SaaS Sales Method for Customer Success & Account Managers: How to Grow Customers (Sales Blueprints Book 6)" rel="nofollow" href="https://www.goodreads.com/book/show/39904430-the-saas-sales-method-for-customer-success-account-managers"><img alt="The SaaS Sales Method for Customer Success & Account Managers: How to Grow Customers" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524271414l/39904430._SX98_.jpg" /></a></div>
                            <br className="gr_clear" /><br /><a className="gr_read_full" rel="nofollow" href="https://www.goodreads.com/user/show/181135748-peter-bardenhagen">Full collection at Good Reads »</a>
                        </div>
                    </div>
                </section>
                <section id="references">
                    <h2>
                        <small>
                            LinkedIn Recommendations
                        </small>
                        References
                    </h2>
                    <iframe src="https://bardenhagen.xyz/portfolio.html" class="references_iframe"></iframe>
                    {/* <div className="References">
            <p className="References"><a href="https://bardenhagen.xyz/portfolio.html" target="_blank" className="recommendations_link">View My LinkedIn Recommendations</a></p>
          </div> */}
                </section>
            </main>
        </>
    );
}
