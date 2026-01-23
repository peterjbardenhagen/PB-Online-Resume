"use client";

import { useState } from "react";

const ENGAGEMENT_OPTIONS = [
  {
    id: "ai",
    title: "AI & Production Deployment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="17" cy="16" r="1" />
        <path d="M12 2v4M8 6h8" />
      </svg>
    ),
    description: "Production-ready AI patterns with governance, security, and evaluation frameworks",
    timeline: "2–8 weeks",
  },
  {
    id: "cloud",
    title: "Cloud Modernisation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    description: "Landing zones, DevSecOps pipelines, and migration roadmaps",
    timeline: "6–12 weeks",
  },
  {
    id: "leadership",
    title: "Digital Delivery Leadership",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    description: "Operating model transformation, engineering uplift, delivery excellence",
    timeline: "3–12 months",
  },
];

export default function Slide18CTA() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleEngagement = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Let's Engage</h2>
        <p>Solving complex challenges with outcomes-first thinking</p>
      </div>

      <div className="engagement-matrix">
        {ENGAGEMENT_OPTIONS.map((opt) => (
          <div key={opt.id} className={`engagement-option collapsible ${expandedId === opt.id ? "expanded" : ""}`}>
            <div className="option-header" onClick={() => toggleEngagement(opt.id)}>
              <div className="option-header-content">
                <span className="option-icon">{opt.icon}</span>
                <span className="option-title">{opt.title}</span>
              </div>
              <span className="expand-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </div>
            <div className="option-content">
              <p className="option-desc">{opt.description}</p>
              <div className="option-timeline">{opt.timeline}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="availability-banner">
        <span className="avail-status">✓ AVAILABLE NOW</span>
        <span className="avail-text">Open to contract or permanent roles in Brisbane or abroad</span>
      </div>

      <div className="contact-grid">
        <a href="mailto:peter@bardenhagen.xyz" className="contact-card contact-primary">
          <span className="contact-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <span className="contact-label">Email</span>
          <span className="contact-value">peter@bardenhagen.xyz</span>
        </a>
        <a href="tel:+61452491013" className="contact-card">
          <span className="contact-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          </span>
          <span className="contact-label">Mobile</span>
          <span className="contact-value">+61 452 491 013</span>
        </a>
        <a href="https://www.linkedin.com/in/peterbardenhagen" target="_blank" className="contact-card" rel="noreferrer">
          <span className="contact-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8" />
              <line x1="12" y1="11" x2="12" y2="16" />
              <path d="M16 16v-3a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
            </svg>
          </span>
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">peterbardenhagen</span>
        </a>
      </div>
    </div>
  );
}
