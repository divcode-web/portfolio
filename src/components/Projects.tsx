import { useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "../types";
import { ProjectModal } from "./ProjectModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProjectsProps {
  preview?: boolean;
  onViewMore?: () => void;
}

export function Projects({ preview = false, onViewMore }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll animations
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation({ threshold: 0.2, delay: 100 });
  const { elementRef: tabsRef, isVisible: tabsVisible } = useScrollAnimation({
    threshold: 0.2,
    delay: 200,
  });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.2,
    delay: 300,
  });

  const categories = ["All", "Frontend", "Web3", "Full Stack"];

  const projects: Project[] = [
    {
      id: "1",
      title: "Dating Website",
      description:
        "Responsive portfolio website with dark mode and smooth animations.",
      image_url: "/images/lovento.png",
      category: "Full Stack",
      technologies: [
        "Next",
        "Tailwind CSS",
        "PostgreSQL",
        "React",
        "socket.io",
        "supabase",
      ],
      live_url: "https://loventodate.com",
      github_url: "https://github.com/divcode-web",
      order: 1,
      created_at: new Date().toISOString(),
    },

    {
      id: "2",
      title: "NFT Marketplace",
      description:
        "Full-featured NFT marketplace with wallet integration and auction functionality.",
      image_url: "/images/1.png",
      category: "Web3",
      technologies: ["Next.js", "Solidity", "Web3.js", "Tailwind CSS"],
      live_url: "https://nft-marketplace.example.com",
      github_url: "https://github.com/divcode-web",
      order: 2,
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      title: "E-commerce Platform",
      description:
        "Modern e-commerce platform with advanced filtering and payment integration.",
      image_url: "/images/3.png",
      category: "Full Stack",
      technologies: ["PHP", "SQL", "Paystack"],
      live_url: "https://shopwithpappyjoe.com.ng",
      github_url: "https://github.com/divcode-web",
      order: 3,
      created_at: new Date().toISOString(),
    },
    {
      id: "4",
      title: "E-commerce Platform",
      description: "Modern e-commerce platform",
      image_url: "/images/weshop.png",
      category: "Frontend",
      technologies: ["Html", "CSS", "Javascript", "Bootstrap"],
      live_url: "https://e-commerce-project-ruddy-theta.vercel.app/",
      github_url: "https://github.com/divcode-web",
      order: 4,
      created_at: new Date().toISOString(),
    },
    {
      id: "5",
      title: "Crypto Wallet Interface",
      description:
        "User-friendly interface for managing cryptocurrency wallets and transactions.",
      image_url: "/images/1.png",
      category: "Web3",
      technologies: ["React", "MetaMask", "Web3.js", "Material-UI"],
      live_url: "https://crypto-wallet.example.com",
      github_url: "https://github.com/divcode-web",
      order: 5,
      created_at: new Date().toISOString(),
    },
    {
      id: "6",
      title: "DeFi Dashboard",
      description:
        "A comprehensive dashboard for decentralized finance operations with real-time data visualization.",
      image_url: "/images/3.png",
      category: "Web3",
      technologies: ["React", "TypeScript", "Ethers.js", "Chart.js"],
      live_url: "https://defi-dashboard.example.com",
      github_url: "https://github.com/divcode-web",
      order: 6,
      created_at: new Date().toISOString(),
    },
  ];

  const allFilteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = preview
    ? allFilteredProjects.slice(0, 3)
    : allFilteredProjects;

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A selection of my recent work in frontend development and Web3
          </p>
        </div>

        {/* Category Tabs */}
        <div
          ref={tabsRef}
          className={`flex justify-center mb-12 transition-all duration-700 ${
            tabsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {displayedProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found. Check back soon!
            </p>
          </div>
        ) : (
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer ${
                  gridVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-600">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium ${
                          !project.live_url ? "flex-1" : ""
                        }`}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        {preview && allFilteredProjects.length > 3 && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={onViewMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              View More Projects
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
