// components/FundamentalsSection.tsx
import React from 'react';

const FundamentalsSection = () => {
  return (
    <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Dasar-Dasar Masih Tetap Penting
          </span>
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-gray-700 mb-4">
            Meskipun AI bisa bantu coding, kita tetap perlu menguasai dasar-dasar seperti{' '}
            <span className="font-semibold text-orange-600">HTML</span>,{' '}
            <span className="font-semibold text-orange-600">CSS</span>, dan framework seperti{' '}
            <span className="font-semibold text-orange-600">Bootstrap</span>.
          </p>
          <p className="text-gray-600">
            Karena AI hanya sebaik input yang kita berikan. Tanpa pemahaman dasar, kita tidak bisa:
          </p>
          <ul className="mt-4 space-y-3">
            <FundamentalItem text="Memverifikasi kebenaran output AI" />
            <FundamentalItem text="Melakukan debugging yang efektif" />
            <FundamentalItem text="Membuat prompt yang tepat" />
            <FundamentalItem text="Melakukan customisasi sesuai kebutuhan" />
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center">
            <svg
              className="w-5 h-5 text-amber-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Tips Belajar Dasar Pemrograman
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Mulai dengan projek kecil dan konkret</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Pahami konsep sebelum menggunakan tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Biasakan baca dokumentasi resmi</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Latihan konsisten lebih baik daripada sekaligus banyak</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Sub-component for list items
const FundamentalItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <svg
      className="w-5 h-5 text-amber-400 mr-2 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default FundamentalsSection;