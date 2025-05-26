// components/AIThreatOrOpportunity.tsx
import { useState } from "react";

export default function AIThreatOrOpportunity() {
  const [activeView, setActiveView] = useState<
    "balanced" | "threat" | "opportunity"
  >("balanced");
  const [selectedQuote, setSelectedQuote] = useState<number | null>(null);

  const quotes = [
    {
      id: 1,
      text: "AI won't replace humans, but humans with AI will replace humans without AI.",
      author: "Karim Lakhani, Harvard Professor",
      type: "opportunity",
    },
    {
      id: 2,
      text: "The biggest risk with AI isn't malice but competence. A superintelligent AI will be extremely good at accomplishing its goals, and if those goals aren't aligned with ours, we're in trouble.",
      author: "Stephen Hawking",
      type: "threat",
    },
    {
      id: 3,
      text: "AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that AI will not transform in the next several years.",
      author: "Andrew Ng",
      type: "opportunity",
    },
  ];

  const pros = [
    "Meningkatkan produktivitas 10x",
    "Mengotomatiskan tugas repetitif",
    "Membuka lapangan pekerjaan baru",
    "Mempercepat inovasi",
    "Membuat pekerjaan lebih kreatif",
  ];

  const cons = [
    "Potensi pengurangan pekerjaan rutin",
    "Ketergantungan berlebihan pada teknologi",
    "Isu privasi dan keamanan data",
    "Bias algoritma yang tidak disadari",
    "Kesenjangan skill digital",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI = Ancaman atau Peluang?
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Banyak orang khawatir AI akan menggantikan pekerjaan manusia. Namun
          sebenarnya, AI adalah alat bantu yang bisa membuat pekerjaan kita
          lebih cepat dan mudah.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Interactive Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActiveView("threat")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeView === "threat"
                ? "bg-red-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            Ancaman
          </button>
          <button
            onClick={() => setActiveView("balanced")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeView === "balanced"
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            Netral
          </button>
          <button
            onClick={() => setActiveView("opportunity")}
            className={`px-6 py-2 rounded-full transition-all ${
              activeView === "opportunity"
                ? "bg-green-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            Peluang
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* Balanced View (Default) */}
        {activeView === "balanced" && (
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Threats Column */}
              <div className="border-r md:border-r-0 md:border-b pb-8 md:pb-0 md:pr-8">
                <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Potensi Ancaman
                </h3>
                <ul className="space-y-3">
                  {cons.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-400 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities Column */}
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Potensi Peluang
                </h3>
                <ul className="space-y-3">
                  {pros.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-400 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Perspektif Para Ahli
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    onClick={() =>
                      setSelectedQuote(
                        quote.id === selectedQuote ? null : quote.id
                      )
                    }
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedQuote === quote.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <p
                      className={`italic mb-2 ${
                        selectedQuote === quote.id
                          ? "text-blue-700"
                          : "text-gray-600"
                      }`}
                    >
                      "{quote.text}"
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        selectedQuote === quote.id
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      — {quote.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Threat View */}
        {activeView === "threat" && (
          <div className="p-6 md:p-8 bg-red-50">
            <div className="flex items-center mb-6">
              <svg
                className="w-8 h-8 text-red-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-red-700">
                Risiko dan Tantangan AI
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg shadow border">
                <h4 className="font-semibold text-lg text-red-600 mb-3">
                  Dampak pada Pekerjaan
                </h4>
                <p className="text-gray-700">
                  Menurut studi McKinsey, hingga 30% pekerjaan saat ini bisa
                  terotomatisasi pada 2030. Pekerjaan rutin dan berulang paling
                  berisiko, tetapi AI juga mulai mampu melakukan tugas kreatif.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border">
                <h4 className="font-semibold text-lg text-red-600 mb-3">
                  Isu Etika dan Bias
                </h4>
                <p className="text-gray-700">
                  Sistem AI bisa mewarisi bias dari data pelatihannya.
                  Contohnya, algoritma rekrutmen yang diskriminatif atau sistem
                  pengenalan wajah yang kurang akurat untuk kelompok tertentu.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border">
                <h4 className="font-semibold text-lg text-red-600 mb-3">
                  Ketergantungan Teknologi
                </h4>
                <p className="text-gray-700">
                  Ketergantungan berlebihan pada AI dapat mengurangi kemampuan
                  kritis manusia. Juga ada risiko keamanan siber dan
                  penyalahgunaan teknologi untuk tujuan jahat.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-red-200">
              <h4 className="font-semibold text-red-600 mb-4">
                Bagaimana Memitigasi Risiko?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-400 mr-2 mt-0.5"
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
                  <span className="text-gray-700">
                    Regulasi yang jelas tentang penggunaan etis AI
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-400 mr-2 mt-0.5"
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
                  <span className="text-gray-700">
                    Upskilling pekerja untuk beradaptasi dengan perubahan
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-red-400 mr-2 mt-0.5"
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
                  <span className="text-gray-700">
                    Transparansi dalam pengembangan algoritma
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Opportunity View */}
        {activeView === "opportunity" && (
          <div className="p-6 md:p-8 bg-green-50">
            <div className="flex items-center mb-6">
              <svg
                className="w-8 h-8 text-green-500 mr-3"
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
              <h3 className="text-2xl font-bold text-green-700">
                Peluang dan Manfaat AI
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg shadow border">
                <h4 className="font-semibold text-lg text-green-600 mb-3">
                  Revolusi Produktivitas
                </h4>
                <p className="text-gray-700">
                  AI dapat meningkatkan produktivitas hingga 40% menurut PwC.
                  Contoh nyata: dokter menggunakan AI untuk diagnosa lebih
                  cepat, pengacara untuk analisis dokumen, dan desainer untuk
                  menghasilkan prototipe.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border">
                <h4 className="font-semibold text-lg text-green-600 mb-3">
                  Penciptaan Pekerjaan Baru
                </h4>
                <p className="text-gray-700">
                  World Economic Forum memprediksi AI akan menciptakan 97 juta
                  pekerjaan baru pada 2025. Peran seperti AI trainer, ethicist,
                  dan maintenance specialist akan semakin dibutuhkan.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow border">
                <h4 className="font-semibold text-lg text-green-600 mb-3">
                  Solusi Masalah Global
                </h4>
                <p className="text-gray-700">
                  AI membantu memecahkan masalah kompleks seperti perubahan
                  iklim (optimasi energi), kesehatan (penemuan obat), dan
                  pendidikan (pembelajaran personalisasi).
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-green-200">
              <h4 className="font-semibold text-green-600 mb-4">
                Bagaimana Memanfaatkan Peluang?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5"
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
                  <span className="text-gray-700">
                    Pelajari keterampilan baru yang melengkapi AI
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5"
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
                  <span className="text-gray-700">
                    Gunakan AI sebagai asisten untuk meningkatkan efisiensi
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-400 mr-2 mt-0.5"
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
                  <span className="text-gray-700">
                    Fokus pada kemampuan manusiawi yang sulit diotomatisasi
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gray-50 px-6 py-5 border-t">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Siap Beradaptasi dengan Era AI?
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              {activeView === "balanced"
                ? "AI adalah alat yang bisa menjadi ancaman atau peluang, tergantung bagaimana kita mempersiapkan diri."
                : activeView === "threat"
                ? "Dengan kesiapan yang tepat, risiko AI bisa dikelola dan dimitigasi."
                : "Dengan pendekatan yang benar, AI bisa menjadi alat ampuh untuk kemajuan karier dan bisnis."}
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Pelajari Keterampilan AI Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
