import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function HeroContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const htmlCode = `
    <!-- Main Content -->
    <div class="main-content">
        <div class="decorative-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
            <div class="shape shape-6"></div>
        </div>

        <!-- Hero Section -->
        <div class="hero-section">
            <div class="hero-image">
                <img src="./image/hero-section-profil.png" alt="Profile Picture">
            </div>
            <h1 class="hero-title">
                I'm Rifki Ardhana<br>
                <span class="highlight">Front-end</span> Developer
            </h1>
            <p class="hero-description">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Et, Volutpat Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed Suspendisse Nunc Lectus.
            </p>
            <a href="#" class="hire-btn">
                HIRE ME <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
`;

  const cssCode = `
/* Main Content */
.main-content {
    flex: 1;
    background: var(--bg-white);
    border-radius: 20px;
    padding: 60px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    max-height: calc(100vh - 50px);
}

.decorative-shapes {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.shape {
    position: absolute;
    border-radius: 50%;
}

.shape-1 {
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    top: 80px;
    right: 300px;
}

.shape-2 {
    width: 15px;
    height: 15px;
    background: var(--success-color);
    top: 50px;
    right: 450px;
}

.shape-3 {
    width: 25px;
    height: 25px;
    border: 3px solid var(--primary-color);
    background: transparent;
    top: 120px;
    right: 200px;
}

.shape-4 {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 14px solid var(--secondary-color);
    top: 200px;
    right: 100px;
    border-radius: 0;
}

.shape-5 {
    width: 18px;
    height: 18px;
    background: var(--warning-color);
    top: 160px;
    right: 320px;
}

.shape-6 {
    width: 22px;
    height: 22px;
    background: var(--success-color);
    top: 250px;
    right: 250px;
}

.hero-section {
    position: relative;
    z-index: 1;
    margin-bottom: 80px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-title .highlight {
    color: var(--primary-color);
}

.hero-description {
    color: var(--text-light);
    font-size: 1.1rem;
    margin-bottom: 40px;
    max-width: 500px;
}

.hire-btn {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.hire-btn:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    color: white;
}

.hire-btn i {
    margin-left: 8px;
}

.hero-image {
    position: absolute;
    right: -20px;
    width: 350px;
    height: 420px;
    border-radius: 20px;
    overflow: hidden;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
          <h1 className="text-3xl font-bold text-gray-900">Hero Section HTML & CSS</h1>
        </div>
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

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-hero.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}