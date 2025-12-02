import { AzureOpenAI } from 'openai';
import { NextResponse } from "next/server";

console.log('API route /api hit');

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req) {

	const { messages } = await req.json();

	const client = new AzureOpenAI({
		endpoint,
		apiKey,
		apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-08-01-preview',
		deployment: model
	});

	messages.unshift({
		role: 'system',
		content: `You are a Resume Bot, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Peter from his resume.`
	})

	const response = await client.chat.completions.create({
		model,
		messages,
		max_tokens: 350,
	})

	return NextResponse.json({
		message: response.choices[0].message.content
	})
}

const DATA_RESUME = `

Peter Bardenhagen Confidential CV
Spring Hill, QLD | peter@bardenhagen.xyz | Web: peter.bardenhagen.xyz | LinkedIn
EXECUTIVE SUMMARY
Technology leader with 20+ years’ experience leading enterprise-scale digital transformation, architecture, and innovation across energy, healthcare, finance, and government. Proven ability to align technology strategy with business vision, deliver regulatory-compliant solutions, and inspire high-performance teams. Specialises in cloud, AI, and emerging technologies, driving measurable business outcomes through strategic foresight, governance, and hands-on execution. Recently completed an MBA (UQ, 2025), combining deep technical expertise with commercial acumen to lead technology organisations at scale.
KEY CAPABILITIES
• Technology Vision & Strategy: Defining and executing multi-year technology roadmaps aligned to organisational goals.
• Enterprise Architecture & Governance: Establishing target state architectures, capability maps, and governance frameworks.
• Regulatory Compliance & Risk Oversight: Ensuring alignment with APRA, CPS 230, NER and industry regulations.
• Cloud & AI Innovation: Multi-cloud leadership (Azure, AWS, GCP) and enterprise AI adoption strategies.
• People Leadership: Building and leading high-performance teams across architecture, engineering, and delivery.
• Commercial Acumen: Budget oversight, investment planning, and delivering measurable ROI on technology spend.
SKILLS MATRIX
Technical Skills	Years	Technical Credentials	Business Credentials
.Net, ASP.Net, C#	10+	AWS Solution Architect Associate	MBA, UQ (2025)
Angular	3	Azure AI Fundamentals (AI-900), Azure AI Engineer (AI-102), Azure Administrator (AZ-104), Azure Developing Solutions (AZ-204) & Azure Designing Solutions (AZ-305) 	Microsoft Project - Intermediate level training
Python	1	Capgemini Lead Architect	Prince 2 Practitioner
Typescript 	3	Databricks Fundamentals 	PSM-I & PSPO-I
Node.js / React / Next.js / Vue.js	3	ITIL Foundation	SAFe Agilist 5.0
SQL Server / Entity Framework	3	Optimizely One	Mental Health First Aid Officer
		TOGAF 10 & ArchiMate 3.1	St John’s First Aid
AWS – 10 years	Azure – 10 years	GCP – 1 year
CloudFormation, CloudFront, EC2, EKS, RDS, S3, SQS, VPCs or RDS	ACR, AKR, AI Search, AI Services, API, App Insights, Bicep, Blob Storage, Copilot Studio (no-code), Cost Management, Cosmos Db, Defender, DevOps, Entra ID, Entra B2C, Event Grid, Insights, Functions, Graph, Key Vault, Log Analytics, Logic Apps, M365, Monitor, Power Apps, Power Automate, PowerBI, Service Bus, Storage, SQL, VMs, VPC	Collab, Cloud Networking, Compute, Firebase, Gemini, Google AI, Identity Platform, Looker
 
PROFESSIONAL EXPERIENCE
Senior Solution Architect
Recusant – Brisbane
March 2024 – Present
Overview: Recusant is a Brisbane-based strategic technology consultancy that collaborates with organisations to shape practical digital strategies—and then drives execution through solution architecture, delivery, and organisational change.
Responsibilities:
Retail Solution Architect – CS Energy
•	Led baseline current state architecture assessment, defined future state architecture vision, and authored a multi-year architectural roadmap aligned to business strategy.
•	Developed a functional roadmap and created multiple Initiative Canvases, scoring each against a functional priority matrix to inform investment decisions.
•	Authored and presented Architecture Impact Assessments (AIAs) and High-Level Designs (HLDs) to the Architecture Forum, securing approvals and alignment.
•	Identified and documented regulatory compliance obligations (including energy sector regulations) and operational risks, integrating these into proposed solution uplifts.
•	Partnered with business stakeholders to ensure architectural recommendations supported regulatory, operational, and strategic objectives.
Presales & Strategic Advisory
•	Partnered with Recusant leadership on go-to-market strategies, strengthening brand and market positioning.
•	Supported business development and presales: scoped solutions, prepared proposals, and engaged directly with enterprise clients.
•	Oversaw technical delivery and cross-team collaboration, ensuring high-quality outcomes and adherence to best practices.
________________________________________
Independent Contractor - Brisbane
June 2024 – March 2025	
Overview: Delivered short-term, high-impact architecture and delivery engagements
Responsibilities:
•	Conducted business development and presales activities for each project.
•	Led business development and presales efforts, from client engagement through to solution scoping and proposal development.
•	Gathered requirements, designed scalable enterprise solutions, and prepared detailed estimates aligned to client objectives.
•	Managed projects end-to-end — initiation, high-level design, proof-of-concept, showcases, development, deployment, UAT, and post-go-live support.
•	Oversaw stakeholder engagement to ensure alignment between technical delivery and business needs.
Key Projects:
1.	Carter Capner Law:
•	AI Phone Calls: Developed AI-driven inbound and outbound phone calls for customer onboarding with call transcript logging and automated analysis.
•	Teams ChatBot: Created an Azure AI powered Teams chatbot trained on extensive documentation and videos for staff onboarding.
•	Custom App: Built a timesheet consolidation application integrating multiple business systems to streamline professional services invoicing, saving significant administrative time (.Net 8.0, C#, Web API).
•	AI Automation: Designed and implemented automated email processing using Power Automate to generate responses for customer inquiries with built-in approval workflows.
•	Proof of Concepts: Completed a PoC of an Azure AI Search agents on Copilot Studio and Power Apps.
2.	Totalmobile UK:
•	Conducted a WCAG accessibility compliance audit for a global rostering SaaS vendor entering the Australian market, ensuring alignment with Australian government accessibility requirements




Senior Manager – Digital Delivery (Digital Customer Experience Team)
Capgemini – Brisbane
January 2022 – June 2024
Company Overview: Capgemini is a global IT consultancy operating in 51 countries with over 360,000 staff.
Responsibilities:
•	Technical Leadership at Western Power:
o	Technical Leader on a $5M+ enterprise-wide digital transformation project.
o	Established an Optimizely One Centre of Excellence, enabling multiple high-profile projects (.NET, Azure, Optimizely) and setting scalable delivery patterns.
o	Facilitated technical workshops, defined enterprise platform KPIs, and built real-time monitoring dashboards for application performance.
o	Produced comprehensive documentation covering CI/CD pipelines, disaster recovery, identity management, and codebase governance, ensuring a seamless transition to BAU teams.
•	Presales & Strategic Advisory:
o	Acted as Presales Architect for major accounts, including APA Group, LendLease, Brisbane City Council, Pharmacy Guild of Australia, and Parliament of South Australia.
o	Designed solutions across Optimizely, Sitecore, Azure, and AWS, ensuring alignment with industry and vendor best practices.
o	Provided strategy and advisory services to drive digital transformation initiatives and unlock new opportunities.
•	Optimizely Commerce & DXP Delivery
o	Symbion Shop: Designed and delivered an Optimizely Commerce B2C platform for 4,000 pharmacies; managed the full lifecycle from RFP and high-level design to integrations, DevOps, and testing.
o	Perpetual Website: Delivered global and regional websites, chairing architectural workshops and managing relationships with business and technical stakeholders.
________________________________________
Solution Architect / Delivery Lead
Sonic Healthcare - Brisbane
December 2018 – January 2022
Company Overview: Global healthcare company specialising in pathology, laboratory medicine, radiology, and other diagnostic services, delivering high-quality medical testing and healthcare solutions to patients, doctors, and hospitals.
Responsibilities:
•	As part of a digital innovation team, I collaborated with stakeholders to define and deliver new projects.
•	Contributed to the development and design for new initiatives in the global digital products team.
•	Implemented project management practices, including tracking cost, time, and quality for each new project, as well as estimates, reporting, profit and loss (P&L), and risk and issue management.
•	Enhanced existing solutions with unit testing and telemetry (xUnit.net, Splunk) and provided guidance to the wider team on implementing new patterns and practices.
Key Projects:
•	EasyVisit GP appointments platform, supporting 200+ medical centres and 500,000+ bookings in its first year, along with complementary tools like a Check-in Kiosk and Hours Manager (.Net Core, Angular, Web API, SignalR).
•	Corporate and GP Clinic websites (Umbraco DXP, .NET Core, HTML5, Bootstrap, and TypeScript).
________________________________________
Technical Project Manager – R&D, Messaging, and Data Migration
SS&C Technologies – Melbourne 
July 2015 – September 2016
Company Overview: A leading global provider of financial services software and outsourcing solutions.
Responsibilities:
•	Managed a team of 25 professionals, including Scrum Masters, Product Owners, Architects, Technical Leads, Developers, BAs, and QAs.
•	Mentored staff, conducted performance reviews, and managed hiring and capacity planning.
•	Established Agile practices and DevOps culture, including CI/CD and regular showcase demos.
•	Produced status reports, risk registers, impact assessments, change requests, and statements of work.
•	Delivered projects with budgets ranging from $500k to $5 million, ensuring success within scope, time, and budget.
Projects:
•	R&D White Label Wealth Management Platform and iWatch App: Managed a $500,000 budget.
•	Messaging Bus for Old Mutual Wealth: Led a team with a $5 million annual budget.
•	Data Migration for Old Mutual Wealth: Managed a $2 million budget.
•	Data Modelling Code Generator: Led with a $500,000 budget.
•	Mobile Apps for StatePlus: Managed a $1 million budget.
________________________________________
Product Owner
Quantum IT - Melbourne
July 2014 – July 2015
Company Overview: A leading Microsoft Gold Partner and SaaS placement software company.
Responsibilities:
•	Served as Product Owner of InPlace Software, a SaaS platform used by over 300 universities globally.
•	Conducted business consulting activities including Presales, UX design (wireframes and prototypes), business analysis, project management, SoWs, and demos.
•	Assessed feature requests against product strategy and designed solutions.
•	Led product design for accessibility, branding, and user interface consistency.
•	Implemented and trained users at TAFEs and universities.
•	Prioritised the product backlog and modernised the platform for current trends and compliance.
________________________________________
Manager, Development & Testing
Education Services Australia - Melbourne
October 2012 – June 2014
Company Overview: A not-for-profit government organisation and digital agency owned by state and federal Education Departments.
Responsibilities:
•	Managed a cross-functional team of up to 15 developers and test analysts. Completed one on ones, performance reviews and regular feedback against KPIs.
•	Handled administrative tasks, including hiring, performance management, and contract approvals.
•	Participated in strategy and resource management meetings.
•	Established an offshore partnership to expand development capabilities and reduce cost saving over $2 million.
•	Delivered key educational projects and platforms in a Prince 2 lite methodology including:
o	Scootle Games on Demand: Tablet device games platform with 67 highly interactive educational games, with download on demand, learning paths, and leaderboard.
o	Maths 300: Cross-platform mathematics games with over 300 games.
o	Safe Schools Hub: Website to prevent bullying with ministerial launch.
o	MyFuture: National website for school leavers built on Sitecore
________________________________________
Software Engineering Team Leader
Sonic Healthcare - Melbourne
March 2011 – August 2012
Responsibilities:
•	Managed a geographically distributed team of 10 eHealth engineers across Australia and the USA, overseeing project delivery, change management, deployments, and BAU transitions. 
•	Ensured compliance with security frameworks, passing external audits and pen testing. 
•	Defined hosting requirements, including server specs, database configurations, disaster recovery plans, and IIS.
•	Migrated to JIRA for task management and Confluence for knowledge sharing, ensuring smooth adoption. 
•	Handled project change requests via the helpdesk, delivering within SLAs agreed with business units.
Key Projects:
•	Active Directory Management Tool: Built an enterprise tool to assign ADFS members to new digital products in testing and production environments saving countless hours in provisioning.
•	iPad and iPhone Applications: Provided secure access to blood test results for doctors.
•	Secure Web Portals: Integrated with enterprise legacy systems for radiology practice enabling customers access to diagnostic reports and x-ray imaging.
•	Web Services: For secure integration with on-premises systems.
Managing Director
Digital Response – Melbourne
July 2008 – March 2011; Sept 2016 – Dec 2018
Brand Integrity/Marketing Platform:
•	Designed and developed a SaaS platform for automotive dealerships, taking it from concept to delivery.
•	Collaborated with major clients, including Mercedes-Benz and Chrysler Jeep Dodge, to meet their needs.
•	Enabled dealerships to create localised and personalised SMS, email, print, and direct mail campaigns within brand guidelines, using approved collateral.
•	Oversaw account and product development, continuously evolving the platform based on client feedback.
•	Achieved a 97% user satisfaction score, delivered over 1,000 personalised marketing campaigns, and generated more than 1 million brand impressions annually.
Delivery of Digital Projects:
•	Managed accounts for high-profile clients including Britax, BlueChipIT, Bob Jane T-Marts, Isuzu, Live Combat Sports, SecureCorp, and Traffic Technologies.
•	Delivered websites, e-commerce solutions, and mobile applications.
•	Managed an IT account modernising their environment from on-premise to cloud.
•	Developed a comprehensive digital platform for BlueChipIT, integrating it with Microsoft Dynamics, and successfully marketed the solution to other clients.
________________________________________
Technical Lead
SolutionsCorp - Melbourne
January 2005 – July 2008
________________________________________
Senior Web Developer
iProperty.com.au / Professionals Real Estate - Melbourne
January 2002 – July 2005
________________________________________
Web Developer
Roadhouse Digital – Melbourne
February 2001 – December 2002
________________________________________
Web Developer
Challenger International – Hobart
September 2000 – November 2000
________________________________________
Web Developer
DigitalRez Software – Hobart
November 1998 – August 2000

________________________________________



OLDER ROLES:



Technical Lead
January 2005 – July 2008
Company: SolutionsCorp
Overview:
An IT, marketing, digital development, design, and business consulting firm.
Responsibilities:
•	Designed a fleet management platform for Repco from conception to build.
•	Sold websites, portals, hardware, and software solutions.
•	Developed MyDesk, a CRM tailored to client needs, implemented at manufacturing and lighting businesses.
•	Created an SMS rostering system and a web-to-fax invoice system for traffic management.
________________________________________
Senior Web Developer
January 2002 – July 2008
Company: iProperty.com.au
Responsibilities:
•	Developed the new frontend for iProperty.com.au, one of the most visited real estate websites.
•	Created AgentsWeb, the backend for property uploads.
•	Developed data feeds to major real estate websites.
•	Maintained a Pocket PC app for real estate agents.
________________________________________
 
Web Developer
February 2001 – December 2002
Company: Roadhouse Digital
Responsibilities:
•	Demonstrated portfolio to potential clients and related systems to their business needs.
•	Developed an in-house CMS and frontends for clients like Ansell, Crown Casino, CUB, and World Vision.
•	Implemented payment gateways and provided training on CMS implementations.
________________________________________
Web Developer
September 2000 – November 2000
Company: Challenger International
Responsibilities:
•	Developed an IT operations intranet.
•	Created the Target $1 Million New Zealand website, integrated with a payment gateway, designed to handle high transaction volumes.
________________________________________
Web Developer
November 1998 – August 2000
Company: DigitalRez Software
Responsibilities:
•	Developed an accommodation booking portal with real-time availability.
•	Created websites, online stores, and help desk systems.
•	Wrote custom reports and financial tools for clients, adapting to new GST systems.


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

What is Peters availability? Having finished a number of short-term projects as an Independent Contractor, Peter is available now for an immediate start subject to negotiation.

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