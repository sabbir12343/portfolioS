import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import './App.css';

function Scene() {
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* Floating 3D Sphere */}
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#667eea"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
    </>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="App">
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">Sabbir Ali</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="canvas-container">
          <Canvas>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Sabbir Ali</span>
            </h1>
            <p className="hero-subtitle">Computer Science Engineer & Full Stack Developer</p>
            <p className="hero-description">Building innovative web solutions with modern technologies and machine learning</p>
            <div className="hero-buttons">
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="btn btn-primary">View My Work</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <img src="/profileSa.jpeg" alt="Sabbir Ali" className="profile-image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150'; }} />
              <p className="lead">Motivated and detail-oriented Computer Science and Engineering student with a solid foundation in software development, algorithms, and data structures.</p>
              <p>I'm proficient in programming languages such as Python, Java, and C++, with hands-on experience in web development, machine learning, and database management. I've demonstrated ability to collaborate effectively in team environments through various academic projects and internships.</p>
              <p><strong>Education:</strong><br/>
              • Bachelor of Technology in Computer Science and Engineering (2022-2025)<br/>
              &nbsp;&nbsp;Girijananda Chowdhury Institute of Management and Technology - CGPA: 6.6<br/>
              • Diploma in Computer Science and Engineering (2019-2022)<br/>
              &nbsp;&nbsp;Central Institute of Technology, Kokrajhar - CGPA: 6.64</p>
              <p>Eager to leverage technical skills and knowledge to contribute to innovative projects in a dynamic and growth-oriented organization.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and internships</p>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-date">June 2024 - July 2024</div>
              <div className="experience-content">
                <h3>Intern - Signal & Telecomm Department</h3>
                <h4>Northeast Frontier Railway, Guwahati</h4>
                <p>Completed field training in Signal & Telecomm Department, gaining hands-on experience in railway communication systems and infrastructure.</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-date">June 2024 - July 2024</div>
              <div className="experience-content">
                <h3>Intern - Barista</h3>
                <h4>Tool Room and Training Centre MSME, Guwahati</h4>
                <p>Developed an Online Examination System using PHP, Ajax, JavaScript, HTML, CSS during the internship period. Built a complete web application for conducting online exams with timed tests and result calculations.</p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-date">July 2023 - Aug 2023</div>
              <div className="experience-content">
                <h3>Full Stack Development Intern</h3>
                <h4>NIELIT, Guwahati</h4>
                <p>Developed and implemented an eCommerce web application. Worked on complete full-stack development including front-end user interfaces, back-end server logic, database management, and third-party API integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Here are some of my recent projects that showcase my skills and creativity</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/chatbot/1200/600" alt="College Enquiry Chatbot screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'College Enquiry Chatbot', description: 'Developed a college enquiry chatbot capable of answering FAQs using Machine Learning & NLP. Integrated into college website with voice input, admin panel, and MySQL database.', image: 'https://picsum.photos/seed/chatbot/1200/600', tags: ['Python','Flask','MySQL','Scikit-learn','NLP'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>College Enquiry Chatbot</h3>
                <p>Developed a college enquiry chatbot capable of answering FAQs using Machine Learning & NLP. Integrated into college website with voice input, admin panel, and MySQL database.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>MySQL</span>
                  <span>Scikit-learn</span>
                  <span>NLP</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/ecommerce/1200/600" alt="eCommerce Web Application screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'eCommerce Web Application', description: 'Designed and implemented a complete eCommerce web app with shopping cart, user authentication, and admin dashboard. Full-stack solution with front-end interfaces, back-end server logic, and database management.', image: 'https://picsum.photos/seed/ecommerce/1200/600', tags: ['Node.js','Express.js','MongoDB','JavaScript'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>eCommerce Web Application</h3>
                <p>Designed and implemented a complete eCommerce web app with shopping cart, user authentication, and admin dashboard. Full-stack solution with front-end interfaces, back-end server logic, and database management.</p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/exam/1200/600" alt="Online Examination System screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'Online Examination System', description: 'Built a web application for conducting online exams with features like timed tests, result calculations, and secure exam environment. Developed during internship at Tool Room and Training Centre MSME.', image: 'https://picsum.photos/seed/exam/1200/600', tags: ['PHP','Ajax','JavaScript','MySQL'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Online Examination System</h3>
                <p>Built a web application for conducting online exams with features like timed tests, result calculations, and secure exam environment. Developed during internship at Tool Room and Training Centre MSME.</p>
                <div className="project-tags">
                  <span>PHP</span>
                  <span>Ajax</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/college/1200/600" alt="College Website screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'College Website', description: 'Developed a responsive website for Girijananda Chowdhury University with academic, admission, and student life sections, including chatbot integration for enhanced user experience.', image: 'https://picsum.photos/seed/college/1200/600', tags: ['HTML','CSS','JavaScript','Responsive'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>College Website</h3>
                <p>Developed a responsive website for Girijananda Chowdhury University with academic, admission, and student life sections, including chatbot integration for enhanced user experience.</p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Responsive</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/portfolio/1200/600" alt="Personal Portfolio Website screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'Personal Portfolio Website', description: 'Built a modern, responsive portfolio website to showcase projects and resume. Implemented smooth scrolling, project filtering, and a contact form.', image: 'https://picsum.photos/seed/portfolio/1200/600', tags: ['React','CSS','Netlify'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Personal Portfolio Website</h3>
                <p>Built a modern, responsive portfolio website to showcase projects and resume. Implemented smooth scrolling, project filtering, and a contact form.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Netlify</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/chatapp/1200/600" alt="Real-time Chat App screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'Real-time Chat App', description: 'Created a WebSocket-based chat application with private messaging, online presence, and message history storage.', image: 'https://picsum.photos/seed/chatapp/1200/600', tags: ['Node.js','Socket.io','Express'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Real-time Chat App</h3>
                <p>Created a WebSocket-based chat application with private messaging, online presence, and message history storage.</p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/sentiment/1200/600" alt="Sentiment Analysis Model visualization" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'Sentiment Analysis Model', description: 'Developed an NLP model for sentiment classification using pre-processing, feature extraction, and classifier tuning to achieve high accuracy on reviews.', image: 'https://picsum.photos/seed/sentiment/1200/600', tags: ['Python','Scikit-learn','NLP'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Sentiment Analysis Model</h3>
                <p>Developed an NLP model for sentiment classification using pre-processing, feature extraction, and classifier tuning to achieve high accuracy on reviews.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>NLP</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="https://picsum.photos/seed/railway/1200/600" alt="Railway Maintenance Dashboard screenshot" loading="lazy" />
                <div className="project-overlay">
                  <a href="#" className="project-link" onClick={(e) => { e.preventDefault(); setModalProject({ title: 'Railway Maintenance Dashboard', description: 'Implemented a dashboard for monitoring railway maintenance schedules and tracking tasks, with data visualizations and filtering options.', image: 'https://picsum.photos/seed/railway/1200/600', tags: ['React','Chart.js','REST API'], repo: 'https://github.com/sabbir12343', demo: null }); setModalOpen(true); }}>View Project</a>
                  <a href="https://github.com/sabbir12343" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
              <div className="project-content">
                <h3>Railway Maintenance Dashboard</h3>
                <p>Implemented a dashboard for monitoring railway maintenance schedules and tracking tasks, with data visualizations and filtering options.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Chart.js</span>
                  <span>REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && modalProject && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">×</button>
              <img src={modalProject.image} alt={`${modalProject.title} screenshot`} />
              <div className="modal-body">
                <h3>{modalProject.title}</h3>
                <p>{modalProject.description}</p>
                <div className="project-tags">
                  {modalProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="modal-actions">
                  {modalProject.demo ? (
                    <a href={modalProject.demo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  ) : (
                    <a href="mailto:alikabir318@gmail.com" className="project-link">Request Code</a>
                  )}
                  <a href={modalProject.repo || 'https://github.com/sabbir12343'} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">🐍</div>
                  <div className="skill-name">Python</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">☕</div>
                  <div className="skill-name">Java</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">⚙️</div>
                  <div className="skill-name">C++</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📘</div>
                  <div className="skill-name">JavaScript</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🐘</div>
                  <div className="skill-name">PHP</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">📄</div>
                  <div className="skill-name">HTML5</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">💅</div>
                  <div className="skill-name">CSS3</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🟢</div>
                  <div className="skill-name">Node.js</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🚀</div>
                  <div className="skill-name">Express.js</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">⚡</div>
                  <div className="skill-name">Ajax</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🌐</div>
                  <div className="skill-name">Full Stack</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database & ML</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">🍃</div>
                  <div className="skill-name">MongoDB</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🗄️</div>
                  <div className="skill-name">MySQL</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🤖</div>
                  <div className="skill-name">Machine Learning</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🧠</div>
                  <div className="skill-name">NLP</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📊</div>
                  <div className="skill-name">Scikit-learn</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🔥</div>
                  <div className="skill-name">Flask</div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Skills & Tools</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">💼</div>
                  <div className="skill-name">Software Development</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <div className="skill-name">Web Design</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📱</div>
                  <div className="skill-name">App Development</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">✅</div>
                  <div className="skill-name">Software Testing</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📊</div>
                  <div className="skill-name">Microsoft Office</div>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🗣️</div>
                  <div className="skill-name">Communication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's work together to make it happen!</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:alikabir318@gmail.com" style={{color: '#ccc', textDecoration: 'none'}}>alikabir318@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+916000415982" style={{color: '#ccc', textDecoration: 'none'}}>+91 6000415982</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://www.linkedin.com/in/sabbir-ali-336221264/" target="_blank" rel="noopener noreferrer" style={{color: '#ccc', textDecoration: 'none'}}>linkedin.com/in/sabbir-ali-336221264</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>Cachar, Katigora, Assam, India</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sabbir-ali-336221264/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://github.com/sabbir12343" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙</a>
            <a href="mailto:alikabir318@gmail.com" aria-label="Email">📧</a>
            <a href="tel:+916000415982" aria-label="Phone">📱</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

