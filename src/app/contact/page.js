// B:\mytestProjects\myPortfolioV2\myportfoliov2\src/app/contact/page.js
"use client";
import React, { useRef, useState, useEffect, Suspense } from "react";
// NEW: Import useSearchParams to read URL query parameters
import { useSearchParams } from "next/navigation";
import { Mail, Phone, Send, Linkedin, Github, Facebook, Instagram, Twitter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faDiscord } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

// NEW: A small wrapper component is needed to use useSearchParams within a Suspense boundary.
const ContactForm = () => {
  const form = useRef();
  const searchParams = useSearchParams(); // Hook to get URL parameters

  // NEW: Add 'purpose' to the form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "General Inquiry", // Default value
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NEW: useEffect to check for URL parameters and pre-fill the form on page load.
  useEffect(() => {
    const purposeParam = searchParams.get("purpose");
    const projectParam = searchParams.get("project");

    if (purposeParam) {
      setFormData((prev) => ({ ...prev, purpose: purposeParam }));
    }

    if (projectParam) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello, I am interested in discussing the project: "${projectParam}".\n\nMy inquiry is regarding: ${
          purposeParam || "..."
        }\n\n[Please add your specific questions here]`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      purpose: formData.purpose, // NEW: Pass purpose to EmailJS
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_5gmsdwf",
        "template_hc097rg",
        templateParams,
        "ib7BFknkbnJgOy8Lr"
      )
      .then(
        (result) => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
          setFormData({ name: "", email: "", phone: "", purpose: "General Inquiry", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-teal-300 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
          required
        />
      </div>

      <div>
        <label className="block text-teal-300 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
          required
        />
      </div>

      {/* NEW: Purpose of Inquiry Dropdown */}
      <div>
        <label className="block text-teal-300 mb-2">Purpose of Inquiry</label>
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300">
          <option>General Inquiry</option>
          <option>Hiring</option>
          <option>Partnership</option>
          <option>Licensing</option>
          <option>Source Code Purchase</option>
        </select>
      </div>

      <div>
        <label className="block text-teal-300 mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="6"
          className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
          required
        />
      </div>

      <div>
        <label className="block text-teal-300 mb-2">Phone (Optional)</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-500/20 text-teal-400 py-3 rounded-lg font-semibold hover:bg-teal-500/30 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
      {showSuccess && (
        <div className="mt-4 p-4 bg-teal-500/20 text-teal-300 rounded-lg border border-teal-500/30 text-center animate-in slide-in-from-top duration-300">
          Message sent successfully! Expect a response within 24 hours.
        </div>
      )}
    </form>
  );
};


const Contact = () => {
  return (
    // <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-teal-900/10">
      <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-400 text-xl">
            Ready to turn your ideas into reality?
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Section (No changes here) */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-teal-500/10 rounded-lg">
                <Mail className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-300 mb-2">
                  Email
                </h3>
                <p className="text-gray-400">a.m.ndeti@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="p-3 bg-teal-500/10 rounded-lg">
                <Phone className="h-6 w-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-300 mb-2">
                  Phone
                </h3>
                <p className="text-gray-400">+254 742 125 032</p>
              </div>
            </div>
            <div className="flex gap-6 mt-12">
              {/* ... All social links ... */}
              {/*LinkedIn*/}
              <a
                href="https://www.linkedin.com/in/augastine-ndeti-290230175?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwZ6ut2hySHGJYPyJsjdf2A%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Linkedin className="h-6 w-6 text-teal-400" />
              </a>
              {/*Github*/}
              <a
                href="https://github.com/MrBytes10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Github className="h-6 w-6 text-teal-400" />
              </a>
              {/*Twitter*/}
              <a
                href="https://twitter.com/mulu_tx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Twitter className="h-6 w-6 text-teal-400" />
              </a>
              {/*TikTok*/}
              <a
                href="https://www.tiktok.com/@mulu_tx?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="h-6 w-6 text-teal-400"
                />
              </a>
              {/*Instagram*/}
              <a
                href="https://www.instagram.com/mulu_tx/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Instagram className="h-6 w-6 text-teal-400" />
              </a>
              {/*Facebook*/}
              <a
                href="https://www.facebook.com/mulu.tx/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Facebook className="h-6 w-6 text-teal-400" />
              </a>
              {/*Discord*/}
              <a
                href="https://discordapp.com/users/961452033288843284"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="h-6 w-6 text-teal-400"
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* NEW: Wrap the form in Suspense for useSearchParams */}
          <Suspense fallback={<div>Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Contact;