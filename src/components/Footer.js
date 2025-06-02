// src/components/Footer.js
import React from "react";
import Link from "next/link";
import { Code2, Mail, Phone, Github, Linkedin, Briefcase } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-teal-500/20 bg-black/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Augastine N.
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building intelligent solutions at the intersection of code and AI
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-teal-300 font-semibold mb-2">Navigation</h3>
              <ul className="space-y-2">
                {["Home", "About", "Expertise"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-teal-300 text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-teal-300 font-semibold mb-2">Connect</h3>
              <ul className="space-y-2">
                {["Projects", "Testimonials", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-teal-300 text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-teal-400" />
              <a
                href="mailto:a.m.ndeti@gmail.com"
                className="text-gray-400 hover:text-teal-300 text-sm">
                a.m.ndeti@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-teal-400" />
              <span className="text-gray-400 text-sm">+254 742 125 032</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/MrBytes10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors text-teal-400">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/augastine-ndeti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors text-teal-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://augastine-s-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors text-teal-400">
                <Briefcase className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-500/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Augastine Ndeti. All rights reserved.
            <br />
            {/* <span className="text-xs opacity-75">
              Built with Next.js, Tailwind, and ☕
            </span> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
