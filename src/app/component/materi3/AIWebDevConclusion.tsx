// components/AIWebDevConclusion.tsx
import React from 'react';

const AIWebDevConclusion = () => {
  return (
    <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Kesimpulan: AI untuk Pengembangan Web
          </span>
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-lg text-blue-600 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Pengembangan Web dengan AI
          </h4>
          <ul className="space-y-3 text-gray-700">
            <ConclusionItem 
              text="AI adalah alat bantu, bukan pengganti keterampilan dasar" 
              emoji="🛠️"
            />
            <ConclusionItem 
              text="Gunakan untuk otomatisasi tugas repetitif (generasi kode boilerplate, testing)" 
              emoji="⚡"
            />
            <ConclusionItem 
              text="Manfaatkan untuk mempercepat proses belajar dan problem solving" 
              emoji="🚀"
            />
            <ConclusionItem 
              text="Tetap perlu pemahaman HTML, CSS, JavaScript untuk verifikasi hasil" 
              emoji="🔍"
            />
            <ConclusionItem 
              text="AI bisa membantu debugging tapi tidak menggantikan pemahaman konsep" 
              emoji="🐛"
            />
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-lg text-purple-600 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Seni Nge-Prompt yang Efektif
          </h4>
          <ul className="space-y-3 text-gray-700">
            <ConclusionItem 
              text="Gunakan bahasa yang spesifik dan jelas" 
              emoji="🎯"
            />
            <ConclusionItem 
              text="Sertakan konteks (framework, bahasa, versi)" 
              emoji="🌐"
            />
            <ConclusionItem 
              text="Berikan contoh output yang diinginkan" 
              emoji="📝"
            />
            <ConclusionItem 
              text="Breakdown prompt kompleks menjadi beberapa langkah" 
              emoji="🔨"
            />
            <ConclusionItem 
              text="Iterasi dan perbaiki prompt berdasarkan hasil" 
              emoji="🔄"
            />
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-blue-600/10 p-5 rounded-lg border border-blue-600/20">
        <h4 className="font-semibold text-lg text-blue-800 mb-3">Kata Kunci Sukses</h4>
        <p className="text-blue-900 mb-4">
          "AI tidak akan menggantikan developer, tapi developer yang menggunakan AI akan menggantikan yang tidak menguasainya."
        </p>
        <div className="flex flex-wrap gap-2">
          <PillTag text="Pemahaman Dasar" />
          <PillTag text="Prompt Engineering" />
          <PillTag text="Verifikasi Hasil" />
          <PillTag text="Continuous Learning" />
          <PillTag text="Problem Solving" />
        </div>
      </div>
    </div>
  );
};

// Sub-component for list items
const ConclusionItem = ({ text, emoji }: { text: string; emoji: string }) => (
  <li className="flex items-start">
    <span className="mr-2 text-lg">{emoji}</span>
    <span>{text}</span>
  </li>
);

// Sub-component for pill tags
const PillTag = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
    {text}
  </span>
);

export default AIWebDevConclusion;