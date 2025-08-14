import React, { useEffect, useState } from "react";

export default function Navbar({ sections, activeId, onJump }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner">
        <button className="brand" onClick={() => onJump("home")} aria-label="Go to Home">
          <span className="brand__dot" aria-hidden>●</span> Portfolio
        </button>

        <nav aria-label="Primary">
          <button
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mainmenu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <ul id="mainmenu" className={`nav__links ${open ? "nav__links--open" : ""}`}>
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  className={`nav__link ${activeId === s.id ? "is-active" : ""}`}
                  onClick={() => {
                    onJump(s.id);
                    setOpen(false);
                  }}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
