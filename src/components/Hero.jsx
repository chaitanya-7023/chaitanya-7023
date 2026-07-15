import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Hero = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="home" className="hero section-spacing" ref={sectionRef}>
            <div className="container hero-grid">
                <div className="hero-content">
                    <p className="greeting slide-up fade-in">👋 Hello, World! I am</p>
                    <h1 className="name-title slide-up fade-in delay-1">Palla Devi Satya Sai Sri <span className="gradient-text">Chaitanya</span></h1>
                    <h2 className="role-title slide-up fade-in delay-2">&lt;Full-Stack Developer /&gt;</h2>
                    <p className="hero-desc slide-up fade-in delay-3">
                        Crafting playful, dark, and vibrant digital experiences. I specialize in building responsive, full-stack web applications with modern technologies. Let’s turn ideas into reality!
                    </p>
                    <div className="hero-actions slide-up fade-in delay-4">
                        <a href="#projects" className="btn btn-primary">View My Work <i className="fas fa-arrow-right"></i></a>
                        <a href="https://github.com/chaitanya-7023" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><i className="fab fa-github"></i> GitHub</a>
                        <a href="https://linkedin.com/in/chaitanya53361" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                    </div>
                </div>
                <div className="hero-image-wrapper slide-up fade-in delay-2">
                    <div className="hero-image-glow"></div>
                    <img src="/WhatsApp Image 2026-03-14 at 12.17.44 PM.jpeg" alt="Chaitanya" className="hero-profile-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
