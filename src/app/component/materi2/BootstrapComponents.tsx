// components/BootstrapComponents.tsx
export default function BootstrapComponents() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Komponen Bootstrap yang Sering Digunakan
        </h1>
        <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Bootstrap menyediakan banyak komponen yang sering dipakai dalam website. Beberapa yang paling umum antara lain:
        </p>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Button */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Button
            </h2>
            <p className="text-gray-600 mb-4">
              Berbagai warna dan ukuran tombol bisa dibuat dengan class tertentu.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Primary</button>
              <button className="px-4 py-2 bg-gray-200 rounded">Secondary</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded">Success</button>
            </div>
          </div>

          {/* Navbar */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              Navbar
            </h2>
            <p className="text-gray-600 mb-4">
              Navigasi menu yang bisa berubah menjadi menu hamburger di layar kecil.
            </p>
            <div className="border rounded-md overflow-hidden">
              <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                <span>Brand</span>
                <div className="w-6 flex flex-col gap-1">
                  <span className="h-0.5 bg-white"></span>
                  <span className="h-0.5 bg-white"></span>
                  <span className="h-0.5 bg-white"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Form
            </h2>
            <p className="text-gray-600 mb-4">
              Input, checkbox, dropdown dengan tampilan modern.
            </p>
            <div className="space-y-3">
              <input type="text" placeholder="Nama" className="w-full p-2 border rounded" />
              <select className="w-full p-2 border rounded bg-white">
                <option>Pilihan 1</option>
                <option>Pilihan 2</option>
              </select>
            </div>
          </div>

          {/* Card */}
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              Card
            </h2>
            <p className="text-gray-600 mb-4">
              Wadah konten bergaya kotak, cocok untuk menampilkan artikel, gambar, atau profil.
            </p>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-200 h-24"></div>
              <div className="p-4">
                <h3 className="font-bold">Judul Card</h3>
                <p className="text-sm text-gray-600">Deskripsi singkat card</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-10 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-700">
            <span className="font-bold">Kesimpulan:</span> Komponen ini sangat memudahkan pembuatan tampilan website yang konsisten dan menarik.
          </p>
        </div>
      </div>
    </div>
  );
}