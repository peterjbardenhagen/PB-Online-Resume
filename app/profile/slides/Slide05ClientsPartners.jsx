export default function Slide05ClientsPartners() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Clients & Partners</h2>
        <p>Delivering impact across industries</p>
      </div>

      <div className="industry-bento-grid">
        <div className="industry-card">
          <div className="industry-card-header">
            <svg
              className="industry-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <h3>Automotive</h3>
          </div>
          <div className="client-list">
            <span className="service-tag">Chrysler</span>
            <span className="service-tag">DODGE</span>
            <span className="service-tag">Jeep</span>
            <span className="service-tag">Mercedes-Benz</span>
          </div>
        </div>

        <div className="industry-card featured">
          <div className="industry-card-header">
            <svg
              className="industry-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h3>Energy & Utilities</h3>
          </div>
          <div className="client-list">
            <span className="service-tag">APA Group</span>
            <span className="service-tag">CleanCo Queensland</span>
            <span className="service-tag">CS Energy</span>
            <span className="service-tag">Western Power</span>
          </div>
        </div>

        <div className="industry-card">
          <div className="industry-card-header">
            <svg
              className="industry-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            <h3>Finance</h3>
          </div>
          <div className="client-list">
            <span className="service-tag">AMP</span>
            <span className="service-tag">Old Mutual Wealth</span>
            <span className="service-tag">Perpetual</span>
            <span className="service-tag">SS&C Tech</span>
          </div>
        </div>

        <div className="industry-card">
          <div className="industry-card-header">
            <svg
              className="industry-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M9 21v-6h6v6" />
            </svg>
            <h3>Government</h3>
          </div>
          <div className="client-list">
            <span className="service-tag">Australian Tax Office</span>
            <span className="service-tag">Brisbane City Council</span>
            <span className="service-tag">Department of Education</span>
            <span className="service-tag">Education Services Australia</span>
          </div>
        </div>

        <div className="industry-card featured">
          <div className="industry-card-header">
            <svg
              className="industry-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <h3>Health</h3>
          </div>
          <div className="client-list">
            <span className="service-tag">EasyVisit</span>
            <span className="service-tag">IPN Medical Centres</span>
            <span className="service-tag">Queensland X-Ray</span>
            <span className="service-tag">Sonic Healthcare</span>
          </div>
        </div>

        <div className="industry-card">
          <div className="industry-card-header">
            <svg
              className="industry-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <h3>Mining & Resources</h3>
          </div>
          <div className="client-list">
            <span className="service-tag">De Beers</span>
            <span className="service-tag">Newmont Gold</span>
          </div>
        </div>
      </div>
    </div>
  );
}
