import KontenIframe from "../KontenIframe";

// components/BootstrapBasicStructure.tsx
export default function BootstrapBasicStructure() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Judul */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Struktur Dasar Bootstrap</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

      {/* Konten Utama */}
      <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
        {/* Penjelasan Teks */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="mb-6">
            Untuk menggunakan Bootstrap, kita hanya perlu menyisipkan link ke file CSS dan JS dari Bootstrap (biasanya melalui CDN). Setelah itu, kita bisa langsung memakai class-class Bootstrap dalam elemen HTML kita.
          </p>
        </div>

        {/* Contoh Implementasi */}
        <div className="space-y-6">
          {/* Code Block HTML */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Struktur HTML Dasar</h3>
                <KontenIframe src="https://stackblitz.com/edit/stackblitz-starters-zsoddlks?embed=1&file=index.html&hideExplorer=1&hideNavigation=1" title="Struktur Bootstrap Dasar" />
          </div>

          {/* Penjelasan Langkah */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border p-5 rounded-lg bg-blue-50">
              <div className="text-blue-600 font-bold mb-2">1. CSS Bootstrap</div>
              <p className="text-gray-700">
                Tambahkan link CSS Bootstrap di dalam tag <code className="bg-gray-200 px-1 rounded">head</code> untuk styling dasar komponen
              </p>
            </div>
            <div className="border p-5 rounded-lg bg-purple-50">
              <div className="text-purple-600 font-bold mb-2">2. JS Bootstrap</div>
              <p className="text-gray-700">
                Sisipkan script JS Bootstrap sebelum penutup <code className="bg-gray-200 px-1 rounded">body</code> untuk fungsi interaktif
              </p>
            </div>
          </div>

          {/* Catatan */}
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-yellow-700 font-medium">Catatan Penting:</p>
            <p className="text-yellow-600">Pastikan jQuery dan Popper.js sudah terpasang jika menggunakan Bootstrap versi 4 ke bawah.</p>
          </div>
        </div>
      </div>
    </div>
  );
}