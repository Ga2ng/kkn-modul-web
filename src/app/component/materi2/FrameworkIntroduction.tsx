import { FiCode, FiLayers, FiPackage, FiZap } from "react-icons/fi";

export default function FrameworkIntroduction() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Apa itu Framework?
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Kerangka kerja yang mempercepat dan mempermudah pengembangan aplikasi
        </p>
      </section>

      {/* Main Content */}
      <section className="mb-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                  <FiCode className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Definisi Framework
                </h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Dalam dunia pemrograman, framework adalah sebuah kerangka kerja
                yang berisi kumpulan tools, aturan, dan pustaka (library) yang
                sudah siap pakai untuk membantu kita membangun aplikasi atau
                website dengan lebih cepat dan efisien.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 italic">
                  "Framework seperti kotak perkakas lengkap untuk developer"
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex items-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Framework Illustration"
                className="rounded-lg shadow-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analogy Section */}
      <section className="mb-12">
        <div className="bg-purple-50 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4">
              <FiLayers className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Analogi Framework
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                Rangka Bangunan
              </h3>
              <p className="text-gray-600">
                Framework bisa dianalogikan seperti rangka bangunan, jadi sudah
                ada struktur dasar (pondasi, tembok, atap) yang siap pakai, kamu
                tinggal mengatur desain interior dan finishing-nya sesuai
                kebutuhan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                Resep Masakan
              </h3>
              <p className="text-gray-600">
                Seperti resep masakan yang sudah menyediakan daftar bahan dan
                langkah-langkah dasar, sehingga kamu bisa fokus pada variasi dan
                penyajian akhir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Keuntungan Menggunakan Framework
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FiZap className="w-6 h-6 text-yellow-500" />,
              title: "Efisiensi Waktu",
              desc: "Mengurangi waktu pengembangan dengan kode yang sudah tersedia",
            },
            {
              icon: <FiPackage className="w-6 h-6 text-blue-500" />,
              title: "Struktur Konsisten",
              desc: "Memiliki pola pengembangan yang terstandarisasi",
            },
            {
              icon: <FiCode className="w-6 h-6 text-purple-500" />,
              title: "Dukungan Komunitas",
              desc: "Memiliki komunitas besar yang siap membantu",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Siap Memulai dengan Framework?
        </h3>
        <p className="mb-6 opacity-90 max-w-2xl mx-auto">
          Pelajari framework populer seperti React, Vue, atau Laravel untuk
          mempercepat pengembangan aplikasi Anda.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
          Lihat Daftar Framework
        </button>
      </section> */}
    </div>
  );
}