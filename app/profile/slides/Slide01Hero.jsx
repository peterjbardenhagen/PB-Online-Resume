"use client";

import { motion } from "framer-motion";

export default function Slide01Hero() {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-image-box"
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero-bg-flare"></div>
        <img src="/profile/img/me.jpeg" alt="Peter Bardenhagen" className="hero-image" />
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Peter Bardenhagen
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Transforming complex technical challenges into scalable enterprise business value.
        </motion.p>
        <motion.p
          className="hero-experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          20+ Years of Excellence &amp; Strategic Innovation
        </motion.p>

        <motion.div
          className="hero-credentials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="cred-column">
            <h4>QUALIFICATIONS</h4>
            <p>MBA, UQ (2025)</p>
            <p>TOGAF 10 &amp; PRINCE2</p>
          </div>
          <div className="cred-column">
            <h4>EXPERTISE</h4>
            <p>Azure &amp; AWS</p>
            <p>Enterprise AI Adoption</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
