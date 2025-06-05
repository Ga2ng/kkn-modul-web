import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AboutContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const htmlCode = `
<!-- About Me Section -->
<div class="about-section">
    <h2 class="about-title">About Me</h2>
    <p class="about-subtitle">User Interface/User Experience And Front End Developer</p>
    
    <div class="about-content">
        <div class="about-image">
            <img src="./image/about-profil.jpeg" alt="About Me Profile Picture">
        </div>
        <div class="about-text">
            <p class="about-description">
                A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.
            </p>
            <p class="about-description">
                Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs. In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection.
            </p>
        </div>
    </div>
</div>
`;
    const cssCode = `
/* About Me Section */
.about-section {
    position: relative;
    z-index: 1;
    margin-bottom: 80px;
    background: var(--bg-white);
    color: white;
    padding: 80px 60px;
    border-radius: 10px;
    margin-left: -60px;
    margin-right: -60px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
                rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 60px;
}

.about-image {
    flex: 0 0 300px;
    position: relative;
}

.about-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    filter: brightness(0.9);
}

.about-text {
    flex: 1;
}

.about-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 20px;
    text-align: center;
}

.about-subtitle {
    color: var(--text-light);
    text-align: center;
    margin-bottom: 40px;
    font-size: 1rem;
}

.about-description {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 30px;
    text-align: justify;
}

.about-download-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.about-download-btn:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    color: white;
}
`;



  const copyToClipboard = async (
  text: string,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error('Copy failed:', err);
  }
};


  const renderCodeBlock = (
  title: string,
  code: string,
  language: string,
  copied: boolean,
  onCopy: () => void
) => (
  <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
    <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-300 text-sm font-mono ml-2">{title}</span>
      </div>

      <button
        onClick={onCopy}
        className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md transition-colors text-sm"
      >
        {copied ? (
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

    <div className="p-4 overflow-x-auto">
      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
);


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <FiFileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">About Section HTML & CSS</h1>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Langkah 3</span>
            <span className="text-sm text-gray-600">3 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '42.86%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-about.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}