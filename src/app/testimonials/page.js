// src/.app/testimonials/page.js
import React from "react";
import { Quote, User, Briefcase, Star } from "lucide-react";
import Image from "next/image";
import LindaMoore from "../../../public/images/TestimonialsImages/LindaMoore.jpg";
import CharlesTaylor from "../../../public/images/TestimonialsImages/CharlesTaylor.jpg";
import MichaelChen from "../../../public/images/TestimonialsImages/michael.jpg";
// Importing client logo images
import AfmiLogo from "../../../public/images/ClientTestimonialsLogos/AfmiLogo.png";
import ChankuBackCard from "../../../public/images/ClientTestimonialsLogos/ChankuEastAfricaBackCard.png";
import ChankuGlobalLogo from "../../../public/images/ClientTestimonialsLogos/ChankuGlobalLOGO.jpg";
import PanFramLogo from "../../../public/images/ClientTestimonialsLogos/PanframLOGO.png";
import F6S from "../../../public/images/ClientTestimonialsLogos/f6s-ar21-modified.png";

const testimonials = [
  {
    text: "Augastine's technical expertise transformed our startup's online presence. His dedication and problem-solving skills are unmatched.",
    author: "Charles Taylor",
    role: "Tech Entrepreneur",
    image: CharlesTaylor,
  },
  {
    text: "He streamlined our processes with AI tools, boosting operational efficiency by 40% while maintaining system reliability.",
    author: "Linda Moore",
    role: "Operations Director",
    image: LindaMoore,
  },
  {
    text: "The automations implemented reduced manual work by 25 hours/week, allowing our team to focus on core business activities.",
    author: "Michael Chen",
    role: "Startup Founder",
    image: MichaelChen,
  },
];
// Solution 4: Complete refactored section with consistent sizing
const clientLogos = [
  { src: ChankuBackCard, alt: "Chanku East Africa" },
  { src: AfmiLogo, alt: "AFMI Limited" },
  { src: ChankuGlobalLogo, alt: "Chanku Global" },
  { src: MichaelChen, alt: "Client 4" }, // Note: This seems wrong - should be a logo
  { src: PanFramLogo, alt: "MYA" },
];

const Testimonials = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black to-cyan-900/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Client Voices
          </h1>
          {/* <p className="text-gray-400 text-xl">
            Trusted by innovators and industry leaders
          </p> */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-teal-500/20 p-8 rounded-xl bg-black/30 hover:bg-teal-500/10 transition-colors">
              <Quote className="h-8 w-8 text-teal-400 mb-4" />
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-teal-500/10 rounded-full">
                  <User className="h-6 w-6 text-teal-400" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    {/* <Image
                      src={client1}
                      alt="Charles Taylor"
                      fill
                      className="object-cover"
                      sizes="48px"
                    /> */}
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-300">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client/Company worked with Logos .........................................................*/}
        <div className="mt-16 border-t border-teal-500/20 pt-16">
          <h3 className="text-center text-gray-400 mb-8">
            {" "}
            {/* Companies Worked With: */}
            Trusted By:
          </h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-70">
            <div className="w-[120px] h-[60px] flex items-center justify-center bg-white/5 rounded-lg">
              <Image
                src={ChankuBackCard}
                alt="Client 1"
                width={120}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <div className="w-[120px] h-[60px] flex items-center justify-center bg-white/5 rounded-lg">
              <Image
                src={AfmiLogo}
                alt="Client 2"
                width={120}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <div className="w-[120px] h-[60px] flex items-center justify-center bg-white/5 rounded-lg">
              <Image
                src={F6S}
                alt="Client 4"
                width={120}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <div className="w-[120px] h-[60px] flex items-center justify-center bg-white/5 rounded-lg">
              <Image
                src={ChankuGlobalLogo}
                alt="Client 3"
                width={120}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            <div className="w-[120px] h-[60px] flex items-center justify-center bg-white/5 rounded-lg">
              <Image
                src={PanFramLogo}
                alt="Client 5"
                width={120}
                height={60}
                className="object-contain min-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
