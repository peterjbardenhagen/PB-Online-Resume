export default function Slide03StrategicAdvantage() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>The Strategic Advantage</h2>
        <p>Bridging the gap between the server room and the boardroom</p>
      </div>

      {/* McKinsey-style 2x2 Strategic Matrix */}
      <div className="strategic-matrix-container">
        {/* Left: Positioning Statement */}
        <div className="positioning-panel">
          <div className="panel-header">
            <span className="panel-label">UNIQUE POSITIONING</span>
          </div>
          <div className="positioning-content">
            <p className="positioning-statement">
              Unlike many architects who focus solely on technology, Peter bridges the gap between the server room and the boardroom.
            </p>
            <div className="positioning-points">
              <div className="pos-point">
                <span className="pos-number">01</span>
                <span className="pos-text">MBA (UQ) provides elite financial and strategic insight</span>
              </div>
              <div className="pos-point">
                <span className="pos-number">02</span>
                <span className="pos-text">20+ years hands-on technical depth ensures practical designs</span>
              </div>
              <div className="pos-point">
                <span className="pos-number">03</span>
                <span className="pos-text">Proven leadership of teams up to 25 cross-functional professionals</span>
              </div>
              <div className="pos-point">
                <span className="pos-number">04</span>
                <span className="pos-text">Expertise in highly regulated sectors (Healthcare, Energy, Finance)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 2x2 Matrix */}
        <div className="matrix-panel">
          <div className="matrix-header">
            <span className="matrix-label">CAPABILITY MATRIX</span>
            <div className="matrix-axes">
              <span className="axis-label axis-y">STRATEGIC IMPACT →</span>
              <span className="axis-label axis-x">TECHNICAL DEPTH →</span>
            </div>
          </div>
          <div className="matrix-grid">
            <div className="matrix-quadrant q-leadership">
              <div className="q-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <span className="q-title">Leadership</span>
              <span className="q-subtitle">Team &amp; P&amp;L Management</span>
            </div>
            <div className="matrix-quadrant q-strategy">
              <div className="q-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <span className="q-title">Strategy</span>
              <span className="q-subtitle">MBA-Level Commercials</span>
            </div>
            <div className="matrix-quadrant q-governance">
              <div className="q-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span className="q-title">Governance</span>
              <span className="q-subtitle">TOGAF &amp; Compliance</span>
            </div>
            <div className="matrix-quadrant q-tech">
              <div className="q-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
              </div>
              <span className="q-title">Tech Depth</span>
              <span className="q-subtitle">Full-Stack AI/Cloud</span>
            </div>
            {/* Center intersection */}
            <div className="matrix-center">
              <span>
                SWEET
                <br />
                SPOT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
