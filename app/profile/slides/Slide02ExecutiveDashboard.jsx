export default function Slide02ExecutiveDashboard() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Executive Dashboard</h2>
        <p>Strategic leadership at the intersection of business and technology</p>
      </div>

      <div className="exec-dashboard">
        {/* Left: Core Identity */}
        <div className="dash-panel dash-identity">
          <div className="dash-avatar-box">
            <img src="/profile/img/me.jpeg" alt="Peter Bardenhagen" className="dash-avatar" />
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for Strategic Advisory</span>
            </div>
          </div>
          <div className="dash-bio">
            <p>
              Enterprise-scale Architect with 20+ years' experience leading digital transformation. Specialising in
              aligning technical execution with multi-million dollar business outcomes.
            </p>
          </div>
        </div>

        {/* Middle: Performance Metrics */}
        <div className="dash-panel dash-metrics">
          <div className="dash-metric-card">
            <span className="dash-m-val">$5M+</span>
            <span className="dash-m-lab">Managed Portfolios</span>
          </div>
          <div className="dash-metric-card">
            <span className="dash-m-val">25+</span>
            <span className="dash-m-lab">Managed Team Size</span>
          </div>
          <div className="dash-metric-card">
            <span className="dash-m-val">10+</span>
            <span className="dash-m-lab">Industry Sectors</span>
          </div>
          <div className="dash-metric-card">
            <span className="dash-m-val">20+</span>
            <span className="dash-m-lab">Years Experience</span>
          </div>
        </div>

        {/* Right: Strategic Focus - Two Separate Cards */}
        <div className="dash-focus-stack">
          <div className="dash-panel dash-domains">
            <span className="focus-label">CORE DOMAINS</span>
            <div className="focus-tags">
              <span className="focus-tag">AI Strategy</span>
              <span className="focus-tag">Cloud Transformation</span>
              <span className="focus-tag">Product Engineering</span>
              <span className="focus-tag">Systems Thinking</span>
            </div>
          </div>
          <div className="dash-panel dash-pillars">
            <span className="focus-label">LEADERSHIP PILLARS</span>
            <div className="pillar-row-dash">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div className="pillar-info-dash">
                <strong>Enterprise Governance</strong>
                <span>TOGAF 10 & ISO 27001 alignment</span>
              </div>
            </div>
            <div className="pillar-row-dash">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div className="pillar-info-dash">
                <strong>Global Operations</strong>
                <span>Managing distributed cross-functional teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
