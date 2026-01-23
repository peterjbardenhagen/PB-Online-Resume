import { AzureOpenAI } from 'openai';
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

const PETER_SKILLS = [
	// Technical
	".NET", "C#", "ASP.NET", "Angular", "React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Node.js",
	"Python", "SQL Server", "Entity Framework", "HTML5", "CSS", "Bootstrap",
	// Cloud
	"Azure", "AWS", "GCP", "Kubernetes", "Docker", "CI/CD", "DevOps",
	"Azure OpenAI", "Azure Functions", "Azure DevOps", "Azure SQL", "Cosmos DB",
	"CloudFormation", "EC2", "S3", "Lambda", "RDS",
	// Architecture
	"Enterprise Architecture", "Solution Architecture", "TOGAF", "ArchiMate", "Microservices", "API Design",
	// AI/ML
	"AI", "Machine Learning", "Azure AI", "OpenAI", "LangChain", "Copilot Studio",
	// Platforms
	"Optimizely", "Sitecore", "Umbraco", "Power Platform", "Power Automate", "PowerBI",
	// Methodologies
	"Agile", "Scrum", "SAFe", "Prince2", "ITIL",
	// Leadership
	"Team Leadership", "Technical Leadership", "Stakeholder Management", "Presales", "Digital Transformation",
	"Project Management", "Budget Management", "Vendor Management",
	// Domains
	"Healthcare", "Energy", "Finance", "Government", "Retail"
];

export async function POST(req) {
	// Debug: Log environment variable presence (not values)
	console.log('[Qualify API] Environment check:', {
		hasEndpoint: !!endpoint,
		hasApiKey: !!apiKey,
		hasModel: !!model,
		endpoint: endpoint ? endpoint.substring(0, 30) + '...' : 'MISSING',
		model: model || 'MISSING',
		apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-08-01-preview'
	});

	try {
		const { jobDescription } = await req.json();
		console.log('[Qualify API] Received job description length:', jobDescription?.length || 0);

		if (!endpoint || !apiKey || !model) {
			const missing = [];
			if (!endpoint) missing.push('AZURE_OPENAI_ENDPOINT');
			if (!apiKey) missing.push('AZURE_OPENAI_API_KEY');
			if (!model) missing.push('AZURE_OPENAI_MODEL');
			throw new Error(`Missing environment variables: ${missing.join(', ')}`);
		}

		console.log('[Qualify API] Creating Azure OpenAI client...');
		const client = new AzureOpenAI({
			endpoint,
			apiKey,
			apiVersion: process.env.AZURE_OPENAI_API_VERSION || '2024-08-01-preview',
			deployment: model
		});
		console.log('[Qualify API] Client created successfully');

		const systemPrompt = `You are a job qualification analyzer. Analyze the job description against Peter's resume and skills.

Peter's Key Skills: ${PETER_SKILLS.join(", ")}

You MUST respond with ONLY valid JSON in this exact format (no markdown, no explanation):
{
  "score": <number 0-100>,
  "matchingSkills": ["skill1", "skill2", ...],
  "missingSkills": ["skill1", "skill2", ...],
  "summary": "<2-3 sentence summary of fit>",
  "strengths": ["strength1", "strength2", "strength3"],
  "recommendations": ["recommendation1", "recommendation2"]
}

Be accurate with the score:
- 90-100: Excellent match, meets almost all requirements
- 70-89: Strong match, meets most key requirements  
- 50-69: Moderate match, meets some requirements
- 30-49: Partial match, missing several key skills
- 0-29: Low match, significant skill gaps`;

		console.log('[Qualify API] Sending request to Azure OpenAI...');
		const response = await client.chat.completions.create({
			model,
			messages: [
				{ role: 'system', content: systemPrompt },
				{ role: 'user', content: `Analyze this job description:\n\n${jobDescription}` }
			],
			max_completion_tokens: 800,
		});
		console.log('[Qualify API] Response received successfully');

		const content = response.choices[0].message.content;
		
		// Parse JSON response
		let analysis;
		try {
			// Remove any markdown code blocks if present
			const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
			analysis = JSON.parse(cleanContent);
		} catch (parseError) {
			console.error('Failed to parse AI response:', content);
			// Fallback response
			analysis = {
				score: 75,
				matchingSkills: ["Azure", "Solution Architecture", "Leadership"],
				missingSkills: ["Unable to parse specific requirements"],
				summary: "Analysis completed but response parsing failed. Peter has strong enterprise architecture and cloud experience.",
				strengths: ["20+ years experience", "Enterprise Architecture", "Cloud expertise"],
				recommendations: ["Review job description manually"]
			};
		}

		return NextResponse.json(analysis);
	} catch (error) {
		console.error('[Qualify API] ERROR:', {
			message: error.message,
			name: error.name,
			code: error.code,
			status: error.status,
			stack: error.stack
		});
		
		// Build detailed error response
		const errorDetails = {
			error: 'Failed to analyze job description',
			message: error.message,
			type: error.name,
			code: error.code || 'UNKNOWN',
			status: error.status || 500,
			endpointConfigured: !!endpoint,
			modelConfigured: !!model,
			timestamp: new Date().toISOString()
		};
		
		return NextResponse.json(errorDetails, { status: 500 });
	}
}
