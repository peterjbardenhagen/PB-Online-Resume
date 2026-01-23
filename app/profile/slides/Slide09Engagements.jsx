export default function Slide09Engagements() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Engagements</h2>
        <p>Flexible engagement models to match your needs</p>
      </div>

      <div className="engagements-layout">
        {/* Left: Tiered Model */}
        <div className="engagement-tier-model">
          <div className="tier-stack">
            {/* Tier 1: Top (Flexible) */}
            <div className="tier-layer tier-1">
              <div className="tier-content">
                <div className="tier-header">
                  <span className="tier-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <h3>Time &amp; Materials</h3>
                </div>
                <p className="tier-desc">Flexible consulting for evolving requirements</p>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="tier-layer tier-2">
              <div className="tier-content">
                <div className="tier-header">
                  <span className="tier-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </span>
                  <h3>Fixed-Price Projects</h3>
                </div>
                <p className="tier-desc">Scoped deliverables with clear timelines and outcomes</p>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="tier-layer tier-3">
              <div className="tier-content">
                <div className="tier-header">
                  <span className="tier-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <h3>Long-Term Contracts</h3>
                </div>
                <p className="tier-desc">6–24 month embedded leadership roles</p>
              </div>
            </div>

            {/* Tier 4: Bottom (Strategic) */}
            <div className="tier-layer tier-4">
              <div className="tier-content">
                <div className="tier-header">
                  <span className="tier-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <h3>Permanent Roles</h3>
                </div>
                <p className="tier-desc">Open to the right strategic leadership opportunity</p>
              </div>
            </div>
          </div>

          {/* Side Labels for Context */}
          <div className="tier-context">
            <div className="context-arrow tactical">
              <span>TACTICAL FLEXIBILITY</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </div>
            <div className="context-arrow strategic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
              <span>STRATEGIC IMPACT</span>
            </div>
          </div>
        </div>

        {/* Right: Examples */}
        <div className="engagement-examples">
          <h3 className="examples-title">Example Engagements</h3>
          <div className="engagement-grid">
            <div className="engagement-card">
              <div className="engagement-tag">2–4 weeks</div>
              <h4>AI Discovery &amp; Value Case</h4>
              <p>Use-case prioritisation, data readiness, operating model + roadmap</p>
            </div>
            <div className="engagement-card">
              <div className="engagement-tag">4–8 weeks</div>
              <h4>AI Architecture &amp; Guardrails</h4>
              <p>Reference architecture, security controls, evaluation framework</p>
            </div>
            <div className="engagement-card">
              <div className="engagement-tag">6–12 weeks</div>
              <h4>Cloud Platform Modernisation</h4>
              <p>Landing zones, DevSecOps + IaC, observability &amp; SRE</p>
            </div>
            <div className="engagement-card">
              <div className="engagement-tag">3–6 months</div>
              <h4>Digital Delivery Leadership</h4>
              <p>Roadmap to releases, governance, team uplift &amp; BAU transition</p>
            </div>
            <div className="engagement-card">
              <div className="engagement-tag">Ongoing</div>
              <h4>Presales &amp; Solution Design</h4>
              <p>Discovery workshops, solution shaping, proposals &amp; demos</p>
            </div>
            <div className="engagement-card">
              <div className="engagement-tag">6–24 months</div>
              <h4>Interim CTO / Head of Engineering</h4>
              <p>Operating model, portfolio strategy, delivery transformation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
