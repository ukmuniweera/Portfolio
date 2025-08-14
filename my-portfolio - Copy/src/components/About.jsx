import React from "react";
import { ABOUT } from "../data.js";

export default function About() {
  return (
    <div className="section container">
      <h2>About</h2>
      <p>{ABOUT.intro}</p>
      <ul className="stats">
        {ABOUT.stats.map((s) => (
          <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
        ))}
      </ul>
    </div>
  );
}
