"use client";
import KontenIframe from "@/app/component/KontenIframe";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useRef } from "react";

// Data konten bab dengan struktur sub-bab yang lebih terorganisir
const kontenBab: Record<string, any> = {
  "pengantar-web": {
    judul: "HTML & CSS: Dasar dan Penerapannya",
    subBab: [
      {
        slug: "tujuan-pembelajaran",
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
        slug: "apa-itu-html",
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
                  {/* <iframe
                    src="https://stackblitz.com/edit/bootstrap-basic-template-edfnjmhx?file=index.html"
                    className="w-full h-full border-0"
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    title="HTML Live Demo"
                    loading="lazy"
                  /> */}
                  <KontenIframe title="HTML Live Demo" src="https://stackblitz.com/edit/bootstrap-basic-template-edfnjmhx?file=index.html" />
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
        slug: "peran-html",
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
        judul: "Contoh Tag Umum HTML",
        slug: "contoh-tag-umum-html",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              {/* <h1 className="text-3xl font-bold mb-6">Contoh Tag Umum HTML</h1> */}

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Perkembangan Teknologi Web
                </h2>
                <p className="mb-4">
                  Perkembangan teknologi web dari masa ke masa telah mengalami
                  banyak perubahan signifikan. Berikut adalah beberapa tag HTML
                  dasar yang menjadi fondasi pembuatan web.
                </p>
              </section>

              <section className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Tag HTML yang Sering Digunakan
                </h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <code className="bg-gray-200 px-1 rounded">&lt;h1&gt;</code>{" "}
                    hingga{" "}
                    <code className="bg-gray-200 px-1 rounded">&lt;h6&gt;</code>{" "}
                    untuk judul dengan tingkat penting berbeda
                  </li>
                  <li>
                    <code className="bg-gray-200 px-1 rounded">&lt;p&gt;</code>{" "}
                    untuk paragraf
                  </li>
                  <li>
                    <code className="bg-gray-200 px-1 rounded">&lt;a&gt;</code>{" "}
                    untuk tautan
                  </li>
                  <li>
                    <code className="bg-gray-200 px-1 rounded">
                      &lt;img&gt;
                    </code>{" "}
                    untuk gambar
                  </li>
                  <li>
                    <code className="bg-gray-200 px-1 rounded">&lt;ul&gt;</code>
                    ,{" "}
                    <code className="bg-gray-200 px-1 rounded">&lt;ol&gt;</code>
                    , dan{" "}
                    <code className="bg-gray-200 px-1 rounded">&lt;li&gt;</code>{" "}
                    untuk membuat daftar
                  </li>
                </ul>
                <p>
                  Dengan kombinasi tag-tag ini, kita bisa menyusun struktur
                  konten yang informatif dan mudah dibaca.
                </p>
              </section>

              <section className="mb-8 border-l-4 border-blue-500 pl-4">
                <h2 className="text-2xl font-semibold mb-4">Contoh Praktis</h2>
                <p className="mb-4">
                  Saat kita menuliskan kode HTML dan membuka filenya di browser,
                  kita akan melihat hasilnya dalam bentuk visual. Misalnya,
                  ketika kita menulis:
                </p>

                <pre className="bg-gray-800 text-gray-100 p-4 rounded mb-4 overflow-x-auto">
                  <code>
                    {`<h1>Selamat Datang</h1>
      <p>Ini website pertama saya</p>`}
                  </code>
                </pre>

                <p className="mb-4">
                  Browser akan menampilkan teks besar sebagai judul, dan
                  paragraf di bawahnya. Meskipun tampilannya masih polos, dari
                  sinilah struktur konten mulai terbentuk.
                </p>
                <p>
                  Tanpa perlu styling tambahan, HTML sudah mampu menyusun
                  halaman yang fungsional.
                </p>
              </section>

              <section className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Contoh Struktur HTML
                </h2>
                <div className="w-full h-[500px]">
                  {/* Container dengan tinggi yang ditentukan */}
                  {/* <iframe
                    src="https://stackblitz.com/edit/stackblitz-starters-pfrqyep4?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
                    className="w-full h-[500px] border-0 rounded-lg shadow-md"
                    sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
                    loading="lazy"
                    title="HTML Live Demo"
                  ></iframe> */}
                  <KontenIframe title="HTML Live Demo" src="https://stackblitz.com/edit/stackblitz-starters-pfrqyep4?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"/>
                </div>
              </section>
            </article>
          </div>
        ),
      },
      {
        judul: "Class dan ID dalam HTML",
        slug: "class-id-html",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-blue-600">
                Memahami Class dan ID dalam HTML
              </h1>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Card untuk Class */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-800">
                      Class
                    </h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Digunakan untuk <strong>banyak elemen</strong> sekaligus
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Bisa dipakai <strong>berulang kali</strong> dalam satu
                      halaman
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Ditulis dengan tanda titik di CSS{" "}
                      <code className="bg-blue-100 text-blue-800 px-1 rounded">
                        .nama-class
                      </code>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Cocok untuk <strong>gaya yang konsisten</strong> di banyak
                      elemen
                    </li>
                  </ul>
                </div>

                {/* Card untuk ID */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md border border-purple-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-purple-800">
                      ID
                    </h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Digunakan untuk <strong>satu elemen unik</strong>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Hanya boleh dipakai <strong>sekali</strong> per halaman
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Ditulis dengan tanda pagar di CSS{" "}
                      <code className="bg-purple-100 text-purple-800 px-1 rounded">
                        #nama-id
                      </code>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Cocok untuk <strong>elemen spesifik</strong> yang perlu
                      di-target
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contoh Kode */}
              <section className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Contoh Implementasi
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2 text-gray-700">HTML:</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                      <code>
                        {`<div class="container">
        <p id="header-text">Judul Halaman</p>
        <p class="highlight">Konten pertama</p>
        <p class="highlight">Konten kedua</p>
      </div>`}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-gray-700">CSS:</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                      <code>
                        {`#header-text {
        font-size: 2rem;
        color: navy;
      }
      
      .highlight {
        background-color: yellow;
        padding: 0.5rem;
      }`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* Kesimpulan */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold mb-2 text-green-800">
                  Kesimpulan
                </h3>
                <p className="text-gray-700">
                  Gunakan <strong>class</strong> ketika ingin menerapkan gaya
                  yang sama ke banyak elemen, dan gunakan <strong>id</strong>{" "}
                  untuk elemen unik yang perlu di-target khusus. Kombinasi
                  keduanya membantu menciptakan tampilan website yang konsisten
                  dan terorganisir.
                </p>
              </div>
            </article>
          </div>
        ),
      },
      {
        judul: "Pengenalan CSS",
        slug: "pengenalan-css",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  Apa Itu CSS?
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </header>

              <section className="mb-10 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-b from-blue-500 to-blue-600 p-6 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <h2 className="text-2xl font-bold">CSS</h2>
                      <p className="opacity-90">Cascading Style Sheets</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg text-gray-700 mb-4">
                      <strong>CSS (Cascading Style Sheets)</strong> adalah
                      teknologi yang digunakan untuk mengatur tampilan halaman
                      web. CSS memberi gaya pada elemen HTML, seperti warna,
                      ukuran font, jarak, tata letak, hingga animasi.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <p className="text-gray-700">
                        <span className="font-bold">Fakta Menarik:</span> Tanpa
                        CSS, halaman web hanya akan tampil sebagai teks polos
                        dengan latar putih dan link biru bergaris bawah.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  Keunggulan CSS
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                      title: "Kontrol Layout",
                      desc: "Mengatur tata letak elemen dengan fleksibel menggunakan Grid, Flexbox, dan positioning",
                    },
                    {
                      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                      title: "Konsistensi Visual",
                      desc: "Menjaga keseragaman tampilan di seluruh halaman website",
                    },
                    {
                      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                      title: "Efisiensi Kode",
                      desc: "Satu file CSS dapat digunakan untuk banyak halaman sekaligus",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gray-50 p-8 rounded-xl mb-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Contoh CSS dalam Aksi
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-200 mb-4">
                      <div className="p-4 bg-blue-500 text-white rounded font-bold text-center shadow-md">
                        Tombol Modern
                      </div>
                    </div>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {`.tombol {
        background-color: #3b82f6;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      }`}
                      </code>
                    </pre>
                  </div>

                  <div>
                    <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-200 mb-4">
                      <div className="space-y-4">
                        <div className="p-3 bg-purple-100 border-l-4 border-purple-500 text-purple-800">
                          Notifikasi penting untuk pengguna
                        </div>
                        <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800">
                          Peringatan: Data akan segera dihapus
                        </div>
                      </div>
                    </div>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {`.notifikasi {
        padding: 0.75rem;
        border-left: 4px solid;
        margin-bottom: 1rem;
      }
      
      .info {
        background-color: #f3e8ff;
        border-color: #8b5cf6;
        color: #6b21a8;
      }
      
      .peringatan {
        background-color: #fef9c3;
        border-color: #f59e0b;
        color: #92400e;
      }`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-3">Mengapa CSS Penting?</h3>
                <p className="mb-4 opacity-90">
                  CSS mengubah HTML dari sekadar struktur konten menjadi
                  pengalaman visual yang menarik. Kombinasi HTML (struktur) dan
                  CSS (tampilan) adalah fondasi dari semua website modern.
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Pelajari CSS Lebih Lanjut
                </button>
              </div>
            </article>
          </div>
        ),
      },
      {
        judul: "Cara Menyisipkan CSS",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                3 Cara Menyisipkan CSS ke HTML
              </h1>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Inline CSS */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                      <span className="font-bold text-xl">1</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Inline CSS
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Menulis style langsung dalam elemen HTML menggunakan atribut{" "}
                    <code className="bg-gray-100 px-1 rounded">style</code>
                  </p>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                      {`<h1 style="color: blue; 
          font-size: 24px;">
        Judul Biru
      </h1>`}
                    </code>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-600 flex items-start">
                      <span className="mr-2">⚠️</span>
                      <span>
                        Cocok untuk style khusus satu elemen, tapi tidak
                        disarankan untuk banyak elemen karena sulit dikelola
                      </span>
                    </p>
                  </div>
                </div>

                {/* Internal CSS */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-yellow-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mr-4">
                      <span className="font-bold text-xl">2</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Internal CSS
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Menulis style dalam tag{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      &lt;style&gt;
                    </code>{" "}
                    di bagian{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      &lt;head&gt;
                    </code>{" "}
                    HTML
                  </p>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                      {`<head>
        <style>
          h1 {
            color: green;
            font-size: 24px;
          }
        </style>
      </head>`}
                    </code>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-600 flex items-start">
                      <span className="mr-2">ℹ️</span>
                      <span>
                        Cocok untuk halaman tunggal, tapi kurang efisien untuk
                        banyak halaman
                      </span>
                    </p>
                  </div>
                </div>

                {/* External CSS */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                      <span className="font-bold text-xl">3</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      External CSS
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Menulis CSS di file terpisah (
                    <code className="bg-gray-100 px-1 rounded">.css</code>),
                    lalu dihubungkan dengan tag{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      &lt;link&gt;
                    </code>
                  </p>
                  <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                      {`<head>
        <link rel="stylesheet" 
          href="styles.css">
      </head>`}
                    </code>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600 flex items-start">
                      <span className="mr-2">✅</span>
                      <span>
                        Metode terbaik untuk proyek besar - mudah dikelola,
                        caching browser, dan reusable
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <section className="bg-blue-50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                  Perbandingan Metode
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="py-3 px-4 text-left">Metode</th>
                        <th className="py-3 px-4 text-left">Kelebihan</th>
                        <th className="py-3 px-4 text-left">Kekurangan</th>
                        <th className="py-3 px-4 text-left">Rekomendasi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-medium">Inline</td>
                        <td className="py-3 px-4">
                          Spesifik, prioritas tinggi
                        </td>
                        <td className="py-3 px-4">
                          Sulit dikelola, tidak reusable
                        </td>
                        <td className="py-3 px-4">Style khusus satu elemen</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Internal</td>
                        <td className="py-3 px-4">
                          Organized, reusable dalam satu halaman
                        </td>
                        <td className="py-3 px-4">
                          Tidak bisa dipakai di banyak halaman
                        </td>
                        <td className="py-3 px-4">Halaman tunggal/simple</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">External</td>
                        <td className="py-3 px-4">
                          Reusable, mudah dikelola, performa baik
                        </td>
                        <td className="py-3 px-4">
                          File tambahan yang perlu di-load
                        </td>
                        <td className="py-3 px-4">
                          Proyek besar/multi halaman
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-purple-50 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                  Contoh Implementasi External CSS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2 text-gray-700">
                      HTML (index.html):
                    </h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {`<!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" 
          href="styles.css">
      </head>
      <body>
        <h1 class="judul">Halo Dunia</h1>
      </body>
      </html>`}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-gray-700">
                      CSS (styles.css):
                    </h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>
                        {`.judul {
        color: #3b82f6;
        font-size: 2rem;
        text-align: center;
        margin-top: 2rem;
      }`}
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-purple-200">
                  <p className="text-purple-600">
                    <span className="font-bold">Tip:</span> Gunakan path yang
                    benar saat menghubungkan file CSS. Jika file CSS berada di
                    folder berbeda, gunakan path relatif seperti{" "}
                    <code className="bg-purple-100 px-1 rounded">
                      href="css/styles.css"
                    </code>
                  </p>
                </div>
              </section>
            </article>
          </div>
        ),
      },
      {
        judul: "Contoh CSS Sederhana",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Contoh CSS Sederhana
              </h1>

              {/* Contoh 1: CSS Dasar */}
              <section className="mb-8 bg-blue-50 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                  1. Styling Dasar
                </h2>

                <div className="w-full h-[400px] bg-white rounded-lg shadow-md overflow-hidden mb-4">
                  {/* <iframe
                    src="https://stackblitz.com/edit/stackblitz-starters-jg6mhsqk?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
                    className="w-full h-full border-0"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    title="Contoh CSS Dasar"
                    loading="lazy"
                  ></iframe> */}
                  <KontenIframe title="Contoh CSS Dasar" src="https://stackblitz.com/edit/stackblitz-starters-jg6mhsqk?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"/>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">HTML</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <code>
                        {`<!DOCTYPE html>
      <html>
      <head>
        <title>Contoh CSS</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Belajar CSS</h1>
        <p class="teks-merah">Ini paragraf pertama</p>
        <button>Klik Saya</button>
      </body>
      </html>`}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">CSS</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <code>
                        {`/* Gaya dasar */
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      }
      
      h1 {
        color: #3b82f6;
        margin-bottom: 20px;
      }
      
      .teks-merah {
        color: red;
        font-size: 18px;
      }
      
      button {
        background-color: #3b82f6;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      
      button:hover {
        background-color: #2563eb;
      }`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* Contoh 2: Box Model */}
              <section className="bg-purple-50 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                  2. Box Model
                </h2>

                <div className="w-full h-[400px] bg-white rounded-lg shadow-md overflow-hidden mb-4">
                  {/* <iframe
                    src="https://stackblitz.com/edit/stackblitz-starters-un8sbm7u?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
                    className="w-full h-full border-0"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    title="Contoh Box Model CSS"
                    loading="lazy"
                  ></iframe> */}
                  <KontenIframe title="Contoh Box Model CSS" src="https://stackblitz.com/edit/stackblitz-starters-un8sbm7u?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"/>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">HTML</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <code>
                        {`<!DOCTYPE html>
      <html>
      <head>
        <title>Box Model</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <div class="kotak">Kotak 1</div>
        <div class="kotak spesial">Kotak 2</div>
      </body>
      </html>`}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">CSS</h3>
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <code>
                        {`.kotak {
        width: 200px;
        height: 200px;
        background-color: #8b5cf6;
        color: white;
        margin: 20px;
        padding: 20px;
        border: 5px solid #6d28d9;
        display: inline-block;
      }
      
      .spesial {
        box-sizing: border-box;
        background-color: #ec4899;
      }`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>
            </article>
          </div>
        ),
      },
      {
        judul: "Kenapa HTML dan CSS Penting?",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  Mengapa HTML & CSS Sangat Penting?
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </header>

              <section className="mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt="Web Development"
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                      Fondasi Utama Pembangunan Web
                    </h2>
                    <p className="text-gray-600 mb-4">
                      HTML dan CSS adalah{" "}
                      <span className="font-bold text-blue-600">
                        dasar dari semua halaman web
                      </span>
                      . Seperti rumah yang membutuhkan pondasi kuat, website
                      membutuhkan HTML untuk struktur dan CSS untuk tampilan
                      visual.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="text-gray-700">
                        <span className="font-bold">Fakta:</span> 97% dari semua
                        website di internet menggunakan HTML dan CSS sebagai
                        teknologi dasar.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  Peran Masing-Masing
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        HTML
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Memberikan <strong>struktur dasar</strong> dan konten
                        website
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Tanpa HTML, tidak ada teks, gambar, atau tautan yang
                        bisa ditampilkan
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Membuat kerangka yang dapat dimengerti oleh browser
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        CSS
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Mengatur <strong>tampilan visual</strong> dan tata letak
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Tanpa CSS, website akan terlihat polos dan tidak menarik
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        Memungkinkan desain responsif untuk berbagai perangkat
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                  Pentingnya Kombinasi HTML & CSS
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                      title: "Struktur + Tampilan",
                      desc: "HTML menyediakan struktur, CSS mengatur tampilan - kombinasi sempurna untuk web",
                    },
                    {
                      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                      title: "Dasar Framework",
                      desc: "Semua framework modern (React, Vue, dll) tetap membutuhkan HTML/CSS",
                    },
                    {
                      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                      title: "Aksesibilitas",
                      desc: "HTML yang semantik + CSS yang baik meningkatkan aksesibilitas website",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl text-white">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    HTML & CSS adalah Keterampilan Wajib
                  </h3>
                  <p className="mb-6 opacity-90">
                    Bahkan ketika menggunakan framework modern sekalipun,
                    pemahaman solid tentang HTML dan CSS tetap menjadi syarat
                    utama untuk menjadi web developer yang kompeten.
                  </p>
                  <Link
                    href="https://www.w3schools.com/css/default.asp"
                    passHref
                    legacyBehavior
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
                    >
                      Pelajari Lebih Lanjut
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ),
      },
      {
        judul: "Kesimpulan",
        konten: (
          <div className="container mx-auto px-4 py-8">
            <article className="prose max-w-4xl mx-auto">
              <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                    Kesimpulan
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>
      
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">HTML</h3>
                        <p className="text-gray-600">
                          Membangun <span className="font-bold text-blue-600">struktur dasar</span> dan kerangka konten halaman web
                        </p>
                      </div>
                    </div>
      
                    <div className="flex items-start">
                      <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">CSS</h3>
                        <p className="text-gray-600">
                          Mengatur <span className="font-bold text-purple-600">tampilan visual</span> dan tata letak elemen
                        </p>
                      </div>
                    </div>
                  </div>
      
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Hubungan HTML & CSS</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Saling melengkapi seperti <strong>tulang dan kulit</strong> pada tubuh</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>HTML tanpa CSS = struktur tanpa keindahan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>CSS tanpa HTML = gaya tanpa konten</span>
                      </li>
                    </ul>
                  </div>
                </div>
      
                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Langkah Selanjutnya</h3>
                  <p className="text-gray-600 mb-4">
                    Dengan penguasaan dasar HTML dan CSS, Anda siap melangkah ke teknologi lanjutan seperti:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Bootstrap', 'JavaScript', 'React', 'Tailwind CSS'].map((tech, index) => (
                      <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
      
                <div className="mt-8 text-center">
                  <Link
                    href="/belajar-bootstrap"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-md"
                  >
                    Mulai Belajar Framework
                  </Link>
                </div>
              </section>
            </article>
          </div>
        )
      }
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

  // useEffect(() => {
  //   const handleHash = () => {
  //     const hash = window.location.hash.substring(1);
  //     if (hash) {
  //       const element = document.getElementById(hash);
  //       if (element) {
  //         setTimeout(() => {
  //           element.scrollIntoView({ behavior: 'smooth' });
  //         }, 100);
  //       }
  //     }
  //   };

  //   handleHash();
  //   window.addEventListener('hashchange', handleHash);
  //   return () => window.removeEventListener('hashchange', handleHash);
  // }, []);

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">{bab.judul}</h1>

      {/* Daftar Sub Bab */}
      <div className="space-y-12">
        {bab.subBab.map((subBab: any, index: number) => (
          <section
            key={index}
            className="border-b pb-8 last:border-b-0"
            // id={`subbab-${index + 1}`}
            id={subBab?.slug ?? `subbab-${index + 1}`}
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

// export async function generateMetadata({
//   params,
// }: {
//   params: { bab: string };
// }) {
//   const bab = kontenBab[params.bab];
//   return {
//     title: `${bab?.judul || "Bab Tidak Ditemukan"} | Modul KKN SI 2025`,
//   };
// }
