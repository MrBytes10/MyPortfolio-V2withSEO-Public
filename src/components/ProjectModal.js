// B:\mytestProjects\myPortfolioV2\myportfoliov2\src/components/ProjectModal.js
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MessageSquarePlus, Lightbulb, Briefcase, FileCode, DollarSign, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- The Professional CTA Component ---
const PurchaseCTA = ({ project }) => {
  const ctaBaseStyle = "mt-6 p-4 border rounded-lg text-center";
  const titleBaseStyle = "text-lg font-semibold mb-2 flex items-center justify-center gap-2";
  const textBaseStyle = "text-gray-400 text-sm mb-4 max-w-lg mx-auto";
  const linkBaseStyle = "inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-semibold transition-colors";

  const contextStatement = "I build all projects with a product-focused mindset, considering real-world application and value. The following opportunities are available for this project:";

  const ctaContent = {
    investment: {
      style: "border-cyan-500/30 bg-cyan-500/10",
      title: <><Lightbulb className="h-5 w-5" /> Investment & Partnership</>,
      titleColor: "text-cyan-300",
      description: "This project is a functional prototype with significant market potential. I am open to discussing investment or collaboration to scale it into a full production-ready business.",
      buttonText: "Discuss Partnership",
      buttonIcon: <Handshake className="h-4 w-4" />,
      buttonStyle: "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
      purpose: "Partnership"
    },
    licensing: {
        style: "border-teal-500/30 bg-teal-500/10",
        title: <><Briefcase className="h-5 w-5" /> Available for Business Licensing</>,
        titleColor: "text-teal-300",
        description: "This is a complete, deployable system ready for a real-world environment. It can be licensed as-is or customized to meet your specific business requirements.",
        buttonText: "Request a Quote",
        buttonIcon: <DollarSign className="h-4 w-4" />,
        buttonStyle: "bg-teal-500/20 text-teal-300 hover:bg-teal-500/30",
        purpose: "Licensing"
    },
    sourceCode: {
        style: "border-gray-500/30 bg-gray-500/10",
        title: <><FileCode className="h-5 w-5" /> Source Code Available</>,
        titleColor: "text-gray-300",
        description: "The source code for this project is available for a one-time licensing fee. Still, this can be customized to meet your specific business requirements.Ideal for students, educational purposes, or as a foundation for derivative projects.",
        buttonText: "Inquire About License",
        buttonIcon: <MessageSquarePlus className="h-4 w-4" />,
        buttonStyle: "bg-gray-500/20 text-gray-300 hover:bg-gray-500/30",
        purpose: "Source Code Purchase"
    }
  };

  const currentCta = ctaContent[project.purchaseType];

  if (!currentCta) {
    return null;
  }

  // MODIFIED: Create the dynamic link with URL query parameters.
  // We encode the project title to ensure spaces and special characters are handled correctly in the URL.
  const contactLink = `/contact?purpose=${currentCta.purpose}&project=${encodeURIComponent(project.title)}`;

  return (
    <div className="mt-8 pt-6 border-t border-teal-500/20">
      <p className="text-center text-gray-500 italic text-sm mb-4">{contextStatement}</p>
      <div className={`${ctaBaseStyle} ${currentCta.style}`}>
        <h4 className={`${titleBaseStyle} ${currentCta.titleColor}`}>{currentCta.title}</h4>
        <p className={textBaseStyle}>{currentCta.description}</p>
        {/* MODIFIED: Use the new dynamic contactLink */}
        <Link href={contactLink} className={`${linkBaseStyle} ${currentCta.buttonStyle}`}>
          {currentCta.buttonIcon}
          {currentCta.buttonText}
        </Link>
      </div>
    </div>
  );
};


// The rest of the ProjectModal component remains exactly the same.
const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  const handlePrev = () => {
    if (project.images && project.images.length > 1) {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
    }
  };

  const handleNext = () => {
    if (project.images && project.images.length > 1) {
        setCurrentIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-black border border-teal-500/20 rounded-xl p-8 flex flex-col gap-6 overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-teal-400 z-10"><X className="h-6 w-6" /></button>
        <div className="relative w-full h-96 rounded-lg overflow-hidden flex-shrink-0">
          {project.images && project.images.length > 0 ? (
            <Image src={project.images[currentIndex]} alt={`Screenshot ${currentIndex + 1} of ${project.title}`} fill className="object-contain" sizes="80vw" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-900/30 to-cyan-900/30 flex items-center justify-center">
              <span className="text-teal-400 opacity-50">No preview available</span>
            </div>
          )}
          {hasMultipleImages && (
            <>
              <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-all"><ChevronLeft className="h-6 w-6" /></button>
              <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-all"><ChevronRight className="h-6 w-6" /></button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">{currentIndex + 1} / {project.images.length}</div>
            </>
          )}
        </div>
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm bg-teal-900/20 text-teal-300 rounded-full">{tech}</span>
            ))}
          </div>
          <div className="flex gap-4 mb-6">
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30">Live Demo</a>
            )}
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30">View Code</a>
            )}
          </div>
          <PurchaseCTA project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;