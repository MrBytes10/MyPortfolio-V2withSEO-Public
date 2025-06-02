// src/components/Hero.js
"use client";
import React, { useEffect, useState } from "react";
import { Terminal, Code2, Cpu, BrainCircuit } from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../public/images/HeroImages/cropped_image.png"; // Adjust the path as necessary
// import

const taglines = [
  { text: "Full-Stack Developer", icon: <Terminal /> },
  { text: "AI Solutions Architect", icon: <Cpu /> },
  { text: "Data Science Practitioner", icon: <BrainCircuit /> },
  { text: "Technical Writer", icon: <Code2 /> },
];

const Hero = () => {
  const [activeTagline, setActiveTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen-80 flex items-center">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="relative flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64 rounded-full border-4 border-teal-500/20 overflow-hidden">
            <Image
              src={ProfileImage}
              alt="Augastine Ndeti - Software Developer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Transforming Ideas
              </span>
              <br />
              <span className="text-gray-300">Into Digital Reality</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          {taglines[activeTagline].icon}
          <span className="text-xl text-teal-300 animate-fadeIn">
            {taglines[activeTagline].text}
          </span>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
            Start Collaboration
            <Terminal className="h-4 w-4" />
          </a>
          <a
            href="/projects"
            className="border border-teal-500 text-teal-300 hover:bg-teal-500/10 px-8 py-3 rounded-full transition-colors">
            Explore Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
