import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const About = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="about" className="about section-spacing" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">About <span className="accent-cyan">Me</span></h2>
                <div className="about-grid fade-in">
                    <div className="about-text glass-card">
                        <p>I am a passionate <strong>Full-Stack Developer</strong> driven by problem-solving and an eagerness to learn. Adapting to new technologies and collaborating in teams are some of my core strengths.</p>
                        <br />
                        <p>Currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University (expected August 2023), I've built multiple web solutions emphasizing robust backends and interactive frontends.</p>
                        <br />
                        <p>I thrive in environments where I can build dark, colorful, and highly interactive user interfaces backed by scalable server logic.</p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card pink-border">
                            <h3>Hackathon</h3>
                            <p>Top 18 Rank out of 50+ Teams</p>
                        </div>
                        <div className="stat-card cyan-border">
                            <h3>Education</h3>
                            <p>B.Tech CSE @ LPU</p>
                        </div>
                        <div className="stat-card yellow-border">
                            <h3>Focus</h3>
                            <p>MERN Stack & PHP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
