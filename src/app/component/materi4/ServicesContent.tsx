import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ServicesContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

    const htmlCode = `
    <!-- Services Section -->
        <div class="services-section">
            <h2 class="services-title">My Services</h2>
            <p class="services-description">
                Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
            </p>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h4>Web Development</h4>
                    <p>Blog, E-Commerce</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>Mobile App, Website Design</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-microphone"></i>
                    </div>
                    <h4>Sound Design</h4>
                    <p>Voice Over, Beat Making</p>
                </div>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h4>Game Design</h4>
                    <p>Character Design, Props & Objects</p>
                </div>


                    <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-camera"></i>
                    </div>
                    <h4>Photography</h4>
                    <p>Portrait, Product Photography</p>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <h4>Digital Marketing</h4>
                    <p>Content Sosmed, Product Digital</p>
                </div>
            </div>
        </div>`;

    const cssCode =`
    /* Services Section */
        .services-section {
            position: relative;
            z-index: 1;
        }

        .services-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 20px;
            text-align: center;
        }

        .services-description {
            color: var(--text-light);
            text-align: center;
            margin-bottom: 60px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 40px;
        }

        .service-card {
            background: var(--bg-white);
            padding: 40px 30px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }

        .service-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: var(--primary-color);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
        }

        .service-card h4 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 15px;
        }

        .service-card p {
            color: var(--text-light);
            font-size: 0.95rem;
        }
        .order-link {
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 15px;
            display: inline-block;
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
          <h1 className="text-3xl font-bold text-gray-900">Services Section HTML & CSS</h1>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Langkah 5</span>
            <span className="text-sm text-gray-600">5 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '71.43%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-services.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}