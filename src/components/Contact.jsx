import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Contact = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="contact" className="contact section-spacing" ref={sectionRef}>
            <div className="container text-center">
                <h2 className="section-title fade-in">Say <span className="accent-cyan">Hello</span></h2>
                <p className="contact-desc fade-in slide-up">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                
                <div className="contact-cards fade-in slide-up delay-1">
                    <a href="mailto:palladevisatyasaisrichaitanya@gmail.com" className="contact-card glass-card hover-pink">
                        <i className="fas fa-envelope"></i>
                        <h4>Email Me</h4>
                        <p>palladevisatyasaisrichaitanya<br />@gmail.com</p>
                    </a>
                    <a href="https://linkedin.com/in/chaitanya53361" target="_blank" rel="noopener noreferrer" className="contact-card glass-card hover-cyan">
                        <i className="fab fa-linkedin-in"></i>
                        <h4>LinkedIn</h4>
                        <p>chaitanya53361</p>
                    </a>
                    <a href="https://github.com/chaitanya-7023" target="_blank" rel="noopener noreferrer" className="contact-card glass-card hover-yellow">
                        <i className="fab fa-github"></i>
                        <h4>GitHub</h4>
                        <p>chaitanya-7023</p>
                    </a>
                    <div className="contact-card glass-card hover-purple">
                        <i className="fas fa-phone-alt"></i>
                        <h4>Call Me</h4>
                        <p>+91-6300066569</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
