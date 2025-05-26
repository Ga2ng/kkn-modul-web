// components/AIIntroduction.tsx
import { useState } from 'react';

export default function AIIntroduction() {
  const [activeTab, setActiveTab] = useState('definition');
  const [expandedExample, setExpandedExample] = useState<string | null>(null);

  const examples = [
    {
      id: 'siri',
      name: 'Asisten Virtual (Siri/Google Assistant)',
      description: 'Menggunakan pemrosesan bahasa alami (NLP) untuk memahami dan merespons permintaan pengguna',
      icon: '🗣️'
    },
    {
      id: 'netflix',
      name: 'Rekomendasi Netflix',
      description: 'Menganalisis pola tontonan Anda dan pengguna lain untuk memprediksi konten yang mungkin Anda sukai',
      icon: '🎬'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'Model bahasa besar yang dapat berinteraksi secara kontekstual dan menghasilkan teks mirip manusia',
      icon: '💬'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header with animated gradient */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Apa Itu AI (Artificial Intelligence)?
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>

      {/* Interactive tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 font-medium ${activeTab === 'definition' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Definisi
        </button>
        <button
          onClick={() => setActiveTab('examples')}
          className={`px-6 py-3 font-medium ${activeTab === 'examples' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Contoh
        </button>
        <button
          onClick={() => setActiveTab('learning')}
          className={`px-6 py-3 font-medium ${activeTab === 'learning' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Kemampuan Belajar
        </button>
      </div>

      {/* Content area */}
      <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
        {activeTab === 'definition' && (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-600">AI atau kecerdasan buatan</span> adalah teknologi yang memungkinkan komputer atau mesin untuk meniru kemampuan manusia dalam berpikir, belajar, dan mengambil keputusan.
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-700">
                AI tidak hanya mengikuti instruksi statis, tetapi dapat beradaptasi dengan situasi baru dan meningkatkan performanya seiring waktu.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Contoh AI dalam Kehidupan Sehari-hari</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {examples.map((example) => (
                <div 
                  key={example.id}
                  className={`border rounded-lg p-5 cursor-pointer transition-all ${expandedExample === example.id ? 'border-blue-300 bg-blue-50' : 'hover:border-gray-300'}`}
                  onClick={() => setExpandedExample(expandedExample === example.id ? null : example.id)}
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">{example.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-800">{example.name}</h4>
                      {expandedExample === example.id && (
                        <p className="mt-2 text-sm text-gray-600">{example.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'learning' && (
          <div className="prose prose-lg max-w-none">
            <div className="flex items-start mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Kemampuan Belajar AI</h3>
                <p className="text-gray-700">
                  AI tidak hanya mampu memproses data, tetapi juga bisa <span className="font-semibold text-green-600">"belajar"</span> dari data tersebut untuk membuat keputusan atau prediksi yang lebih cerdas di masa depan.
                </p>
                <p className="mt-4 text-gray-700">
                  Proses ini disebut <span className="font-mono bg-gray-100 px-2 py-1 rounded">machine learning</span>, di mana algoritma AI secara otomatis meningkatkan performanya melalui pengalaman tanpa diprogram secara eksplisit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Interactive demo */}
        <div className="mt-10 p-6 bg-gray-50 rounded-xl border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Coba Bayangkan...</h3>
          <p className="text-gray-600 mb-4">
            Bagaimana jika sistem bisa mengenali pola dan membuat keputusan seperti manusia?
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mengenal gambar</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Memahami bahasa</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Memprediksi tren</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Mengemudi mobil</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>AI terus berkembang dan akan semakin terintegrasi dalam kehidupan kita sehari-hari</p>
      </div>
    </div>
  );
}