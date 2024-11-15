import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from "next/server";

// const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
// const apiKey = process.env.AZURE_OPENAI_API_KEY;
// const model = process.env.AZURE_OPENAI_MODEL;

const endpoint = 'https://ai-drazureai-prod-eastus2-001.openai.azure.com/';
const apiKey = '8Y0XFH0BfbaAM2u0dPIkbnno6UF7D4x1fTazpKrYuhMRs3PAWxa1JQQJ99AKACHYHv6XJ3w3AAAAACOG86h3';
const model = 'GPT-4';

export async function POST(req){
	
	const { messages } = await req.json();

	const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

	messages.unshift({
		role: 'system',
		content: `You are a Resume Bot, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Peter from his resume.`
	})

	const response = await client.getChatCompletions(model, messages, {
		maxTokens: 128,
	})

	return NextResponse.json({ 
		message: response.choices[0].message.content
	 })
}

const DATA_RESUME = `Peter Bardenhagen Confidential CV
Enterprise Solutions Architect | Presales | Delivery | Apps, Data & AI | MBA Candidate
peter@bardenhagen.xyz   +61 (0) 452 491 013   https://www.linkedin.com/in/peterbardenhagen 
EXECUTIVE SUMMARY
I’m an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms. Leveraging CX technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in building products, solving complex problems, designing robust architectures and delivering superior business results.
Starting my career as a developer, I’ve always been curious about not just the ‘what,’ but also the ‘how’ and ‘why.’ Empathy for users drives me to optimise their experiences using UX principles and human-centered design.
I excel at execution, bridging the gap between business and technology. My strong communication skills make me the conduit for prioritising and understanding their needs. I’m reliable, customer focussed, and results driven.
EDUCATION
	AWS Solution Architect Associate, Optimizely Content Cloud Developer, Umbraco Level 2, Databricks
ArchiMate, TOGAF, ITIL, Prince2 Practitioner, PSM, PSPO, SAFe Agilist
Mental Health First Aid Officer and St John’s Ambulance First Aid
Master of Business Administration (MBA) Candidate, The University of Queensland

I'm in the final stage of completing my MBA. 1 course to go. Finish at end of Semester 1, 2025

Skill	Years	Level
.Net C#	10+	Lead
Python	2	Mid
React	2	Mid
Angular	3	Mid
Azure	6	Senior
AWS	6	Mid
GCP	1	Mid
SQL	10+	Lead
WCAG	10+	Lead
TOGAF	3	Mid
ArchiMate	1	New


Skill	Years	Level
Project Management	7	Senior
Solutions Architecture	7	Lead
Enterprise Architecture	2	Mid
Presales	10	Lead
Databricks	1	New
Optimizely	3	Lead
Umbraco	7	Lead
WebFlow	2	Senior
FlutterFlow	2	Senior
Software Engineering Manager	7	Lead
D365	1	New


PROFESSIONAL EXPERIENCE
Position: Independent Contractor – June 2024 to present
Company overview: Short-term contracts while applying for longer term roles
Key projects:
•	Azure AI project – Automated phone calls, Teams Chatbot, Report writer, LLM model training
•	Conducted comprehensive accessibility compliance audit for a global rostering SaaS vendor:
o	WCAG 2.1 AA standards, Section 508 requirements, ADA compliance
o	VTAP certification for tender eligibility
•	Built a consolidated timesheet application (.NET 8.0, C#) for a legal practice integrating multiple business systems to streamline professional services invoicing
•	Contributed to CSIRO's Data61 quantum computing initiative:
o	Conducted 50+ stakeholder interviews and experimented with several business models
o	Identified commercial opportunities for quantum-based AI cybersecurity algorithm
•	TOGAF 10th Edition, and ArchiMate training – Working towards certification

Position: Senior Manager - Enterprise Architecture & Delivery - January 2022 to June 2024
Company: Capgemini – Digital Customer Experience APAC Team
Company overview: Tier 1 Global IT Consultancy in 51 countries with over 360,000 staff
Key responsibilities and achievements:
•	Lead architecture role delivering solutions in first 1.5 years (Optimizely, .Net Core, Vue.js tech stack):
o	Lead Solution Architect - Symbion Shop – Optimizely Commerce B2B rolled out to 4,000 pharmacies – RFP, BRD , HLD, DevOps, integration and test strategy
o	Business Architect - Perpetual Website – Optimizely Content Cloud - Global, and regional websites for Perpetual. Chair architectural workshops to elicit requirements for cloud, integration, security architecture. Own and drive business strategy, architectural workshops, cloud, integration, security architecture, and manage relationships with both business & technical stakeholders
o	Digital Advisory Architect - Pharmacy Guild of Australia re-architecture of core business platform onto AWS defining vision, strategy, patterns, practices & standards
o	Principal UI Consultant for LendLease for Esri GIS mapping and document management – Facilitated human centred design workshops with UX design, wireframing, prototyping and documentation
o	Lead BAU for our DXP Accelerator, a reusable framework for building Optimizely solutions
o	Training on Business Strategy, Gen AI, Machine Learning, Data Analytics, Databricks, Azure and Optimizely
•	In the second 1.5 years I was the Enterprise Architect for a large $5 million+ digital transformation at Western Power establishing a CoE, Optimizely Chapter and leading documentation of support, onboarding and project enablement including HLDs, guidelines, standards, processes, patterns & practices. Implemented a composable CMS, DAM, experimentation (a/b testing), personalisation, customer data platform, analytics, and HA/geographic failover
Position: Solution Architect – Design & Delivery – December 2018 to January 2022
Company: Sonic Healthcare Ltd
Company overview: Ranked Top 50 ASX company – specialising in global pathology, radiology and primary care
Key responsibilities and achievements:
•	Application architecture: Defined vision, strategy, best practices, standards, and patterns
•	Integration architecture: CQRS, API, SignalR, micro services, message queue architectures
•	Implemented and ran lunch and learns on Umbraco, unit testing, micro services, and telemetry
•	Lead Developer of Angular & .Net Core CQRS tech stack solution: Location Search Map, Patient Check-in Kiosk and Clinic Opening Hours Manager
•	Lead Developer on IPN Medical Centres corporate and clinics digital experience platform project (Umbraco, .Net Core, HTML 5, Bootstrap, TypeScript)
•	Delivered new responsive Umbraco website for EasyVisit at www.easyvisit.com.au
•	Interview and engaged external partners for UX and SEO
•	Adhered and contributed to ways of working, and SDLC processes using Azure DevOps (Git)
Position: Technical Project Manager – R&D, Messaging and Data Migration – July 2015 to September 2016
Company: SS&C Technologies
Company overview: Wealth Management Software Company
Key responsibilities and achievements:
•	Trusted to ensure success of projects to agreed scope, time and cost with P&L responsibility
•	25 direct reports: scrum masters, product owners, architects, technical leads, developers, BAs, and QAs
•	Hire to resource profile, and forecast capacity and utilisation
•	Responsible for governance and compliance, and adherence to SS&C’s ways of working
•	Routinely produce and socialise out status reports, risks and issues registers, impact assessments, change requests, resource profiles, schedules and statements of work
•	Transformed delivery model from waterfall to agile, 3 feature teams, and coaching scrum masters
•	Establish DevOps, CI/CD, agile ways of working, fortnightly showcase
•	Successfully delivered:
o	R&D white label wealth management platform and iWatch app. $500,000 budget
o	Messaging Bus for Old Mutual Wealth. Team of 15, 3 feature teams, $5 million per year
o	Data Migration for Old Mutual Wealth. Team of 4, $2 million budget
o	Data modelling code generator for building messages. Team of 4, $500,000 budget
o	Integration with Frontend Team to ensuring work package alignment and delivery of APIs
o	Mobile apps for StatePlus. Team of 15 split into feature teams, $1 million budget
o	Complex architectural changes and cross team dependencies
o	Troubleshoot data mapping mismatches and integration issues
Position: Senior Consultant - Technical Business Analyst - July 2014 to July 2015
Company: Quantum IT
Company overview: Leading Microsoft Partner IT consultancy and Placement Software company – quantumit.com.au inplacesoftware.com
Key responsibilities and achievements:
•	Product Owner of InPlace (ASP.Net C# based), world’s leading enterprise platform in use at 140 universities in Australia, United Kingdom and United States to manage process of student work industry learning placements
•	Led product design covering accessibility, brand, and user interface guidelines ensuring a consistent, and minimum viable product. Project size: $100,000 to $1 million
•	Prioritised product backlog, research latest trends in CX and UX, and make data driven decisions
•	Product roadmaps balancing inputs from internal, customer and market
•	Responded to product enhancement and bug requests sent through Zendesk to JIRA
•	Modernised platform to meet latest trends, simplifying user experience, enhancing localisation, implementing responsive design, updates to mobile version and ensuring WCAG compliance
•	Designed new round of enhancements to Financial Management System integrations for universities
•	Engaged UX agency and led workshops to provide vision for a design required based on business requirements, and brand guidelines of InPlace
•	Planned daily activities ranging from wire framing and prototyping to business analysis, project management, demos, reviews, guiding junior consultants, and directing business analysts, and developers on features
Position: Manager, Development & Testing - October 2012 to June 2014
Company: Education Services Australia
Company overview: Not for Profit Government Organisation and Digital Agency
Achievements:
•	Maths 300, a cross-platform series of mathematics games for desktop and mobile
•	Delivered Safe Schools Hub website with ministerial launch by Peter Garrett (Sitefinity, ASP.Net)
•	Learning object repository system (LEX) feeding into every Education jurisdiction
•	Hosting accounts, and establish Shared and Dedicated hosting and operational support agreements
•	Migration of cloud services from AWS to ESA’s own cloud hosting environment
•	Cross functional Development and Testing Team (up to 15 direct reports)¬¬
•	Partnership with agency in Philippines uplifting FTEs to 20 staff to build a large-scale cloud based mobile apps platform in addition to development team augmentation on 35 projects

Position: eHealth Team Leader - March 2011 to August 2012
Company: Sonic Healthcare Ltd
Achievements:
•	Led a cross functional team of eHealth digital consultants
•	60 highly available Umbraco CMS marketing websites (ASP.Net C#, SQL Server)
•	Web based active directory management tool (ASP.Net C#)
•	iPad and iPhone applications to deliver test results to doctors
•	Secure web portals with integration to enterprise legacy systems for radiology
•	Web services to securely integrate new web apps with older on prem enterprise systems

 
Position: Managing Director – July 2008 to August 2018
Company: Digital Response
Achievements:
•	Co-designed marketing and brand integrity platform for Mercedes-Benz and Chrysler for all Dealerships in Australia and New Zealand with ability to create SMS, email, print and direct mail campaigns online (ASP.Net C#, JQuery, HTML)
•	Worked with Britax, BlueChipIT, SecureCorp and Traffic Technologies delivering websites, ecommerce sites, mobile apps and integrations to cloud and on-premise applications including Dynamics AX
•	New digital platform for BlueChipIT a national IT wholesaler with 15,000 products, and integration via Azure Service Bus to on-premises Dynamics AX. With bi-directional sync of Customers, Invoices, Orders, Products and Statements. Productised solution and sold to other Dynamics AX customers
Position: Technical Lead – January 2005 to July 2008
Company: SolutionsCorp 
Company overview: IT, Marketing, Digital Development & Design and Business Consulting 
Achievements:
•	Designed fleet management platform for Repco from conception through to build
•	Sales of websites, portals, hardware and software to organisations
•	Developed MyDesk, a CRM tailored to the needs of each client with quotes, purchasing, job monitoring, invoicing and expenses. Implemented at leading manufacturing and lighting businesses
•	Developed an ASP.Net SMS rostering system, and web to fax invoice system for traffic management

Additional Skills and Interests
Myers-Briggs personality type: ENTJ
Citizenship: Australian
Language: Fluent in English
Hobbies: Badminton, Muay Thai, Aritifical Intelligence, Snowboarding, Hiking
Favourite Movies: Sci-fi
Online: Youtube

Answers to popular questions
How much is your permanent salary expectation? Depending on the exact specifics of the role and location I'm asking a salary that is inline with market expectations.
How much is your contractor day rate expectation? It depends on the seniority of the role. I have my own Pty Ltd. I'm sure that we can come to an arrangement that suits both parties.
How many years of solution architecture experience? Around 10 years. In every role I have been responsible for the solution in some capacity.
How many years of .Net experience: 10 years including latest .Net Core versions
Visual Basic or C#? I have both but I prefer to use C#
How many years of Python experience? 2 years. I've been using Python a lot lately to build AI apps
What's the largest project that you've managed? At SS&C I was personally responsible for a $5 million multi-year project for Old Mutual Wealth. At Capgemini I was a technical leader as part of a $5 million digital transformation
What size projects do you manage? Usually around $500,000 to $1,000,000 but often a lot of small change requests around $100,000 plus
Where do you see yourself in 5 years? I see myself working in a role focussing on AI or as a Head of Technology
What's your biggest weakness? I suffer from imposter syndrome like a lot of people, and just need to remind myself that I'm only human
What's your biggest strength? I have a strong technical background and have an equally strong business background having almost completed an MBA, managed large projects and teams as well as have ran a startup digital agency. I understand technology and how to align it to business strategy
What do you love most about your job? The people I work with, amazing clients and the opportunity to build something amazing and make a difference
Does Peter have React experience? Of course, this Online Resume website is made in React
Does Peter have NEXTjs experience? Of course, this Online Resume website is made in NEXTjs

Peter is passionate about applying technology to enable businesses to achieve leading digital customer experience outcomes
Peter is a highly competent lead digital architect with director level experience and holds up to date industry and vendor certifications
Peter has delivered many enterprise level projects involving complex technical architecture, and complex stakeholder management

Professional Experience at Empired and Capgemini 2022-23
Western Power – Optimizely Technical Leader – Enterprise Platforms
Establish a CoE for Optimizely DXP. Write Western Power enterprise and program level specific documentation to govern new Optimizely DXP projects including Guidelines, Standards, Design Patterns, High-Level Design Document, and Project Brief forming a full set of artefacts
Provide advice to business leads, program managers on implementing Optimizely throughout the business and enable multiple concurrent projects to develop on the shared code-based platform
Chair monthly Optimizely Chapter, and weekly Optimizely Developer Meetup

Perpetual – Platform Architect 
Solution Architect for Website Redevelopment on Optimizely Content Cloud CMS 12
Own and drive architectural workshops, cloud, integration, security architecture, and work with business/technical stakeholders
Responsible for working closely with multiple high-level stakeholders and vendors in determining, planning & setting the appropriate platform milestones/vision & roadmap for the website redevelopment
Creating & driving the creation of technical documentation: Technical Design Document, Deployment Strategy, Integration Flows etc.

Symbion – Platform Architect
Solution Architect for B2B pharmacy ecommerce store implementing Optimizely Commerce 14 and integrating with Salesforce, and other CRMs and PIMs
Own and drive the A&D phase holding various workshops, and creation of Technical Design Document, Test Strategy etc.
Manage development process, testing process and team members
Support team to interpret and provide clarity on scope and assess future sprints to ensure that the requirements are fit for purpose prior to commencement
APA Group – Solution Advisory Enterprise Architect
Provide quarterly proactive advisory on existing APA Grid Portal
Various
Presales consulting to various clients for Optimizely, Sitecore, Custom Cloud Apps, Micro Services etc.
Principal UI Consultant for LendLease for mapping and document management
Provide troubleshooting, and architectural governance & support for AusIMM, and Cancer Institute of NSW
Lead upgrade of DXA Platform (Capgemini’s Optimizely Accelerator) to latest version

Competencies
Software Development Life Cycle
Design thinking and Agile
Digital Experience Platforms (DXPs) & CMS
Customer Relationship Management
Ecommerce
Data & AI
Costing and Budgeting
P&L

Profile
Peter is passionate about applying technology to enable businesses to achieve leading digital customer experience outcomes
Peter is a highly competent lead digital architect with director level experience and holds up to date industry and vendor certifications
Peter has delivered many enterprise level projects involving complex technical architecture, and complex stakeholder management

Education/Certification
UQ MBA Candidate 2024
Certified AWS Solution Architect Associate
ITIL
Prince2 Practitioner
ScrumMaster (PSM-I)
Product Owner (PSPO)
SAFe Agilist 5.0, Umbraco L2
Optimizely Content Cloud 12

Recent industry experience: Education, Energy & Utilities, Financial services, Public sector



The following relates to Umbraco experience only

Troubleshooting Work
I worked on contract for Fuel Agency as a troubleshooter, focusing on existing websites for Isuzu and Bob Jane T-Marts. My task was to resolve around 20 bugs that the previous developer had released to production, under considerable pressure to deliver quickly. This included addressing significant performance issues, with a key requirement to optimise Google Page Speed as much as possible.

Independent Consulting Work
The Britax website was one of the largest projects. My primary role involved building a data sync program using Azure Service Bus to facilitate data transfer in and out of Dynamics AX. This extensive website served the American market for a global, multi-billion-dollar company and was a large, well-constructed solution. I led the effort to “Australianise” the codebase and switched the payment gateway to Braintree, engaging a team from the Philippines to assist me in managing the account and performing Lead Developer duties. We encountered significant issues with uCommerce, which was closed source, so diagnosing intermittent errors was challenging, but we eventually resolved them. This USA site had cost over $500k to build, so it was a substantial codebase with many customisations. In addition to the e-commerce work, I completed around 20 other changes, set up a CI/CD pipeline, created a testing environment, and managed hosting on Azure and Cloudflare CDN. Overall, it was approximately 50 days of work across various small projects.

Sonic Healthcare
When I first joined Sonic Healthcare, they were using Umbraco version 3.x, and I was responsible for upgrading to versions 4.x and then 6.x. This involved resolving numerous issues and finding workarounds, including manual SQL modifications, as the process was quite buggy at the time. For instance, if there were too many document versions or the UmbracoLog grew too large, querying the Content API would slow down, so I developed a scheduled cleanup job to keep the websites performing optimally. Alongside my development work, I led a team that included other Umbraco developers, wrote technical documentation, and trained various business units and editors. As the Team Leader, I engaged with managers to discuss further development work. During this period, I completed Umbraco Level 2 training (the highest level) and scored 100%.

Queensland X-Ray
While at Sonic Healthcare, my team was engaged by Queensland X-Ray to develop a Customer Portal in Umbraco for all their customers. As the Lead Developer, I gathered requirements, created wireframes in Balsamiq, and prepared documentation for scope, timeline, and cost approval. I then developed the solution with the support of a Junior Developer. The project included integration with Active Directory for sign-in, and a connection to Intersystems to allow customers to click on an x-ray link, download a plugin, and seamlessly open a desktop application on their PC. The portal also accommodated various user types, including staff, and included a learning module with videos and functionality to ensure that videos were watched as part of course completion. This project took around 25 days to complete.

Sonic Healthcare Round 2
Upon rejoining Sonic Healthcare, the Digital Products team was solely focused on the Umbraco codebase, comprising a Chief Product Officer, two Product Managers, five developers, and a UX designer. My role this time was multifaceted, encompassing Project Manager, Tech Lead, and Senior Developer responsibilities. This time, the team was working with Umbraco version 8.0.
The primary challenge was that while the team’s focus was on Pathology, my work was directed towards General Practice, which wasn’t their main priority. The business unit had struggled for 12 months to make headway, but significant progress was only achieved after I joined the product team to implement necessary changes for General Practice. The codebase was extensive, featuring a multitude of custom data types, numerous TinyMCE adjustments, and an enterprise-level mapping solution. Nearly every customisable aspect of Umbraco had been altered.
I gathered requirements, crafted user stories, and had tasks assigned to me during sprint planning, allowing me to execute the required changes. I also coordinated content planning with the Marketing Manager and engaged an external digital agency for SEO support. Robust release practices were in place for QA, testing, and production, managed through Microsoft DevOps, with uSync handling content and schema migration between environments.
The project spanned over six months, although I can’t recall the exact number of days. According to Umbraco documentation, there is no direct upgrade path from version 8, though there is a video tutorial that provides some guidance on upgrading from version 8 to 10, which might offer useful insights.
Ref: Umbraco Upgrade Guide

Conclusion
I don't find Umbraco itself challenging, as it's exceptionally well-designed software and a pleasure to work with. The real challenges typically arise when extending or integrating it with other systems.
My most recent commercial experience is with version 10.x, though I also have experience with versions 13.x and 14.x.

`