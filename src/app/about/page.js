// src/app/about/page.js
import React from "react";
import { GraduationCap, BrainCircuit, Code2, Rocket } from "lucide-react";
import Timeline from "@/components/Timeline";

const About = () => {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: ".NET Core", level: 90 },
    { name: "AI/ML", level: 85 },
    { name: "Python/Django", level: 80 },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-teal-900/10">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Code. Create. Innovate.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Bridging the gap between complex problems and elegant technical
            solutions
          </p>
        </div>

        {/* Career Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-teal-300 flex items-center gap-2">
            <Rocket className="h-6 w-6" />
            Professional Journey
          </h2>
          <Timeline />
        </div>

        {/* Skills Matrix */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 border border-teal-500/20 rounded-xl bg-black/30">
            <h3 className="text-xl font-semibold mb-6 text-teal-300">
              Technical Mastery
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">{skill.name}</span>
                  <span className="text-teal-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-teal-900/50 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="p-6 border border-teal-500/20 rounded-xl bg-black/30">
            <h3 className="text-xl font-semibold mb-6 text-teal-300 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education & Credentials
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-teal-400">
                  BSc Computer Science
                </h4>
                <p className="text-gray-400">Rongo University</p>
                <p className="text-sm text-teal-900">2017 - 2021</p>
              </div>
              <div>
                <h4 className="font-semibold text-teal-400">Certifications</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Advanced React - SimpliLearn</li>
                  <li>Python Programming - SoloLearn</li>
                  <li>Data Science Specialization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
