import React from "react";
import { SKILLS } from "../data.js";

export default function Skills() {
  return (
    <div className="section container">
      <h2>Skills</h2>
      <div className="chips">
        {SKILLS.map((s) => (
          <div className="chip" key={s.name} title={s.level}>
            <span className="chip__dot" />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}
