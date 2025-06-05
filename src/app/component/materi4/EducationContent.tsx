import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function EducationContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

const htmlCode = `
<!-- Education Section -->
<div class="education-section">
    <h2 class="education-title">Education</h2>
    
    <div class="education-timeline">
        <div class="education-item">
            <div class="education-content">
                <div class="education-left">
                    <h4>University Of Toronto</h4>
                    <p class="education-role">Student</p>
                    <span class="education-date">Jan 2016 - Dec 2021</span>
                </div>
                <div class="education-right">
                    <h5>Certificate Of Web Training</h5>
                    <p class="education-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum repellendus culpa cum ad fuga deserunt omnis mollitia molestiae dolores qui facere est obcaecati alias quidem velit, inventore veritatis libero.
                    </p>
                </div>
            </div>

            <div class="education-content">
                <div class="education-left">
                    <h4>University Of Toronto</h4>
                    <p class="education-role">Student</p>
                    <span class="education-date">Jan 2016 - Dec 2021</span>
                </div>
                <div class="education-right">
                    <h5>Certificate Of Web Training</h5>
                    <p class="education-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum repellendus culpa cum ad fuga deserunt omnis mollitia molestiae dolores qui facere est obcaecati alias quidem velit, inventore veritatis libero.
                    </p>
                </div>
            </div>

            <div class="education-content">
                <div class="education-left">
                    <h4>University Of Toronto</h4>
                    <p class="education-role">Student</p>
                    <span class="education-date">Jan 2016 - Dec 2021</span>
                </div>
                <div class="education-right">
                    <h5>Certificate Of Web Training</h5>
                    <p class="education-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum repellendus culpa cum ad fuga deserunt omnis mollitia molestiae dolores qui facere est obcaecati alias quidem velit, inventore veritatis libero.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

    const cssCode =` /* Education Section */
        .education-section {
            position: relative;
            z-index: 1;
            margin-bottom: 60px;
        }

        .education-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-top: 40px;
            margin-bottom: 20px;
            text-align: center;
        }

        .education-description {
            color: var(--text-light);
            text-align: center;
            margin-bottom: 60px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .education-timeline {
            max-width: 100%;
            margin: 0 auto;
        }

        .education-item {
            margin-bottom: 40px;
            background: var(--bg-light);
            border-radius: 15px;
            padding: 40px;
            transition: all 0.3s ease;
            border: 1px solid var(--border-color);
        }

        .education-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .education-content {
            display: flex;
            margin-bottom: 50px;
            gap: 40px;
            align-items: flex-start;
        }

        .education-left {
            flex: 0 0 280px;
        }

        .education-left h4 {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 8px;
        }

        .education-role {
            color: var(--text-light);
            font-size: 1rem;
            margin-bottom: 15px;
        }

        .education-date {
            background: var(--primary-color);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 500;
            display: inline-block;
        }

        .education-right {
            flex: 1;
        }

        .education-right h5 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 15px;
        }

        .education-desc {
            color: var(--text-light);
            font-size: 1rem;
            line-height: 1.7;
            text-align: justify;
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
          <h1 className="text-3xl font-bold text-gray-900">Education Section HTML & CSS</h1>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Langkah 4</span>
            <span className="text-sm text-gray-600">4 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '57.14%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-education.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}