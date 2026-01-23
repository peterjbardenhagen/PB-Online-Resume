"use client";

import { useState } from "react";

export default function Slide14CaseRecusantIntelligence() {
  const [isTechnical, setIsTechnical] = useState(false);

  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Case Study: Recusant Intelligence</h2>
        <div className="header-row">
          <p>Enterprise-grade AI platform MVP: pen-tested, lightning-fast, infinitely scalable</p>
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
            Energy sector needed a secure, compliant AI platform for asset management, trust verification and regulatory
            tracking with enterprise-grade architecture.
          </p>
        </div>
        <div className="case-solution" id="solution-ri">
          <h3 className={isTechnical ? "view-technical" : "view-business"}>
            {isTechnical ? "Project Artefacts" : "Tech Stack & Architecture"}
          </h3>

          {!isTechnical ? (
            <div className="tech-stack-visual view-business">
              <div className="stack-category">
                <span className="stack-label">Frontend</span>
                <div className="stack-pills">
                  <span className="tech-pill">Next.js 16</span>
                  <span className="tech-pill">React 19</span>
                  <span className="tech-pill">Tailwind v4</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Backend &amp; AI</span>
                <div className="stack-pills">
                  <span className="tech-pill">.NET 10</span>
                  <span className="tech-pill">LangChain</span>
                  <span className="tech-pill">Azure OpenAI</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Data &amp; Security</span>
                <div className="stack-pills">
                  <span className="tech-pill">Azure SQL</span>
                  <span className="tech-pill">Key Vault</span>
                  <span className="tech-pill">Entra ID</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">DevOps</span>
                <div className="stack-pills">
                  <span className="tech-pill">Azure DevOps</span>
                  <span className="tech-pill">Bicep IaC</span>
                  <span className="tech-pill">Sentinel</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="tech-stack-visual view-technical">
              <div className="stack-category">
                <span className="stack-label">Design &amp; Strategy</span>
                <div className="stack-pills">
                  <span className="tech-pill">Solution Proposal</span>
                  <span className="tech-pill">High Level Design</span>
                  <span className="tech-pill">Low Level Design</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Security &amp; Compliance</span>
                <div className="stack-pills">
                  <span className="tech-pill">Security Statement</span>
                  <span className="tech-pill">Secure Coding Guidelines</span>
                  <span className="tech-pill">Pen-Test Remediation</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Execution</span>
                <div className="stack-pills">
                  <span className="tech-pill">Test Strategy</span>
                  <span className="tech-pill">DevOps Guidelines</span>
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
              <span className="stat-value">6 wks</span>
              <span className="stat-label">MVP delivered</span>
            </div>
            <div className="outcome-stat">
              <span className="stat-value">Pen tested</span>
              <span className="stat-label">Zero vulns</span>
            </div>
            <div className="outcome-stat">
              <span className="stat-value">&lt;200ms</span>
              <span className="stat-label">Page loads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
