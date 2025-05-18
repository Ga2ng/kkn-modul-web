import Image from "next/image";
import React from "react";
import { FaCode } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaCode className="text-blue-600 text-2xl" />
            <span className="text-xl font-bold text-gray-800">Modul Website KKN SI 2025</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
            Get Started
          </button>
        </div>
      </nav>
    </nav>
  );
}
