"use client";

import { useState } from "react";

export default function Slide15CaseCarterCapnerLaw() {
  const [isTechnical, setIsTechnical] = useState(false);

  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Case Study: Carter Capner Law</h2>
        <div className="header-row">
          <p>AI-powered onboarding &amp; automation for a national law firm</p>
          <div className="architect-lens-toggle">
            <span className="lens-label">Deliverables Completed</span>
            <label className="switch">
              <input type="checkbox" checked={isTechnical} onChange={(e) => setIsTechnical(e.target.checked)} />
              <span className="slider round"></span>
            </label>
            <svg className="lens-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
        </div>
      </div>

      <div className="case-study-grid">
        <div className="case-challenge">
          <h3>Challenge</h3>
          <p>
            Manual client onboarding consuming 40+ hours per week; inconsistent document handling; compliance risk from
            human error.
          </p>
        </div>
        <div className="case-solution" id="solution-ccl">
          <h3 className={isTechnical ? "view-technical" : "view-business"}>
            {isTechnical ? "Project Artefacts" : "Solution Architecture"}
          </h3>

          {!isTechnical ? (
            <div className="tech-stack-visual view-business">
              <div className="stack-category">
                <span className="stack-label">AI Automation</span>
                <div className="stack-pills">
                  <span className="tech-pill">Document Intelligence</span>
                  <span className="tech-pill">Azure OpenAI</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">App Platform</span>
                <div className="stack-pills">
                  <span className="tech-pill">Teams Apps</span>
                  <span className="tech-pill">C# &amp; TypeScript</span>
                  <span className="tech-pill">Power Platform</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Governance</span>
                <div className="stack-pills">
                  <span className="tech-pill">Microsoft Purview</span>
                  <span className="tech-pill">Human-in-the-loop</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="tech-stack-visual view-technical">
              <div className="stack-category">
                <span className="stack-label">Design &amp; Strategy</span>
                <div className="stack-pills">
                  <span className="tech-pill">Business Case</span>
                  <span className="tech-pill">Solution Design</span>
                  <span className="tech-pill">Workflow Mapping</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Governance &amp; Risk</span>
                <div className="stack-pills">
                  <span className="tech-pill">Privacy Impact Assessment</span>
                  <span className="tech-pill">Risk Management Plan</span>
                  <span className="tech-pill">Compliance Report</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Execution</span>
                <div className="stack-pills">
                  <span className="tech-pill">UAT Test Plan</span>
                  <span className="tech-pill">Training Manual</span>
                  <span className="tech-pill">Operational Handover</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="case-outcome">
          <h3>Outcome</h3>
          <div className="outcome-stats">
            <div className="outcome-stat">
              <span className="stat-value">70%</span>
              <span className="stat-label">Time saved</span>
            </div>
            <div className="outcome-stat">
              <span className="stat-value">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="outcome-stat">
              <span className="stat-value">2 wks</span>
              <span className="stat-label">To production</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
