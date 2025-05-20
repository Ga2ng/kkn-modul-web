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
          <div className="prose max-w-4xl">
            <p>
              HTML (HyperText Markup Language) adalah bahasa markup standar
              untuk membuat dan menyusun halaman web. HTML bukan bahasa
              pemrograman karena tidak memiliki logika seperti perulangan atau
              kondisi. HTML bekerja dengan tag untuk menandai elemen seperti
              paragraf, gambar, atau tautan. Setiap halaman web dibangun di atas
              struktur HTML, yang bersifat deklaratif—memberi tahu browser
              elemen apa yang ditampilkan, lalu diterjemahkan menjadi tampilan
              visual. :
            </p>
            <h1>ini contoh tampilan HTML</h1>
            <div className="w-full h-screen">
              <iframe
                src="https://stackblitz.com/edit/bootstrap-basic-template-edfnjmhx?file=index.html"
                width="100%"
                height="100%"
                allow="accelerometer; camera; microphone; midi; geolocation; encrypted-media;"
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
              />
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
