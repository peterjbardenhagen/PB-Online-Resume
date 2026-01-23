'use client';

import React, { useState } from 'react';
import './CareerTimeline.css';

interface CareerRole {
    id: number;
    title: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
    skills: string[];
    icon: string;
}

const careerData: CareerRole[] = [
    {
        id: 1,
        title: "Senior Solution Architect",
        company: "Recusant",
        period: "Mar 2025 – Jan 2026",
        location: "Brisbane",
        highlights: [
            "Led enterprise architecture for CS Energy's retail transformation",
            "Built Recusant Intelligence AI platform with Azure OpenAI & LangChain",
            "Authored Architecture Impact Assessments for Architecture Forum"
        ],
        skills: ["Azure", "Kubernetes", "AI/ML", "Enterprise Architecture"],
        icon: "🏗️"
    },
    {
        id: 2,
        title: "Independent Contractor",
        company: "Self-employed",
        period: "Jun 2024 – Mar 2025",
        location: "Brisbane",
        highlights: [
            "AI phone calls & Teams chatbot for Carter Capner Law",
            "WCAG accessibility audit for Totalmobile UK",
            "Power Automate email processing with approval workflows"
        ],
        skills: ["Azure AI", "Power Platform", ".NET", "Accessibility"],
        icon: "💼"
    },
    {
        id: 3,
        title: "Senior Manager – Digital Delivery",
        company: "Capgemini",
        period: "Jan 2022 – Jun 2024",
        location: "Brisbane",
        highlights: [
            "Technical Leader on $5M+ digital transformation at Western Power",
            "Established Optimizely One Centre of Excellence",
            "Presales Architect for APA Group, LendLease, Brisbane City Council"
        ],
        skills: ["Optimizely", "Azure", "AWS", "Digital Transformation"],
        icon: "🚀"
    },
    {
        id: 4,
        title: "Solution Architect / Delivery Lead",
        company: "Sonic Healthcare",
        period: "Dec 2018 – Jan 2022",
        location: "Brisbane",
        highlights: [
            "Built EasyVisit platform: 200+ medical centres, 500K+ bookings",
            "Led digital innovation team for global products",
            "Implemented telemetry with Splunk for enterprise monitoring"
        ],
        skills: [".NET Core", "Angular", "SignalR", "Healthcare"],
        icon: "🏥"
    },
    {
        id: 5,
        title: "Technical Project Manager",
        company: "SS&C Technologies",
        period: "Jul 2015 – Sep 2016",
        location: "Melbourne",
        highlights: [
            "Managed team of 25 professionals across multiple projects",
            "Delivered projects with budgets $500K to $5M",
            "Established Agile practices and DevOps culture"
        ],
        skills: ["Project Management", "Agile", "DevOps", "Financial Services"],
        icon: "📊"
    },
    {
        id: 6,
        title: "Managing Director",
        company: "Digital Response",
        period: "2008 – 2018",
        location: "Melbourne",
        highlights: [
            "Built SaaS marketing platform for Mercedes-Benz & Chrysler",
            "97% user satisfaction, 1M+ brand impressions annually",
            "Delivered solutions for Britax, Bob Jane, Isuzu"
        ],
        skills: ["SaaS", "Marketing Tech", "E-commerce", "Entrepreneurship"],
        icon: "🎯"
    }
];

// Expandable data for stats
const skills = [
    ".NET Core",
    "Agile/Scrum",
    "Angular",
    "Application Insights",
    "AWS",
    "Azure",
    "Azure DevOps",
    "Azure OpenAI",
    "C#",
    "CI/CD",
    "Confluence",
    "Contentful",
    "Docker",
    "Enterprise Architecture",
    "Event-Driven",
    "Git",
    "GitHub Actions",
    "GraphQL",
    "Headless CMS",
    "Java",
    "Jira",
    "Kubernetes (AKS/EKS)",
    "LangChain",
    "Machine Learning",
    "Microservices",
    "MongoDB",
    "Next.js",
    "Node.js",
    "Observability",
    "Optimizely",
    "Performance Optimization",
    "PostgreSQL",
    "Power Automate",
    "Power Platform",
    "Presales",
    "Python",
    "RAG",
    "React",
    "Redis",
    "REST APIs",
    "SharePoint",
    "SignalR",
    "Sitecore",
    "Solution Design",
    "Splunk",
    "SQL Server",
    "Technical Leadership",
    "Terraform",
    "TypeScript",
    "WCAG Accessibility",
    "WebSockets"
].sort((a, b) => a.localeCompare(b));

const certifications = [
    "AWS Solution Architect Associate",
    "Azure AI Engineer (AI-102)",
    "Azure AI Fundamentals (AI-900)",
    "Azure Administrator (AZ-104)",
    "Azure Developing Solutions (AZ-204)",
    "Azure Designing Solutions (AZ-305)",
    "Capgemini Lead Architect",
    "Databricks Fundamentals",
    "ITIL Foundation",
    "MBA, UQ (2025)",
    "Mental Health First Aid Officer",
    "Microsoft Project - Intermediate level training",
    "Optimizely One",
    "Prince 2 Practitioner",
    "PSM-I",
    "PSPO-I",
    "SAFe Agilist 5.0",
    "St John’s First Aid",
    "TOGAF 10 & ArchiMate 3.1"
].sort((a, b) => a.localeCompare(b));

const industries = [
    { name: "Automotive", examples: "Mercedes-Benz, Chrysler, Isuzu, Bob Jane" },
    { name: "Energy & Utilities", examples: "CS Energy, Western Power, APA Group" },
    { name: "Financial Services", examples: "SS&C Technologies, Perpetual, Super funds" },
    { name: "Government & Public Sector", examples: "Brisbane City Council, Queensland Government" },
    { name: "Healthcare", examples: "Sonic Healthcare, Sullivan Nicolaides Pathology" },
    { name: "Legal & Professional Services", examples: "Carter Capner Law, Totalmobile UK" }
].sort((a, b) => a.name.localeCompare(b.name));

const topProjects = [
    { year: "2025", name: "CS Energy Retail Transformation", value: "Extra Large", desc: "Enterprise architecture for energy retail platform" },
    { year: "2025", name: "Recusant Intelligence Platform", value: "Medium", desc: "AI platform with Azure OpenAI & LangChain" },
    { year: "2024", name: "Carter Capner AI Integration", value: "Small", desc: "AI phone calls & Teams chatbot" },
    { year: "2023", name: "Western Power Digital", value: "Extra Large", desc: "Digital transformation program" },
    { year: "2022", name: "Optimizely Centre of Excellence", value: "Large", desc: "Enterprise CMS capability" },
    { year: "2021", name: "EasyVisit Platform", value: "Extra Large", desc: "500K+ bookings across 200+ medical centres" },
    { year: "2020", name: "Sonic Digital Innovation", value: "Large", desc: "Global healthcare products" },
    { year: "2018", name: "Mercedes-Benz SaaS Platform", value: "Large", desc: "1M+ annual brand impressions" },
    { year: "2016", name: "SS&C Multi-project Delivery", value: "Extra Large", desc: "Financial services transformation" },
    { year: "2015", name: "Chrysler Dealer Network", value: "Medium", desc: "National dealer marketing platform" }
];

const experienceBreakdown = [
    { role: "Solution/Enterprise Architect", years: 8, color: "#2563eb" },
    { role: "Software Engineer/Developer", years: 10, color: "#10b981" },
    { role: "Technical/Engineering Manager", years: 5, color: "#f59e0b" },
    { role: "Technical Project Manager", years: 3, color: "#8b5cf6" },
];

const CareerTimeline: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedStat, setExpandedStat] = useState<string | null>(null);

    const toggleStat = (stat: string) => {
        setExpandedStat(expandedStat === stat ? null : stat);
    };

    const handleRoleClick = (role: CareerRole) => {
        if (selectedRole?.id === role.id) {
            setSelectedRole(null);
        } else {
            setSelectedRole(role);
        }
    };

    return (
        <div className="career-timeline">
            <div className="timeline-container">
                {careerData.slice(0, isExpanded ? careerData.length : 4).map((role, index) => (
                    <div
                        key={role.id}
                        className={`timeline-item ${selectedRole?.id === role.id ? 'active' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => handleRoleClick(role)}
                    >
                        <div className="timeline-marker">
                            <span className="marker-icon">{role.icon}</span>
                            <div className="marker-line" />
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h4>{role.title}</h4>
                                <span className="timeline-period">{role.period}</span>
                            </div>
                            <p className="timeline-company">
                                {role.company} • {role.location}
                            </p>
                            
                            {selectedRole?.id === role.id && (
                                <div className="timeline-details">
                                    <div className="highlights">
                                        <h5>Key Achievements</h5>
                                        <ul>
                                            {role.highlights.map((highlight, i) => (
                                                <li key={i}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="role-skills">
                                        {role.skills.map((skill, i) => (
                                            <span key={i} className="role-skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {careerData.length > 4 && (
                <button 
                    className="timeline-expand-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Show Less' : `Show ${careerData.length - 4} More Roles`}
                    <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>↓</span>
                </button>
            )}

            <div className="timeline-stats">
                <div 
                    className={`stat-item clickable ${expandedStat === 'experience' ? 'active' : ''}`}
                    onClick={() => toggleStat('experience')}
                >
                    <span className="stat-value">20+</span>
                    <span className="stat-label">Years Experience</span>
                    <span className="stat-expand-hint">Click to expand</span>
                </div>
                <div 
                    className={`stat-item clickable ${expandedStat === 'projects' ? 'active' : ''}`}
                    onClick={() => toggleStat('projects')}
                >
                    <span className="stat-value">$15M+</span>
                    <span className="stat-label">Projects Delivered</span>
                    <span className="stat-expand-hint">Click to expand</span>
                </div>
                <div 
                    className={`stat-item clickable ${expandedStat === 'industries' ? 'active' : ''}`}
                    onClick={() => toggleStat('industries')}
                >
                    <span className="stat-value">6</span>
                    <span className="stat-label">Industries</span>
                    <span className="stat-expand-hint">Click to expand</span>
                </div>
                <div 
                    className={`stat-item clickable ${expandedStat === 'skills' ? 'active' : ''}`}
                    onClick={() => toggleStat('skills')}
                >
                    <span className="stat-value">50+</span>
                    <span className="stat-label">Certifications & Skills</span>
                    <span className="stat-expand-hint">Click to expand</span>
                </div>
            </div>

            {/* Expanded Stats Panels */}
            {expandedStat === 'experience' && (
                <div className="stat-expanded-panel">
                    <h4>Experience Breakdown by Role Type</h4>
                    <div className="experience-bars">
                        {(() => {
                            const maxYears = Math.max(...experienceBreakdown.map(item => item.years));
                            return experienceBreakdown.map((item, i) => (
                                <div key={i} className="experience-bar-item">
                                    <div className="experience-bar-label">
                                        <span>{item.role}</span>
                                        <span>{item.years} years</span>
                                    </div>
                                    <div className="experience-bar-track">
                                        <div
                                            className="experience-bar-fill"
                                            style={{
                                                width: `${Math.round((item.years / maxYears) * 100)}%`,
                                                backgroundColor: item.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ));
                        })()}
                    </div>
                    <p className="stat-note">*Some roles overlap (e.g., manager while architecting)</p>
                </div>
            )}

            {expandedStat === 'projects' && (
                <div className="stat-expanded-panel">
                    <h4>Top 10 Projects (Most Recent First)</h4>
                    <div className="projects-list">
                        {topProjects.map((project, i) => (
                            <div key={i} className="project-item">
                                <span className="project-year">{project.year}</span>
                                <div className="project-details">
                                    <span className="project-name">{project.name}</span>
                                    <span className="project-desc">{project.desc}</span>
                                </div>
                                <span className="project-value">{project.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {expandedStat === 'industries' && (
                <div className="stat-expanded-panel">
                    <h4>Industries Served</h4>
                    <div className="industries-grid">
                        {industries.map((ind, i) => (
                            <div key={i} className="industry-card">
                                <h5>{ind.name}</h5>
                                <p>{ind.examples}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {expandedStat === 'skills' && (
                <div className="stat-expanded-panel">
                    <h4>Skills & Certifications</h4>
                    <div className="skills-split">
                        <div className="skills-section">
                            <h5>Skills</h5>
                            <div className="skills-cloud">
                                {skills.map((skill, i) => (
                                    <span key={i} className="skill-cloud-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skills-section">
                            <h5>Certifications</h5>
                            <div className="skills-cloud">
                                {certifications.map((cert, i) => (
                                    <span key={i} className="skill-cloud-tag">{cert}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CareerTimeline;
