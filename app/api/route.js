import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req) {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));
    const body = await req.json();
    const formType = body.FormType;

    switch (formType) {
        case 'Chat':
            const newMessages = body.messages;
            const systemMessage = {
                role: 'system',
                content: `You are a Talent Advisor, answering only questions based on Peter Bardenhagen's resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Peter from his resume.`,
            };

            const chatMessages = [systemMessage, ...newMessages];

            const chatResponse = await client.getChatCompletions(model, chatMessages, {
                maxTokens: 500,
            });

            return NextResponse.json({
                message: chatResponse.choices[0].message.content
            });

        case 'JobDesc':
            const { jobDescription } = body;
            const messages = [
                {
                    role: 'system',
                    content: `You are a Talent Advisor, answering only questions based on Peter Bardenhagen's resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Peter from his resume.`,
                },
                {
                    role: 'user',
                    content: `Here is a position title or job description: ${jobDescription}. Taking into consideration Peters resume how do his skills and experience align, and what value would he bring and any points of difference compared to most other applicants? Make it sound like a human, and less like a robot. Use UK English dictionary. Note that I'd rather you say I don't know, or be brutally honest than just pulling words together to win an argument.`,
                },
            ];

            const response = await client.getChatCompletions(model, messages, {
                maxTokens: 1000,            // Maximum number of tokens to generate
                temperature: 0.7,           // Controls randomness (0-1), lower = more focused
                topP: 0.95,                 // Control  s diversity of word choices
                frequencyPenalty: 0.5,      // Reduces repetition of similar words/phrases (-2.0 to 2.0)
                presencePenalty: 0.5       // Encourages covering new topics (-2.0 to 2.0)
            });

            return NextResponse.json({
                message: response.choices[0].message.content
            });

        default:
            throw new Error('Invalid form type');
    }
}

const DATA_RESUME = `Peter Bardenhagen Confidential CV
peter@bardenhagen.xyz   +61 (0) 452 491 013   AI Resume: https://peter.bardenhagen.xyz
EXECUTIVE SUMMARY
I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.
Outside of work, I enjoy playing basketball, ice hockey, and staying active. A lifelong learner, I am deeply engaged with emerging technologies and business strategy, complemented by my ENTJ personality type, which drives my leadership and strategic vision.
KEY CAPABILITIES
•	Technical Leadership: Led teams of 25+ technologists across multiple delivery streams
•	Solution Architecture: Enterprise-scale distributed systems, cloud platforms, integration patterns
•	Presales & Consulting: Technical discovery, solution design, client engagement, proposals
•	Project Management: Agile methodologies, DevOps practices, P&L, ways of working, program governance
•	Stakeholder Management: C-level engagement, technical advisory, team mentoring, incident management

SKILLS MATRIX
Technical Skills	Years	Technical Credentials	Business Credentials
.Net, ASP.Net, C#	10+	AWS Solution Architect Associate	MBA Candidate, UQ (2025)
Angular	3	Azure Architect Expert by end of Jan 2025	Microsoft Project - Intermediate 
Python	1	Capgemini Lead Architect	Prince 2 Practitioner
Typescript 	3	Databricks Fundamentals 	PSM-I & PSPO-I
Node.js / React / Next.js / Vue.js	3	ITIL Foundation	SAFe Agilist 5.0
SQL Server / Entity Framework	3	Optimizely One	Mental Health First Aid
		ArchiMate & TOGAF (exams pending)	St John’s First Aid
AWS – 10 years	Azure – 10 years	GCP – 1 year
CloudFormation, CloudFront, EC2, EKS, RDS, S3, SQS, VPCs or RDS	AI Search, AI Services, API, App Insights, Bicep, Blob Storage, Copilot Studio (no-code), Cost Management, Cosmos Db, Defender, DevOps, Docker, Entra ID, Entra B2C, Insights, Functions, Graph, Key Vault, Log Analytics, Logic Apps, M365, Monitor, Power Apps, Power Automate, PowerBI, Storage, SQL, VMs, VPC	Collab, Cloud Networking, Compute, Firebase, Gemini, Google AI, Identity Platform, Looker

PROFESSIONAL EXPERIENCE
Independent Contractor - Brisbane
June 2024 – Present	
Overview: Engaged in short-term contracts while pursuing opportunities for longer-term roles.
Responsibilities:
•	Conducted business development and presales activities for each project.
•	Gathered requirements, designed scalable solutions, and prepared proposals and estimates.
•	Managed projects from initiation through delivery and post-deployment support.
•	Oversaw stakeholder management, high-level design, proof of concept development, weekly showcases, development, deployment, UAT, and final handover.
Key Projects:
1.	Carter Capner Law:
•	AI Phone Calls: Developed AI-driven inbound and outbound phone calls for customer onboarding with call transcript logging and automated analysis using DataStax Astra & Langflow, Azure OpenAI, and Vapi.
•	Staff Onboarding Chatbot: Created an Azure AI powered Teams chatbot trained on extensive documentation and videos for staff onboarding.
•	Timesheet Consolidation Application: Built an application integrating multiple business systems to streamline professional services invoicing, saving significant administrative time (.NET 8.0, C#, Web API).
•	Automated Email Processing: Designed and implemented automated email processing using Power Automate to generate responses for customer inquiries with built-in approval workflows.
•	Proof of Concepts: Completed a PoC of an Azure AI Search agents on Copilot Studio and Power Apps.
2.	Totalmobile UK:
•	Conducted a WCAG accessibility compliance audit for a global rostering SaaS vendor entering the Australian market, ensuring alignment with Australian government accessibility requirements.
MBA Capstone Program at CSIRO's Data61:
•	Collaborated on commercialising a patented quantum computing algorithm to safeguard AI from adversarial attacks. 
•	Conducted 50+ interviews, designed outreach campaigns, and explored models to identify buyers and partners. 
•	Discovered two commercial opportunities and recommended a strategic pivot for market alignment.
________________________________________
Senior Manager – Digital Delivery (Digital Customer Experience Team)
Capgemini – Brisbane
January 2022 – June 2024
Company Overview: Capgemini is a global IT consultancy operating in 51 countries with over 360,000 staff.
Responsibilities:
•	Technical Leadership at Western Power:
o	Technical Leader on a $5M+ enterprise-wide digital transformation project in the energy sector.
o	Established an Optimizely Chapter and Centre of Excellence enabling several new projects.
o	Conducted technical workshops and ensured platform scalability and redundancy.
o	Architected and implemented Optimizely Customer Data Platform (CDP) with cloud and on-premises integrations via MuleSoft to Dynamics CRM.
o	Demonstrated operational efficiency improvements leading to new project opportunities.
o	Authored technical documentation and designs validating solutions through pilots and proof of concepts.
o	Defined Enterprise platform KPIs and built real-time monitoring dashboards for APM.
o	Authored content covering all operations of the new platform including CI/CD, codebase management, disaster recovery, identity management and upgrades. Handed over to new BAU team.
•	Presales Architect:
o	Consulted on platforms including Optimizely, Sitecore, Azure, and AWS aligning solutions to industry and vendor best practices.
o	Engaged with clients such as Pharmacy Guild of Australia, Parliament of South Australia, Lendlease, APA Group, and Brisbane City Council on their digital transformations.
o	Provided strategy and advisory services to existing customers.
•	Delivery Lead for Optimizely Solutions:
o	Symbion Shop: Developed an Optimizely Commerce B2C platform rolled out to 4,000 pharmacies. Managed RFP, BRD, HLD, DevOps, interface design, data mapping, integrations, and test strategy.
o	Perpetual Website: Delivered global and regional websites. Chaired architectural workshops and managed relationships with business and technical stakeholders.
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
•	EasyVisit GP appointments platform, supporting 200+ medical centres and 500,000+ bookings in its first year, along with complementary tools like a Check-in Kiosk and Hours Manager.
•	Corporate and GP Clinic websites using Umbraco DXP, .NET Core, HTML5, Bootstrap, and TypeScript.
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
•	Managed a cross-functional team of up to 15 developers and testers. Completed one on ones, performance reviews and regular feedback against KPIs.
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
________________________________________
Managing Director
Digital Response – Brisbane
July 2008 – March 2011; Sept 2016 – Dec 2018
Achievements & Responsibilities:
•	Brand Integrity/Marketing Platform:
o	Designed and developed a SaaS platform for automotive dealerships, taking it from concept to delivery.
o	Collaborated with major clients, including Mercedes-Benz and Chrysler Jeep Dodge, to meet their needs.
o	Enabled dealerships to create localised and personalised SMS, email, print, and direct mail campaigns within brand guidelines, using approved collateral.
o	Oversaw account and product development, continuously evolving the platform based on client feedback.
o	Achieved a 97% user satisfaction score, delivered over 1,000 personalised marketing campaigns, and generated more than 1 million brand impressions annually.
•	Delivery of Digital Projects:
o	Managed accounts for high-profile clients including Britax, BlueChipIT, Bob Jane T-Marts, Isuzu, Live Combat Sports, SecureCorp, and Traffic Technologies.
o	Delivered a range of websites, e-commerce solutions, and mobile applications.
o	Managed an IT account modernising their environment from on-premises to cloud.
o	Developed a comprehensive digital platform for BlueChipIT, integrating it with Microsoft Dynamics, and successfully marketed the solution to other clients.
________________________________________
Technical Lead
SolutionsCorp - Melbourne
January 2005 – July 2008
Company Overview: A multidisciplinary firm specialising in IT, marketing, digital development, graphic design, and business consulting.
Responsibilities:
•	Managed a software development practice with two developers, implementing software development methodologies (SDLC), CI/CD, test environments, and production servers.
•	Engage with customers for requirements gathering, presales and business development.
Key Projects:
•	Designed and delivered a fleet management platform for Repco, taking it from initial concept to completion.
•	Developed MyDesk, a bespoke CRM tailored to client requirements, successfully implemented in manufacturing and lighting businesses.
•	Collaborated with AFL legend Peter Daicos to design and develop SportzStats, a community website and a handheld game shaped like a football or soccer ball, enabling children to record goals and points.
________________________________________
Senior Web Developer
iProperty.com.au / Professionals Real Estate - Melbourne
January 2002 – July 2005
Company Overview: A startup owned by Professionals Real Estate to provide digital services throughout the network.
Responsibilities:
•	Developed a new frontend for iProperty.com.au, one of the most visited real estate websites at the time.
•	Built AgentsWeb, a backend system for property uploads.
•	Designed and implemented data feeds to integrate with major real estate websites.
•	Maintained a Pocket PC app to support real estate agents in the field.
________________________________________
Web Developer
Roadhouse Digital – Melbourne
February 2001 – December 2002
Company Overview: A leading Melbourne-based web development agency known for delivering award-winning digital projects.
Responsibilities:
•	Presented the agency’s portfolio to potential clients, tailoring solutions to their business needs.
•	Developed an in-house CMS and bespoke frontends for high-profile clients, including Ansell, Crown Casino, CUB, and World Vision.
•	Integrated payment gateways and provided training on CMS implementations to clients.
________________________________________
Web Developer
Challenger International – Hobart
September 2000 – November 2000
Company Overview: An Australian investment management firm specialising in retirement income solutions.
Responsibilities:
•	Designed and developed an IT operations intranet to enhance internal workflows.
•	Built the Target $1 Million New Zealand website, integrating a payment gateway to handle high transaction volumes efficiently.
________________________________________
Web Developer
DigitalRez Software – Hobart
November 1998 – August 2000
Company Overview: Reservation management software and solutions for the hospitality and tourism industries.
Responsibilities:
•	Developed a B2C accommodation booking website featuring real-time availability.
•	Created websites, online stores, and help desk systems tailored to clients’ needs.
•	Designed custom reports and financial tools for clients, ensuring compliance with the newly introduced GST systems.

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