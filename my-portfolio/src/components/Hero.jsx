import React from "react";
const downloadLink = 'https://t.ly/OQVUF';
import profileImg from "../assets/profile.jpg";

export default function Hero({ onCTAClick }) {
  return (
    <div className="hero container">
      <div className="hero__copy">
        <h1>
          Udula K Muniweera
          <span className="badge">Full Stack Developer</span>
        </h1>
        <p className="lead">
          I build fast, accessible web apps - from clean APIs to pixel perfect UIs.
        </p>
        <div className="hero__actions">
          <a className="btn primary" onClick={onCTAClick}>View Projects</a>
          <a className="btn ghost" href={downloadLink}>Download CV</a>
        </div>
      </div>

      <div className="profile-border">
        <div className="profile-pic-wrapper">
          <img src={profileImg} alt="Udula K Muniweera" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}
