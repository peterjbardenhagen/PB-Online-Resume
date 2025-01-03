import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from "next/server";

// const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
// const apiKey = process.env.AZURE_OPENAI_API_KEY;
// const model = process.env.AZURE_OPENAI_MODEL;

const endpoint = 'https://ai-drazureai-prod-eastus2-001.openai.azure.com/';
const apiKey = '8Y0XFH0BfbaAM2u0dPIkbnno6UF7D4x1fTazpKrYuhMRs3PAWxa1JQQJ99AKACHYHv6XJ3w3AAAAACOG86h3';
const model = 'GPT-4o';

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
peter@bardenhagen.xyz   +61 (0) 452 491 013   AI Resume: peter.bardenhagen.xyz 
EXECUTIVE SUMMARY
I’m an innovative digital enterprise leader with a proven track record collaborating with top-tier global consulting firms and well-known Australian businesses. Leveraging digital technology, I address business challenges, enhance customer experiences, and drive growth. My passion lies in leading teams, building products, solving complex problems and delivering superior business outcomes with measurable results.
I excel at delivery, bridging the gap between business strategy and technology. My strong communication skills make me the conduit for prioritising and understanding their needs. I’m reliable, customer focussed, and results driven.
Outside of work hours I enjoy playing basketball, ice hockey and fitness. I am a perpetual learner in emerging technologies and business strategy, and my personality type is ENTJ.

KEY CAPABILITIES
•	Technical Leadership: Led teams of 25+ technologists across multiple delivery streams
•	Solution Architecture: Enterprise-scale distributed systems, cloud platforms, integration patterns
•	Presales & Consulting: Technical discovery, solution design, client engagement
•	Delivery Management: Agile methodologies, DevOps practices, program governance
•	Stakeholder Management: C-level engagement, technical advisory, team mentoring

SKILLS MATRIX
Technical Skills	Years	Training & Certifications		Training & Certifications	
.Net 8.0, ASP.Net, C#	10+	ArchiMate		MBA Candidate, UQ (2025)	
Angular	3	AWS Solution Architect Associate		SAFe Agilist	
Python	1	Databricks Fundamentals		Optimizely Content Cloud	
Typescript 	3	ITIL Foundation		TOGAF	
Node.js	3	Professional Scrum Master		Umbraco Level 2	
React / Next.js / Vue.js	3	Professional Scrum Product Owner		Mental Health First Aid Officer and St John’s First Aid	
AWS	Years	Azure	Years	GCP	Years
CloudFormation, CloudFront, EC2, EKS, RDS, S3, SQS, VPCs or RDS	10	AI, AI Search, API, Bicep, Copilot Studio (no-code), Cost Management, DevOps, Docker, Entra ID, Entra B2C, Insights, Functions, Grafana, Log Analytics, Logic Apps, M365, Power Automate, PowerBI, Storage, SQL, VMs, VPC	10	Collab, Cloud Networking, Compute, Firebase, Identity Platform, Looker	1

PROFESSIONAL EXPERIENCE
Independent Contractor
June 2024 – Dec 2024
Overview:
Engaged in short-term contracts while pursuing opportunities for longer-term roles.
Responsibilities:
•	Conducted business development and presales activities for each project.
•	Gathered requirements, designed scalable solutions, and prepared proposals and estimates.
•	Managed projects from initiation through delivery and post-deployment support.
•	Oversaw stakeholder management, high-level design, proof of concept development, weekly showcases, development, deployment, UAT, and final handover.
Projects:
1.	Carter Capner Law:
o	AI Phone Calls: Developed AI-driven inbound and outbound phone calls for customer onboarding with call transcript logging and analysis using Azure AI. Completed UAT and currently in pilot stage.
o	Staff Onboarding Chatbot: Created an Azure AI powered Teams chatbot trained on extensive documentation and videos for staff onboarding.
o	Timesheet Consolidation Application: Built an application integrating multiple business systems to streamline professional services invoicing, saving significant administrative time (.NET 8.0, C#, Web API).
2.	Totalmobile UK:
o	Performed an accessibility compliance audit for a global rostering SaaS vendor entering the Australian market, ensuring compliance with government tender requirements.
3.	MBA Capstone Program at CSIRO's Data61:
o	Collaborated on commercialising a patented quantum computing algorithm to prevent adversarial attacks on AI machine learning.
o	Conducted experiments to identify potential buyers and partners through LinkedIn articles, Google AdWords campaigns, and targeted outreach using Apollo.ai.
o	Conducted over 50 stakeholder interviews and explored various business models.
o	Identified two commercial opportunities and recommended strategic pivots.
________________________________________
Senior Manager – Lead Solutions Architect
January 2022 – June 2024
Company: Capgemini – Digital Customer Experience APAC Team
Overview:
Capgemini is a global IT consultancy operating in 51 countries with over 360,000 staff.
Responsibilities:
•	Technical Leadership at Western Power:
o	Led a $5M+ enterprise-wide digital transformation project in the energy sector.
o	Established an Optimizely Chapter and Centre of Excellence.
o	Conducted technical workshops and ensured platform scalability and redundancy.
o	Architected and implemented Optimizely Customer Data Platform (CDP) with cloud and on-premises integrations via MuleSoft to Dynamics CRM.
o	Developed technical documentation and validated solutions through pilots and proofs of concept.
o	Defined KPIs and built real-time monitoring dashboards using Azure Insights.
o	Provided training and demonstrated operational efficiency improvements.
•	Presales Architect:
o	Consulted on platforms including Optimizely, Sitecore, Azure, and AWS.
o	Engaged with clients such as Pharmacy Guild of Australia, Parliament of South Australia, LendLease, APA Group, and Brisbane City Council on their digital transformations.
o	Provided strategy and advisory services to existing customers.
•	Lead Architect for Optimizely Solutions:
o	Symbion Shop: Developed an Optimizely Commerce B2C platform rolled out to 4,000 pharmacies. Managed RFP, BRD, HLD, DevOps, interface design, data mapping, integrations, and test strategy.
o	Perpetual Website: Delivered global and regional websites. Chaired architectural workshops and managed relationships with business and technical stakeholders.
________________________________________
Solution Architect – Design & Delivery
December 2018 – January 2022
Company: Sonic Healthcare
Overview:
A top ASX-listed company specialising in global pathology, radiology, and primary care.
Projects:
EasyVisit: Designed a GP appointments platform scaled to over 200 medical centres, handling over 5 million bookings in the first year.
•	Collaborated with stakeholders to define new projects.
•	Engaged external UX and SEO partners.
•	Developed new products like Patient Check-in Kiosk and Clinic Opening Hours Manager.
•	Enhanced existing solutions with unit testing and monitoring (xUnit.net, Splunk).
•	Developed corporate and clinic websites using Umbraco DXP, .NET Core, HTML5, Bootstrap, and TypeScript.
________________________________________

Technical Project Manager – R&D, Messaging, and Data Migration
July 2015 – September 2016
Company: SS&C Technologies
Overview:
A wealth management software company.
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
Senior Consultant - Technical Business Analyst
July 2014 – July 2015
Company: Quantum IT
Overview:
A leading Microsoft Partner IT consultancy and placement software company.
Responsibilities:
•	Served as Product Owner of InPlace Software, a SaaS platform used by over 300 universities globally.
•	Engaged in wireframing, prototyping, business analysis, project management, demos, and guiding team members.
•	Assessed feature requests against product strategy and designed solutions.
•	Led product design for accessibility, branding, and user interface consistency.
•	Implemented and trained users at TAFEs and universities.
•	Prioritized the product backlog and modernized the platform for current trends and compliance.
________________________________________
Manager, Development & Testing
October 2012 – June 2014
Company: Education Services Australia
Overview:
A not-for-profit government organization and digital agency.
Responsibilities:
•	Managed a cross-functional team of up to 15 developers and testers.
•	Handled administrative tasks, including hiring, performance management, and contract approvals.
•	Participated in strategy and resource management meetings.
•	Established an offshore partnership to expand development capabilities.
•	Delivered key educational projects and platforms, including:
o	Maths 300: Cross-platform mathematics games.
o	Safe Schools Hub: Website with ministerial launch.
o	MyFuture: National website for school leavers.
o	Learning Object Repository System: Deployed to educational jurisdictions.
o	Migrated cloud services to an in-house hosting environment.
________________________________________
 
Software Engineering Lead
March 2011 – August 2012
Company: Sonic Healthcare Ltd
Responsibilities:
•	Managed a team of 10 eHealth software engineers.
•	Oversaw project outputs, change management, deployments, and transition to BAU.
•	Ensured security frameworks were met and conducted testing.
•	Delivered solutions including:
o	Active Directory Management Tool
o	iPad and iPhone Applications: Provided secure access to test results for doctors.
o	Secure Web Portals: Integrated with enterprise legacy systems for radiology.
o	Web Services: For secure integration with on-premises systems.
________________________________________
Managing Director
July 2008 – March 2011; August 2018 – Present
Company: Digital Response
Achievements:
•	Brand Integrity/Marketing Platform:
o	Developed a PaaS/SaaS platform for automotive dealerships.
o	Collaborated with Mercedes-Benz and Chrysler Jeep Dodge.
o	Enabled dealerships to create SMS, email, print, and direct mail campaigns.
o	Managed account and product development, evolving the platform based on client feedback.
•	Delivered Digital Projects:
o	Managed accounts with clients like Britax, BlueChipIT, Bob Jane T-Marts, Isuzu, Live Combat Sports, SecureCorp, and Traffic Technologies.
o	Delivered websites, e-commerce solutions, and mobile applications.
o	Developed a digital platform for BlueChipIT, integrating with ERP systems and selling the solution to other clients.
________________________________________
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