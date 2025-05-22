// components/BootstrapComponentExamples.tsx
import KontenIframe from "../KontenIframe";
import Link from "next/link";

export default function BootstrapComponentExamples() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contoh Komponen Bootstrap
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Berikut adalah beberapa contoh implementasi komponen Bootstrap seperti tombol, navbar, form, dan card.
        </p>
        <div className="mt-6">
          <Link
            href="https://getbootstrap.com/docs/5.3/components"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
          >
            Lihat Dokumentasi Bootstrap
          </Link>
        </div>
      </div>

      {/* Komponen List */}
      <div className="grid gap-10">
        {/* Button */}
        <div className="bg-white rounded-2xl shadow-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              🎯 Button
            </h2>
            <p className="text-gray-500 text-sm">Contoh penggunaan tombol Bootstrap</p>
          </div>
          <KontenIframe
            src="https://stackblitz.com/edit/stackblitz-starters-zsoddlks?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
            title="Contoh Komponen Button"
          />
        </div>

        {/* Navbar */}
        <div className="bg-white rounded-2xl shadow-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              🧭 Navbar
            </h2>
            <p className="text-gray-500 text-sm">Contoh implementasi navigasi</p>
          </div>
          <KontenIframe
            src="https://stackblitz.com/edit/stackblitz-starters-555s1sr8?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
            title="Contoh Komponen Navbar"
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              📝 Form
            </h2>
            <p className="text-gray-500 text-sm">Contoh pembuatan form dengan Bootstrap</p>
          </div>
          <KontenIframe
            src="https://stackblitz.com/edit/stackblitz-starters-mifhteuz?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
            title="Contoh Komponen Form"
          />
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              💳 Card
            </h2>
            <p className="text-gray-500 text-sm">Contoh penggunaan card Bootstrap</p>
          </div>
          <KontenIframe
            src="https://stackblitz.com/edit/stackblitz-starters-duzoszrk?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
            title="Contoh Komponen Card"
          />
        </div>
      </div>

      {/* Note */}
      <div className="mt-16 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
        <p className="text-green-800 text-base leading-relaxed">
          <strong>Catatan:</strong> Setiap komponen Bootstrap dapat langsung digunakan hanya dengan menambahkan class-class yang sesuai pada HTML, seperti <code className="bg-gray-100 px-1 rounded text-sm">btn btn-primary</code> untuk tombol.
        </p>
      </div>
    </div>
  );
}
