"use client";

import { useMemo, useState } from "react";

const ITEMS = [
  {
    key: "digital",
    label: "Digital",
    transform: "translate(250, 45)",
    className: "node-digital",
    dotClass: "digital",
    title: "Digital Strategy",
    points: [
      "Led large-scale CX transformations (Capgemini)",
      "Product-led engineering across health, energy, gov",
      "Design systems + journeys to reduce friction",
    ],
  },
  {
    key: "ai",
    label: "AI/ML",
    transform: "translate(400, 120)",
    className: "node-ai",
    dotClass: "ai",
    title: "AI / ML Engineering",
    points: [
      "Built enterprise AI MVPs with governance + security",
      "LLM adoption patterns and value-case framing",
      "AI guardrails, evaluation, and operating models",
    ],
  },
  {
    key: "integration",
    label: "Integrate",
    transform: "translate(400, 280)",
    className: "node-integration",
    dotClass: "integration",
    title: "Enterprise Integration",
    points: [
      "Modernisation roadmaps across legacy constraints",
      "API / event-driven patterns for enterprise scale",
      "Pragmatic pathways from POC to production",
    ],
  },
  {
    key: "cx",
    label: "CX/HCD",
    transform: "translate(100, 280)",
    className: "node-cx",
    dotClass: "cx",
    title: "CX / HCD Design",
    points: [
      "Human-centred systems design process + discovery",
      "Journey maps + usability insights to guide architecture",
      "Translate user pain into measurable platform outcomes",
    ],
  },
  {
    key: "business",
    label: "Business",
    transform: "translate(100, 120)",
    className: "node-business",
    dotClass: "business",
    title: "Business Value",
    points: [
      "MBA-led commercial framing + exec stakeholder alignment",
      "Portfolio prioritisation and outcomes-based roadmaps",
      "Operate at boardroom + delivery layers",
    ],
  },
  {
    key: "data",
    label: "Data",
    transform: "translate(250, 355)",
    className: "node-data",
    dotClass: "data",
    title: "Data Strategy",
    points: [
      "Data engineering + platform foundations for AI",
      "Governed data flows in regulated environments",
      "Analytics/telemetry for product and ops decisioning",
    ],
  },
];

export default function Slide04ConvergenceAdvantage() {
  const [selectedKey, setSelectedKey] = useState(ITEMS[0]?.key ?? null);
  const [hoverKey, setHoverKey] = useState(null);

  const activeKey = hoverKey ?? selectedKey;

  const selectedIndex = useMemo(() => {
    if (!selectedKey) return 0;
    const idx = ITEMS.findIndex((i) => i.key === selectedKey);
    return idx === -1 ? 0 : idx;
  }, [selectedKey]);

  const visibleIndices = useMemo(() => {
    const n = ITEMS.length;
    if (!n) return [];
    const prev = (selectedIndex - 1 + n) % n;
    const next = (selectedIndex + 1) % n;
    return [prev, selectedIndex, next];
  }, [selectedIndex]);

  const moveSelection = (delta) => {
    const n = ITEMS.length;
    if (!n) return;
    const nextIdx = (selectedIndex + delta + n) % n;
    setSelectedKey(ITEMS[nextIdx].key);
  };

  const details = useMemo(() => {
    const byKey = new Map(ITEMS.map((i) => [i.key, i]));
    return byKey.get(activeKey) ?? null;
  }, [activeKey]);

  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>The Convergence Advantage</h2>
        <p>Systems Thinking at the intersection of enterprise capabilities</p>
      </div>

      <div className="convergence-model">
        <div className="model-visual">
          <svg viewBox="0 0 500 400" className="synergy-svg">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Web (extended for Data node) */}
            <path d="M250,45 L400,120 L400,280 L250,355 L100,280 L100,120 Z" className="synergy-path" />
            <line x1="250" y1="200" x2="250" y2="45" className="synergy-link" />
            <line x1="250" y1="200" x2="400" y2="120" className="synergy-link" />
            <line x1="250" y1="200" x2="400" y2="280" className="synergy-link" />
            <line x1="250" y1="200" x2="250" y2="355" className="synergy-link" />
            <line x1="250" y1="200" x2="100" y2="280" className="synergy-link" />
            <line x1="250" y1="200" x2="100" y2="120" className="synergy-link" />

            {/* Core Node */}
            <g className="synergy-node core" transform="translate(250, 200)">
              <circle r="60" className="node-bg core-bg" />
              <text y="-5" className="node-text core-label">
                SOLUTION
              </text>
              <text y="15" className="node-text core-label">
                ARCHITECT
              </text>
            </g>

            {/* Capability Nodes */}
            {ITEMS.map((i) => (
              <g
                key={i.key}
                className={`synergy-node ${activeKey === i.key ? "is-active" : ""}`}
                transform={i.transform}
                onMouseEnter={() => setHoverKey(i.key)}
                onMouseLeave={() => setHoverKey(null)}
                onClick={() => setSelectedKey(i.key)}
              >
                <circle r="35" className={`node-bg ${i.className}`} />
                <text y="5" className="node-text">
                  {i.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="synergy-details convergence-carousel">
          <div className="convergence-carousel-header">
            <div className="convergence-carousel-title">
              <span className={`syn-dot ${details?.dotClass ?? "cx"}`}></span>
              <h4>{details ? details.title : "Select a capability"}</h4>
            </div>
            <div className="convergence-carousel-controls">
              <button
                type="button"
                className="convergence-carousel-btn"
                aria-label="Previous capability"
                onClick={() => moveSelection(-1)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
              <button
                type="button"
                className="convergence-carousel-btn"
                aria-label="Next capability"
                onClick={() => moveSelection(1)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>

          <div className="convergence-viewport" role="list">
            {visibleIndices.map((idx) => {
              const i = ITEMS[idx];
              const isSelected = selectedKey === i.key;
              const isActive = activeKey === i.key;
              return (
                <button
                  key={i.key}
                  type="button"
                  className={`synergy-card synergy-card-btn convergence-relevance ${isActive ? "is-highlight" : ""} ${
                    isSelected ? "is-selected" : ""
                  }`}
                  onMouseEnter={() => setHoverKey(i.key)}
                  onMouseLeave={() => setHoverKey(null)}
                  onClick={() => setSelectedKey(i.key)}
                  role="listitem"
                >
                  <div className="syn-header">
                    <span className={`syn-dot ${i.dotClass}`}></span>
                    <h4>{i.title}</h4>
                  </div>
                  <ul className="convergence-points">
                    {i.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
