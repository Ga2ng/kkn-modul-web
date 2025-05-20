import Link from "next/link";
import { notFound } from "next/navigation";
import fs from 'fs';
import path from 'path';
// import matter from 'gray-matter';

// Data konten bab (bisa dari markdown/API)

const kontenBab: Record<string, any> = {
  "pengantar-web": {
    judul: "Pengantar Web Development",
    konten: (
      <div className="prose max-w-4xl">
        <h2>Konsep Dasar Web</h2>
        <p>Materi ini mencakup:</p>
        <ul>
          <li>Arsitektur client-server</li>
          <li>Peran HTML, CSS, dan JavaScript</li>
          <li>Tools pengembangan modern</li>
        </ul>
      </div>
    ),
    nextSlug: "html-css", // Untuk navigasi antar bab
  },
  "html-css": {
    judul: "HTML & CSS Fundamental",
    konten: (
      <div className="prose max-w-4xl">
        <h2>Struktur Dokumen HTML</h2>
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
    prevSlug: "pengantar-web",
  },
};

export default function BabPage({ params }: { params: { bab: string } }) {
  const bab = kontenBab[params.bab];

  if (!bab) notFound(); // Tampilkan 404 jika bab tidak ada

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">{bab.judul}</h1>
      
      {/* Konten Materi */}
      {bab.konten}

      {/* Navigasi Antar Bab */}
      <div className="flex justify-between mt-12 border-t pt-6">
        {bab.prevSlug && (
          <Link
            href={`/materi/${bab.prevSlug}`}
            className="text-blue-600 hover:underline"
          >
            ← Bab Sebelumnya
          </Link>
        )}
        {bab.nextSlug && (
          <Link
            href={`/materi/${bab.nextSlug}`}
            className="text-blue-600 hover:underline ml-auto"
          >
            Bab Selanjutnya →
          </Link>
        )}
      </div>
    </div>
  );
}

// Generate metadata dinamis
export async function generateMetadata({ params }: { params: { bab: string } }) {
  const bab = kontenBab[params.bab];
  return {
    title: `${bab?.judul || "Bab Tidak Ditemukan"} | Modul KKN SI 2025`,
  };
}