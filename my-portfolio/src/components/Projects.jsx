import React from "react";
import { PROJECTS } from "../data.js";

export default function Projects() {
  return (
    <div className="section container">
      <h2>Featured Projects</h2>
      <div className="grid">
        {PROJECTS.map((p) => (
          <article className="card" key={p.slug}>
            <img className="card__img" src={p.image} alt={`${p.title} thumbnail`} loading="lazy" />
            <div className="card__body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.stack.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="card__actions">
                <a className="btn small" href={p.live} target="_blank" rel="noreferrer">Live</a>
                <a className="btn small ghost" href={p.repo} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
