import { FiDownload } from "react-icons/fi";

export default function MateriPPT() {
  const pptFiles = [
    {
      id: 1,
      title: "Pengenalan HTML dan CSS",
      description: "Modul dasar HTML dan CSS untuk pemula",
      fileUrl: "https://www.canva.com/design/DAGnmEzd18k/PXozAiUhKtiddUbBXq9esA/edit?utm_content=DAGnmEzd18k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      size: "online"
    },
    {
      id: 2,
      title: "Pengenalan Framework Bootstrap",
      description: "Pengenalan framework CSS Bootstrap",
      fileUrl: "https://www.canva.com/design/DAGn8SME8ZU/2_qNLG-X13iSAPBnXtpH9w/edit?utm_content=DAGn8SME8ZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      size: "online"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Materi PPT</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pptFiles.map((file) => (
          <div key={file.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{file.title}</h2>
              <p className="text-gray-600 mb-4">{file.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{file.size}</span>
                <a 
                  href={file.fileUrl} 
                  download
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <FiDownload className="mr-2" />
                  Unduh
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}