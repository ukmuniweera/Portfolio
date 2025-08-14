import React from "react";
import { EXPERIENCE } from "../data.js";

export default function Experience() {
  return (
    <div className="section container">
      <h2>Experience</h2>
      <ol className="timeline">
        {EXPERIENCE.map((e) => (
          <li className="timeline__item" key={e.company + e.role}>
            <div className="timeline__head">
              <h3>{e.role} · <span className="muted">{e.company}</span></h3>
              <span className="muted">{e.period}</span>
            </div>
            <p>{e.summary}</p>
            <ul className="tags">
              {e.stack.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
