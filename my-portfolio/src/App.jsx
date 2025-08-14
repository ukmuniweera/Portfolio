import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { SECTIONS } from "./data.js";

export default function App() {
  const [activeId, setActiveId] = useState("home");
  const sectionRefs = useMemo(
    () =>
      SECTIONS.reduce((acc, s) => {
        acc[s.id] = React.createRef();
        return acc;
      }, {}),
    []
  );

  useEffect(() => {
    const opts = { root: null, rootMargin: "0px 0px -65% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveId(e.target.id);
      });
    }, opts);

    Object.values(sectionRefs).forEach((ref) => ref.current && obs.observe(ref.current));
    return () => obs.disconnect();
  }, [sectionRefs]);

  const scrollTo = (id) => {
    const el = sectionRefs[id]?.current;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
      <a className="skip-link" href="#about">Skip to content</a>
      <Navbar sections={SECTIONS} activeId={activeId} onJump={scrollTo} />
      <ThemeToggle />

      <main>
        <section id="home" ref={sectionRefs.home} aria-label="Hero">
          <Hero onCTAClick={() => scrollTo("projects")} />
        </section>

        <section id="about" ref={sectionRefs.about} aria-label="About">
          <About />
        </section>

        <section id="skills" ref={sectionRefs.skills} aria-label="Skills">
          <Skills />
        </section>

        {/* <section id="experience" ref={sectionRefs.experience} aria-label="Experience">
          <Experience />
        </section> */}

        <section id="projects" ref={sectionRefs.projects} aria-label="Projects">
          <Projects />
        </section>

        <section id="contact" ref={sectionRefs.contact} aria-label="Contact">
          <Contact />
        </section>
      </main>

      <Footer onJumpTop={() => scrollTo("home")} />
    </div>
  );
}
