// src/app/expertise/page.js
import React from "react";
import {
  Code2,
  Cpu,
  Database,
  BrainCircuit,
  Rocket,
  TestTube2,
  GitBranch,
  Cloud,
} from "lucide-react";
import Link from "next/link";

const Expertise = () => {
  const technicalSkills = [
    { name: "React/Next.js", level: 95, icon: <Code2 className="h-5 w-5" /> },
    {
      name: "Python/Django",
      level: 92,
      icon: <Database className="h-5 w-5" />,
    },
    {
      name: "AI/ML Engineering",
      level: 88,
      icon: <BrainCircuit className="h-5 w-5" />,
    },
    {
      name: "Cloud Architecture",
      level: 85,
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      name: "DevOps & CI/CD",
      level: 83,
      icon: <GitBranch className="h-5 w-5" />,
    },
    {
      name: "Data Analytics",
      level: 90,
      icon: <TestTube2 className="h-5 w-5" />,
    },
  ];

  const methodologies = [
    { name: "Agile Development", icon: <Rocket className="h-5 w-5" /> },
    { name: "Test-Driven Design", icon: <TestTube2 className="h-5 w-5" /> },
    { name: "CI/CD Pipelines", icon: <GitBranch className="h-5 w-5" /> },
    { name: "Microservices", icon: <Cloud className="h-5 w-5" /> },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-teal-900/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h1>
          <p className="text-gray-400 text-xl">
            Full-stack capabilities powered by cutting-edge technologies
          </p>
        </div>

        {/* Technical Proficiency */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-teal-300 flex items-center gap-2">
            <Cpu className="h-6 w-6" />
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 border border-teal-500/20 rounded-xl bg-black/30 hover:bg-teal-500/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-teal-300">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full h-2 bg-teal-900/50 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-teal-400">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-teal-300 flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Python",
              "Django",
              ".NET Core",
              "TensorFlow",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Azure",
              "GraphQL",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 text-center bg-teal-500/10 text-teal-300 rounded-full hover:bg-teal-500/20 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Methodologies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-teal-300 flex items-center gap-2">
            <Rocket className="h-6 w-6" />
            Development Methodologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="p-6 border border-teal-500/20 rounded-xl bg-black/30 hover:bg-teal-500/10 transition-colors">
                <div className="text-teal-400 mb-2">{method.icon}</div>
                <h3 className="text-lg font-semibold text-teal-300">
                  {method.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-teal-300 flex items-center gap-2">
            <BrainCircuit className="h-6 w-6" />
            Certifications & Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Advanced React Development - SimpliLearn",
              "Python Programming Specialist - SoloLearn",
              "AWS Certified Developer Associate",
              "Data Science Professional - SimpliLearn",
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 border border-teal-500/20 rounded-xl bg-black/30 hover:bg-teal-500/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-8 bg-teal-400 rounded-full" />
                  <p className="text-gray-300">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-block bg-teal-500/20 text-teal-400 px-8 py-3 rounded-full font-semibold hover:bg-teal-500/30 transition-colors">
            Explore My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
