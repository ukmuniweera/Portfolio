import React, { useEffect, useState } from "react";

const THEMES = { LIGHT: "light", DARK: "dark" };

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT)
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK))}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === THEMES.DARK ? "🌙" : "☀️"}
    </button>
  );
}
