// components/BootstrapDocSimple.tsx
export default function WhatBootstrap() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Apa itu Bootstrap?</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </header>

      {/* Content Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Content Body */}
        <div className="p-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Bootstrap adalah framework CSS yang membantu kita membuat tampilan website yang menarik dan responsif dengan cepat. Framework ini dikembangkan oleh tim di Twitter, dan kini menjadi salah satu yang paling banyak digunakan di dunia web.
          </p>

          <div className="my-8 p-5 bg-gray-50 border rounded-lg">
            <p className="text-gray-700 italic">
              "Bootstrap menyediakan berbagai komponen siap pakai seperti tombol, form, navigasi, dan layout, yang bisa langsung kita gunakan hanya dengan menambahkan class tertentu pada elemen HTML."
            </p>
          </div>

          {/* Visual Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-500">✦</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Key Features */}
          <div className="grid gap-6 md:grid-cols-2 mt-10">
            <div className="p-5 border rounded-lg hover:shadow transition">
              <h3 className="font-bold text-lg text-blue-600 mb-2">Responsif</h3>
              <p className="text-gray-600">Desain otomatis menyesuaikan berbagai ukuran layar</p>
            </div>
            <div className="p-5 border rounded-lg hover:shadow transition">
              <h3 className="font-bold text-lg text-blue-600 mb-2">Komponen Siap Pakai</h3>
              <p className="text-gray-600">Tersedia puluhan komponen UI siap digunakan</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t">
          <p className="text-sm text-gray-500 text-center">
            Dokumentasi Bootstrap • Versi 5.3.0
          </p>
        </div>
      </div>
    </div>
  );
}