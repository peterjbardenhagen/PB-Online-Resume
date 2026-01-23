import React from 'react';
import './SkillsAnalysis.css';

interface SkillsAnalysisProps {
    score: number;
    matchingSkills: string[];
    missingSkills: string[];
    summary: string;
    strengths: string[];
    recommendations: string[];
}

const SkillsAnalysis: React.FC<SkillsAnalysisProps> = ({
    score,
    matchingSkills,
    missingSkills,
    summary,
    strengths,
    recommendations
}) => {
    const getScoreColor = (score: number) => {
        if (score >= 80) return '#10b981'; // Green
        if (score >= 60) return '#3b82f6'; // Blue
        if (score >= 40) return '#f59e0b'; // Amber
        return '#ef4444'; // Red
    };

    const getScoreLabel = (score: number) => {
        if (score >= 90) return 'Excellent Match';
        if (score >= 75) return 'Strong Match';
        if (score >= 60) return 'Good Match';
        if (score >= 40) return 'Moderate Match';
        return 'Partial Match';
    };

    const scoreColor = getScoreColor(score);
    const circumference = 2 * Math.PI * 54;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="skills-analysis">
            {/* Score Gauge */}
            <div className="score-section">
                <div className="gauge-container">
                    <svg className="gauge" viewBox="0 0 120 120">
                        <defs>
                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={scoreColor} stopOpacity="0.8" />
                                <stop offset="100%" stopColor={scoreColor} stopOpacity="1" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <circle
                            className="gauge-bg"
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="8"
                        />
                        <circle
                            className="gauge-progress"
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="url(#scoreGradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            transform="rotate(-90 60 60)"
                            filter="url(#glow)"
                        />
                    </svg>
                    <div className="gauge-text">
                        <span className="gauge-score" style={{ color: scoreColor }}>{score}%</span>
                        <span className="gauge-label">{getScoreLabel(score)}</span>
                    </div>
                </div>
                <p className="summary">{summary}</p>
            </div>

            {/* Skills Comparison */}
            <div className="skills-grid">
                {/* Matching Skills */}
                <div className="skills-column matching">
                    <h4>
                        <span className="icon">✓</span>
                        Matching Skills
                        <span className="count">{matchingSkills.length}</span>
                    </h4>
                    <div className="skills-tags">
                        {matchingSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="skill-tag match"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Missing Skills */}
                <div className="skills-column missing">
                    <h4>
                        <span className="icon">○</span>
                        Skills to Highlight
                        <span className="count">{missingSkills.length}</span>
                    </h4>
                    <div className="skills-tags">
                        {missingSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="skill-tag gap"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Strengths & Recommendations */}
            <div className="insights-grid">
                <div className="insight-card strengths">
                    <h4>🎯 Key Strengths</h4>
                    <ul>
                        {strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                        ))}
                    </ul>
                </div>
                <div className="insight-card recommendations">
                    <h4>💡 Recommendations</h4>
                    <ul>
                        {recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsAnalysis;
