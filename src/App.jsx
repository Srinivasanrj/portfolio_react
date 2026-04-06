import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="background-effects">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav className="navbar">
        <div className="nav-content">
          <a href="#" className="logo">SR<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        {/* Hero Section */}
        <section id="about" className="hero fade-in">
          <div className="hero-content">
            <span className="greeting">Hi, I am</span>
            <h1 className="name">Srinivasan R</h1>
            <h2 className="title">AI & ML Engineer</h2>
            <p className="bio">Passionate AI/ML student at Sri Eshwar College of Engineering, specializing in computer vision, NLP, and scalable AI solutions. Building innovative systems like microplastic detection and multilingual government scheme assistants.</p>
            <div className="contact-info">
              <a href="mailto:srinivasan.r2024aiml@sece.ac.in" className="contact-item"><i className="fas fa-envelope"></i> srinivasan.r2024aiml@sece.ac.in</a>
              <a href="tel:9500428793" className="contact-item"><i className="fas fa-phone"></i> +91 9500428793</a>
            </div>
            <div className="social-links">
              <a href="#" className="social-btn"><i className="fab fa-github"></i> GitHub</a>
              <a href="#" className="social-btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
              <a href="https://www.skillrack.com/profile" target="_blank" rel="noreferrer" className="social-btn"><i className="fas fa-code"></i> SkillRack</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section fade-in">
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="skills-grid">
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-laptop-code"></i></div>
              <h3>Languages</h3>
              <p>Python, C, C++</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-brain"></i></div>
              <h3>Machine Learning</h3>
              <p>Scikit-learn, XGBoost, Random Forest, SVM — Linear, Logistic, Ridge, Lasso</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-network-wired"></i></div>
              <h3>Deep Learning</h3>
              <p>TensorFlow, PyTorch, Keras — CNN, RNN, LSTM, Transformers, ResNet50</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-robot"></i></div>
              <h3>AI / LLM Tools</h3>
              <p>LangChain, LlamaIndex, RAG pipelines, MCP Server, FAISS, Roboflow</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-chart-bar"></i></div>
              <h3>Data Analysis</h3>
              <p>Pandas, NumPy, Matplotlib, Seaborn</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-globe"></i></div>
              <h3>Web Dev</h3>
              <p>HTML, CSS, JavaScript, Flask</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-microchip"></i></div>
              <h3>Hardware / Embedded</h3>
              <p>Raspberry Pi 5, Stepper Motor Control, 3D Printing, SSH / PuTTY</p>
            </div>
            <div className="skill-card glass">
              <div className="skill-icon"><i className="fas fa-tools"></i></div>
              <h3>Tools & Platforms</h3>
              <p>Git, Roboflow, Sarvam AI, VS Code</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section fade-in">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="projects-container">
            {/* Project 1 */}
            <div className="project-card glass">
              <div className="project-header">
                <div className="project-title-wrapper">
                  <h3>AQUAPLASTIX</h3>
                  <span className="project-badge">Dec 2024</span>
                </div>
                <p className="project-subtitle">Microplastic Detection System</p>
              </div>
              <ul className="project-details">
                <li>Built an AI-powered microplastic detection system using crossed polarization microscopy and computer vision (ResNet50) achieving 95% detection accuracy with real-time processing.</li>
                <li>Engineered hardware integration with Raspberry Pi 5 for automated image capture, stepper motor control, and sample processing; 3D-printed custom microscopy components.</li>
                <li>Deployed Roboflow-hosted model via Flask backend; significantly lower cost compared to FTIR/Raman spectroscopy, making it accessible for educational institutions.</li>
              </ul>
              <div className="project-tags">
                <span>ResNet50</span><span>Raspberry Pi 5</span><span>Flask</span><span>Computer Vision</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass">
              <div className="project-header">
                <div className="project-title-wrapper">
                  <h3>MITRA</h3>
                  <span className="project-badge">Jan 2026</span>
                </div>
                <p className="project-subtitle">Multilingual Government Scheme Assistant</p>
              </div>
              <ul className="project-details">
                <li>Built a voice-first AI assistant enabling citizens to discover government schemes in 22+ Indian languages using Sarvam AI for speech-to-text and text-to-speech processing.</li>
                <li>Architected serverless backend on AWS (Amplify, API Gateway, Lambda, DynamoDB) with eligibility filtering logic and a citizen-friendly multilingual interface.</li>
                <li>Reduced scheme discovery complexity significantly while demonstrating scalable NLP deployment for rural and semi-urban users.</li>
              </ul>
              <div className="project-tags">
                <span>NLP</span><span>AWS Serverless</span><span>Sarvam AI</span><span>Voice AI</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card glass">
              <div className="project-header">
                <div className="project-title-wrapper">
                  <h3>MEDIBOT</h3>
                  <span className="project-badge">Aug 2024</span>
                </div>
                <p className="project-subtitle">AI Medical Assistant</p>
              </div>
              <ul className="project-details">
                <li>Developed semantic similarity search to connect medications, side effects, and drug interactions using vector databases (FAISS) and NLP-based retrieval pipelines.</li>
                <li>Integrated RAG architecture with LangChain for context-aware query responses over healthcare datasets; built REST API for frontend consumption.</li>
              </ul>
              <div className="project-tags">
                <span>LLM / RAG</span><span>LangChain</span><span>FAISS</span><span>REST API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section fade-in">
          <h2 className="section-title">Awards & <span className="gradient-text">Achievements</span></h2>
          <div className="achievement-card glass">
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="achievement-content">
              <h3>AI-Concave Hackathon – 1st Place Winner</h3>
              <span className="achievement-date">Jun 2025</span>
              <p>Won Rs. 10,000 prize at a 24-hour hackathon hosted by Kongu College of Engineering, building a recommendation system under competition conditions.</p>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="section grid-2 fade-in">
          <div>
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item glass">
                <div className="timeline-dot"></div>
                <h4>Sri Eshwar College of Engineering</h4>
                <h5>B.E. – AI & ML</h5>
                <p className="timeline-date">2024 – 2028 | CGPA: 7.53</p>
              </div>
              <div className="timeline-item glass">
                <div className="timeline-dot"></div>
                <h4>Vivek Vidyalaya Matric Higher Sec School</h4>
                <h5>HSC</h5>
                <p className="timeline-date">2022 – 2024 | 73.5%</p>
              </div>
              <div className="timeline-item glass">
                <div className="timeline-dot"></div>
                <h4>Vivek Vidyalaya Matric Higher Sec School</h4>
                <h5>SSLC</h5>
                <p className="timeline-date">2021 – 2022 | 66.8%</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-list">
              <div className="cert-item glass">
                <i className="fas fa-certificate text-gradient"></i>
                <span>IBM Beginner – Data Structures and Algorithms</span>
              </div>
              <div className="cert-item glass">
                <i className="fas fa-certificate text-gradient"></i>
                <span>Spoken Tutorial in C++ – IIT Bombay</span>
              </div>
              <div className="cert-item glass">
                <i className="fas fa-certificate text-gradient"></i>
                <span>Spoken Tutorial in C – IIT Bombay</span>
              </div>
              <div className="cert-item glass">
                <i className="fas fa-certificate text-gradient"></i>
                <span>Introduction to HTML & Java</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Srinivasan R. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
