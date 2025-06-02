// src/app/contact/page.js (updated)
"use client";
import React, { useState } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: "", email: "", message: "" });
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
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Linkedin className="h-6 w-6 text-teal-400" />
              </a>
              {/*Github*/}
              <a
                href="https://github.com/MrBytes10"
                target="_blank"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Github className="h-6 w-6 text-teal-400" />
              </a>
              {/*Twitter*/}
              <a
                href="https://twitter.com/mulu_tx"
                target="_blank"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Twitter className="h-6 w-6 text-teal-400" />
              </a>
              {/*TikTok*/}
              <a
                href="https://www.tiktok.com/@mulu_tx?is_from_webapp=1&sender_device=pc"
                target="_blank"
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
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Instagram className="h-6 w-6 text-teal-400" target="_blank" />
              </a>
              {/*Facebook*/}
              <a
                href="https://www.facebook.com/mulu.tx/"
                target="_blank"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <Facebook className="h-6 w-6 text-teal-400" />
              </a>
              {/*Discord*/}
              <a
                href="https://discordapp.com/users/961452033288843284"
                target="_blank"
                className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="h-6 w-6 text-teal-400"
                />
              </a>
              {/*F6S*/}
              {/* <a
                href="https://www.f6s.com/member/augastine-ndeti?follow=1"
                target="_blank"
                title="Follow Augastine Ndeti on F6S">
                <img
                  src="images/f6s-ar21-modified.png"
                  border="0"
                  width="78"
                  height="22 "
                  alt="Follow Augastine Ndeti on F6S"
                  style="width: 22px; height: 22px; padding: 0px; margin: 0px;"
                />
              </a> */}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-teal-300 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
                required
              />
            </div>

            <div>
              <label className="block text-teal-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
                required
              />
            </div>

            <div>
              <label className="block text-teal-300 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="5"
                className="w-full bg-black/30 border border-teal-500/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500/50 outline-none text-gray-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500/20 text-teal-400 py-3 rounded-lg font-semibold hover:bg-teal-500/30 transition-colors flex items-center justify-center gap-2">
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-teal-500/20 text-teal-300 px-6 py-3 rounded-lg border border-teal-500/30">
          Message sent successfully!{" "}
          {/* //or Thank you for reaching out. I&apos;ll
          respond within 24 hours. */}
        </div>
      )}
    </div>
  );
};

export default Contact;
