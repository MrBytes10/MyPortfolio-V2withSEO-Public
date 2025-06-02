// src/components/Timeline.js
import React from "react";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Rocket,
  Users,
  Globe,
} from "lucide-react";

const Timeline = () => {
  const items = [
    {
      date: "Oct 2024 - Present",
      title: "Software Engineer @ Pensoft",
      icon: <Briefcase className="h-5 w-5" />,
      description:
        "Developing full-stack applications with C# & .NET, ReactJS & Blazor. Built E-Commerce platform with secure M-Pesa integration and deployed on Azure Cloud.",
    },
    {
      date: "Jun 2024 - Oct 2024",
      title: "Frontend Developer @ NGENI LABs",
      icon: <Code2 className="h-5 w-5" />,
      description:
        "Built responsive React.js interfaces with focus on performance optimization, component reusability, and user-centered design. Enhanced website performance through code splitting and lazy loading.",
    },
    {
      date: "May 2023 - Sep 2024",
      title: "Business Development Manager @ NGENI LABs",
      icon: <Users className="h-5 w-5" />,
      description:
        "Boosted lead generation by 50% and increased revenue by 20%. Developed Python email scraper and secured high-value projects in Blockchain and Web3 space.",
    },
    {
      date: "August 2023 - July 2024",
      title: "Software Developer @ Swiftplay (Remote)",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Building backend systems for e-commerce platforms",
    },
    {
      date: "Jun 2019 - May 2023",
      title: "Full-Stack Developer & Technical Writer @ Writerbay",
      icon: <Globe className="h-5 w-5" />,
      description:
        "Developed ML algorithms improving data processing by 35%. Created Python automation tools and JavaScript dashboards. Mentored 26+ junior developers with 25% bug reduction.",
    },
    {
      date: "Nov 2021 - Mar 2023",
      title: "Technical Support Professional @ Course Hero",
      icon: <GraduationCap className="h-5 w-5" />,
      description:
        "Tutored in Computer Science (JavaScript, Python, C++), Business Studies, and Networking. Achieved 90% satisfaction rating and authored 1,000+ comprehensive solutions.",
    },
    {
      date: "May 2021 - Oct 2021",
      title: "Frontend Developer Intern @ Makueni Tech Hub",
      icon: <Rocket className="h-5 w-5" />,
      description:
        "Developed responsive UIs with HTML, CSS, JavaScript. Optimized website performance achieving 15% faster load times. Led network setup and security implementations.",
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
