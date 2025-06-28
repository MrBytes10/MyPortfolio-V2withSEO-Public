// src/components/Header.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { Terminal, Code2 } from "lucide-react";

import logo from "../../public/images/Logos/MuluTx-World-LogoCROPPED.png"; // logo image

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-md fixed w-full z-50 border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          {/* <Terminal className="h-8 w-8 text-teal-400 group-hover:text-cyan-400 transition-colors" /> */}
          {/* <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Augastine N.
          </span> */}
          <Image
            src={logo}
            alt="MulutX Logo"
            width={102}
            height={40}
            className="inline-block mr-2 rounded-t-full hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
