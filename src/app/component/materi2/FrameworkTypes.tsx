import { FiLayout, FiServer, FiStar, FiArrowRight } from "react-icons/fi";

export default function FrameworkTypes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Macam-Macam Framework di Dunia Web
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Framework web terbagi menjadi dua jenis utama berdasarkan fungsinya
        </p>
      </section>

      {/* Framework Types Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Framework Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mr-4">
                <FiLayout className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Frontend Framework</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Digunakan untuk membangun tampilan yang dilihat pengguna secara langsung di browser.
              </p>
              
              <h3 className="font-semibold text-lg mb-3 text-gray-800 flex items-center">
                <FiStar className="text-yellow-500 mr-2" />
                Contoh Populer:
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Bootstrap", color: "from-purple-500 to-indigo-500" },
                  { name: "Tailwind CSS", color: "from-blue-400 to-cyan-400" },
                  { name: "Foundation", color: "from-gray-600 to-gray-800" },
                  { name: "Bulma", color: "from-green-400 to-teal-500" },
                ].map((framework, index) => (
                  <span 
                    key={index}
                    className={`bg-gradient-to-r ${framework.color} text-white text-sm font-medium px-3 py-1 rounded-full text-center`}
                  >
                    {framework.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Framework Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 flex items-center">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-full mr-4">
                <FiServer className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Backend Framework</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Digunakan untuk mengatur logika server, database, dan operasi di belakang layar.
              </p>
              
              <h3 className="font-semibold text-lg mb-3 text-gray-800 flex items-center">
                <FiStar className="text-yellow-500 mr-2" />
                Contoh Populer:
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Laravel", color: "from-red-500 to-pink-500" },
                  { name: "Express.js", color: "from-gray-700 to-gray-900" },
                  { name: "Django", color: "from-green-600 to-emerald-600" },
                  { name: "Ruby on Rails", color: "from-red-400 to-pink-400" },
                ].map((framework, index) => (
                  <span 
                    key={index}
                    className={`bg-gradient-to-r ${framework.color} text-white text-sm font-medium px-3 py-1 rounded-full text-center`}
                  >
                    {framework.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Fokus Pembelajaran Kita
              </h2>
              <p className="text-gray-600 mb-4">
                Dalam materi kali ini, kita akan fokus pada salah satu framework frontend yang sangat populer:
              </p>
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-sm border border-indigo-100">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold text-xl">
                  Bootstrap
                </span>
                <FiArrowRight className="ml-2 text-indigo-500" />
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" 
                alt="Bootstrap Logo" 
                className="w-full max-w-[200px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Bootstrap Section */}
      <section className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Mengapa Memilih Bootstrap?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "Mudah Dipelajari",
              desc: "Dokumentasi lengkap dengan contoh kode siap pakai"
            },
            {
              icon: "📱",
              title: "Responsif",
              desc: "Desain otomatis menyesuaikan berbagai perangkat"
            },
            {
              icon: "🎨",
              title: "Komponen Kaya",
              desc: "Button, card, navbar, dan komponen UI siap pakai"
            },
            {
              icon: "🔄",
              title: "Konsisten",
              desc: "Tampilan seragam di semua browser"
            },
            {
              icon: "🌐",
              title: "Komunitas Besar",
              desc: "Banyak sumber belajar dan dukungan"
            },
            {
              icon: "⚡",
              title: "Cepat Develop",
              desc: "Prototyping dan development lebih cepat"
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps CTA */}
      {/* <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Siap Menguasai Bootstrap?
        </h3>
        <p className="mb-6 opacity-90 max-w-2xl mx-auto">
          Mari mulai petualangan belajar framework frontend paling populer di dunia!
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-md">
          Mulai Belajar Bootstrap →
        </button>
      </section> */}
    </div>
  );
}