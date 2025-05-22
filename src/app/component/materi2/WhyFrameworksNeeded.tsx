import { FiCheckCircle, FiClock, FiUsers, FiCode } from "react-icons/fi";

export default function WhyFrameworksNeeded() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Kenapa Framework Dibutuhkan dalam Pengembangan Web?
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
      </section>

      {/* Main Content */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                  <FiClock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Efisiensi Pengembangan
                </h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Tanpa framework, setiap baris kode harus kita buat dari awal, 
                bahkan untuk hal-hal sederhana seperti tombol atau layout. 
                Ini jelas tidak efisien, apalagi jika kita mengerjakan banyak 
                proyek atau bekerja di tim besar.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-red-50 to-pink-50 p-8 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Web Development Without Framework"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Framework membantu mempercepat proses coding karena:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="flex items-start">
              <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4 mt-1">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Tidak Membuat dari Nol
                </h3>
                <p className="text-gray-600">
                  Kita bisa menggunakan komponen atau template yang sudah tersedia.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4 mt-1">
                <FiUsers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Standarisasi Tim
                </h3>
                <p className="text-gray-600">
                  Struktur dan penamaan sudah distandarisasi, sehingga mudah dipahami banyak orang.
                </p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="flex items-start">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-full mr-4 mt-1">
                <FiCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Fokus pada Logika
                </h3>
                <p className="text-gray-600">
                  Developer bisa fokus pada logika aplikasi tanpa terlalu banyak repot mengurus desain dasar.
                </p>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="flex items-start">
              <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-4 mt-1">
                <FiClock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Pengembangan Cepat
                </h3>
                <p className="text-gray-600">
                  Mempercepat waktu pengembangan dengan komponen siap pakai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Perbandingan Dengan dan Tanpa Framework
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 text-left">Aspek</th>
                  <th className="p-4 text-left">Tanpa Framework</th>
                  <th className="p-4 text-left">Dengan Framework</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-medium">Waktu Pengembangan</td>
                  <td className="p-4 text-red-500">Lama</td>
                  <td className="p-4 text-green-500">Cepat</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Konsistensi Kode</td>
                  <td className="p-4 text-red-500">Tergantung Developer</td>
                  <td className="p-4 text-green-500">Terstandarisasi</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Kolaborasi Tim</td>
                  <td className="p-4 text-red-500">Sulit</td>
                  <td className="p-4 text-green-500">Mudah</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Maintenance</td>
                  <td className="p-4 text-red-500">Rumit</td>
                  <td className="p-4 text-green-500">Sederhana</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Mulai Belajar Framework Populer Sekarang!
        </h3>
        <p className="mb-6 opacity-90 max-w-2xl mx-auto">
          Pilih framework yang sesuai dengan kebutuhan pengembangan Anda dan percepat proses coding.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
          Lihat Rekomendasi Framework
        </button>
      </section> */}
    </div>
  );
}