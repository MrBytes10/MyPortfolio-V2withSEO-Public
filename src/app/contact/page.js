// src/app/contact/page.js (updated with EmailJS)
// B:\mytestProjects\myPortfolioV2\myportfoliov2\src\app\contact\page.js
"use client";
import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faDiscord } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add timestamp to the form data
    const currentTime = new Date().toLocaleString();

    // Create form data with timestamp
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      message: formData.message,
      time: currentTime,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_5gmsdwf", // Replace with your actual service ID// got it from EmailJs Email Servicess tab--
        "template_hc097rg", // Replace with your actual template ID// got it from EmailJs Email templates tab--Settings
        templateParams,
        "ib7BFknkbnJgOy8Lr" // Replace with your actual public key //  got it from EmailJs Account/profile tab--General
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
          setFormData({ name: "", email: "", phone: "", message: "" });
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
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-teal-900/10">
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
          {/* Contact Info */}
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

            <div>
              <label className="block text-teal-300 mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
              />
            </div>

            <div>
              <label className="block text-teal-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-500/20 text-teal-400 py-3 rounded-lg font-semibold hover:bg-teal-500/30 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <>
                  Sending...
                  <svg
                    className="ml-2 h-4 w-4 animate-spin"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-teal-500/20 text-teal-300 px-6 py-3 rounded-lg border border-teal-500/30">
          Message sent successfully! I'll respond within 24 hours.
        </div>
      )}
    </div>
  );
};

export default Contact;
