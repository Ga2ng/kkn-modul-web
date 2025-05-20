import Link from "next/link";
import { notFound } from "next/navigation";

// Data konten bab dengan struktur sub-bab yang lebih terorganisir
const kontenBab: Record<string, any> = {
  "pengantar-web": {
    judul: "HTML & CSS: Dasar dan Penerapannya",
    subBab: [
      {
        judul: "Tujuan Pembelajaran",
        konten: (
          <div className="prose max-w-4xl">
            <p className="mb-5">
              Dalam sesi ini, kita akan mempelajari dasar-dasar HTML dan CSS,
              dua komponen utama dalam pembuatan halaman web. Pemahaman tentang
              HTML dan CSS ini sangat penting sebelum kita mulai praktik membuat
              website portofolio. HTML (HyperText Markup Language) adalah bahasa
              markup yang digunakan untuk struktur dan konten web, sedangkan CSS
              (Cascading Style Sheets) digunakan untuk styling dan layout web.
            </p>
            <ul className="list-disc list-inside text-blue-500">
              <li className="mb-1">Apa itu HTML dan CSS?</li>
              <li className="mb-1">Fungsi HTML dan CSS</li>
              <li className="mb-1">Melihat Contoh sederhana penggunaannya</li>
            </ul>
          </div>
        ),
      },
      {
        judul: "Apa itu HTML ?",
        konten: (
          <div className="prose max-w-4xl mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Pengenalan HTML
              </h2>
              <p className="text-gray-700 leading-relaxed">
                HTML (HyperText Markup Language) adalah bahasa markup standar
                untuk membuat dan menyusun halaman web. HTML bukan bahasa
                pemrograman karena tidak memiliki logika seperti perulangan atau
                kondisi.
              </p>
              <ul className="list-disc pl-6 my-4 space-y-2 text-gray-700">
                <li>Bekerja dengan tag untuk menandai elemen</li>
                <li>
                  Mendefinisikan struktur konten seperti paragraf, gambar, atau
                  tautan
                </li>
                <li>
                  Bersifat deklaratif - memberi tahu browser elemen apa yang
                  ditampilkan
                </li>
                <li>Diterjemahkan menjadi tampilan visual oleh browser</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contoh Struktur HTML
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 overflow-x-auto">
                <pre className="text-sm text-gray-800">
                  {`<!DOCTYPE html>
<html>
<head>
  <title>Contoh Halaman</title>
</head>
<body>
  <h1>Judul Utama</h1>
  <p>Ini adalah paragraf contoh.</p>
</body>
</html>`}
                </pre>
              </div>
              <p className="text-gray-600 text-sm italic">
                Kode dasar HTML menunjukkan struktur dokumen yang terdiri dari
                head dan body.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Demo Interaktif
              </h2>
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-2 border-b">
                  <h3 className="font-medium text-gray-700">
                    Editor HTML Live Preview
                  </h3>
                </div>
                <div className="h-[500px] w-full">
                  <iframe
                    src="https://stackblitz.com/edit/bootstrap-basic-template-edfnjmhx?file=index.html"
                    className="w-full h-full border-0"
                    allow="accelerometer; camera; microphone; midi; geolocation; encrypted-media;"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    title="HTML Live Demo"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600 border-t">
                  Gunakan editor di atas untuk bereksperimen dengan kode HTML
                  langsung.
                </div>
              </div>
            </section>
          </div>
        ),
      },
      {
        judul: "Peran HTML dan CSS dalam pembuatan website",
        konten: (
          <div className="prose max-w-4xl mx-auto">
            <section className="mb-10">
              {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                Hubungan HTML & CSS
              </h2> */}

              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    HTML dan CSS saling melengkapi dalam membangun website. HTML
                    menyusun struktur halaman seperti judul, paragraf, gambar,
                    dan tautan.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    CSS mempercantik tampilannya—mengatur warna, font, jarak,
                    dan tata letak. Tanpa HTML, tidak ada konten; tanpa CSS,
                    tampilannya akan polos.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Keduanya bersama-sama membuat website menjadi fungsional dan
                    menarik.
                  </p>
                </div>

                <div className="flex-1">
                  <img
                    src="https://th.bing.com/th/id/OIP.qwEj4wIktb0U0xR2u59XZgHaHE?rs=1&pid=ImgDetMain"
                    alt="Ilustrasi hubungan HTML dan CSS"
                    className="rounded-lg shadow-md w-full h-auto border"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">
                    HTML sebagai struktur bangunan, CSS sebagai desain interior
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Peran HTML
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Struktur konten</li>
                    <li>Semantik dokumen</li>
                    <li>Dasar aksesibilitas</li>
                    <li>Kerangka halaman</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Peran CSS
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Tampilan visual</li>
                    <li>Tata letak halaman</li>
                    <li>Responsivitas</li>
                    <li>Animasi sederhana</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Tip:</strong> Pelajari HTML terlebih dahulu untuk
                    memahami struktur dasar, baru kemudian pelajari CSS untuk
                    memperindah tampilan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        judul: "Sejarah Internet",
        konten: (
          <div className="prose max-w-4xl">
            <p>Perkembangan teknologi web dari masa ke masa:</p>
            <ol>
              <li>Web 1.0 - Static Pages</li>
              <li>Web 2.0 - Interactive</li>
              <li>Web 3.0 - Semantic Web</li>
            </ol>
          </div>
        ),
      },
      {
        judul: "Sejarah Internet",
        konten: (
          <div className="prose max-w-4xl">
            <p>Perkembangan teknologi web dari masa ke masa:</p>
            <ol>
              <li>Web 1.0 - Static Pages</li>
              <li>Web 2.0 - Interactive</li>
              <li>Web 3.0 - Semantic Web</li>
            </ol>
          </div>
        ),
      },
      {
        judul: "Sejarah Internet",
        konten: (
          <div className="prose max-w-4xl">
            <p>Perkembangan teknologi web dari masa ke masa:</p>
            <ol>
              <li>Web 1.0 - Static Pages</li>
              <li>Web 2.0 - Interactive</li>
              <li>Web 3.0 - Semantic Web</li>
            </ol>
          </div>
        ),
      },
      {
        judul: "Sejarah Internet",
        konten: (
          <div className="prose max-w-4xl">
            <p>Perkembangan teknologi web dari masa ke masa:</p>
            <ol>
              <li>Web 1.0 - Static Pages</li>
              <li>Web 2.0 - Interactive</li>
              <li>Web 3.0 - Semantic Web</li>
            </ol>
          </div>
        ),
      },
      {
        judul: "Sejarah Internet",
        konten: (
          <div className="prose max-w-4xl">
            <p>Perkembangan teknologi web dari masa ke masa:</p>
            <ol>
              <li>Web 1.0 - Static Pages</li>
              <li>Web 2.0 - Interactive</li>
              <li>Web 3.0 - Semantic Web</li>
            </ol>
          </div>
        ),
      },
    ],
    nextSlug: "html-css",
  },
  "html-css": {
    judul: "HTML & CSS Fundamental",
    subBab: [
      {
        judul: "Struktur Dokumen HTML",
        konten: (
          <div className="prose max-w-4xl">
            <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>Contoh</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`}</pre>
          </div>
        ),
      },
      {
        judul: "Dasar-Dasar CSS",
        konten: (
          <div className="prose max-w-4xl">
            <p>Contoh CSS dasar:</p>
            <pre>{`body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}`}</pre>
          </div>
        ),
      },
      {
        judul: "Layout dengan Flexbox",
        konten: (
          <div className="prose max-w-4xl">
            <p>Flexbox memudahkan pembuatan layout yang responsif:</p>
            <pre>{`.container {
  display: flex;
  justify-content: space-between;
}`}</pre>
          </div>
        ),
      },
    ],
    prevSlug: "pengantar-web",
  },
};

export default function BabPage({ params }: { params: { bab: string } }) {
  const bab = kontenBab[params.bab];

  if (!bab) notFound();

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">{bab.judul}</h1>

      {/* Daftar Sub Bab */}
      <div className="space-y-12">
        {bab.subBab.map((subBab: any, index: number) => (
          <section
            key={index}
            className="border-b pb-8 last:border-b-0"
            id={`subbab-${index + 1}`}
          >
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm mr-3">
                Sub-bab {index + 1}
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">
                {subBab.judul}
              </h2>
            </div>
            <div className="pl-10">{subBab.konten}</div>
          </section>
        ))}
      </div>

      {/* Navigasi Antar Bab */}
      <div className="flex justify-between mt-12 border-t pt-6">
        {bab.prevSlug && (
          <Link
            href={`/materi/${bab.prevSlug}`}
            className="text-blue-600 hover:underline flex items-center"
          >
            ← Bab Sebelumnya
          </Link>
        )}
        {bab.nextSlug && (
          <Link
            href={`/materi/${bab.nextSlug}`}
            className="text-blue-600 hover:underline ml-auto flex items-center"
          >
            Bab Selanjutnya →
          </Link>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { bab: string };
}) {
  const bab = kontenBab[params.bab];
  return {
    title: `${bab?.judul || "Bab Tidak Ditemukan"} | Modul KKN SI 2025`,
  };
}
