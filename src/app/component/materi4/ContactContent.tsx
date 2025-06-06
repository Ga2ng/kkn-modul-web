import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ContactContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

    const htmlCode = `
            <!-- Contact Section  -->
        <section class="contact-section">
            <h2 class="section-title-contact">Contact Information</h2>
            <div class="row">
                <!-- Contact Form - Main Content -->
                <div class="col-lg-8">
                    <div class="main-content-contact"> 
                            <form id="contactForm">
                                <div class="mb-4">
                                    <label for="fullName" class="form-label">Your Full Name (Required)</label>
                                    <input type="text" class="form-control" id="fullName" required>
                                </div>

                                <div class="mb-4">
                                    <label for="email" class="form-label">Your Email (Required)</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>

                                <div class="mb-4">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject">
                                </div>

                                <div class="mb-4">
                                    <label for="message" class="form-label">Your Message</label>
                                    <textarea class="form-control" id="message" rows="5"></textarea>
                                </div>

                                <button type="submit" class="btn btn-send">
                                    <i class="fas fa-paper-plane me-2"></i>
                                    Send Message
                                </button>
                            </form>
                    </div>
                </div>

                <!-- Contact Information Sidebar -->
                <div class="col-lg-4">
                    <div class="sidebar-contact">
                        <!-- Location Info -->
                        <div class="info-group">
                            <div class="info-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Country:</span>
                                <span class="info-value">Indonesia</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">City:</span>
                                <span class="info-value">Surabaya</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Street:</span>
                                <span class="info-value">17 Citraland, Ciputra</span>
                            </div>
                        </div>

                        <!-- Email Info -->
                        <div class="info-group">
                            <div class="info-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Email:</span>
                                <span class="info-value">Rifkiardhana@Gmail.Com</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Instagram:</span>
                                <span class="info-value">@rifkiardhana_</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Facebook:</span>
                                <span class="info-value">Rifki Ardhana</span>
                            </div>
                        </div>

                        <!-- Phone Info -->
                        <div class="info-group">
                            <div class="info-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Support Services:</span>
                                <span class="info-value">15369</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Office:</span>
                                <span class="info-value">+58 (021)356 587 235</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label-contact">Personal:</span>
                                <span class="info-value">+58 (021)356 587 235</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>`;

    const cssCode =`
    /* Contact Section */
         .contact-section {
            padding: 60px 0;
        }

        .section-title-contact {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            text-align: center;
            margin-bottom: 60px;
        }

        .main-content-contact {
            flex: 1;
            padding-right: 30px;
            border-radius: 20px;
            padding: 60px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        .form-label {
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 8px;
            font-size: 0.95rem;
        }

        .form-control {
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 15px 20px;
            font-size: 1rem;
            background: var(--bg-light);
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-control:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 0.2rem rgba(255, 167, 38, 0.15);
            background: var(--bg-white);
        }

        .form-control::placeholder {
            color: var(--text-light);
        }

        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }

        .btn-send {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border: none;
            color: white;
            padding: 15px 30px;
            border-radius: 12px;
            font-weight: 600;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .btn-send:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 167, 38, 0.3);
            color: white;
        }

        /* Sidebar Styles */
        .sidebar-contact {
            width: 300px;
            background: var(--bg-white);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            height: fit-content;
            position: sticky;
            top: 30px;
        }

        .contact-info-groups {
            margin-bottom: 30px;
        }

        .info-group {
            margin-bottom: 30px;
        }

        .info-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: white;
            font-size: 1.2rem;
        }

        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 9px 0;
            border-bottom: 1px solid var(--border-color);
        }

        .info-item:last-child {
            border-bottom: none;
        }

        .info-label-contact {
            font-weight: 500;
            color: var(--text-light);
            font-size: 0.85rem;
        }

        .info-value {
            font-weight: 600;
            color: var(--text-dark);
            text-align: right;
            font-size: 0.9rem;
        }

        .sidebar-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: var(--text-dark);
        }
        /* Responsive Design */
        @media (max-width: 768px) {
            .section-title {
                font-size: 2rem;
                margin-bottom: 40px;
            }
            .contact-info {
                padding: 30px;
                margin-bottom: 30px;
            }

            .contact-section {
                padding: 40px 0;
            }

            .info-value {
                text-align: left;
                margin-top: 5px;
            }

            .info-item {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        @media (max-width: 576px) {
            .section-title {
                font-size: 1.8rem;
            }
            .contact-info {
                padding: 25px;
            }
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
          <h1 className="text-3xl font-bold text-gray-900">Contact Section HTML & CSS</h1>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Langkah 7</span>
            <span className="text-sm text-gray-600">7 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-contact.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}