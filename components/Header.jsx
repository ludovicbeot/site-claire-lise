"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("presentation");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["presentation", "expertise", "contact"];
      const scrollPosition = window.scrollY + 100; // offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionTitle = (section) => {
    switch (section) {
      case "presentation":
        return "Présentation";
      case "expertise":
        return "Expertises";
      case "contact":
        return "Contact";
      default:
        return "Présentation";
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <header className="site-header">
      <div className="site-header-top">
        <div className="brand-area">
          <Link href="/" className="brand-logo" aria-label="Retour à l’accueil">
            <Image
              src="/images/logo-clg.png"
              alt="Logo Claire-Lise Gaudelet"
              width={42}
              height={42}
              priority
            />
          </Link>

          <div className="brand-block">
            <Link href="/" className="brand">
              Claire-Lise Gaudelet
            </Link>
            <p className="brand-subtitle">Avocate au Barreau de Paris</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          <button
            onClick={() => scrollToSection("presentation")}
            className={`nav-link ${activeSection === "presentation" ? "active" : ""}`}
          >
            présentation
          </button>

          <button
            onClick={() => scrollToSection("expertise")}
            className={`nav-link ${activeSection === "expertise" ? "active" : ""}`}
          >
            expertises
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          >
            contact
          </button>
        </nav>
      </div>

      <div className="current-section">
        <h1 className={`section-title ${activeSection === activeSection ? "active" : ""}`}>
          {getSectionTitle(activeSection)}
        </h1>
      </div>
    </header>
    </>
  );
}