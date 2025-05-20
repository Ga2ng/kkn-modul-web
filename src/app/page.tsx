"use client";
import Image from "next/image";
import { FaRocket, FaCode, FaPalette, FaServer } from "react-icons/fa";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import Link from "next/link";

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
      <section className="container mx-auto px-6 py-20 text-center">
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
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Everything you need to create, launch, and grow your website
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket className="text-blue-600 text-3xl" />,
                title: "Lightning Fast",
                description:
                  "Built with Next.js for blazing fast performance and SEO optimization.",
              },
              {
                icon: <FaPalette className="text-blue-600 text-3xl" />,
                title: "Beautiful Designs",
                description:
                  "Choose from dozens of professionally designed templates.",
              },
              {
                icon: <FaCode className="text-blue-600 text-3xl" />,
                title: "No-Code Builder",
                description:
                  "Drag-and-drop interface makes building easy for everyone.",
              },
              {
                icon: <FaServer className="text-blue-600 text-3xl" />,
                title: "Hosting Included",
                description: "We handle hosting so you can focus on creating.",
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

      {/* Templates Section */}
      <section id="templates" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Stunning Templates
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Get started quickly with our professionally designed templates
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={`/template-${item}.jpg`} // Replace with your actual images
                    alt={`Template ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Template {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for businesses, portfolios, and blogs
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700">
                    Preview Template →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              View All Templates
            </button>
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
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="hover:text-white transition"
                    >
                      {social}
                    </a>
                  )
                )}
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
