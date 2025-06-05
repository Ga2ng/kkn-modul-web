import React, { useState } from 'react';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SidebarContent() {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const htmlCode = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rifki Ardhana - Frontend Developer</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style/style-sidebar.css">
    <link rel="stylesheet" href="./style/style-hero.css">
    <link rel="stylesheet" href="./style/style-about.css">
    <link rel="stylesheet" href="./style/style-education.css">
    <link rel="stylesheet" href="./style/style-services.css">
    <link rel="stylesheet" href="./style/style-portofolio.css">
    <link rel="stylesheet" href="./style/style-contact.css">
</head>
  <style>
     :root {
            --primary-color: #670D2F;
            --secondary-color: #FF7043;
            --text-dark: #2E3440;
            --text-light: #6B7280;
            --bg-light: #F8FAFC;
            --bg-white: #FFFFFF;
            --border-color: #E5E7EB;
            --success-color: #10B981;
            --warning-color: #F59E0B;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Plus Jakarta Sans", sans-serif;
            background: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
        }

        .main-container {
            display: flex;
            min-height: 100vh;
            gap: 30px;
            padding: 30px;
            max-width: 1400px;
            margin: 0 auto;
        }
            
        /* Sembunyikan scrollbar default */
        .sidebar::-webkit-scrollbar,
        .main-content::-webkit-scrollbar {
            width: 0px;
        }
        .sidebar::-webkit-scrollbar-thumb:hover,
        .main-content::-webkit-scrollbar-thumb:hover {
            background: var(--secondary-color);
        }

</style>
  <body>
  <div class="main-container">
  <div class="sidebar">
            <div class="profile-section">
                <img src="sidebar-profil.png" alt="Profile Picture" class="profile-img">
                <h2 class="profile-name">Rifki Ardhana</h2>
                <p class="profile-title">Front-end Developer</p>
                
                <div class="social-links">
                    <a href="#" class="social-link" style="background: #3b5998;"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link" style="background: #1da1f2;"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link" style="background: #bd081c;"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="social-link" style="background: #0077b5;"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-link" style="background: #333;"><i class="fab fa-github"></i></a>
                    <a href="#" class="social-link" style="background: #670D2F"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>

            <div class="info-section">
                <div class="info-item">
                    <span class="info-label">Age:</span>
                    <span class="info-value">22</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Residence:</span>
                    <span class="info-value">IDN</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Freelance:</span>
                    <span class="available-badge">Available</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Address:</span>
                    <span class="info-value">Surabaya, Indonesia</span>
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-title">Languages</h3>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">Indonesia</span>
                        <span class="skill-percentage">100%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="100%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">English</span>
                        <span class="skill-percentage">80%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="80%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">Korean</span>
                        <span class="skill-percentage">40%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="40%"></div>
                    </div>
                </div>
            </div>

            <div class="skills-section">
                <h3 class="section-title">Skills</h3>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">HTML</span>
                        <span class="skill-percentage">90%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="90%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">CSS</span>
                        <span class="skill-percentage">85%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="85%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">Javascript</span>
                        <span class="skill-percentage">60%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="60%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">PHP</span>
                        <span class="skill-percentage">70%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="75%"></div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">WordPress</span>
                        <span class="skill-percentage">80%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="80%"></div>
                    </div>
                </div>
            </div>

            <div class="extra-skills">
                <h3 class="section-title">Extra Skills</h3>
                <div class="extra-skill-item">
                    <div class="extra-skill-icon"></div>
                    <span>Bootstrap, Materialize</span>
                </div>
                <div class="extra-skill-item">
                    <div class="extra-skill-icon"></div>
                    <span>Figma, UI Design</span>
                </div>
                <div class="extra-skill-item">
                    <div class="extra-skill-icon"></div>
                    <span>Laravel, Java, MySQL</span>
                </div>
                <div class="extra-skill-item">
                    <div class="extra-skill-icon"></div>
                    <span>GIT Knowledge</span>
                </div>
            </div>

            <button class="download-cv">
                <i class="fas fa-download"></i> DOWNLOAD CV
            </button>
        </div>
  </div>
  </body>
</html>`;

 const cssCode = `
/* Sidebar Styles */
.sidebar {
    width: 300px;
    background: var(--bg-white);
    border-radius: 20px;
    padding: 40px 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    height: fit-content;
    position: sticky;
    overflow-y: auto;
    max-height: calc(100vh - 50px);
}

.profile-section {
    text-align: center;
    margin-bottom: 40px;
}

.profile-img {
    width: 180px;
    height: 180px;
    border-radius: 20px;
    object-fit: cover;
    margin: 0 auto 20px;
    display: block;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    object-fit: contain;
}

.profile-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
}

.profile-title {
    color: var(--text-light);
    font-size: 0.95rem;
    margin-bottom: 25px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
    color: white;
    opacity: 0.9;
}

.info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid var(--border-color);
}

.info-item:last-child {
    border-bottom: none;
}

.info-label {
    background: var(--primary-color);
    color: white;
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
}

.info-value {
    color: var(--text-dark);
    font-weight: 500;
}

.available-badge {
    background: var(--success-color);
    color: white;
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 0.85rem;
}

/* Skills Section */
.skills-section {
    margin: 40px 0;
}

.section-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--text-dark);
}

.skill-item {
    margin-bottom: 15px;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.skill-name {
    font-size: 0.9rem;
    color: var(--text-dark);
}

.skill-percentage {
    font-size: 0.9rem;
    color: var(--text-light);
}

.skill-bar {
    width: 100%;
    height: 6px;
    background: var(--border-color);
    border-radius: 3px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: var(--primary-color);
    border-radius: 3px;
    transition: width 2s ease-in-out;
}

.extra-skills {
    margin-top: 30px;
}

.extra-skill-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.extra-skill-icon {
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 4px;
    margin-right: 12px;
}

.download-cv {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 500;
    width: 100%;
    margin-top: 30px;
    transition: all 0.3s ease;
}

.download-cv:hover {
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

    <div className="p-2 overflow-x-auto">
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
          <h1 className="text-3xl font-bold text-gray-900">Sidebar HTML & CSS</h1>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-700">Langkah 1</span>
            <span className="text-sm text-gray-600">1 / 7</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '14.29%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {renderCodeBlock('index.html', htmlCode, 'html', copiedHtml, () => copyToClipboard(htmlCode, setCopiedHtml))}
        {renderCodeBlock('style-sidebar.css', cssCode, 'css', copiedCss, () => copyToClipboard(cssCode, setCopiedCss))}
      </div>
    </div>
  );
}