import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import horrorAnimation from '../assets/horror_completed.mp4';
import horrorLogo from '../assets/horror_logo.png';

const Projects = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="projects" className="projects section-spacing" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">Featured <span className="accent-yellow">Projects</span></h2>
                <div className="projects-grid">
                    
                    {/* Project 1 */}
                    <div className="project-card glass-card fade-in slide-up glow-pink">
                        <div className="project-header">
                            <div className="folder-icon"><i className="far fa-folder-open"></i></div>
                            <div className="project-links">
                                <a href="https://github.com/chaitanya-7023/Horicultural" target="_blank" rel="noopener noreferrer" title="GitHub Repository"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <h3 className="project-title">Horticultural Crops <br/> Web Solution</h3>
                        <p className="project-date">Apr 2025</p>
                        <div className="project-info">
                            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                                A full-stack e-commerce platform bridging the gap between farmers and buyers with transparent pricing and accessibility.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', margin: '1rem 0 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                <li style={{ marginBottom: '0.4rem' }}>User-friendly interface for seamless browsing across devices</li>
                                <li style={{ marginBottom: '0.4rem' }}>Secure shopping cart and checkout system</li>
                                <li style={{ marginBottom: '0.4rem' }}>Integrated chatbot to assist users with queries</li>
                                <li style={{ marginBottom: '0.4rem' }}>Real-time price updates using dynamic data handling</li>
                                <li style={{ marginBottom: '0.4rem' }}>Storage guidelines to reduce post-harvest losses</li>
                                <li>Optimized database queries for faster performance</li>
                            </ul>
                        </div>
                        <div className="project-tech">
                            <span>HTML/CSS</span><span>JavaScript</span><span>PHP</span><span>MySQL</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card glass-card fade-in slide-up glow-cyan delay-1">
                        <div className="project-header">
                            <div className="folder-icon"><i className="far fa-folder-open"></i></div>
                            <div className="project-links">
                                <a href="https://github.com/chaitanya-7023/ChatBot" target="_blank" rel="noopener noreferrer" title="GitHub Repository"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <h3 className="project-title">Research Collaborator Platform</h3>
                        <p className="project-date">Mar 2025</p>
                        <div className="project-info">
                            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                                A dynamic application enabling students and researchers to collaborate, share ideas, and access resources efficiently.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', margin: '1rem 0 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                <li style={{ marginBottom: '0.4rem' }}>RESTful APIs for efficient data communication</li>
                                <li style={{ marginBottom: '0.4rem' }}>Advanced search and filtering for content discovery</li>
                                <li style={{ marginBottom: '0.4rem' }}>Interactive UI components to improve experience</li>
                                <li style={{ marginBottom: '0.4rem' }}>User authentication and role-based access control</li>
                                <li style={{ marginBottom: '0.4rem' }}>Structured backend for scalability</li>
                                <li>Smooth integration between frontend and backend</li>
                            </ul>
                        </div>
                        <div className="project-tech">
                            <span>HTML/CSS</span><span>JavaScript</span><span>REST API</span>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card glass-card fade-in slide-up glow-yellow delay-2">
                        <div className="project-header">
                            <div className="folder-icon"><i className="far fa-folder-open" style={{ color: 'var(--accent-yellow)' }}></i></div>
                            <div className="project-links">
                                <a href="https://github.com/chaitanya-7023/Arithmetic-Expression-Compiler" target="_blank" rel="noopener noreferrer" title="GitHub Repository"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <h3 className="project-title">Arithmetic Expression Compiler</h3>
                        <div className="project-info" style={{ marginTop: '1rem' }}>
                            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                                A compiler project designed to parse and evaluate arithmetic expressions with accuracy and efficiency.
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', margin: '1rem 0 1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                <li style={{ marginBottom: '0.4rem' }}>Lexical analysis to tokenize input expressions</li>
                                <li style={{ marginBottom: '0.4rem' }}>Parsing techniques (stack-based/recursive)</li>
                                <li style={{ marginBottom: '0.4rem' }}>Evaluated expressions using algorithms</li>
                                <li style={{ marginBottom: '0.4rem' }}>Handled operator precedence and associativity</li>
                                <li style={{ marginBottom: '0.4rem' }}>Error detection mechanisms for valid parsing</li>
                                <li>Focus on core concept strengthening</li>
                            </ul>
                        </div>
                        <div className="project-tech">
                            <span>C/C++</span><span>Algorithms</span><span>Data Structures</span>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="project-card glass-card fade-in slide-up glow-purple delay-3">
                        <div className="project-video-container" style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '1rem', marginTop: '1rem' }}>
                            <video 
                                src={horrorAnimation} 
                                poster={horrorLogo}
                                controls
                                loop
                                playsInline
                                onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
                                style={{ width: '100%', display: 'block', borderRadius: '10px', cursor: 'pointer' }}
                            />
                        </div>
                        <h3 className="project-title">3D Horror Animation</h3>
                        <p className="project-date">Recent</p>
                        <div className="project-info">
                            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                                A short 3D horror animation demonstrating lighting, camera movements, and atmospheric composition using Blender.
                            </p>
                        </div>
                        <div className="project-tech">
                            <span>Blender</span><span>3D Animation</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
