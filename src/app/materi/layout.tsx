"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FiHome,
  FiBook,
  FiCode,
  FiChevronDown,
  FiChevronRight,
  FiAward,
  FiBookmark,
  FiFileText,
  FiMessageCircle,
  FiTerminal,
  FiTool,
  FiBookOpen
} from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function MateriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Dapatkan path saat ini
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "pengantar-web": false,
    "bootstrap": false,
  });

  const isActive = (itemSlug: string, subItemSlug?: string) => {
    if (subItemSlug) {
      return pathname === `/materi/${itemSlug}/${subItemSlug}`;
    }
    return pathname.startsWith(`/materi/${itemSlug}`);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        alert("Ctrl + S dinonaktifkan");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleExpand = (slug: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const materiItems = [
    {
      id: 1,
      slug: "pengantar-web",
      title: "Pengenalan HTML dan CSS",
      icon: <FiCode className="text-emerald-500" />,
      subItems: [
        { title: "Tujuan Pembelajaran", slug: "tujuan-pembelajaran" },
        { title: "Apa itu HTML ?", slug: "apa-itu-html" },
        { title: "Peran HTML dan CSS", slug: "peran-html" },
        { title: "Contoh Tag Umum HTML", slug: "contoh-tag-umum-html" },
        { title: "Class dan ID dalam HTML", slug: "class-id-html" },
        { title: "Pengenalan CSS", slug: "pengenalan-css" },
        { title: "Contoh CSS Sederhana", slug: "contoh-css-sederhana" },
        { title: "Kenapa HTML dan CSS Penting?", slug: "kenapa-html-dan-css-penting" },
        { title: "Kesimpulan", slug: "kesimpulan" },
      ],
    },
    {
      id: 2,
      slug: "bootstrap",
      title: "Pengenalan Framework Bootstrap",
      icon: <FiBook className="text-indigo-500" />,
      subItems: [
        { title: "Apa itu Framework ?", slug: "apa-itu-framework" },
        { title: "Kenapa Framework Dibutuhkan ?", slug: "kenapa-framework-diperlukan" },
        { title: "Macam-Macam Framework", slug: "macam-macam-framework" },
        { title: "Apa itu Bootstrap ?", slug: "apa-itu-bootstrap" },
        { title: "Struktur Dasar Bootstrap", slug: "struktur-dasar-bootstrap" },
        { title: "Komponen Bootstrap Populer", slug: "komponen-bootstrap-populer" },
        { title: "Penggunaan Komponen Bootstrap", slug: "penggunaan-komponen-bootstrap" },
        { title: "Grid System Bootstrap", slug: "grid-system-bootstrap" },
        { title: "Contoh Layout Responsive", slug: "contoh-layout-responsive" },
        { title: "Kesimpulan Materi Bootstrap", slug: "kesimpulan-materi-bootstrap" },

      ],
    },
    {
      id: 3,
      slug: "belajar-menggunakan-ai",
      title: "Belajar Menggunakan AI",
      icon: <FiMessageCircle className="text-emerald-500" />,
      subItems: [
        { title: "Apa Itu AI (Artificial Intelligence)?", slug: "apa-itu-ai" },
        { title: "Contoh Penggunaan AI", slug: "contoh-penggunaan-ai" },
        { title: "AI Dalam Dunia IT", slug: "ai-dalam-dunia-it" },
        { title: "AI Dalam Dunia Web Development", slug: "ai-dalam-dunia-web-development" },
        { title: "Contoh AI Membantu Coding", slug: "contoh-ai-membantu-coding" },
        { title: "AI = Ancaman atau Peluang?", slug: "ai-ancaman-atau-peluang" },
        { title: "Dasar-Dasar Masih Tetap Penting", slug: "dasar-dasar-masih-tetap-penting" },
        { title: "Kesimpulan Belajar Menggunakan AI", slug: "kesimpulan-belajar-menggunakan-ai" },
      ],
    },
    {
      id: 4,
      slug: "praktek",
      title: "Implementasi Webiste Portofolio",
      icon: <FiBookOpen className="text-blue-500" />,
      subItems: [
        { title: "Preview", slug: "preview" },
        { title: "Section Sidebar", slug: "sidebar" },
        { title: "Section Hero", slug: "hero" },
        { title: "Section About", slug: "about" },
        { title: "Section Education", slug: "education" },
        { title: "Section Services", slug: "services" },
        { title: "Section Portofolio", slug: "portofolio" },
        { title: "Section Contact", slug: "contact" },
      ],
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 flex flex-col h-full border-r border-gray-200 bg-white">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <FiBookmark className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Modul KKN SI 2025
              </h1>
              <p className="text-sm text-gray-500">Web Development</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4">
            <Link
              href="/materi"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group mb-2"
            >
              <FiHome className="text-gray-500 group-hover:text-indigo-500" />
              <span className="font-medium">Beranda Materi</span>
            </Link>
            <Link
              href="materi/materi-ppt"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group mb-2"
            >
              <FiBook className="text-gray-500 group-hover:text-indigo-500" />
              <span className="font-medium">Materi PPT</span>
            </Link>
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
                Daftar Materi
              </h3>

              <ul className="space-y-1">
                {materiItems.map((item) => (
                  <li
                    key={item.id}
                    className="border-l border-gray-200 ml-4 pl-2"
                  >
                    <div
                      onClick={() => toggleExpand(item.slug)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
                        isActive(item.slug) ? "bg-gray-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span
                          className={`font-medium ${
                            isActive(item.slug) ? "text-indigo-600" : ""
                          }`}
                        >
                          Bab {item.id}: {item.title}
                        </span>
                      </div>
                      {expandedItems[item.slug] ? (
                        <FiChevronDown className="text-gray-400" />
                      ) : (
                        <FiChevronRight className="text-gray-400" />
                      )}
                    </div>

                    {expandedItems[item.slug] && (
                      <ul className="mt-1 space-y-1 pl-2">
                        {item.subItems.map((subItem, index) => (
                          <li key={index}>
                            <Link
                              href={`/materi/${item.slug}#${subItem.slug}`}
                              className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors ${
                                isActive(item.slug, subItem.slug)
                                  ? "text-indigo-600 bg-indigo-50"
                                  : "text-gray-600 hover:text-gray-900"
                              }`}
                            >
                              <BsCircleFill
                                className={`w-2.5 h-2.5 ${
                                  isActive(item.slug, subItem.slug)
                                    ? "text-indigo-500"
                                    : "text-gray-400"
                                }`}
                              />
                              <span>{subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 shrink-0">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Progress
              </span>
              <span className="text-sm text-gray-500">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-1.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="shrink-0">
            <Image
              src="/assets/Logo_SI.png"
              alt="Logo SI"
              width={120}
              height={40}
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Beranda
            </Link>
            <Link href="/materi" className="text-blue-600 font-medium">
              Materi
            </Link>
          </nav>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-full mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
