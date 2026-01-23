"use client";

import { motion } from "framer-motion";

const LAYERS = [
  {
    id: "security",
    title: "Security & Identity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    services: ["Entra ID", "Key Vault", "Defender", "Sentinel"],
    cert: "AZ-104",
    color: "#ef4444",
  },
  {
    id: "app",
    title: "Application Platform",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    services: ["AKS", "Functions", "App Service", "API Management"],
    cert: "AZ-204",
    color: "#3b82f6",
  },
  {
    id: "data",
    title: "Data & Integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
        <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
      </svg>
    ),
    services: ["SQL Database", "Cosmos DB", "Service Bus", "Event Grid"],
    cert: "AZ-305",
    color: "#8b5cf6",
  },
  {
    id: "ai",
    title: "AI & Analytics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="17" cy="16" r="1" />
        <path d="M12 2v4M8 6h8" />
      </svg>
    ),
    services: ["OpenAI", "Cognitive Services", "Synapse", "ML Studio"],
    cert: "AI-102",
    color: "#10b981",
  },
  {
    id: "ops",
    title: "Operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 17V9" />
        <path d="M12 17V5" />
        <path d="M17 17v-3" />
      </svg>
    ),
    services: ["Monitor", "Log Analytics", "DevOps", "Bicep IaC"],
    cert: "AZ-104",
    color: "#f59e0b",
  },
];

export default function Slide08SystemsBlueprint() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Cloud &amp; Platform</h2>
        <p>Built to scale - governed, observable, and cost-optimised</p>
      </div>

      <div className="arch-diagram-container">
        <div className="arch-layout">
          <div className="arch-left">
            <div className="arch-principles">
              <div className="principle-header">ARCHITECTURE PRINCIPLES</div>
              <div className="principle-grid">
                {[
                  { icon: "Well-Architected", text: "Well-Architected" },
                  { icon: "Zero-Trust", text: "Zero-Trust" },
                  { icon: "FinOps", text: "FinOps" },
                  { icon: "Landing Zones", text: "Landing Zones" },
                ].map((p) => (
                  <div key={p.text} className="principle-item">
                    <span className="principle-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {p.text === "Well-Architected" && (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                          </>
                        )}
                        {p.text === "Zero-Trust" && (
                          <>
                            <polyline points="23 4 23 10 17 10" />
                            <polyline points="1 20 1 14 7 14" />
                            <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10" />
                            <path d="M1 14l5.36 4.36A9 9 0 0 0 20.49 15" />
                          </>
                        )}
                        {p.text === "FinOps" && (
                          <>
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                          </>
                        )}
                        {p.text === "Landing Zones" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                      </svg>
                    </span>
                    <span className="principle-text">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="arch-standards">
              <div className="standards-header">COMPLIANCE ALIGNMENT</div>
              <ul className="standards-list">
                <li>ISO 27001</li>
                <li>OWASP Top 10</li>
                <li>WCAG AA 2.1</li>
                <li>W3C Standards</li>
              </ul>
            </div>
          </div>

          <div className="arch-right">
            <div className="arch-layers">
              {LAYERS.map((layer, lIdx) => (
                <motion.div
                  key={layer.id}
                  className={`arch-layer layer-${layer.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: lIdx * 0.1 }}
                  style={{ borderLeftColor: layer.color }}
                >
                  <div className="layer-header">
                    <span className="layer-icon" style={{ color: layer.color }}>
                      {layer.icon}
                    </span>
                    <span className="layer-title">{layer.title}</span>
                  </div>
                  <div className="layer-services">
                    {layer.services.map((svc, sIdx) => (
                      <motion.span
                        key={svc}
                        className="service-tag"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.3 + lIdx * 0.1 + sIdx * 0.05 }}
                      >
                        {svc}
                      </motion.span>
                    ))}
                  </div>
                  <div className="layer-certs">
                    <span className="cert-badge">{layer.cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
