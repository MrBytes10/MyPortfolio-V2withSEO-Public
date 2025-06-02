// src/app/projects/page.js
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Code2, Cpu, Database, Zap } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";
// import HospitalInsuranceCal from "../../../public/images/ProjectImages/hospitalInsuranceDS.png";
import BitcoinPred from "../../../public/images/ProjectImages/bitcoinpred.png";
import BmicalCalculator from "../../../public/images/ProjectImages/bmicalculator_DjangoAndReact.jpg";
import DjangoPort from "../../../public/images/ProjectImages/djangoPort1.jpg";
import DogecoinPred from "../../../public/images/ProjectImages/dogecoinPred.png";
import EmailScraper from "../../../public/images/ProjectImages/email_scraper.jpg";
import EventManagement from "../../../public/images/ProjectImages/event_management_projectt.png";
import ExpenseTracker from "../../../public/images/ProjectImages/expense-tracker-webApp.jpg";
import GoogleStock from "../../../public/images/ProjectImages/googstock.png";
import GpsPy from "../../../public/images/ProjectImages/gpspy.jpg";
import HospitalInsuranceCal from "../../../public/images/ProjectImages/hospitalInsuranceDS.png";
import PotinPy from "../../../public/images/ProjectImages/potinpy.jpg";
import TradingView from "../../../public/images/ProjectImages/tradingView5Indicators.jpg";
import TukoNews from "../../../public/images/ProjectImages/tukoNewsNEEWWW.jpg";
import VotingWebApp from "../../../public/images/ProjectImages/voting-webApp.jpg";
import WebScraper from "../../../public/images/ProjectImages/WEB1scraper.jpg";
import WebpageEmailScraper from "../../../public/images/ProjectImages/webpageEmailScraper.jpg";
import LinkedInEmailScraper from "../../../public/images/ProjectImages/proxycurlScraper.png";
// ...existing code...

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    // Top AI/ML Projects
    {
      id: 1,
      title: "AI Expense Tracker",
      category: "ai",
      image: ExpenseTracker,
      tech: ["React", "Python", "TensorFlow"],
      description: "Smart budgeting app with predictive analytics",
      github: "https://github.com/MrBytes10",
      demo: "https://your-expenses-tracker-in-reactjs.vercel.app",
    },
    {
      id: 2,
      title: "Medical Insurance Predictor",
      category: "ai",
      image: HospitalInsuranceCal,
      tech: ["Python", "Scikit-learn", "Pandas"],
      description:
        "ML model for predicting healthcare costs using advanced analytics",
      github: "https://github.com/MrBytes10/medical_InsurancePricePrediction",
      demo: "#",
    },
    {
      id: 3,
      title: "Google Stock Predictor",
      category: "ai",
      image: GoogleStock,
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      description: "Machine learning model for GOOG stock price predictions",
      github:
        "https://github.com/MrBytes10/DataScience_GOOG-StockPrice-Prediction",
      demo: "#",
    },
    {
      id: 4,
      title: "Dogecoin Price Predictor",
      category: "ai",
      image: DogecoinPred,
      tech: ["Python", "Pandas", "TensorFlow"],
      description: "Cryptocurrency price forecasting using machine learning",
      github: "https://github.com/MrBytes10/dogeCoin-Prediction--Data-Science",
      demo: "#",
    },

    // Top Web Development Projects
    {
      id: 5,
      title: "Portfolio CMS",
      category: "web",
      image: DjangoPort,
      tech: ["Next.js", "Sanity.io", "Tailwind"],
      description: "Modern portfolio website with headless CMS integration",
      github: "https://github.com/MrBytes10",
      demo: "https://augastine-s-portfolio.vercel.app/",
    },
    {
      id: 6,
      title: "BMI Calculator",
      category: "web",
      image: BmicalCalculator,
      tech: ["React", "Django", "REST API"],
      description: "Full-stack BMI calculator with Django backend",
      github:
        "https://github.com/MrBytes10/React-and-Django-Integration-sample",
      demo: "https://bmi-calculator-augastine-ndetis-projects.vercel.app/",
    },
    {
      id: 7,
      title: "Event Management System",
      category: "web",
      image: EventManagement,
      tech: ["Django", "JavaScript", "Bootstrap"],
      description: "Comprehensive event planning and management platform",
      github:
        "https://github.com/MrBytes10/event-management-system-Django-and-Js",
      demo: "#",
    },
    {
      id: 8,
      title: "Voting Analytics Platform",
      category: "web",
      image: VotingWebApp,
      tech: ["Django", "Chart.js", "SQLite"],
      description: "Interactive voting system with real-time analytics",
      github: "https://github.com/MrBytes10/django-voting-webApp-with-charts",
      demo: "#",
    },

    // Top Automation Projects
    {
      id: 9,
      title: "LinkedIn Scraper Suite",
      category: "automation",
      image: LinkedInEmailScraper,
      tech: ["Python", "Proxycurl API", "Pandas"],
      description: "Professional lead generation tool with API integration",
      github:
        "https://github.com/MrBytes10/linkedIn_Emails_Scraper-using-ProxyCurl-API",
      demo: "#",
    },
    {
      id: 10,
      title: "GPS Tracking System",
      category: "automation",
      image: GpsPy,
      tech: ["Python", "Folium", "Selenium"],
      description: "Real-time GPS tracking and visualization tool",
      github: "https://github.com/MrBytes10/GPS-Tracking-Using-Python",
      demo: "#",
    },
    {
      id: 11,
      title: "TradingView Indicators",
      category: "automation",
      image: TradingView,
      tech: ["JavaScript", "TradingView API"],
      description: "Custom technical indicators for market analysis",
      github: "#",
      demo: "https://trading-view-indicators-project-forex-trading.vercel.app/",
    },
    {
      id: 12,
      title: "Tuko News Scraper",
      category: "automation",
      image: TukoNews,
      tech: ["Python", "BeautifulSoup", "Pandas"],
      description: "Automated news extraction and analysis system",
      github:
        "https://github.com/MrBytes10/Tuko-News-Website-Scraper-for-Latest-News",
      demo: "#",
    },
    {
      id: 13,
      title: "Email Scraping Tool",
      category: "automation",
      image: EmailScraper,
      tech: ["Python", "Selenium", "RegEx"],
      description: "Automated email extraction and verification system",
      github:
        "https://github.com/MrBytes10/email-Scraper-Using-Selenium-in-Python",
      demo: "#",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-cyan-900/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Code in Action
          </h1>
          <p className="text-gray-400 text-xl">
            Where Ideas Meet Implementation
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {["all", "web", "ai", "automation"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full capitalize ${
                filter === cat
                  ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                  : "text-gray-400 hover:bg-teal-500/10"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => filter === "all" || p.category === filter)
            .map((project) => (
              <div
                key={project.id}
                className="group border border-teal-500/20 rounded-xl p-6 bg-black/30 hover:bg-teal-500/10 transition-colors cursor-pointer"
                onClick={() => setSelectedProject(project)}>
                {/* Category Icon */}
                {/* <div className="flex justify-between items-center mb-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    {project.category === "ai" ? (
                      <Cpu className="h-6 w-6 text-teal-400" />
                    ) : project.category === "web" ? (
                      <Code2 className="h-6 w-6 text-teal-400" />
                    ) : (
                      <Zap className="h-6 w-6 text-teal-400" />
                    )}
                  </div>
                </div> */}

                {/* Project Image */}
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-900/30 to-cyan-900/30 flex items-center justify-center">
                      <span className="text-teal-400 opacity-50">
                        No preview available
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Title and Description */}
                {/* <h3 className="text-xl font-semibold text-teal-300 mb-2">
                  {project.title}
                </h3> */}
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

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
