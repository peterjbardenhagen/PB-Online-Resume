"use client";

import { useState } from "react";

export default function Slide16CaseCSEnergy() {
  const [isTechnical, setIsTechnical] = useState(false);

  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Case Study: CS Energy</h2>
        <div className="header-row">
          <p>Multi-year CX uplift roadmap &amp; AI governance framework</p>
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
            Fragmented customer touchpoints; legacy systems blocking digital initiatives; no AI governance or use-case
            prioritisation.
          </p>
        </div>
        <div className="case-solution" id="solution-cse">
          <h3 className={isTechnical ? "view-technical" : "view-business"}>
            {isTechnical ? "Project Artefacts" : "Strategic Roadmap"}
          </h3>

          {!isTechnical ? (
            <div className="tech-stack-visual view-business">
              <div className="stack-category">
                <span className="stack-label">Modernisation</span>
                <div className="stack-pills">
                  <span className="tech-pill">Capability Mapping</span>
                  <span className="tech-pill">Cloud Migration</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">AI Governance</span>
                <div className="stack-pills">
                  <span className="tech-pill">Risk Tiers</span>
                  <span className="tech-pill">Approval Gates</span>
                  <span className="tech-pill">Ethical AI</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Execution</span>
                <div className="stack-pills">
                  <span className="tech-pill">Pilot Use-Cases</span>
                  <span className="tech-pill">Measurable KPIs</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="tech-stack-visual view-technical">
              <div className="stack-category">
                <span className="stack-label">Strategy &amp; Roadmap</span>
                <div className="stack-pills">
                  <span className="tech-pill">3-Year CX Roadmap</span>
                  <span className="tech-pill">AI Capability Model</span>
                  <span className="tech-pill">Prioritisation Matrix</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Governance &amp; Policy</span>
                <div className="stack-pills">
                  <span className="tech-pill">AI Governance Framework</span>
                  <span className="tech-pill">Ethical AI Guidelines</span>
                  <span className="tech-pill">Data Sovereignty Policy</span>
                </div>
              </div>
              <div className="stack-category">
                <span className="stack-label">Operationalisation</span>
                <div className="stack-pills">
                  <span className="tech-pill">Change Management Plan</span>
                  <span className="tech-pill">Benefits Realisation Plan</span>
                  <span className="tech-pill">Stakeholder Map</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="case-outcome">
          <h3>Outcome</h3>
          <div className="outcome-stats">
            <div className="outcome-stat">
              <span className="stat-value">3-yr</span>
              <span className="stat-label">Roadmap</span>
            </div>
            <div className="outcome-stat">
              <span className="stat-value">12</span>
              <span className="stat-label">AI use-cases</span>
            </div>
            <div className="outcome-stat">
              <span className="stat-value">Board</span>
              <span className="stat-label">Endorsed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
