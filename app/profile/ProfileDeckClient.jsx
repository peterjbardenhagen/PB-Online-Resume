"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Slide01Hero from "./slides/Slide01Hero";
import Slide02ExecutiveDashboard from "./slides/Slide02ExecutiveDashboard";
import Slide03StrategicAdvantage from "./slides/Slide03StrategicAdvantage";
import Slide04ConvergenceAdvantage from "./slides/Slide04ConvergenceAdvantage";
import Slide05ClientsPartners from "./slides/Slide05ClientsPartners";
import Slide06CreativeDirectionHCD from "./slides/Slide06CreativeDirectionHCD";
import Slide07ArchitectSpectrum from "./slides/Slide07ArchitectSpectrum";
import Slide08SystemsBlueprint from "./slides/Slide08SystemsBlueprint";
import Slide09Engagements from "./slides/Slide09Engagements";
import Slide10HumanCentredSystemsDesign from "./slides/Slide10HumanCentredSystemsDesign";
import Slide11ProfessionalJourneyMap from "./slides/Slide11ProfessionalJourneyMap";
import Slide12LeadershipDNA from "./slides/Slide12LeadershipDNA";
import Slide13CertificationVault from "./slides/Slide13CertificationVault";
import Slide14CaseRecusantIntelligence from "./slides/Slide14CaseRecusantIntelligence";
import Slide15CaseCarterCapnerLaw from "./slides/Slide15CaseCarterCapnerLaw";
import Slide16CaseCSEnergy from "./slides/Slide16CaseCSEnergy";
import Slide17VoiceOfPartner from "./slides/Slide17VoiceOfPartner";
import Slide18CTA from "./slides/Slide18CTA";
import { AnimatePresence, motion } from "framer-motion";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function ProfileDeckClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef(null);

  const slides = useMemo(
    () => [
      { id: "slide1", title: "Peter Bardenhagen", component: Slide01Hero },
      { id: "slide-executive-profile", title: "Executive Dashboard", component: Slide02ExecutiveDashboard },
      { id: "slide-strategic-advantage", title: "The Strategic Advantage", component: Slide03StrategicAdvantage },
      { id: "slide-convergence", title: "Systems Synergy", component: Slide04ConvergenceAdvantage },
      { id: "slide-clients", title: "Clients & Partners", component: Slide05ClientsPartners },
      { id: "slide-collage", title: "Creative Direction & HCD", component: Slide06CreativeDirectionHCD },
      { id: "slide-spectrum", title: "Architect Spectrum", component: Slide07ArchitectSpectrum },
      { id: "slide-azure", title: "Systems Blueprint", component: Slide08SystemsBlueprint },
      { id: "slide-engagements", title: "Engagements", component: Slide09Engagements },
      { id: "slide-process", title: "Human-Centred Systems Design", component: Slide10HumanCentredSystemsDesign },
      { id: "slide-career-journey", title: "Professional Journey Map", component: Slide11ProfessionalJourneyMap },
      { id: "slide-leadership", title: "Leadership DNA", component: Slide12LeadershipDNA },
      { id: "slide-credentials", title: "Certification Vault", component: Slide13CertificationVault },
      { id: "slide-case-ri", title: "Case Study: Recusant Intelligence", component: Slide14CaseRecusantIntelligence },
      { id: "slide-case-ccl", title: "Case Study: Carter Capner Law", component: Slide15CaseCarterCapnerLaw },
      { id: "slide-case-cse", title: "Case Study: CS Energy", component: Slide16CaseCSEnergy },
      { id: "slide-testimonials", title: "Voice of the Partner", component: Slide17VoiceOfPartner },
      { id: "slide-cta", title: "Let's Engage", component: Slide18CTA },
    ],
    []
  );

  const totalSlides = slides.length;
  const progressPercent = ((activeSlide + 1) / totalSlides) * 100;

  const goToSlide = (idx) => {
    const nextIdx = clamp(idx, 0, totalSlides - 1);
    setPage([nextIdx, nextIdx > activeSlide ? 1 : -1]);
    setActiveSlide(nextIdx);
  };
  const nextSlide = () => {
    const nextIdx = (activeSlide + 1) % totalSlides;
    setPage([nextIdx, 1]);
    setActiveSlide(nextIdx);
  };
  const prevSlide = () => {
    const nextIdx = (activeSlide - 1 + totalSlides) % totalSlides;
    setPage([nextIdx, -1]);
    setActiveSlide(nextIdx);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
      z: -500,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      z: -500,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeSlide, totalSlides]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const SlideComp = slides[activeSlide].component;

  return (
    <div className="profile-deck" style={{ perspective: "2000px", height: "100vh", overflow: "hidden" }}>
      <div className="progress-bar-container">
        <div className="progress-bar" id="progressBar" style={{ width: `${progressPercent}%` }} />
      </div>

      <button className="menu-btn" onClick={() => setIsMenuOpen((v) => !v)} title="Navigation Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <button className="pdf-btn" onClick={() => window.print()} title="Download as PDF">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>

      <div className={`side-nav ${isMenuOpen ? "active" : ""}`} id="sideNav">
        <div className="side-nav-header">
          <h2>Navigation</h2>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="side-nav-content">
          <nav className="slide-index">
            {slides.map((s, idx) => (
              <a
                key={s.id}
                href="#"
                className={`slide-link ${idx === activeSlide ? "active" : ""}`}
                data-slide={idx}
                onClick={(e) => {
                  e.preventDefault();
                  goToSlide(idx);
                  setIsMenuOpen(false);
                }}
              >
                <span className="slide-number">{String(idx + 1).padStart(2, "0")}</span>
                <span className="slide-title">{s.title}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="side-nav-footer">
          <a href="mailto:peter@bardenhagen.xyz" className="nav-cta-btn nav-cta-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </a>
          <a href="https://www.linkedin.com/in/peterbardenhagen" target="_blank" className="nav-cta-btn nav-cta-secondary" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href="https://peter.bardenhagen.xyz" target="_blank" className="nav-cta-btn nav-cta-secondary" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            AI Resume
          </a>
        </div>
      </div>

      <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} id="menuOverlay" onClick={() => setIsMenuOpen(false)} />

      <div className="slide-container" ref={containerRef} style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Show all slides when printing */}
        <div className="print-only">
          {slides.map((slide, idx) => {
            const PrintSlideComp = slide.component;
            return (
              <div key={slide.id} className="slide" id={slide.id}>
                <PrintSlideComp />
              </div>
            );
          })}
        </div>
        
        {/* Normal interactive slideshow */}
        <div className="no-print">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="slide active"
              id={slides[activeSlide].id}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                willChange: "transform, opacity",
              }}
            >
              <SlideComp />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="nav-dots" id="navDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`dot${idx === activeSlide ? " active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>

      <div className="nav-arrows">
        <div className="arrow" onClick={prevSlide}>
          ‹
        </div>
        <div className="arrow" onClick={nextSlide}>
          ›
        </div>
      </div>
    </div>
  );
}
