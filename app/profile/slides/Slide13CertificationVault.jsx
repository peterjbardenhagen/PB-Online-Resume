export default function Slide13CertificationVault() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Certification Vault</h2>
        <p>Strategic business &amp; technical credentials</p>
      </div>
      <div className="credentials-vault">
        {/* Academic */}
        <div className="cred-category">
          <span className="cat-label">ACADEMIC EXCELLENCE</span>
          <div className="cred-badge academic">
            <div className="badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div className="badge-info">
              <h4>Master of Business Administration (MBA)</h4>
              <p>University of Queensland (2025)</p>
              <span className="cred-meta">Strategic Leadership &amp; Finance focus</span>
            </div>
          </div>
        </div>

        {/* Cloud & AI */}
        <div className="cred-category">
          <span className="cat-label">CLOUD &amp; AI ARCHITECTURE</span>
          <div className="badge-grid-vault">
            <div className="cred-badge cloud-azure">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div className="badge-info">
                <h4>Azure Solution Architect Expert</h4>
                <p>AZ-305 Certification</p>
              </div>
            </div>
            <div className="cred-badge ai-expert">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
              </div>
              <div className="badge-info">
                <h4>Azure AI Engineer Associate</h4>
                <p>AI-102 Certification</p>
              </div>
            </div>
            <div className="cred-badge cloud-aws">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div className="badge-info">
                <h4>AWS Solution Architect</h4>
                <p>Associate Certification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Governance & Agile */}
        <div className="cred-category">
          <span className="cat-label">GOVERNANCE &amp; DELIVERY</span>
          <div className="badge-row-vault">
            <div className="cred-badge-small">
              <span className="badge-abbr">TOGAF</span>
              <div className="badge-info">
                <h4>TOGAF 10 Certified</h4>
                <p>Enterprise Architecture</p>
              </div>
            </div>
            <div className="cred-badge-small">
              <span className="badge-abbr">ARCHI</span>
              <div className="badge-info">
                <h4>ArchiMate 3.1</h4>
                <p>Visual Modeling</p>
              </div>
            </div>
            <div className="cred-badge-small">
              <span className="badge-abbr">SAFe</span>
              <div className="badge-info">
                <h4>SAFe Agilist 5.0</h4>
                <p>Scaled Agile Framework</p>
              </div>
            </div>
            <div className="cred-badge-small">
              <span className="badge-abbr">PSM/PO</span>
              <div className="badge-info">
                <h4>Scrum Master &amp; Product Owner</h4>
                <p>Scrum.org Certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
