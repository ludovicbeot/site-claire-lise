"use client";

import { useState } from "react";

export default function ExpertiseAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div className="expertise-layout">
      <ul className="expertise-list">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <li className="expertise-list-item" key={item.title}>
              <button
                type="button"
                className={`expertise-list-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-expanded={isActive}
                aria-controls={`expertise-panel-${index}`}
              >
                <span className="expertise-list-title">{item.title}</span>
                <span className="expertise-list-icon" aria-hidden="true">
                  {isActive ? "×" : "+"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        className="expertise-panel"
        id={`expertise-panel-${activeIndex}`}
        key={activeIndex}
      >
        <h2 className="expertise-panel-title">{active.title}</h2>

        <div className="expertise-content">
          {active.entries.map((entry, entryIndex) => (
            <div className="expertise-entry" key={entryIndex}>
              <p className="expertise-dash">{entry.dash}</p>

              {entry.bullets && (
                <ul className="expertise-sublist">
                  {entry.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
