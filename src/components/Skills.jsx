import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Skills = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="skills" className="skills section-spacing" ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in">
                    <p className="tech-stack-label">TECH STACK</p>
                    <h2 className="section-title" style={{marginBottom: 0}}>Skills & Tools</h2>
                </div>
                
                <div className="skills-tools-grid">
                    {/* Languages Column */}
                    <div className="skill-column glass-card fade-in slide-up">
                        <div className="column-header">
                            <div className="column-icon"><i className="fas fa-code"></i></div>
                            <h3>Languages</h3>
                        </div>
                        <div className="skill-list">
                            <div className="skill-item">
                                <div className="skill-logo text-yellow"><i className="fab fa-js-square"></i></div>
                                <div className="skill-info">
                                    <h4>JavaScript</h4>
                                    <p>Core Web Logic</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-blue"><i className="fas fa-c"></i></div>
                                <div className="skill-info">
                                    <h4>C / C++</h4>
                                    <p>Systems & DSA</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-red"><i className="fab fa-java"></i></div>
                                <div className="skill-info">
                                    <h4>Java</h4>
                                    <p>Enterprise Apps</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-python"><i className="fab fa-python"></i></div>
                                <div className="skill-info">
                                    <h4>Python</h4>
                                    <p>Scripting & Data</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-purple"><i className="fab fa-php"></i></div>
                                <div className="skill-info">
                                    <h4>Kotlin / PHP</h4>
                                    <p>App / API Logic</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks Column */}
                    <div className="skill-column glass-card fade-in slide-up delay-1">
                        <div className="column-header">
                            <div className="column-icon"><i className="fas fa-desktop"></i></div>
                            <h3>Frameworks</h3>
                        </div>
                        <div className="skill-list">
                            <div className="skill-item">
                                <div className="skill-logo text-cyan"><i className="fab fa-react"></i></div>
                                <div className="skill-info">
                                    <h4>ReactJS</h4>
                                    <p>Interactive UIs</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-green"><i className="fab fa-node-js"></i></div>
                                <div className="skill-info">
                                    <h4>Node.js</h4>
                                    <p>Runtime Env</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-gray"><i className="fas fa-server"></i></div>
                                <div className="skill-info">
                                    <h4>Express</h4>
                                    <p>RESTful APIs</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-orange"><i className="fab fa-html5"></i></div>
                                <div className="skill-info">
                                    <h4>HTML5 / CSS3</h4>
                                    <p>Semantic Web Layouts</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-teal"><i className="fab fa-css3-alt"></i></div>
                                <div className="skill-info">
                                    <h4>Tailwind CSS</h4>
                                    <p>Utility Styling</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Databases Column */}
                    <div className="skill-column glass-card fade-in slide-up delay-2">
                        <div className="column-header">
                            <div className="column-icon"><i className="fas fa-database"></i></div>
                            <h3>Databases</h3>
                        </div>
                        <div className="skill-list">
                            <div className="skill-item">
                                <div className="skill-logo text-leaf"><i className="fas fa-leaf"></i></div>
                                <div className="skill-info">
                                    <h4>MongoDB</h4>
                                    <p>NoSQL Datastore</p>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo text-blue"><i className="fas fa-database"></i></div>
                                <div className="skill-info">
                                    <h4>PostgreSQL / MySQL</h4>
                                    <p>Relational Schema</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
