import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from "next/server";
import { appInsights } from '../utils/appInsights';

// Enable CORS Headers for API Responses
const setCORSHeaders = (response) => {
    response.headers.set("Access-Control-Allow-Origin", "*"); // Allow any domain
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
};

console.log('Azure OpenAI API Model:', process.env.AZURE_OPENAI_MODEL);

// Custom error class for API errors
class APIError extends Error {
    constructor(message, statusCode, details = {}) {
        super(message);
        this.name = 'APIError';
        this.statusCode = statusCode;
        this.details = details;
    }
}

// Logger function
const logEvent = (name, properties = {}) => {
    if (appInsights) {
        appInsights.trackEvent({
            name,
            properties: {
                timestamp: new Date().toISOString(),
                ...properties
            }
        });
    }
};

// Error logger function
const logError = (error, context = {}) => {
    console.error('Error:', error);
    console.error('Context:', context);
    if (appInsights) {
        appInsights.trackException({
            exception: error,
            properties: {
                ...context,
                timestamp: new Date().toISOString()
            }
        });
    }
};

// Handle OPTIONS method for preflight requests
export async function OPTIONS(req) {
    return setCORSHeaders(new NextResponse(null, { status: 204 }));
}

// Handle POST requests
export async function POST(req) {
    const startTime = Date.now();
    let client;

    try {
        client = new OpenAIClient(process.env.AZURE_OPENAI_ENDPOINT, new AzureKeyCredential(process.env.AZURE_OPENAI_API_KEY));
        const model = process.env.AZURE_OPENAI_MODEL;

        const body = await req.json();
        const { FormType: formType } = body;

        if (!formType) {
            throw new APIError('FormType is required', 400);
        }

        logEvent('API_Request_Started', {
            formType,
            requestSize: JSON.stringify(body).length
        });

        let result;
        switch (formType) {
            case 'Chat': {
                const { messages } = body;
                if (!Array.isArray(messages)) {
                    throw new APIError('Invalid messages format', 400);
                }

                const systemMessage = {
                    role: 'system',
                    content: `You are a Talent Advisor, answering only questions based on Peter Bardenhagen's resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Peter from his resume.`
                };

                const chatMessages = [systemMessage, ...messages];

                const chatResponse = await client.getChatCompletions(model, chatMessages, {
                    maxTokens: 250,
                    temperature: 0.5
                });

                result = chatResponse.choices[0].message.content;
                break;
            }

            case 'JobDesc': {
                const { jobDescription } = body;
                if (!jobDescription) {
                    throw new APIError('Job description is required', 400);
                }

                const messages = [
                    {
                        role: 'system',
                        content: `You are a Talent Advisor...`
                    },
                    {
                        role: 'user',
                        content: `Here is a position title or job description: ${jobDescription}...`
                    }
                ];

                const response = await client.getChatCompletions(process.env.AZURE_OPENAI_MODEL, messages, {
                    maxTokens: 1000,
                    temperature: 0.7,
                    presencePenalty: 0.1, // Slight penalty to avoid repetition
                    frequencyPenalty: 0.1
                });

                result = response.choices[0].message.content;
                break;
            }

            default:
                throw new APIError('Invalid form type', 400);
        }

        logEvent('API_Request_Completed', {
            formType,
            processingTime: Date.now() - startTime,
            responseSize: result.length
        });

        let response = NextResponse.json({ message: result });
        return setCORSHeaders(response);

    } catch (error) {
        logError(error, {
            formType: req.body?.FormType,
            processingTime: Date.now() - startTime
        });

        if (error instanceof APIError) {
            return setCORSHeaders(NextResponse.json(
                { error: error.message },
                { status: error.statusCode }
            ));
        }

        console.error('Unexpected error:', error);
        return setCORSHeaders(NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        ));
    }
}

const DATA_RESUME = `Peter Bardenhagen Confidential CV

# Peter Bardenhagen - Confidential CV

**Email:** peter@bardenhagen.xyz
**Phone:** +61 (0) 452 491 013
**AI Resume:** [https://peter.bardenhagen.xyz](https://peter.bardenhagen.xyz)

---

## Executive Summary

I am a results-driven digital enterprise leader with extensive experience collaborating with top-tier global consulting firms and renowned Australian businesses. By leveraging cutting-edge digital technologies, I tackle complex business challenges, enhance customer experiences, and drive sustainable growth. My passion lies in leading high-performing teams, building innovative products, solving intricate problems, and delivering measurable outcomes that exceed expectations.

Outside of work, I enjoy playing basketball, ice hockey, and staying active. A lifelong learner, I am deeply engaged with emerging technologies and business strategy, complemented by my ENTJ personality type, which drives my leadership and strategic vision.

---

## Key Capabilities

- **Technical Leadership:** Led teams of 25+ technologists across multiple delivery streams
- **Solution Architecture:** Enterprise-scale distributed systems, cloud platforms, integration patterns
- **Presales & Consulting:** Technical discovery, solution design, client engagement, proposals
- **Project Management:** Agile methodologies, DevOps practices, P&L, ways of working, program governance
- **Stakeholder Management:** C-level engagement, technical advisory, team mentoring, incident management

---

## Skills Matrix

| **Technical Skills**         | **Years** | **Technical Credentials**                | **Business Credentials**            |
|-------------------------------|-----------|------------------------------------------|--------------------------------------|
| .Net, ASP.Net, C#, Java       | 10+       | AWS Solution Architect Associate         | MBA Candidate, UQ (2025)            |
| Angular                       | 3         | Azure Administrator (AZ-104), Azure AI Engineer (AI-102), Azure Designing Solutions (AZ-304) | Microsoft Project (Intermediate)    |
| Python                        | 1         | Capgemini Lead Architect                 | Prince 2 Practitioner                |
| Typescript                    | 3         | Databricks Fundamentals                  | PSM-I & PSPO-I                       |
| Node.js / React / Next.js / Vue.js | 3     | ITIL Foundation                          | SAFe Agilist 5.0                     |
| SQL Server / Entity Framework | 3         | Optimizely One                           | Mental Health First Aid Officer      |
| AWS (10 years), Azure (10 years), GCP (1 year) |           | TOGAF 10 & ArchiMate 3.1                | St John’s First Aid                  |

### Additional Skills
- **Cloud Technologies:** CloudFormation, CloudFront, EC2, EKS, RDS, S3, SQS, VPCs, App Insights, Bicep, Blob Storage, Cosmos DB, Defender, DevOps, Docker, Entra ID, Functions, Key Vault, Log Analytics, Logic Apps, Power Apps, Power Automate, PowerBI
- **AI Tools:** AI Search, AI Services, Copilot Studio (no-code), Cost Management, Gemini, Google AI, Looker

---

## Professional Experience

### Independent Contractor - Brisbane
**June 2024 – Present**

**Overview:** Engaged in short-term contracts while pursuing opportunities for longer-term roles.

#### Responsibilities:
- Conducted business development and presales activities for each project.
- Gathered requirements, designed scalable solutions, and prepared proposals and estimates.
- Managed projects from initiation through delivery and post-deployment support.
- Oversaw stakeholder management, high-level design, proof of concept development, weekly showcases, development, deployment, UAT, and final handover.

#### Key Projects:
1. **Carter Capner Law:**
   - **AI Phone Calls:** Developed AI-driven inbound and outbound phone calls for customer onboarding with call transcript logging and automated analysis using DataStax Astra & Langflow, Azure OpenAI, and Vapi.
   - **Staff Onboarding Chatbot:** Created an Azure AI-powered Teams chatbot for staff onboarding.
   - **Timesheet Consolidation Application:** Built an application integrating multiple business systems to streamline professional services invoicing (.NET 8.0, C#, Web API).
   - **Automated Email Processing:** Designed automated email responses for customer inquiries using Power Automate.
   - **Proof of Concepts:** Completed a PoC of Azure AI Search agents on Copilot Studio and Power Apps.

2. **Totalmobile UK:**
   - Conducted a WCAG accessibility compliance audit for a global rostering SaaS vendor, ensuring alignment with Australian government requirements.

#### MBA Capstone Program at CSIRO's Data61:
- Collaborated on commercialising a patented quantum computing algorithm to safeguard AI from adversarial attacks.
- Conducted 50+ interviews, designed outreach campaigns, and explored models to identify buyers and partners.
- Discovered two commercial opportunities and recommended a strategic pivot for market alignment.

---

### Senior Manager – Digital Delivery (Digital Customer Experience Team)
**Capgemini – Brisbane**
**January 2022 – June 2024**

**Company Overview:** Capgemini is a global IT consultancy operating in 51 countries with over 360,000 staff.

#### Responsibilities:
- **Technical Leadership at Western Power:**
  - Led a $5M+ digital transformation project in the energy sector.
  - Established an Optimizely Chapter and Centre of Excellence.
  - Architected and implemented Optimizely Customer Data Platform (CDP).
  - Defined KPIs and built real-time monitoring dashboards.

- **Presales Architect:**
  - Consulted on platforms like Optimizely, Sitecore, Azure, and AWS.
  - Engaged with clients including Pharmacy Guild of Australia, Parliament of South Australia, and Brisbane City Council.

- **Delivery Lead for Optimizely Solutions:**
  - Delivered global and regional websites and digital platforms.

---

### Solution Architect / Delivery Lead
**Sonic Healthcare – Brisbane**
**December 2018 – January 2022**

#### Key Projects:
- **EasyVisit GP Appointments Platform:** Supported 200+ medical centres and 500,000+ bookings in the first year.
- **Corporate and GP Clinic Websites:** Built on Umbraco DXP, .NET Core, HTML5, and TypeScript.

---

### Technical Project Manager
**SS&C Technologies – Melbourne**
**July 2015 – September 2016**

#### Key Projects:
- R&D White Label Wealth Management Platform
- Messaging Bus for Old Mutual Wealth
- Data Modelling Code Generator

---

### Product Owner
**Quantum IT – Melbourne**
**July 2014 – July 2015**

- Led product design for accessibility, branding, and user interface consistency.

---

### Manager, Development & Testing
**Education Services Australia – Melbourne**
**October 2012 – June 2014**

- Delivered key educational projects including **Scootle Games on Demand** and **Maths 300**.

---

### Managing Director
**Digital Response – Brisbane**
**July 2008 – March 2011; Sept 2016 – Dec 2018**

- Designed and developed a SaaS marketing platform for automotive dealerships.

---

### Technical Lead
**SolutionsCorp – Melbourne**
**January 2005 – July 2008**

---

### Senior Web Developer
**iProperty.com.au / Professionals Real Estate – Melbourne**
**January 2002 – July 2005**

---

### Web Developer
**Roadhouse Digital – Melbourne**
**February 2001 – December 2002**

---

### Web Developer
**Challenger International – Hobart**
**September 2000 – November 2000**

---

### Web Developer
**DigitalRez Software – Hobart**
**November 1998 – August 2000**



Peter Bardenhagen Confidential CV
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
.Net, ASP.Net, C#, Java	10+	AWS Solution Architect Associate	MBA Candidate, UQ (2025)
Angular	3	Azure Administrator (AZ-104), Azure AI Engineer (AI-102) and Azure Designing Solutions (AZ-304) 	Microsoft Project - Intermediate level training
Python	1	Capgemini Lead Architect	Prince 2 Practitioner
Typescript 	3	Databricks Fundamentals 	PSM-I & PSPO-I
Node.js / React / Next.js / Vue.js	3	ITIL Foundation	SAFe Agilist 5.0
SQL Server / Entity Framework	3	Optimizely One	Mental Health First Aid Officer
		TOGAF 10 & ArchiMate 3.1	St John’s First Aid
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
o	Engaged with clients such as Pharmacy Guild of Australia, Parliament of South Australia, LendLease, APA Group, and Brisbane City Council on their digital transformations.
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
o	Managed an IT account modernising their environment from on-premise to cloud.
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




With over 20 years of experience and strengths in such a broad range of skills, the individual is well-positioned for senior leadership, strategic, or consulting roles in industries that require both technical expertise and strong interpersonal and business acumen. Below are some job suggestions that align with these skills:

1. Chief Technology Officer (CTO)
Why it fits:
Strong foundation in Software Development, SDLC, Emerging Technologies, and Digital.
Ability to combine technical expertise with Leadership, Strategy, and Business Acumen.
Skilled at managing large-scale projects, fostering innovation, and leading technology teams.
Key Responsibilities:
Oversee the organization's technological vision and strategy.
Drive digital transformation and innovation.
Manage development teams and ensure high-quality technical delivery.
2. Chief Marketing Officer (CMO) with a Digital Focus
Why it fits:
Expertise in SEO, Digital, and Strategy.
Leadership and Relationship Builder skills for managing cross-functional teams.
Experience in leveraging emerging technologies for marketing and business growth.
Key Responsibilities:
Develop and execute marketing strategies that align with business goals.
Oversee digital marketing initiatives, including SEO and content strategies.
Build relationships with stakeholders and drive brand positioning.
3. Vice President of Product or Product Management
Why it fits:
Strong skills in Software Development, SDLC, and Project Management.
Ability to innovate and align product development with Strategy and Business Acumen.
Interpersonal Skills and Leadership to inspire and mentor product teams.
Key Responsibilities:
Oversee the end-to-end product lifecycle and delivery.
Define product roadmaps and ensure alignment with business objectives.
Collaborate with engineering, marketing, and sales teams to deliver impactful solutions.
4. Digital Transformation Consultant
Why it fits:
Experience with Emerging Technologies, Digital, and Strategy.
Strong Business Acumen and ability to manage high-pressure environments.
Quality and Excellence focus ensures successful organizational transformation.
Key Responsibilities:
Advise organizations on integrating digital tools and technologies.
Identify opportunities for innovation and process optimization.
Provide leadership on strategy, implementation, and change management.
5. Program Manager or Director of Technology Programs
Why it fits:
Proficiency in Project Management, SDLC, and Software Development.
Strong Communicator and Relationship Builder, capable of managing stakeholders.
Experience in delivering projects under High-Pressure conditions.
Key Responsibilities:
Manage and oversee multiple technology programs or projects.
Communicate effectively with executives, customers, and technical teams.
Ensure timely delivery and alignment with organizational goals.
6. Head of Innovation or Innovation Consultant
Why it fits:
Proven track record in Innovative thinking and leveraging Emerging Technologies.
Strong Leadership and ability to foster a culture of creativity.
Business Acumen to align innovation initiatives with profitability and growth.
Key Responsibilities:
Drive innovation initiatives within the organization or for clients.
Explore and implement cutting-edge technologies to enhance business value.
Mentor teams to think creatively and solve complex problems.
7. Technical Director or Engineering Manager
Why it fits:
Deep technical expertise in Software Development and SDLC.
Strong Leadership and Reliable for managing engineering teams.
Ability to maintain Quality and Excellence in technical solutions.
Key Responsibilities:
Manage and lead engineering teams to deliver high-quality software.
Oversee technical architecture and ensure alignment with business goals.
Mentor engineers and foster a collaborative work environment.
8. Business Strategy Consultant
Why it fits:
Combines Strategy, Business Acumen, and interpersonal skills like Mentor and Relationship Builder.
Strong understanding of technology trends and Digital Transformation.
Key Responsibilities:
Help businesses identify growth opportunities and develop strategies.
Provide insights into leveraging technology for competitive advantage.
Build relationships with stakeholders and deliver actionable recommendations.
9. Enterprise Architect or Solution Architect
Why it fits:
Expertise in Software Development, SDLC, and Emerging Technologies.
Ability to innovate and design scalable, efficient solutions.
Key Responsibilities:
Design and oversee the implementation of enterprise-level systems.
Ensure systems align with organizational goals and quality standards.
Collaborate with technical and business teams to define requirements.
10. Leadership Development Consultant or Mentor
Why it fits:
Strong Leadership, Mentor, and Interpersonal Skills.
Depth of experience in Business Acumen and Strategy.
Key Responsibilities:
Mentor emerging leaders and executives.
Design and implement leadership training programs.
Provide strategic guidance to organizations focused on leadership excellence.
Key Considerations:
Industry Focus: Depending on your interests, roles in technology, consulting, healthcare, finance, or marketing could be viable options.
Entrepreneurship: With such a strong skillset, starting your own consulting firm or business focusing on digital transformation, strategy, or innovation could also be a highly rewarding option.
Remote/Flexible Work: Many of these roles can now be performed remotely, allowing for a better work-life balance.
Conclusion:
Based on the skills and experience, roles such as CTO, Digital Transformation Consultant, or Head of Innovation would be particularly well-suited. These roles leverage technical expertise, strategic thinking, leadership, and interpersonal skills, providing opportunities to lead impactful initiatives and innovate in high-pressure environments.

`