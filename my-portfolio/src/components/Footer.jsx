import React from "react";
import { LINKS } from "../data.js";

export default function Footer({ onJumpTop }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <button className="btn small ghost" onClick={onJumpTop} aria-label="Back to top">↑ Top</button>
        <ul className="social">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" aria-label={l.label}>{l.icon}</a>
            </li>
          ))}
        </ul>
        <span className="muted">© {new Date().getFullYear()} Udula — All rights reserved.</span>
      </div>
    </footer>
  );
}
