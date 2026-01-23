export default function Slide17VoiceOfPartner() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Voice of the Partner</h2>
        <p>Trusted by industry leaders to deliver strategic clarity and technical excellence</p>
      </div>

      <div className="partner-board">
        {/* paul */}
        <div className="partner-note">
          <div className="note-quote">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6z" />
            </svg>
            <p>
              Peter deeply understands the technical side of the digital space better than most... he does this with a
              subtle confidence that added significant value to any client project.
            </p>
          </div>
          <div className="note-author">
            <div className="author-avatar">PD</div>
            <div className="author-meta">
              <strong>Paul Davys</strong>
              <span>Former Manager, Education Services Australia</span>
            </div>
          </div>
        </div>

        {/* fred */}
        <div className="partner-note featured">
          <div className="note-quote">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6z" />
            </svg>
            <p>
              A tremendous amount of technical knowledge and is able to communicate solutions to non-technical
              stakeholders. He understands how end user issues will impact business operations.
            </p>
          </div>
          <div className="note-author">
            <div className="author-avatar">FK</div>
            <div className="author-meta">
              <strong>Fred Kodye</strong>
              <span>Project Lead, Quantum IT</span>
            </div>
          </div>
        </div>

        {/* david */}
        <div className="partner-note">
          <div className="note-quote">
            <svg className="quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 6-4 6z" />
            </svg>
            <p>
              One of the fastest and most flexible web developers I have ever encountered—possessing a rare combination
              of acute business acumen and wide-ranging technical proficiency.
            </p>
          </div>
          <div className="note-author">
            <div className="author-avatar">DG</div>
            <div className="author-meta">
              <strong>David Green</strong>
              <span>Project Manager</span>
            </div>
          </div>
        </div>
      </div>

      <div className="partner-footer">
        <div className="linkedin-validation">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>15+ LinkedIn Recommendations</span>
        </div>
        <a href="https://www.linkedin.com/in/peterbardenhagen" target="_blank" className="partner-link" rel="noreferrer">
          View full profile →
        </a>
      </div>
    </div>
  );
}
