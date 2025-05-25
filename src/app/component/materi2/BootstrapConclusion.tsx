export default function BootstrapConclusion() {
  return (
    <div className="prose max-w-4xl">
      {/* Kesimpulan Bootstrap untuk Pemula */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Kesimpulan Belajar Bootstrap
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Takeaways */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Poin Penting
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Bootstrap adalah{" "}
                    <span className="font-medium">framework CSS</span> paling
                    populer untuk pengembangan web cepat
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Grid System</span> adalah
                    fitur utama untuk layout responsif
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Menyediakan{" "}
                    <span className="font-medium">komponen siap pakai</span>{" "}
                    (button, card, navbar, dll)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    Menghemat waktu dengan{" "}
                    <span className="font-medium">class utility</span> yang
                    konsisten
                  </p>
                </li>
              </ul>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 text-purple-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Langkah Selanjutnya
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="group flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                >
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      Pelajari Komponen Lanjutan
                    </h4>
                    <p className="text-sm text-gray-500">
                      Modal, Carousel, Tooltip
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="group flex items-center p-3 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors"
                >
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                      Praktik Membuat Project
                    </h4>
                    <p className="text-sm text-gray-500">
                      Website Portfolio atau Blog
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="group flex items-center p-3 border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
                >
                  <div className="bg-green-100 p-2 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">
                      Pelajari Best Practices
                    </h4>
                    <p className="text-sm text-gray-500">
                      Customization dan Optimization
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="mt-10 text-center">
            <blockquote className="text-lg italic text-gray-600">
              "Bootstrap adalah pintu gerbang Anda untuk mengembangkan website
              modern tanpa harus ahli CSS."
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">
              Mulai dengan komponen dasar, kuasai grid system, lalu eksplorasi
              fitur lanjutan!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
