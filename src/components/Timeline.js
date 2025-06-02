// src/components/Timeline.js
import React from "react";
import { Briefcase, GraduationCap, Code2, Rocket } from "lucide-react";

const Timeline = () => {
  const items = [
    {
      date: "2023 - Present",
      title: "Software Developer @ Swiftplay",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Building backend systems for e-commerce platforms",
    },
    {
      date: "2019 - 2023",
      title: "Full-Stack Developer @ CourseHero",
      icon: <Code2 className="h-5 w-5" />,
      description: "Developed 50+ technical solutions and automation scripts",
    },
    {
      date: "2021",
      title: "Computer Science Degree",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "Graduated from Rongo University",
    },
  ];

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 mb-8 relative">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-teal-500/10 rounded-full text-teal-400">
              {item.icon}
            </div>
            {index < items.length - 1 && (
              <div className="w-0.5 h-full bg-teal-500/20 my-2" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-teal-300">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{item.date}</p>
            <p className="text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
