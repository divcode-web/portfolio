import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="rounded-xl overflow-hidden h-64 bg-gray-200 dark:bg-gray-700">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category and Tags */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full">
              {project.category}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              About
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge */}
          {project.challenge && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Challenge
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              >
                <ExternalLink size={20} />
                View Live
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  !project.live_url ? 'flex-1' : ''
                }`}
              >
                <Github size={20} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
