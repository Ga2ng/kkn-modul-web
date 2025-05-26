// components/AIWebDev.tsx
import { useState } from 'react';

export default function AIWebDev() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const aiTools = [
    {
      id: 'copilot',
      name: 'GitHub Copilot',
      description: 'Asisten AI untuk menulis kode secara real-time',
      capabilities: [
        'Auto-complete kode',
        'Konversi komentar ke kode',
        'Deteksi error'
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'Model bahasa untuk generasi kode dan konten',
      capabilities: [
        'Bantu debugging',
        'Generate code snippets',
        'Terjemahkan antar bahasa'
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5 3C16.19 3 20 6.58 20 11c0 2.13-.8 4.08-2.12 5.56-.11.12-.22.23-.34.34-.36.36-.73.68-1.12.96-.07.06-.14.11-.21.16-.45.31-.92.57-1.41.78-.12.05-.24.1-.36.14-.5.17-1.02.3-1.54.4-.1.02-.2.04-.3.06-.58.08-1.18.1-1.78.1-4.69 0-8.5-3.58-8.5-8 0-4.42 3.81-8 8.5-8m0-2C5.71 1 1 5.34 1 10.5c0 5.16 4.71 9.5 10.5 9.5.36 0 .72-.02 1.08-.06.25-.02.5-.05.75-.09.35-.05.7-.12 1.03-.21.3-.08.6-.18.89-.29.33-.12.65-.26.96-.42.28-.14.56-.3.82-.47.3-.19.59-.4.86-.63.12-.09.23-.19.34-.29.5-.43.94-.92 1.32-1.45.33-.46.62-.96.86-1.49.2-.46.37-.94.5-1.44.14-.55.22-1.12.24-1.7.02-.5.03-1 .03-1.5 0-4.42-3.58-8-8.5-8z"/>
        </svg>
      )
    },
    {
      id: 'seo-tools',
      name: 'AI SEO Tools',
      description: 'Optimasi konten untuk mesin pencari',
      capabilities: [
        'Generasi meta tag',
        'Analisis kata kunci',
        'Saran perbaikan konten'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header with gradient */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI dan Pengembangan Website
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Dalam konteks pembuatan website, AI kini sudah mulai membantu banyak hal
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* AI Tools showcase */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Alat Bantu AI untuk Web Development</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {aiTools.map((tool) => (
              <div 
                key={tool.id}
                onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
                className={`border rounded-lg p-5 cursor-pointer transition-all ${activeTool === tool.id ? 'border-blue-300 shadow-md bg-blue-50' : 'hover:border-gray-300'}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg mr-4 flex items-center justify-center ${activeTool === tool.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{tool.name}</h4>
                    <p className="text-sm text-gray-500">{tool.description}</p>
                  </div>
                </div>
                
                {activeTool === tool.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h5 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Kemampuan</h5>
                    <ul className="space-y-2">
                      {tool.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 w-4 h-4 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Use cases */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                AI Assistant untuk Coding
              </h4>
              <p className="text-gray-600">
                Seperti GitHub Copilot atau ChatGPT yang bisa membantu menulis kode HTML, CSS, atau JavaScript secara efisien, mengurangi waktu development hingga 50%.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                SEO dan Konten
              </h4>
              <p className="text-gray-600">
                AI dapat membantu menulis artikel, deskripsi produk, bahkan membuat slogan yang menarik dan dioptimalkan untuk mesin pencari.
              </p>
            </div>
          </div>
        </div>

        {/* Impact section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Transformasi Proses Pembuatan Website</h3>
            <p className="text-gray-700 mb-6">
              Dengan AI, proses pembuatan website bisa jauh lebih cepat dan efisien. Waktu development yang sebelumnya memakan waktu berminggu-minggu kini bisa diselesaikan dalam hitungan hari.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-medium text-gray-700">Efisiensi meningkat hingga 60%</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
          Pelajari Cara Mengintegrasikan AI
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Mulai gunakan AI untuk mempercepat workflow development Anda
        </p>
      </div>
    </div>
  );
}