import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Web3Expertise } from './components/Web3Expertise';
import Testimonials from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showLoading, setShowLoading] = useState(true);

  // Handle tab changes with URL hash management
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update URL hash without triggering scroll
    if (tab !== 'home') {
      window.history.replaceState(null, '', `#${tab}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Read URL hash on initial load for tab persistence
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'projects', 'contact'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <Projects preview={true} onViewMore={() => setActiveTab('projects')} />
            <Web3Expertise />
            <Testimonials />
            <Contact />
          </>
        );
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Projects preview={true} onViewMore={() => setActiveTab('projects')} />
            <Web3Expertise />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className={`${showLoading ? 'bg-black' : 'bg-white dark:bg-gray-900'} text-gray-900 dark:text-white min-h-screen`}>
      {showLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {!showLoading && (
        <>
          <Header activeTab={activeTab} onTabChange={handleTabChange} />
          {renderContent()}
          <Footer onTabChange={handleTabChange} />
        </>
      )}
    </div>
  );
}

export default App;
