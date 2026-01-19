import { useEffect } from "react";
import Router from "../components/Router";

export default function App() {
  const speed = 0.8;
  const lineCount = 8;
  const amplitude = 0.12;
  const yOffset = 0.15;
  const opacity = 0.6;

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
