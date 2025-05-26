// components/AIDailyExamples.tsx
import { useState } from 'react';

export default function AIDailyExamples() {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  const examples = [
    {
      id: 'google-search',
      name: 'Google Search',
      description: 'Menggunakan algoritma RankBrain (AI) untuk memahami maksud pencarian dan memberikan hasil terbaik, bahkan saat query tidak sempurna',
      icon: '🔍',
      benefit: 'Menghemat waktu pencarian dengan hasil yang lebih relevan',
      howItWorks: 'Menganalisis pola pencarian miliaran pengguna dan memahami konteks kata kunci'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      description: 'Sistem rekomendasi yang mempelajari pola tontonan dan preferensi pengguna',
      icon: '🎥',
      benefit: 'Menemukan konten baru yang sesuai minat tanpa harus mencari manual',
      howItWorks: 'Membandingkan perilaku Anda dengan pengguna lain yang memiliki kesamaan minat'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'Asisten AI generatif yang bisa berinteraksi dalam percakapan alami',
      icon: '💬',
      benefit: 'Membantu menulis, coding, terjemahan, dan pemecahan masalah kreatif',
      howItWorks: 'Model bahasa besar yang dilatih dengan miliaran data teks'
    },
    {
      id: 'google-maps',
      name: 'Google Maps',
      description: 'Prediksi lalu lintas dan estimasi waktu tempuh menggunakan AI',
      icon: '🗺️',
      benefit: 'Menghindari kemacetan dan memilih rute tercepat',
      howItWorks: 'Menganalisis data real-time dari jutaan pengguna dan sensor jalan'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header with animated gradient */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contoh AI yang Sering Kita Gunakan
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          AI sebenarnya sudah ada di sekitar kita. Berikut beberapa contoh paling dekat dengan kehidupan sehari-hari:
        </p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4"></div>
      </div>

      {/* Interactive examples grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {examples.map((example) => (
          <div 
            key={example.id}
            onClick={() => setActiveExample(activeExample === example.id ? null : example.id)}
            className={`border rounded-xl p-5 cursor-pointer transition-all ${activeExample === example.id ? 'border-blue-300 shadow-md bg-blue-50' : 'hover:border-gray-300 hover:shadow-sm'}`}
          >
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{example.icon}</span>
              <h3 className="font-semibold text-lg text-gray-800">{example.name}</h3>
            </div>
            <p className="text-gray-600">{example.description}</p>
            
            {activeExample === example.id && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Manfaat</span>
                  <p className="text-sm text-gray-700 mt-1">{example.benefit}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Cara Kerja</span>
                  <p className="text-sm text-gray-700 mt-1">{example.howItWorks}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Impact summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Dampak AI dalam Kehidupan</h3>
            <p className="text-gray-700">
              AI membantu kita membuat keputusan lebih cepat dan efisien. Dari mencari informasi hingga navigasi sehari-hari, 
              teknologi ini telah menjadi asisten tak terlihat yang meningkatkan produktivitas dan kualitas hidup.
            </p>
          </div>
          <div className="md:w-1/3 bg-white p-5 rounded-xl shadow-sm border">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Fakta Cepat
            </h4>
            <p className="text-sm text-gray-600">
              Menurut penelitian, 77% perangkat yang kita gunakan sehari-hari sudah mengintegrasikan AI dalam beberapa bentuk.
            </p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all">
          Pelajari Lebih Lanjut Tentang AI
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Teknologi AI berkembang pesat. Yuk tetap update!
        </p>
      </div>
    </div>
  );
}