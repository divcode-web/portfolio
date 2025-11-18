import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export function Footer({ onTabChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (tab: string) => {
    onTabChange(tab); // This now includes scroll to top and URL hash management
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/1.png"
                alt="DivCode Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-bold text-lg animate-pulse">
                <span className="text-blue-400 transition-colors duration-300 hover:text-blue-300">
                  Div
                </span>
                <span className="text-cyan-400 transition-colors duration-300 hover:text-cyan-300">
                  Tech
                </span>
              </span>
            </div>
            <p className="text-sm">
              Frontend developer & Web3 specialist building beautiful and secure
              applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-blue-400 transition-colors"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleTabChange("home")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange("about")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange("projects")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange("contact")}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/divcode-web"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/john-soyobi-546b0134b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/j_divine99?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {currentYear} DIVTECH. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
