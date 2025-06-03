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
        <div className="container mx-auto px-6">
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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-80 bg-gray-200 relative">
                <Image
                  src="/assets/qila.jpg" // Ganti dengan gambar anggota
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
                  src="/assets/gagang.jpg" // Ganti dengan gambar anggota
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
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied users who've created their dream
            websites with WebCraft.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg font-medium">
            Get Started - It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaCode className="text-blue-400 text-2xl" />
                <span className="text-xl font-bold text-white">WebCraft</span>
              </div>
              <p className="mb-4">
                The easiest way to build professional websites without coding.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 text-xl transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-blue-400 text-xl transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-pink-400 text-xl transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-blue-600 text-xl transition">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Templates", "Pricing", "Integrations"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Tutorials", "Blog", "Support"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Careers", "Contact", "Privacy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} WebCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
