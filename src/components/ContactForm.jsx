import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';

const ContactForm = () => {
    const sectionRef = useFadeIn();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact-form-section section-spacing" ref={sectionRef}>
            <div className="container">
                <div className="contact-form-grid">
                    <div className="contact-form-desc fade-in">
                        <h2 className="section-title">Send a <span className="accent-pink">Message</span></h2>
                        <p>
                            Have a specific project in mind or just want to say hi? Feel free to drop a message! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <div className="contact-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-rocket accent-cyan"></i>
                                <span>Fast Response Time</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-lightbulb accent-yellow"></i>
                                <span>Creative Solutions</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-check-circle accent-pink"></i>
                                <span>Collaborative Approach</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-container fade-in slide-up delay-1">
                        <form className="contact-form glass-card" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-input" 
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-input" 
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="message" 
                                    className="form-input" 
                                    placeholder="Your Message" 
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary form-submit-btn">
                                Send Message <i className="fas fa-paper-plane" style={{marginLeft: '8px'}}></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
