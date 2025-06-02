// src/components/ProjectModal.js
import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-4/5 h-4/5 max-w-6xl bg-black border border-teal-500/20 rounded-xl p-8 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-teal-400">
          <X className="h-6 w-6" />
        </button>

        <div className="relative flex-grow mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-contain"
            sizes="80vw"
          />
        </div>

        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold mb-4 text-teal-300">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="flex gap-4 mb-6">
            {project.demo && (
              <a
                href={project.demo}
                className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30">
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30">
              View Code
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-teal-900/20 text-teal-300 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
