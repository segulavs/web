import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Software from '../pages/Software';
import Profile from '../pages/Profile';

interface RouterProps {
  speed: number;
  lineCount: number;
  amplitude: number;
  yOffset: number;
  opacity: number;
}

export default function Router({ speed, lineCount, amplitude, yOffset, opacity }: RouterProps) {
  const [currentPage, setCurrentPage] = useState('');

  // Handle navigation on page load and history changes
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.hash.replace('#', '') || '';
      setCurrentPage(path);
    };

    // Initial page load
    handleNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    const props = { speed, lineCount, amplitude, yOffset, opacity };

    switch (currentPage) {
      case 'software':
        return <Software />;
      case 'profile':
        return <Profile />;
      default:
        return <Home {...props} />;
    }
  };

  return renderPage();
}