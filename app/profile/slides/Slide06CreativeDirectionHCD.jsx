"use client";

import { motion } from "framer-motion";

const PHOTOS = [
  {
    id: 1,
    src: "https://peter.bardenhagen.xyz/imgs/recusant-intelligence.png",
    alt: "Recusant AI Platform",
    label: "Recusant Intelligence",
    position: "top-left",
  },
  {
    id: 2,
    src: "https://peter.bardenhagen.xyz/imgs/easyvisit.png",
    alt: "EasyVisit Health",
    label: "EasyVisit Health",
    position: "top-center",
  },
  {
    id: 3,
    src: "https://peter.bardenhagen.xyz/imgs/wp.png",
    alt: "Western Power",
    label: "Western Power CX",
    position: "top-right",
  },
  {
    id: 4,
    src: "https://peter.bardenhagen.xyz/imgs/lcs.jpg",
    alt: "Live Combat Sports",
    label: "Live Combat Sports",
    position: "bottom-left",
  },
  {
    id: 5,
    src: "https://peter.bardenhagen.xyz/imgs/bento-5.jpg",
    alt: "Bob Jane",
    label: "Bob Jane Racing Heritage",
    position: "bottom-right",
  },
];

export default function Slide06CreativeDirectionHCD() {
  return (
    <div className="content-wrapper hcd-slide">
      {/* Scattered Photos */}
      <div className="hcd-photos">
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            className={`hcd-photo hcd-photo--${photo.position}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: photo.id * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <img src={photo.src} alt={photo.alt} />
          </motion.div>
        ))}
      </div>

      {/* Center Content */}
      <div className="hcd-center">
        <div className="section-header">
          <h2>Creative Direction &amp; HCD</h2>
          <p>Bridging aesthetic excellence with functional systems design</p>
        </div>

        <div className="design-dna-grid">
          <div className="dna-item">
            <span className="dna-label">01 / EMPATHY</span>
            <p>User-first research and journey mapping to ensure every system solves a real human need.</p>
          </div>
          <div className="dna-item">
            <span className="dna-label">02 / SYSTEMS</span>
            <p>Atomic design and reusable components to ensure enterprise-scale consistency and speed.</p>
          </div>
          <div className="dna-item">
            <span className="dna-label">03 / FEASIBILITY</span>
            <p>Deep technical knowledge ensures that creative visions are buildable, secure, and performant.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
