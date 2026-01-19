import { useState, useEffect } from "react";
import { defineProperties } from "figma:react";
import Router from "./components/Router";

export default function GradientShader({
  speed = 0.8,
  lineCount = 8,
  amplitude = 0.12,
  yOffset = 0.15,
  opacity = 0.6
}) {
  // Set up hash-based routing
  useEffect(() => {
    // Handle initial hash if present or set default
    if (!window.location.hash) {
      window.location.hash = '#';
    }

    // Create handler for hash changes
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      console.log('Hash changed to:', currentHash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Router
      speed={speed}
      lineCount={lineCount}
      amplitude={amplitude}
      yOffset={yOffset}
      opacity={opacity}
    />
  );
}

defineProperties(GradientShader, {
  speed: {
    label: "Animation Speed",
    type: "number",
    defaultValue: 0.8,
    control: "slider",
    min: 0.2,
    max: 3,
    step: 0.1,
  },
  lineCount: {
    label: "Line Count",
    type: "number",
    defaultValue: 8,
    control: "slider",
    min: 1,
    max: 20,
    step: 1,
  },
  amplitude: {
    label: "Wave Amplitude",
    type: "number",
    defaultValue: 0.12,
    control: "slider",
    min: 0.05,
    max: 0.5,
    step: 0.01,
  },
  yOffset: {
    label: "Y Position",
    type: "number",
    defaultValue: 0.15,
    control: "slider",
    min: -0.5,
    max: 0.5,
    step: 0.01,
  },
  opacity: {
    label: "Shader Opacity",
    type: "number",
    defaultValue: 0.6,
    control: "slider",
    min: 0.2,
    max: 1,
    step: 0.05,
  },
});