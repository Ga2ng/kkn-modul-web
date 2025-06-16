"use client";
import Image from "next/image";
import { FaCode, FaPalette} from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { AiFillOpenAI } from "react-icons/ai";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    let player: any;

    // Dipanggil otomatis oleh YouTube API
    (window as any).onYouTubeIframeAPIReady = () => {
      player = new (window as any).YT.Player("youtube-video", {
        events: {
          // Optional: ready handler
        },
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && player?.pauseVideo) {
            player.pauseVideo();
          }
        });
      },
      { threshold: 0.3 }
    );

    const iframe = document.getElementById("youtube-video");
    if (iframe) observer.observe(iframe);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-y-auto h-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          Modul Online KKN Sistem Informasi ITATS
          <br />
          <span className="text-blue-600">
            Belajar, Berkontribusi, Berdampak
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-center">
          Jelajahi berbagai materi, panduan, dan sumber daya digital yang
          dirancang khusus untuk mendukung perjalanan KKN Mahasiswa Sistem
          Informasi Angkatan 22. Semua bisa diakses kapan saja, di mana saja —
          tanpa batas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/materi">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg text-lg font-medium">
              Mulai Belajar Sekarang
            </button>
          </Link>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition text-lg font-medium">
            Lihat Daftar Modul
          </button>
        </div>

        <div className="mt-16 relative h-96 rounded-xl overflow-hidden shadow-2xl">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yFcDHCOAue0?si=gqc8TTfyzmXMt99Z&amp;start=1370&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe> */}
          <iframe
            id="youtube-video"
            src="https://www.youtube.com/embed/yFcDHCOAue0?start=1370&autoplay=1&mute=1&enablejsapi=1"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="tools" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Tools Behind the Web 
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Discover the essential tools and technologies that power modern websites—from structure and style to interactivity and intelligence. These are the building blocks behind every great web experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCode className="text-blue-600 text-3xl"/>,
                title: "HTML",
                description:
                  "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat dan menyusun halaman web.",
              },
              {
                icon: <FaPalette className="text-blue-600 text-3xl" />,
                title: "CSS",
                description:
                  "CSS adalah cat, dekorasi, dan desain interior yang membuat bangunan tersebut terlihat menarik dan nyaman dilihat.",
              },
              {
                icon: <BsBootstrapFill className="text-blue-600 text-3xl" />,
                title: "Bootstrap",
                description:
                  "Bootstrap adalah framework CSS yang membantu kita membuat tampilan website yang menarik dan responsif dengan cepat.",
              },
              {
                icon: <AiFillOpenAI className="text-blue-600 text-3xl" />,
                title: "AI (Artificial Intelligence)",
                description: "AI atau kecerdasan buatan adalah teknologi yang memungkinkan komputer atau mesin untuk meniru kemampuan manusia dalam berpikir, belajar, dan mengambil keputusan.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Members Section */}
      <section id="group-members" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Group Members
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            This project was created by our team to learn and apply the basic tools behind web development.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Member 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-80 bg-gray-200 relative">
                <Image
                  src="/assets/qila.JPG" // Ganti dengan gambar anggota
                  alt="Member 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Aqilla Yufsi Naffisa</h3>
                <p className="text-gray-600 mb-4">Sekretaris Tim</p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-80 bg-gray-200 relative">
                <Image
                  src="/assets/rifki.jpg" // Ganti dengan gambar anggota
                  alt="Member 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Rifki Ardhana Syahputra</h3>
                <p className="text-gray-600 mb-4">Ketua Tim</p>
              </div>
            </div>

            {/* Member 3 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-80 bg-gray-200 relative">
                <Image
                  src="/assets/gagang.JPG" // Ganti dengan gambar anggota
                  alt="Member 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Ahmad Gagang Prakasa</h3>
                <p className="text-gray-600 mb-4">Pemateri Tim</p>
              </div>
            </div>
            {/* Member 4 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-80 bg-gray-200 relative">
                <Image
                  src="/assets/drian.jpg" // Ganti dengan gambar anggota
                  alt="Member 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">Adrian Frizna</h3>
                <p className="text-gray-600 mb-4">Pemateri Tim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section id = "contact" className="pt-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Contact
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
        Feel free to contact us for any questions, feedback, or collaboration opportunities.
      </p>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Program Akademik Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* F. Teknologi Industri */}
            <div>
              <h3 className="text-white font-semibold mb-4">F. Teknologi Industri</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Teknik Mesin",
                  "Teknik Industri", 
                  "Teknik Kimia",
                  "Teknik Pertambangan",
                  "Teknik Perkapalan"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* F.T. Sipil dan Perencanaan */}
            <div>
              <h3 className="text-white font-semibold mb-4">F.T. Sipil dan Perencanaan</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Teknik Sipil",
                  "Arsitektur",
                  "Teknik Lingkungan"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* F.T. Elektro dan T. Informasi */}
            <div>
              <h3 className="text-white font-semibold mb-4">F.T. Elektro dan T. Informasi</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Teknik Elektro",
                  "Teknik Informatika",
                  "Sistem Informasi"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Pascasarjana */}
            <div>
              <h3 className="text-white font-semibold mb-4">Program Pascasarjana</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Magister Teknik Industri",
                  "Magister Teknik Lingkungan"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Informasi Institusi Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo dan Info ITATS */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/assets/Logo_ITATS_Footer.png"
                  alt="ITATS Logo"
                  width={180}
                  height={250}
                />
              </div>
            </div>

            {/* Alamat */}
            <div>
              <h3 className="text-white font-semibold mb-4">Alamat</h3>
              <div className="space-y-2 text-sm">
                <p>Institut Teknologi Adhi Tama Surabaya</p>
                <p>Jln Arief Rachman Hakim 100, Surabaya 60117</p>
                <p>Telepon : (031) 5991101</p>
                <p>Email : itats@itats.ac.id</p>
              </div>
            </div>

            {/* Unit Kerja */}
            <div>
              <h3 className="text-white font-semibold mb-4">Unit Kerja</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Lembaga Penelitian dan Pengabdian kepada Masyarakat",
                  "Lembaga Pengembangan Institut",
                  "Layanan Kemahasiswaan",
                  "Lembaga Penjaminan Mutu Internal",
                  "Bagian Data dan Sistem Informasi"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media Sosial */}
            <div>
              <h3 className="text-white font-semibold mb-4">Media Sosial</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-sm hover:text-white transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.54v5.79c0 2.84-2.26 5.14-5.09 5.14-2.84 0-5.14-2.26-5.14-5.09V2H1.51v5.79c0 3.98 3.21 7.2 7.2 7.2 3.98 0 7.2-3.21 7.2-7.2V2h2.54v.44c.51 2.28 2.39 4.04 4.69 4.25v-.44z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-sm hover:text-white transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-3 text-sm hover:text-white transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Youtube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} Institut Teknologi Adhi Tama Surabaya. All rights reserved.</p>
          </div>
        </div>
    </footer>
    </section>
    
    </main>
  );
}
