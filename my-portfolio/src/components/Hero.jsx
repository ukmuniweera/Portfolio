import React from "react";

export default function Hero({ onCTAClick }) {
  return (
    <div className="hero container">
      <div className="hero__copy">
        <h1>
          Full‑Stack Developer
          <span className="badge">React • Node • Laravel • SQL</span>
        </h1>
        <p className="lead">
          I build fast, accessible web apps—from clean APIs to pixel‑perfect UIs.
        </p>
        <div className="hero__actions">
          <a className="btn primary" onClick={onCTAClick}>View Projects</a>
          <a className="btn ghost" href="#contact">Hire Me</a>
        </div>
        <div className="hero__meta">
          <span>Available for freelance</span>
          <span>Based in Sri Lanka</span>
        </div>
      </div>

      <div className="hero__art" role="img" aria-label="Developer illustration">
        <div className="orbit">
          <div className="planet" />
          <div className="ring" />
        </div>
      </div>
    </div>
  );
}
