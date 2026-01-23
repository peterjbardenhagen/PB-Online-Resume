"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    title: "Platforms & Cloud",
    items: [
      { label: "Azure", value: "95%", level: "Expert", tier: "max" },
      { label: "AWS", value: "90%", level: "Expert", tier: "max" },
      { label: "Google Cloud", value: "75%", level: "Advanced", tier: "high" },
      { label: "Kubernetes", value: "35%", level: "Beginner", tier: "med" },
      { label: "Terraform / Bicep", value: "35%", level: "Beginner", tier: "med" },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { label: "OpenAI/LLMs", value: "94%", level: "Expert", tier: "max" },
      { label: "Azure AI", value: "85%", level: "Advanced", tier: "high" },
      { label: "Data Engineering", value: "78%", level: "Advanced", tier: "high" },
      { label: "ML Ops", value: "65%", level: "Intermediate", tier: "med" },
      { label: "Power Platform", value: "82%", level: "Advanced", tier: "high" },
    ],
  },
  {
    title: "Development",
    items: [
      { label: "React / Next.js", value: "92%", level: "Expert", tier: "max" },
      { label: "C# / .NET", value: "88%", level: "Advanced", tier: "high" },
      { label: "TypeScript", value: "85%", level: "Advanced", tier: "high" },
      { label: "Node.js / Python", value: "80%", level: "Advanced", tier: "high" },
      { label: "Angular / Vue", value: "65%", level: "Intermediate", tier: "med" },
    ],
  },
];

export default function Slide07ArchitectSpectrum() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Architect Spectrum</h2>
        <p>Depth across the technology landscape</p>
      </div>
      <div className="dashboard-container">
        {GROUPS.map((group, gIdx) => (
          <div key={group.title} className="gauge-group">
            <h3>{group.title}</h3>
            {group.items.map((item, iIdx) => (
              <div key={item.label} className={`gauge-row g-${item.tier}`}>
                <div className="gauge-header">
                  <span>{item.label}</span>
                  <span>{item.level}</span>
                </div>
                <div className="gauge-track">
                  <motion.div
                    className="gauge-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 1.2,
                      delay: gIdx * 0.2 + iIdx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
