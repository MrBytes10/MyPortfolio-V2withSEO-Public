// B:\mytestProjects\myPortfolioV2\myportfoliov2\src\components\ProjectModal.js
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageSquarePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index if project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-teal-500/20 rounded-xl p-8 flex flex-col gap-6 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-teal-400 z-10">
          <X className="h-6 w-6" />
        </button>

        {/* --- NEW: Image Gallery --- */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden flex-shrink-0">
          {project.images && project.images.length > 0 ? (
            <Image
              src={project.images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1} of ${project.title}`}
              fill
              className="object-contain"
              sizes="80vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-900/30 to-cyan-900/30 flex items-center justify-center">
              <span className="text-teal-400 opacity-50">
                No preview available
              </span>
            </div>
          )}

          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-all">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-all">
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-teal-900/20 text-teal-300 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30">
                Live Demo
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30">
                View Code
              </a>
            )}
          </div>

          {/* --- NEW: Investor/Client CTA --- */}
          {project.isPrototype && (
            <div className="mt-4 p-4 border border-cyan-500/30 bg-cyan-500/10 rounded-lg text-center">
              <h4 className="font-semibold text-cyan-300 mb-2">
                Interested in this project's future?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                This project is currently in development. I am actively seeking
                 Investors or Collaborators to help bring it to full production.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500/20 text-cyan-300 px-6 py-2 rounded-full font-semibold hover:bg-cyan-500/30 transition-colors">
                <MessageSquarePlus className="h-4 w-4" />
                Let's Discuss
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
