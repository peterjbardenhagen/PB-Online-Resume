"use client";

import { motion } from "framer-motion";

const POINTS = [
  { id: "strategy", label: "Strategy", sub: "Advisory & Roadmaps", class: "p-top" },
  { id: "people", label: "People", sub: "Global Teams & Culture", class: "p-right" },
  { id: "delivery", label: "Delivery", sub: "Agile & DevOps", class: "p-bottom" },
  { id: "tech", label: "Tech", sub: "Cloud & Architecture", class: "p-left" },
];

export default function Slide12LeadershipDNA() {
  return (
    <div className="content-wrapper">
      <div className="section-header">
        <h2>Leadership DNA</h2>
        <p>Balanced capability across the strategic and technical spectrum</p>
      </div>

      <div className="radar-container">
        {/* Radar Visualization */}
        <div className="radar-chart">
          <div className="radar-bg">
            <div className="radar-ring r1"></div>
            <div className="radar-ring r2"></div>
            <div className="radar-ring r3"></div>
            <div className="radar-axes">
              <div className="axis axis-vert"></div>
              <div className="axis axis-horz"></div>
            </div>
          </div>

          {/* DNA Shape */}
          <div className="radar-shape-wrap">
            <motion.div
              className="radar-shape"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: 0.2,
              }}
            />
          </div>

          {/* Axis Points */}
          {POINTS.map((pt, idx) => (
            <motion.div
              key={pt.id}
              className={`radar-point ${pt.class}`}
              data-label={pt.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: 0.8 + idx * 0.1,
              }}
            >
              <div className="point-dot"></div>
              <div className="point-label">
                <h4>{pt.label}</h4>
                <p>{pt.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Context Panel */}
        <div className="radar-context">
          <motion.div
            className="context-card c-strategy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 1.0 }}
          >
            <h4>Strategic Advisory</h4>
            <p>Engaging directly with enterprise clients to scope solutions and secure approval.</p>
          </motion.div>
          <motion.div
            className="context-card c-people"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 1.1 }}
          >
            <h4>Global Teams</h4>
            <p>Built and managed high-performance cross-functional teams across multiple continents.</p>
          </motion.div>
          <motion.div
            className="context-card c-delivery"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 1.2 }}
          >
            <h4>Agile Transformation</h4>
            <p>Championed DevOps culture, CI/CD, and transparent delivery frameworks.</p>
          </motion.div>
          <motion.div
            className="context-card c-tech"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 1.3 }}
          >
            <h4>Enterprise Tech</h4>
            <p>Delivered platforms spanning healthcare, energy, and government sectors.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
