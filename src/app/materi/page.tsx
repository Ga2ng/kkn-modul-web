import Link from "next/link";

export default function MateriIndex() {
  const daftarBab = [
    {
      id: 1,
      slug: "pengantar-web",
      judul: "HTML & CSS: Dasar dan Penerapannya",
      deskripsi: "Memahami dasar-dasar pembuatan website modern dengan pendekatan praktis",
      durasi: "2 Jam Pelajaran",
      level: "Pemula"
    },
    {
      id: 2,
      slug: "bootstrap",
      judul: "Pengenalan Framework Bootstrap",
      deskripsi: "Menjelajahi Bootstrap, kerangka kerja CSS paling populer di dunia, untuk merancang situs web responsif dan mobile-first dengan cepat dan efisien.",
      durasi: "2 Jam Pelajaran",
      level: "Dasar"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navbar Full Width */}
      {/* <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">Modul</span> Pembelajaran
            </h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Beranda</Link>
              <Link href="/materi" className="text-blue-600 font-medium">Materi</Link>
              <Link href="/tentang" className="text-gray-600 hover:text-blue-600 transition">Tentang</Link>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Header Content */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Daftar Materi Pembelajaran</h2>
          <p className="text-gray-600 max-w-3xl">
            Pilih materi pembelajaran berikut untuk memulai perjalanan Anda dalam pengembangan web modern.
            Setiap bab dilengkapi dengan penjelasan mendalam dan contoh praktis.
          </p>
        </div>

        {/* Enhanced Big Cards */}
        <div className="grid gap-8">
          {daftarBab.map((bab) => (
            <Link
              key={bab.id}
              href={`/materi/${bab.slug}`}
              className="block group transition-all duration-200 hover:-translate-y-1"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-200 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 text-xl font-bold px-5 py-3 rounded-lg mr-6">
                      {bab.id}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {bab.judul}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {bab.level}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{bab.deskripsi}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {bab.durasi}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Mulai Belajar</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}