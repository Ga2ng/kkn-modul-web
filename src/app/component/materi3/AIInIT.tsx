// components/AIInIT.tsx
import { useState } from 'react';

export default function AIInIT() {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'future'>('overview');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const useCases = [
    {
      id: 'data-analysis',
      title: 'Analisis Data',
      description: 'Membaca tren dan pola dari big data secara real-time',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      benefits: [
        'Identifikasi pola pasar',
        'Prediksi kebutuhan bisnis',
        'Optimasi operasional'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Keamanan Siber',
      description: 'Mendeteksi aktivitas mencurigakan secara otomatis',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      benefits: [
        'Deteksi anomali real-time',
        'Respons otomatis terhadap ancaman',
        'Pengurangan false positive'
      ]
    },
    {
      id: 'chatbot',
      title: 'Chatbot',
      description: 'Melayani pelanggan 24 jam nonstop',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      benefits: [
        'Respons instan ke pelanggan',
        'Pengurangan biaya layanan',
        'Skalabilitas tak terbatas'
      ]
    },
    {
      id: 'dev-tools',
      title: 'Software Development',
      description: 'Mempercepat penulisan dan pengecekan kode',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      benefits: [
        'Auto-complete cerdas',
        'Deteksi bug lebih awal',
        'Generasi kode otomatis'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI dalam Dunia IT
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dalam dunia teknologi informasi, AI telah menjadi game-changer dengan berbagai aplikasi revolusioner
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Tabs navigation */}
      <div className="flex justify-center mb-10">
        <nav className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'overview' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'benefits' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Manfaat
          </button>
          <button
            onClick={() => setActiveTab('future')}
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'future' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Masa Depan
          </button>
        </nav>
      </div>

      {/* Content area */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {activeTab === 'overview' && (
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Aplikasi AI di Bidang IT</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((item) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`border rounded-lg p-5 transition-all ${hoveredItem === item.id ? 'border-blue-300 shadow-md' : 'hover:shadow-sm'}`}
                >
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-colors ${hoveredItem === item.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-700">
                <span className="font-semibold">Fakta:</span> AI mempercepat pekerjaan yang sebelumnya hanya bisa dilakukan manusia, dengan akurasi yang terus meningkat seiring pembelajaran.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Manfaat AI untuk IT</h3>
            
            <div className="space-y-8">
              {useCases.map((item) => (
                <div key={item.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <h4 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    {item.title}
                  </h4>
                  <ul className="grid md:grid-cols-3 gap-3">
                    {item.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'future' && (
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Masa Depan AI di IT</h3>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                AI akan semakin terintegrasi dalam semua aspek teknologi informasi, menciptakan:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-5 bg-gradient-to-br from-gray-50 to-white">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Self-Healing Systems
                  </h4>
                  <p className="text-gray-600">
                    Sistem IT yang bisa memperbaiki diri sendiri saat menemui masalah, mengurangi downtime
                  </p>
                </div>
                <div className="border rounded-lg p-5 bg-gradient-to-br from-gray-50 to-white">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    AI-First Development
                  </h4>
                  <p className="text-gray-600">
                    Proses pengembangan software yang didesain dari awal dengan AI sebagai core component
                  </p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-700">
                  <span className="font-semibold">Prediksi:</span> Dalam 5 tahun ke depan, 40% pekerjaan di bidang IT akan berkolaborasi langsung dengan AI.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Closing CTA */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
          Pelajari Implementasi AI di Bidang Anda
        </button>
      </div>
    </div>
  );
}