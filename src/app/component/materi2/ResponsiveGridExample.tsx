import KontenIframe from "../KontenIframe";

// components/ResponsiveGridExample.tsx
export default function ResponsiveGridExample() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Layout Responsif dengan Grid System
        </h1>
        <p className="text-lg text-gray-600">
          Satu kode, tampilan sempurna di semua perangkat
        </p>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Dengan grid system, kita bisa membuat tampilan yang terlihat bagus
            di berbagai perangkat. Misalnya:
          </p>
          <ul className="space-y-2">
            <li>
              Di <span className="font-semibold text-indigo-600">desktop</span>:
              3 kolom sejajar
            </li>
            <li>
              Di <span className="font-semibold text-indigo-600">HP</span>:
              kolom ditumpuk ke bawah
            </li>
          </ul>
          <p className="mt-4">
            Ini penting untuk website portfolio, karena kita tidak tahu
            pengunjung memakai HP atau laptop.
          </p>
        </div>

        {/* Code Implementation */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Implementasi Kode Demo Responsive
          </h2>

          <div className="row">
            {/* Code */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h3 className="font-mono text-sm">HTML</h3>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded">
                  Salin
                </button>
              </div>
              <KontenIframe
                src="https://stackblitz.com/edit/stackblitz-starters-prfjpbra?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
                title="Responsive Grid Example"
              />
            </div>

            <div className="mb-4 mt-4 text-center text-sm text-gray-500 hover:text-gray-800 transition-colors duration-200">
              <p>
                Coba resize text editornya untuk melihat efek responsif / klik
                tombol preview di pojok kanan bawah
              </p>
            </div>

            {/* Code Explanation */}
            <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="bg-gray-900 text-white p-4 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <h3 className="font-mono text-sm ml-2">
                  Anatomi Grid Bootstrap
                </h3>
              </div>

              <div className="p-5">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Key Features */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800 font-medium">
                          Responsive by Default
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          <code className="bg-gray-100 px-1 py-0.5 rounded">
                            col-12 col-md-4
                          </code>{" "}
                          membuat 3 kolom di desktop dan tumpuk vertikal di
                          mobile
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-md bg-purple-100 text-purple-600 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-800 font-medium">
                          Gutter System
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          <code className="bg-gray-100 px-1 py-0.5 rounded">
                            g-4
                          </code>{" "}
                          menambahkan spacing 1.5rem antara kolom
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Code Structure */}
                  <div className="border-l pl-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Struktur Dasar
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          container
                        </code>
                        <span className="mx-2 text-gray-400">→</span>
                        <span>Pembungkus utama</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          row
                        </code>
                        <span className="mx-2 text-gray-400">→</span>
                        <span>Baris untuk kolom</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <code className="bg-gray-100 px-2 py-1 rounded">
                          col-*
                        </code>
                        <span className="mx-2 text-gray-400">→</span>
                        <span>Kolom responsif</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded-md border">
                      <p className="text-xs text-gray-500">
                        Breakpoint default:{" "}
                        <code className="bg-gray-100 px-1 py-0.5 rounded">
                          md
                        </code>{" "}
                        (768px)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Example */}
        <div className="p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
          <h3 className="font-bold text-indigo-700 mb-2">
            Contoh Aplikasi: Website Portfolio
          </h3>
          <p className="text-indigo-600">
            Grid responsif sangat penting untuk portfolio karena:
          </p>
          <ul className="list-disc list-inside mt-2 text-indigo-600">
            <li>Pengunjung bisa datang dari berbagai perangkat</li>
            <li>Tampilan tetap profesional di layar kecil maupun besar</li>
            <li>Konten tersusun rapi tanpa perlu membuat banyak versi</li>
          </ul>
        </div>
      </div>

      {/* Documentation Footer */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-6">
            Explore Official Documentation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bootstrap Official */}
            <a
              href="https://getbootstrap.com/docs/5.3/layout/grid/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c.011-1.63-.783-2.766-2.42-2.955v-.544c1.637-.189 2.431-1.325 2.42-2.955-.01-1.676-.963-2.99-2.694-2.99h-6.44v14.724h6.113c1.73 0 2.685-1.313 2.694-2.99.012-1.63-.783-2.765-2.42-2.955v-.544c1.637-.189 2.431-1.324 2.42-2.955z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    Official Bootstrap Docs
                  </h4>
                  <p className="text-sm text-gray-500">getbootstrap.com</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* W3Schools */}
            <a
              href="https://www.w3schools.com/bootstrap5/bootstrap_grid_system.php"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
            >
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.4 6.6c0-.994.806-1.8 1.8-1.8h15.6c.994 0 1.8.806 1.8 1.8v10.8c0 .994-.806 1.8-1.8 1.8H4.2c-.994 0-1.8-.806-1.8-1.8V6.6zm1.8-.6a.6.6 0 00-.6.6v10.8c0 .331.269.6.6.6h15.6a.6.6 0 00.6-.6V6.6a.6.6 0 00-.6-.6H4.2zm.6 1.2h14.4v9.6H4.8V7.2zm1.8 1.8v6h10.8V9H6.6zm1.2 1.2h8.4v3.6H7.8v-3.6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                    W3Schools Tutorial
                  </h4>
                  <p className="text-sm text-gray-500">w3schools.com</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Need more help? Both resources provide excellent guides for
              Bootstrap Grid System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
