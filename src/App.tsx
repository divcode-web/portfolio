import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Web3Expertise } from "./components/Web3Expertise";
import Testimonials from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showLoading, setShowLoading] = useState(true);

  // Handle tab changes with URL path management (works in production)
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    // Use pushState for better production compatibility
    const newUrl = tab === "home" ? "/" : `/${tab}`;
    window.history.pushState({ tab }, "", newUrl);

    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewMoreProjects = () => {
    setActiveTab("projects");
    const newUrl = "/projects";
    window.history.pushState({ tab: "projects" }, "", newUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const currentTab = event.state?.tab || "home";
      setActiveTab(currentTab);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Read current path on initial load for production
  useEffect(() => {
    const path = window.location.pathname.replace("/", "") || "home";
    if (["home", "about", "projects", "contact"].includes(path)) {
      setActiveTab(path);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Hero />
            <Projects preview={true} onViewMore={handleViewMoreProjects} />
            <Web3Expertise />
            <Testimonials />
            <Contact />
          </>
        );
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Projects preview={true} onViewMore={handleViewMoreProjects} />
            <Web3Expertise />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div
      className={`${
        showLoading ? "bg-black" : "bg-white dark:bg-gray-900"
      } text-gray-900 dark:text-white min-h-screen`}
    >
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
