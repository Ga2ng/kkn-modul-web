// components/AICodingDemo.tsx
import { useState, useEffect } from 'react';
import KontenIframe from '../KontenIframe';

export default function AICodingDemo() {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Tolong buatkan saya form kontak HTML dengan Bootstrap' },
    { sender: 'ai', text: 'Tentu! Ini kode form kontak menggunakan Bootstrap:' }
  ]);
  const [isTyping, setIsTyping] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    // Simulate AI typing response
    const timer = setTimeout(() => {
      setIsTyping(false);
      setCode(`<div class="container mt-5">
  <h2 class="mb-4">Form Kontak</h2>
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Nama</label>
      <input type="text" class="form-control" id="name" required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" required>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Pesan</label>
      <textarea class="form-control" id="message" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Kirim</button>
  </form>
</div>`);
      setShowEditor(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTryIt = () => {
    // Open StackBlitz with the generated code
    window.open(`https://stackblitz.com/edit/web-platform-9xtkvy?file=index.html,index.css`, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contoh Praktis: AI Membantu Coding
          </span>
        </h2>
        <p className="text-lg text-gray-600">
          Langsung dapatkan solusi coding dengan bantuan AI
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Chat Simulation */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        {/* Chat Header */}
        <div className="bg-gray-800 text-white p-4 flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <h3 className="font-medium">ChatGPT - AI Assistant</h3>
        </div>
        
        {/* Chat Messages */}
        <div className="p-4 space-y-4 h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-3/4 rounded-lg p-3 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Code Editor */}
      {showEditor && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-gray-800">Hasil Kode:</h3>
            {/* <button 
              onClick={handleTryIt}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Coba di StackBlitz
            </button> */}
          </div>
          
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-gray-700 text-gray-300 text-sm flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="ml-2">index.html</span>
            </div>
            {/* <pre className="p-4 overflow-x-auto text-gray-100 text-sm">
              {code}
            </pre> */}
            <KontenIframe src="https://stackblitz.com/edit/stackblitz-starters-9n4jsskj?embed=1&file=index.html&hideExplorer=1&hideNavigation=1" title="Konten Iframe" />
          </div>
        </div>
      )}

      {/* Live Preview */}
      {/* {showEditor && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gray-800 text-white p-3 flex items-center justify-between">
            <h3 className="font-medium">Live Preview</h3>
            <div className="flex space-x-1">
              <span className="w-3 h-3 rounded-full bg-gray-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            </div>
          </div>
          <div className="p-4 border-t">
            <iframe 
              srcDoc={`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <title>Form Kontak</title>
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                  <style>body { padding: 20px; }</style>
                </head>
                <body>
                  ${code}
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
                </body>
                </html>
              `}
              className="w-full h-96 border rounded-lg"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      )} */}

      {/* Explanation */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Bagaimana Ini Bekerja?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Anda bertanya ke AI tentang kebutuhan coding spesifik</li>
          <li>AI menganalisis permintaan dan menghasilkan kode yang relevan</li>
          <li>Kode bisa langsung diuji dan dimodifikasi sesuai kebutuhan</li>
          <li>Proses yang biasanya memakan waktu 30 menit bisa selesai dalam 30 detik</li>
        </ol>
      </div>
    </div>
  );
}