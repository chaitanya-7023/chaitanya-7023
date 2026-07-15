import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Journey = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="journey" className="journey section-spacing" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">My <span className="accent-purple">Journey</span></h2>
                
                <div className="journey-grid">
                    {/* Education */}
                    <div className="journey-column fade-in slide-up">
                        <h3 className="column-title">Education</h3>
                        <div className="timeline">
                            <div className="timeline-item left">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h4>Lovely Professional University</h4>
                                    </div>
                                    <p className="timeline-org">Phagwara, Punjab</p>
                                    <div className="timeline-details">
                                        <span>B.Tech &mdash; Computer Science & Engineering &mdash;</span>
                                        <span className="timeline-score">CGPA: 6.29</span>
                                    </div>
                                    <p className="timeline-date">Aug 2023 - Present</p>
                                    <img src="/lpu_image.png" alt="Lovely Professional University" className="timeline-img" />
                                </div>
                            </div>
                            
                            <div className="timeline-item right">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h4>Sri Chaitanya Jr College</h4>
                                    </div>
                                    <p className="timeline-org">Rajahmundry, AP</p>
                                    <div className="timeline-details">
                                        <span>Intermediate &mdash;</span>
                                        <span className="timeline-score">80%</span>
                                    </div>
                                    <p className="timeline-date">Apr 2021 - Mar 2023</p>
                                    <img src="/college_inter.png" alt="Sri Chaitanya Jr College" className="timeline-img" />
                                </div>
                            </div>
                            
                            <div className="timeline-item left">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h4>Sri Chaitanya E.M High School</h4>
                                    </div>
                                    <p className="timeline-org">Rajahmundry, AP</p>
                                    <div className="timeline-details">
                                        <span>Matriculation &mdash;</span>
                                        <span className="timeline-score">100%</span>
                                    </div>
                                    <p className="timeline-date">Apr 2020 - Mar 2021</p>
                                    <img src="/school.png" alt="Sri Chaitanya E.M High School" className="timeline-img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certifications & Training */}
                    <div id="certifications" className="journey-column fade-in slide-up delay-1" style={{ marginTop: '5rem' }}>
                        <h3 className="column-title">Certifications & Training</h3>
                        <div className="timeline">
                            <div className="timeline-item left">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-certificate"></i>
                                        <h4>The Bits and Bytes of Computer Networking</h4>
                                        <div className="project-links" style={{ marginLeft: 'auto' }}>
                                            <a href="/Coursera Bits.pdf" target="_blank" rel="noopener noreferrer" title="View Certificate"><i className="fas fa-external-link-alt" style={{ color: 'var(--accent-cyan)' }}></i></a>
                                        </div>
                                    </div>
                                    <p className="timeline-org">Google Certificate</p>
                                    <p className="timeline-date">Dec 2024</p>
                                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Networking" className="timeline-img" />
                                </div>
                            </div>
                            
                            <div className="timeline-item right">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-certificate"></i>
                                        <h4>Specialization in Computer Communication</h4>
                                        <div className="project-links" style={{ marginLeft: 'auto' }}>
                                            <a href="/Coursera HH3IYJ5XZ93D.pdf" target="_blank" rel="noopener noreferrer" title="View Certificate"><i className="fas fa-external-link-alt" style={{ color: 'var(--accent-cyan)' }}></i></a>
                                        </div>
                                    </div>
                                    <p className="timeline-org">University of Colorado (Coursera)</p>
                                    <p className="timeline-date">Sep 2024</p>
                                    <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Networking Equipment" className="timeline-img" />
                                </div>
                            </div>
                            
                            <div className="timeline-item left">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-certificate"></i>
                                        <h4>Data Structures and Algorithm</h4>
                                        <div className="project-links" style={{ marginLeft: 'auto' }}>
                                            <a href="/DBMS Neocolab.pdf" target="_blank" rel="noopener noreferrer" title="View Certificate"><i className="fas fa-external-link-alt" style={{ color: 'var(--accent-cyan)' }}></i></a>
                                        </div>
                                    </div>
                                    <p className="timeline-org">Neo-Colab</p>
                                    <p className="timeline-date">Jan 2024</p>
                                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Data Structures" className="timeline-img" />
                                </div>
                            </div>

                            <div className="timeline-item right">
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <i className="fas fa-certificate"></i>
                                        <h4>Legacy Responsive Web Design V8</h4>
                                        <div className="project-links" style={{ marginLeft: 'auto' }}>
                                            <a href="/Screenshot 2025-11-24 223157.png" target="_blank" rel="noopener noreferrer" title="View Certificate"><i className="fas fa-external-link-alt" style={{ color: 'var(--accent-cyan)' }}></i></a>
                                        </div>
                                    </div>
                                    <p className="timeline-org">FreeCodeCamp</p>
                                    <p className="timeline-date">Aug 2023</p>
                                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Web Design" className="timeline-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="achievements-wrap fade-in slide-up delay-2">
                    <h3 className="column-title"><i className="fas fa-trophy"></i> Achievements</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="glass-card achievement-card yellow-border">
                            <div className="achievement-icon"><i className="fas fa-medal"></i></div>
                            <div>
                                <h4>Top 18 in Hackathon</h4>
                                <p className="timeline-date">Mar 2024</p>
                                <p>Secured a Top 18 rank among 50+ teams at the Code Off Duty Web Hackathon for building an innovative web application, demonstrating strong skills in web development, problem-solving, and teamwork.</p>
                            </div>
                        </div>
                        <div className="glass-card achievement-card cyan-border">
                            <div className="achievement-icon"><i className="fas fa-star"></i></div>
                            <div>
                                <h4>Academic Excellence</h4>
                                <p className="timeline-date">Mar 2021</p>
                                <p>Achieved an outstanding 99% score in the 10th grade examinations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
