// B:\mytestProjects\myPortfolioV2\myportfoliov2\src\app\projects\page.js
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Code2, Cpu, Zap } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

// Existing Project Images
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
import TradingView from "../../../public/images/ProjectImages/tradingView5Indicators.jpg";
import TukoNews from "../../../public/images/ProjectImages/tukoNewsNEEWWW.jpg";
import VotingWebApp from "../../../public/images/ProjectImages/voting-webApp.jpg";
import LinkedInEmailScraper from "../../../public/images/ProjectImages/proxycurlScraper.png";

// --- NEW: Add imports for your new project images ---
// IMPORTANT: Replace these with the actual paths to your images in the /public folder
import MyTradeKit1 from "../../../public/images/ProjectImages/MyTradeKit1.png";
import SchoolManagement1 from "../../../public/images/ProjectImages/SchoolSysAdmin1.PNG";
import NyumbaRentals1 from "../../../public/images/ProjectImages/NyumbaRentals1.png";
import NyumbaRentals2 from "../../../public/images/ProjectImages/NyumbaRentals2.png"; // Example for multiple images
import LuxeHaven1 from "../../../public/images/ProjectImages/LuxeHaven1.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    // --- NEW & RE-RANKED AI/ML PROJECTS ---
    {
      id: 14,
      title: "MyTradeKit - AI Trading Platform",
      category: "ai",
      images: [MyTradeKit1], // Use 'images' array
      tech: ["Next.js", "TypeScript", "AI/ML", "TanStack Query"],
      description:
        "A smart trading platform that analyzes and optimizes user-created trading strategies using AI, suggesting improvements and monitoring market conditions.",
      github: "https://github.com/MrBytes10/MyTradeKit-Frontend",
      demo: "#",
      isPrototype: true, // Flag for CTA
    },
    {
      id: 1,
      title: "AI Expense Tracker",
      category: "ai",
      images: [ExpenseTracker],
      tech: ["React", "Python", "TensorFlow"],
      description: "Smart budgeting app with predictive analytics",
      github: "https://github.com/MrBytes10",
      demo: "https://your-expenses-tracker-in-reactjs.vercel.app",
    },
    {
      id: 2,
      title: "Medical Insurance Predictor",
      category: "ai",
      images: [HospitalInsuranceCal],
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
      images: [GoogleStock],
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
      images: [DogecoinPred],
      tech: ["Python", "Pandas", "TensorFlow"],
      description: "Cryptocurrency price forecasting using machine learning",
      github: "https://github.com/MrBytes10/dogeCoin-Prediction--Data-Science",
      demo: "#",
    },

    // --- NEW & RE-RANKED WEB DEVELOPMENT PROJECTS ---
    {
      id: 15,
      title: "School Management System",
      category: "web",
      images: [SchoolManagement1],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "M-PESA"],
      description:
        "A comprehensive school management solution with role-based access for admins, teachers, parents, and students, tailored for Kenyan institutions.",
      github: "https://github.com/MrBytes10/SchoolManagementSystemv1",
      demo: "#",
    },
    {
      id: 16,
      title: "Nyumba Smart Rentals Prototype",
      category: "web",
      images: [NyumbaRentals1, NyumbaRentals2], // Example with two images
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      description:
        "A frontend prototype for a Kenyan property marketplace, featuring property listings, advanced filters, and mock dashboards.",
      github: "https://github.com/MrBytes10/nyumba_smart_rentals_main",
      demo: "#",
      isPrototype: true, // Flag for CTA
    },
    {
      id: 5,
      title: "Portfolio CMS",
      category: "web",
      images: [DjangoPort],
      tech: ["Next.js", "Sanity.io", "Tailwind"],
      description: "Modern portfolio website with headless CMS integration",
      github: "https://github.com/MrBytes10",
      demo: "https://augastine-s-portfolio.vercel.app/",
    },
    {
      id: 6,
      title: "BMI Calculator",
      category: "web",
      images: [BmicalCalculator],
      tech: ["React", "Django", "REST API"],
      description: "Full-stack BMI calculator with Django backend",
      github:
        "https://github.com/MrBytes10/React-and-Django-Integration-sample",
      demo: "https://bmi-calculator-augastine-ndetis-projects.vercel.app/",
    },
    {
      id: 17,
      title: "Luxe Haven Suite System",
      category: "web",
      images: [LuxeHaven1],
      tech: ["React", "TypeScript", "Shadcn/ui", "Vite"],
      description:
        "A luxury hotel booking and management system featuring an elegant UI, real-time availability, and a seamless booking experience.",
      github: "https://github.com/MrBytes10/luxe-haven-suite-system",
      demo: "#",
    },
    {
      id: 7,
      title: "Event Management System",
      category: "web",
      images: [EventManagement],
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
      images: [VotingWebApp],
      tech: ["Django", "Chart.js", "SQLite"],
      description: "Interactive voting system with real-time analytics",
      github: "https://github.com/MrBytes10/django-voting-webApp-with-charts",
      demo: "#",
    },

    // AUTOMATION PROJECTS
    {
      id: 9,
      title: "LinkedIn Scraper Suite",
      category: "automation",
      images: [LinkedInEmailScraper],
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
      images: [GpsPy],
      tech: ["Python", "Folium", "Selenium"],
      description: "Real-time GPS tracking and visualization tool",
      github: "https://github.com/MrBytes10/GPS-Tracking-Using-Python",
      demo: "#",
    },
    {
      id: 11,
      title: "TradingView Indicators",
      category: "automation",
      images: [TradingView],
      tech: ["JavaScript", "TradingView API"],
      description: "Custom technical indicators for market analysis",
      github: "#",
      demo: "https://trading-view-indicators-project-forex-trading.vercel.app/",
    },
    {
      id: 12,
      title: "Tuko News Scraper",
      category: "automation",
      images: [TukoNews],
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
      images: [EmailScraper],
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
                {/* Project Image */}
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={project.images[0]} // --- MODIFIED: Show the first image of the array ---
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
