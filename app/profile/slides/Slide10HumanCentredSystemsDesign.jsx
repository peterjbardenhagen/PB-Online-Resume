export default function Slide10HumanCentredSystemsDesign() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Human-Centred Systems Design</h2>
        <p>Bridging user needs with enterprise scalability</p>
      </div>

      <div className="hcd-journey-container">
        <div className="journey-track"></div>
        <div className="journey-steps">
          <div className="journey-step" data-phase="empathize">
            <div className="step-marker">01</div>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Empathise &amp; Discover</h4>
              <p>
                Stakeholder immersion and user research to frame the <strong>right problem</strong>.
              </p>
            </div>
          </div>
          <div className="journey-step" data-phase="architect">
            <div className="step-marker">02</div>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4>Architect &amp; Strategise</h4>
              <p>
                Designing the <strong>system architecture</strong> that aligns user value with tech feasibility.
              </p>
            </div>
          </div>
          <div className="journey-step" data-phase="prototype">
            <div className="step-marker">03</div>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h4>Iterate &amp; Prototype</h4>
              <p>
                Rapid feedback loops using <strong>POCs and prototypes</strong> to de-risk delivery.
              </p>
            </div>
          </div>
          <div className="journey-step" data-phase="scale">
            <div className="step-marker">04</div>
            <div className="step-marker-final">✓</div>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4>Deploy &amp; Scale</h4>
              <p>
                Production-grade <strong>enterprise deployment</strong> with operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
