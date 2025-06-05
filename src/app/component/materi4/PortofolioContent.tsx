import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function PortofolioContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

    const htmlCode = `
     <!-- Portfolio Section -->
                <div class="portfolio-section">
                    <h2 class="portfolio-title">Portfolio</h2>
                    <p class="portfolio-description">
                        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
                    </p>
    
                    <div class="portfolio-filters">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="website">Website Design</button>
                        <button class="filter-btn" data-filter="mobile">App Mobile Design</button>
                        <button class="filter-btn" data-filter="desktop">App Desktop</button>
                        <button class="filter-btn" data-filter="desktop">Photography</button>
                    </div>
    
                    <div class="portfolio-grid">
                        <div class="portfolio-item" data-category="website">
                            <div class="portfolio-image">
                                <img src="" alt="">
                            </div>
                            <div class="portfolio-info">
                                <h4>Name Project</h4>
                                <span class="portfolio-category">Website</span>
                            </div>
                        </div>
    
                        <div class="portfolio-item" data-category="mobile">
                            <div class="portfolio-image">
                                <img src="" alt="">
                            </div>
                            <div class="portfolio-info">
                                <h4>Name Project</h4>
                                <span class="portfolio-category"> Mobile</span>
                            </div>
                        </div>
    
                        <div class="portfolio-item" data-category="desktop">
                            <div class="portfolio-image">
                                <img src="" alt="">
                            </div>
                            <div class="portfolio-info">
                                <h4>Name Project</h4>
                                <span class="portfolio-category">Desktop</span>
                            </div>
                        </div>
    
                        <div class="portfolio-item" data-category="Desktop">
                            <div class="portfolio-image">
                                <img src="" alt="">
                            </div>
                            <div class="portfolio-info">
                                <h4>Name Project</h4>
                                <span class="portfolio-category">Desktop</span>
                            </div>
                        </div>
    
                        <div class="portfolio-item" data-category="Website">
                            <div class="portfolio-image">
                                <img src="" alt="">
                            </div>
                            <div class="portfolio-info">
                                <h4>Name Project</h4>
                                <span class="portfolio-category">Website </span>
                            </div>
                        </div>
    
                        <div class="portfolio-item" data-category="Mobile">
                            <div class="portfolio-image">
                                <img src="" alt="">
                            </div>
                            <div class="portfolio-info">
                                <h4>Name Project</h4>
                                <span class="portfolio-category">Mobile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    const cssCode =`
     /* portfolio Section */
        .portfolio-section {
            position: relative;
            z-index: 1;
        }

        .portfolio-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 20px;
            text-align: center;
        }

        .portfolio-description {
            color: var(--text-light);
            text-align: center;
            margin-bottom: 50px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-size: 1.1rem;
        }

        .portfolio-filters {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 50px;
            flex-wrap: wrap;
        }

        .filter-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            background: var(--bg-white);
            color: var(--text-light);
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            font-family: inherit;
        }

        .filter-btn:hover {
            background: var(--primary-color);
            color: var(--bg-white);
            transform: translateY(-2px);
        }

        .filter-btn.active {
            background: var(--primary-color);
            color: var(--bg-white);
            box-shadow: 0 4px 15px rgba(255, 167, 38, 0.3);
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 40px;
        }

        .portfolio-item {
            background: var(--bg-white);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
            position: relative;
        }

        .portfolio-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .portfolio-image {
            height: 280px;
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, var(--bg-light) 0%, #E2E8F0 100%);
        }

        .portfolio-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .portfolio-item:hover .portfolio-image img {
            transform: scale(1.05);
        }

        .portfolio-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, rgba(255, 167, 38, 0.1) 0%, rgba(255, 112, 67, 0.1) 100%);
        }

        .portfolio-placeholder i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        .portfolio-placeholder h4 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 10px;
        }

        .portfolio-placeholder p {
            color: var(--text-light);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .portfolio-info {
            padding: 25px;
            background: var(--bg-white);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .portfolio-info h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-dark);
            margin: 0;
        }

        .portfolio-category {
            display: inline-block;
            padding: 6px 12px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: var(--bg-white);
            font-size: 0.85rem;
            font-weight: 500;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
            .portfolio-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 25px;
            }
        }

        @media (max-width: 768px) {
            .portfolio-title {
                font-size: 2rem;
            }

            .portfolio-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .portfolio-filters {
                gap: 10px;
            }

            .filter-btn {
                padding: 10px 18px;
                font-size: 0.9rem;
            }

            .portfolio-image {
                height: 240px;
            }

            .portfolio-placeholder {
                padding: 20px;
            }

            .portfolio-placeholder i {
                font-size: 2.5rem;
            }

            .portfolio-placeholder h4 {
                font-size: 1.1rem;
            }

            .portfolio-info {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
        }

        @media (max-width: 480px) {
            body {
                padding: 20px 15px;
            }

            .portfolio-title {
                font-size: 1.8rem;
            }

            .portfolio-description {
                font-size: 1rem;
            }

            .portfolio-filters {
                flex-direction: column;
                align-items: center;
            }

            .filter-btn {
                width: 200px;
                text-align: center;
            }

            .portfolio-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Animation for filter transitions */
        .portfolio-item {
            opacity: 1;
            transform: scale(1);
            transition: all 0.5s ease;
        }

        .portfolio-item.filtered {
            opacity: 0;
            transform: scale(0.8);
            pointer-events: none;
        }

        /* Hover effects */
        .portfolio-item:hover .portfolio-placeholder {
            background: linear-gradient(135deg, rgba(255, 167, 38, 0.2) 0%, rgba(255, 112, 67, 0.2) 100%);
        }

        .portfolio-item:hover .portfolio-placeholder i {
            transform: scale(1.1);
            transition: transform 0.3s ease;
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
          <h1 className="text-3xl font-bold text-gray-900">Portofolio Section HTML & CSS</h1>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Langkah 6</span>
            <span className="text-sm text-gray-600">6 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '85.71%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-portofolio.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}