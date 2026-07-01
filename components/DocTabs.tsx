import React, { useState } from "react";

export function StepTracker({ steps }: any) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      style={{
        border: "1px solid var(--ifm-color-emphasis-300)",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1.5rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "10px",
          borderBottom: "1px solid var(--ifm-color-emphasis-300)",
        }}
      >
        {steps.map((step: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor:
                activeTab === idx ? "var(--ifm-color-primary)" : "transparent",
              color: activeTab === idx ? "#fff" : "var(--ifm-color-foreground)",
              border: "1px solid var(--ifm-color-primary)",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            {step.role}
          </button>
        ))}
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <h3>Current Focus: {steps[activeTab].role} Flow</h3>
        <p>{steps[activeTab].description}</p>
      </div>
    </div>
  );
}
