import React, { useState } from 'react';
import { FiPlay, FiCode, FiEye, FiBook, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import KontenIframe from '../KontenIframe';

export default function PracticeContent() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: <FiBook className="w-5 h-5" /> },
    { id: 'objectives', title: 'Tujuan Pembelajaran', icon: <FiCheckCircle className="w-5 h-5" /> },
    { id: 'preview', title: 'Preview Code', icon: <FiEye className="w-5 h-5" /> },
    // { id: 'tips', title: 'Tips & Tricks', icon: <FiBulb className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <FiPlay className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mulai Praktek !</h1>
            <p className="text-gray-600">Saatnya mengimplementasikan apa yang telah dipelajari</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-1/4"></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Progress: 25% - Mari mulai praktek coding!</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            {section.icon}
            {section.title}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Selamat Datang di Sesi Praktek!</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Pada sesi ini, kita akan menerapkan konsep-konsep yang telah dipelajari sebelumnya. 
                Anda akan mendapatkan pengalaman langsung dalam coding dan melihat hasil karya Anda secara real-time.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="flex items-center gap-3 mb-2">
                    <FiCode className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Hands-on Coding</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Praktek langsung dengan code editor interaktif menggunakan StackBlitz
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <div className="flex items-center gap-3 mb-2">
                    <FiEye className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Live Preview</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Lihat hasil code Anda secara langsung tanpa perlu setup environment
                  </p>
                  <a
                    href="https://stackblitzstarters4txndppu-ujmw--8080--6ba59070.local-credentialless.webcontainer.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-purple-700 hover:underline"
                    >
                    Buka Live Preview →
                    </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'objectives' && (
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FiCheckCircle className="w-6 h-6 text-green-600" />
                Tujuan Pembelajaran
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Implementasi Konsep</h3>
                    <p className="text-gray-700">Menerapkan teori yang telah dipelajari ke dalam praktek coding nyata</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                    <p className="text-gray-700">Mengembangkan kemampuan memecahkan masalah melalui coding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Best Practices</h3>
                    <p className="text-gray-700">Mempelajari praktik terbaik dalam penulisan code yang bersih dan efisien</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Project Building</h3>
                    <p className="text-gray-700">Membangun project nyata yang dapat ditambahkan ke portfolio Anda</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Yang Akan Anda Capai</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-gray-700">✅ Memahami flow kerja development</p>
                  <p className="text-gray-700">✅ Menggunakan tools modern</p>
                  <p className="text-gray-700">✅ Debugging dan testing</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">✅ Code organization yang baik</p>
                  <p className="text-gray-700">✅ Performance optimization</p>
                  <p className="text-gray-700">✅ Project deployment</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'preview' && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FiEye className="w-6 h-6 text-blue-600" />
                Preview Code
              </h2>
              <p className="text-gray-700 mb-6">
                Sebelum memulai, mari lihat preview dari project yang akan kita bangun. 
                Code editor sudah disiapkan dengan StackBlitz untuk pengalaman coding yang optimal.
              </p>
              
              {/* Preview Container */}
              {/* <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
              </div> */}
                <KontenIframe src="https://stackblitz.com/edit/stackblitz-starters-zjg17bgb?embed=1&file=index.html&hideExplorer=1&hideNavigation=1" title="preview" />
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Fitur Code Editor:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-blue-800 text-sm">
                  <p>• Syntax highlighting otomatis</p>
                  <p>• Auto-completion & IntelliSense</p>
                  <p>• Live reload & hot module replacement</p>
                  <p>• Built-in terminal dan file explorer</p>
                  <p>• Package manager terintegrasi</p>
                  <p>• Share dan collaborate features</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'tips' && (
          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                {/* <FiBulb className="w-6 h-6 text-amber-600" /> */}
                Tips & Tricks
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-2">🚀 Sebelum Memulai</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Pastikan koneksi internet stabil untuk StackBlitz</li>
                    <li>• Siapkan catatan untuk mencatat poin-poin penting</li>
                    <li>• Jangan ragu untuk bereksperimen dengan code</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-2">💻 Saat Coding</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Gunakan shortcut keyboard untuk efisiensi (Ctrl+S untuk save)</li>
                    <li>• Manfaatkan console browser untuk debugging</li>
                    <li>• Test setiap perubahan kecil secara bertahap</li>
                    <li>• Baca error message dengan teliti</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-2">🎯 Best Practices</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Tulis code yang bersih dan mudah dibaca</li>
                    <li>• Gunakan naming convention yang konsisten</li>
                    <li>• Tambahkan komentar untuk logic yang kompleks</li>
                    <li>• Refactor code secara berkala</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-2">🤝 Jika Mengalami Kesulitan</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Coba refresh halaman jika StackBlitz tidak responsive</li>
                    <li>• Periksa console untuk error messages</li>
                    <li>• Kembali ke langkah sebelumnya jika stuck</li>
                    <li>• Jangan malu untuk bertanya atau mencari referensi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Siap Memulai Petualangan Coding?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Semua materi telah disiapkan dengan baik. Sekarang saatnya untuk terjun langsung 
            dan mengaplikasikan ilmu yang telah dipelajari. Mari kita coding!
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto">
            Mulai Praktek Sekarang
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}