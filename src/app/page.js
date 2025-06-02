// src/app/page.js
"use client";
import React from "react";
import Image from "next/image";
import { Code, Cpu, Database, BrainCircuit,Code2, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import ExpenseTracker from "../../public/images/ProjectImages/expense-tracker-webApp.jpg";
import HospitalInsuranceCal from "../../public/images/ProjectImages/hospitalInsuranceDS.png";

const DynamicHero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>,
});

const Home = () => {
  const expertise = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Development",
      description:
        "Crafting seamless web experiences from concept to deployment",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Integration",
      description: "Building intelligent systems that learn and adapt",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Solutions",
      description: "Transforming raw data into actionable insights",
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Process Automation",
      description: "Streamlining workflows with smart automation",
    },
  ];

  return (
    <div className="flex-grow pt-20">
      <DynamicHero />

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-black/95 to-teal-900/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-teal-500/20 rounded-xl bg-black/30 hover:bg-teal-500/10 transition-colors">
                <div className="text-teal-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-300">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Signature Creations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project cards with hover effects */}
            {[
              {
                id: 1,
                title: "AI Expense Tracker",
                category: "ai",
                image: ExpenseTracker,
                description: "Smart budgeting app with predictive analytics",
                tech: ["React", "Python", "TensorFlow"],
              },
              {
                id: 2,
                title: "Medical Cost Predictor",
                category: "ai",
                image: HospitalInsuranceCal,
                description: "ML model for healthcare cost forecasting",
                tech: ["Python", "Scikit-learn", "Pandas"],
              },
              // {
              //   id: 2,
              //   title: "Medical Cost Predictor",
              //   category: "ai",
              //   image: HospitalInsuranceCal,
              //   description: "ML model for healthcare cost forecasting",
              //   tech: ["Python", "Scikit-learn", "Pandas"],
              // },
            ].map((project) => (
              <div
                key={project.id}
                className="group border border-teal-500/20 rounded-xl p-6 bg-black/30 hover:bg-teal-500/10 transition-colors cursor-pointer">
                {/* Project Image */}
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>

                {/* Project Title with Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    {project.category === "ai" ? (
                      <Cpu className="h-5 w-5 text-teal-400" />
                    ) : project.category === "web" ? (
                      <Code2 className="h-5 w-5 text-teal-400" />
                    ) : (
                      <Zap className="h-5 w-5 text-teal-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-teal-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm bg-teal-900/20 text-teal-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
