export default function Slide11ProfessionalJourneyMap() {
  const milestones = [
    {
      year: "2025",
      period: "NOW",
      role: "Senior Architect",
      company: "Recusant",
      highlight: "Enterprise AI & Digital Strategy",
      isCurrent: true,
    },
    {
      year: "2022",
      period: "2024",
      role: "Senior Manager",
      company: "Capgemini",
      highlight: "CX Transformation & Team Leadership",
    },
    {
      year: "2018",
      period: "2022",
      role: "Solution Architect",
      company: "Sonic Healthcare",
      highlight: "Global Healthcare Platforms",
    },
    {
      year: "2015",
      period: "2018",
      role: "Lead Engineer",
      company: "Various",
      highlight: "Full-Stack & Product Ownership",
    },
  ];

  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Professional Journey</h2>
      </div>

      <div className="journey-visual">
        {/* Horizontal Timeline Path */}
        <div className="journey-path">
          <svg className="path-svg" viewBox="0 0 1000 80" preserveAspectRatio="none">
            <path
              d="M0,40 Q250,20 500,40 T1000,40"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              strokeDasharray="8 4"
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
                <stop offset="50%" stopColor="rgba(16, 185, 129, 0.6)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Milestone Waypoints */}
        <div className="journey-waypoints">
          {milestones.map((m, idx) => (
            <div key={idx} className={`waypoint ${m.isCurrent ? "waypoint--current" : ""}`}>
              <div className="waypoint-pin">
                <div className="pin-ring"></div>
                <div className="pin-dot"></div>
              </div>
              <div className="waypoint-year">{m.year}</div>
              <div className="waypoint-card">
                <div className="waypoint-role">{m.role}</div>
                <div className="waypoint-company">{m.company}</div>
                <div className="waypoint-highlight">{m.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
