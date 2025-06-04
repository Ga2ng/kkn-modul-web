import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaCode className="text-blue-600 text-2xl" />
              <span className="text-xl font-bold text-gray-800">Modul Website</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition">
                Home
              </a>
              <a href="#tools" className="text-gray-600 hover:text-blue-600 transition">
                Tools
              </a>
              <a href="#group-members" className="text-gray-600 hover:text-blue-600 transition">
                Group
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
                Contact
              </a>
            </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/Logo_KKN_2.png"
                  alt="Logo KKN"
                  width={70}
                  height={20}
                />
                <Image
                  src="/assets/Logo_SI.png"
                  alt="Logo SI"
                  width={120}
                  height={40}
                />
              </div>
          </div>
        </div>
      </nav>
    </nav>
  );
}
