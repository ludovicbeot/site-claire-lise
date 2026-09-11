"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("presentation");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["presentation", "expertise", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const timer = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

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
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
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
            <div className="brand-block">
            </div>
          </div>

          <nav className="main-nav" aria-label="Navigation principale">
            <button
              onClick={() => scrollToSection("presentation-detail")}
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
      </header>
    </>
  );
}
