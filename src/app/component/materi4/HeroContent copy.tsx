import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';

export default function HeroContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const htmlCode = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <h1>Hello, world!</h1>
  <h1>Ayo lah</h1>
  <h1>Ayo lah</h1>
  </body>
</html>`;

  const cssCode = `/* CSS Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
  margin: 20px 0;
  font-size: 2rem;
}

h1:first-of-type {
  color: #007bff;
}

h1:last-of-type {
  color: #28a745;
}`;

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2000);
    } catch (err) {
      console.error('Failed to copy HTML code: ', err);
    }
  };

  const handleCopyCss = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 2000);
    } catch (err) {
      console.error('Failed to copy CSS code: ', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <FiFileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hero Section HTML & CSS</h1>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-blue-700">Langkah 2</span>
                <span className="text-sm text-gray-600">2 / 7</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '28.57%' }}></div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* HTML Code Block */}
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
          {/* Code Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm font-mono ml-2">index.html</span>
            </div>
            
            {/* Copy Button */}
            <button
              onClick={handleCopyHtml}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md transition-colors text-sm"
            >
              {copiedHtml ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <FiCopy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          
          {/* Code Content */}
          <div className="p-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-gray-300 font-mono">
                <span className="text-gray-500">&lt;!doctype html&gt;</span>{'\n'}
                <span className="text-orange-400">&lt;html</span> <span className="text-blue-400">lang</span>=<span className="text-green-400">"en"</span><span className="text-orange-400">&gt;</span>{'\n'}
                {'  '}<span className="text-orange-400">&lt;head&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;meta</span> <span className="text-blue-400">charset</span>=<span className="text-green-400">"utf-8"</span><span className="text-orange-400">&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;meta</span> <span className="text-blue-400">name</span>=<span className="text-green-400">"viewport"</span> <span className="text-blue-400">content</span>=<span className="text-green-400">"width=device-width, initial-scale=1"</span><span className="text-orange-400">&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;title&gt;</span><span className="text-white">Bootstrap demo</span><span className="text-orange-400">&lt;/title&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;link</span> <span className="text-blue-400">rel</span>=<span className="text-green-400">"stylesheet"</span> <span className="text-blue-400">href</span>=<span className="text-green-400">"style.css"</span><span className="text-orange-400">&gt;</span>{'\n'}
                {'  '}<span className="text-orange-400">&lt;/head&gt;</span>{'\n'}
                {'  '}<span className="text-orange-400">&lt;body&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;h1&gt;</span><span className="text-white">Hello, world!</span><span className="text-orange-400">&lt;/h1&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;h1&gt;</span><span className="text-white">Ayo lah</span><span className="text-orange-400">&lt;/h1&gt;</span>{'\n'}
                {'    '}<span className="text-orange-400">&lt;h1&gt;</span><span className="text-white">Ayo lah</span><span className="text-orange-400">&lt;/h1&gt;</span>{'\n'}
                {'  '}<span className="text-orange-400">&lt;/body&gt;</span>{'\n'}
                <span className="text-orange-400">&lt;/html&gt;</span>
              </code>
            </pre>
          </div>
        </div>

        {/* CSS Code Block */}
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
          {/* Code Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm font-mono ml-2">style.css</span>
            </div>
            
            {/* Copy Button */}
            <button
              onClick={handleCopyCss}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md transition-colors text-sm"
            >
              {copiedCss ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <FiCopy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          
          {/* Code Content */}
          <div className="p-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-gray-300 font-mono">
                <span className="text-gray-500">/* CSS Styles */</span>{'\n'}
                <span className="text-orange-400">body</span> <span className="text-white">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-400">font-family</span><span className="text-white">:</span> <span className="text-green-400">Arial, sans-serif</span><span className="text-white">;</span>{'\n'}
                {'  '}<span className="text-blue-400">margin</span><span className="text-white">:</span> <span className="text-purple-400">0</span><span className="text-white">;</span>{'\n'}
                {'  '}<span className="text-blue-400">padding</span><span className="text-white">:</span> <span className="text-purple-400">20px</span><span className="text-white">;</span>{'\n'}
                {'  '}<span className="text-blue-400">background-color</span><span className="text-white">:</span> <span className="text-green-400">#f5f5f5</span><span className="text-white">;</span>{'\n'}
                <span className="text-white">{'}'}</span>{'\n'}
                {'\n'}
                <span className="text-orange-400">h1</span> <span className="text-white">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-400">color</span><span className="text-white">:</span> <span className="text-green-400">#333</span><span className="text-white">;</span>{'\n'}
                {'  '}<span className="text-blue-400">text-align</span><span className="text-white">:</span> <span className="text-purple-400">center</span><span className="text-white">;</span>{'\n'}
                {'  '}<span className="text-blue-400">margin</span><span className="text-white">:</span> <span className="text-purple-400">20px 0</span><span className="text-white">;</span>{'\n'}
                {'  '}<span className="text-blue-400">font-size</span><span className="text-white">:</span> <span className="text-purple-400">2rem</span><span className="text-white">;</span>{'\n'}
                <span className="text-white">{'}'}</span>{'\n'}
                {'\n'}
                <span className="text-orange-400">h1:first-of-type</span> <span className="text-white">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-400">color</span><span className="text-white">:</span> <span className="text-green-400">#007bff</span><span className="text-white">;</span>{'\n'}
                <span className="text-white">{'}'}</span>{'\n'}
                {'\n'}
                <span className="text-orange-400">h1:last-of-type</span> <span className="text-white">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-400">color</span><span className="text-white">:</span> <span className="text-green-400">#28a745</span><span className="text-white">;</span>{'\n'}
                <span className="text-white">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}