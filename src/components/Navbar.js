// src/components/Navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/expertise", label: "Expertise" },
    { path: "/projects", label: "Projects" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="text-white relative z-50">
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-4 py-2 rounded-lg transition-colors
              ${
                pathname === item.path
                  ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                  : "hover:bg-teal-500/5 hover:text-teal-300"
              }`}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu */}
      {/* Similar mobile implementation to previous example, adjusted for new colors */}

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#f5831e]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-0 w-screen bg-[#020406] z-50">
          <div className="px-12 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path} // Use `href` instead of `to`
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${
                    pathname === item.path // Use `pathname` instead of `location.pathname`
                      ? "bg-[#f5831e] text-white"
                      : "hover:bg-[#f5831e] hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
