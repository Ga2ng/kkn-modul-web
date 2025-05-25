// components/BootstrapGridSystem.tsx
export default function BootstrapGridSystem() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Grid System di Bootstrap</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            Salah satu fitur andalan Bootstrap adalah sistem grid-nya. Grid ini memungkinkan kita membagi halaman menjadi baris dan kolom yang rapi, dan otomatis menyesuaikan layar pengguna.
          </p>
        </div>

        {/* Grid Visualization */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Struktur Dasar Grid</h2>
          
          {/* Grid Example */}
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-800 text-white p-4">
              <h3 className="font-mono text-sm">Container → Row → Columns</h3>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="container mx-auto border-2 border-blue-500 p-4">
                <div className="row border-2 border-green-500 p-3 mb-3">
                  <div className="col-md-4 border-2 border-red-500 p-3 bg-blue-50">Kolom 1</div>
                  <div className="col-md-4 border-2 border-red-500 p-3 bg-blue-50">Kolom 2</div>
                  <div className="col-md-4 border-2 border-red-500 p-3 bg-blue-50">Kolom 3</div>
                </div>
                <div className="row border-2 border-green-500 p-3">
                  <div className="col-md-6 border-2 border-red-500 p-3 bg-blue-50">Kolom 1</div>
                  <div className="col-md-6 border-2 border-red-500 p-3 bg-blue-50">Kolom 2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakpoints Table */}
          <div className="overflow-x-auto">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Breakpoint Grid Bootstrap</h3>
            <table className="min-w-full border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3 text-left">Breakpoint</th>
                  <th className="border p-3 text-left">Class Prefix</th>
                  <th className="border p-3 text-left">Lebar Layar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Extra small</td>
                  <td className="border p-3 font-mono">.col-</td>
                  <td className="border p-3">&lt;576px</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Small</td>
                  <td className="border p-3 font-mono">.col-sm-</td>
                  <td className="border p-3">≥576px</td>
                </tr>
                <tr>
                  <td className="border p-3">Medium</td>
                  <td className="border p-3 font-mono">.col-md-</td>
                  <td className="border p-3">≥768px</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Large</td>
                  <td className="border p-3 font-mono">.col-lg-</td>
                  <td className="border p-3">≥992px</td>
                </tr>
                <tr>
                  <td className="border p-3">Extra large</td>
                  <td className="border p-3 font-mono">.col-xl-</td>
                  <td className="border p-3">≥1200px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contoh Implementasi</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Code */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="font-mono text-sm">Code</h3>
              </div>
              <pre className="bg-gray-50 p-4 overflow-x-auto text-sm">
                {`<div class="container">
  <div class="row">
    <div class="col-md-8">Konten Utama</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>`}
              </pre>
            </div>
            
            {/* Output */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="font-mono text-sm">Output</h3>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="container mx-auto">
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-2/3 px-2 mb-4">
                      <div className="bg-blue-100 p-4 rounded text-center border border-blue-300">
                        Konten Utama
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 px-2 mb-4">
                      <div className="bg-green-100 p-4 rounded text-center border border-green-300">
                        Sidebar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Feature */}
        <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
          <h3 className="font-bold text-orange-700 mb-2">Fitur Responsif</h3>
          <p className="text-orange-600">
            Grid Bootstrap secara otomatis menyesuaikan tata letak berdasarkan ukuran layar. Kolom akan ditumpuk (stack) secara vertikal di layar kecil dan menyusun horizontal di layar yang lebih besar.
          </p>
        </div>
      </div>
    </div>
  );
}