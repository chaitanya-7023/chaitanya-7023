import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { forceDownloadCV } from '../utils/downloadCV';

const ResumeSection = () => {
    const sectionRef = useFadeIn();

    return (
        <section id="resume-section" className="resume-block section-spacing" ref={sectionRef} style={{ padding: '0 0 100px 0' }}>
            <div className="container">
                <div className="resume-card glass-card fade-in slide-up" style={{ 
                    padding: '4rem', 
                    borderRadius: '16px',
                    fontFamily: 'Inter, var(--font-main)'
                }}>
                    <p style={{ 
                        color: 'var(--accent-active)', 
                        fontSize: '0.85rem', 
                        fontWeight: '700', 
                        letterSpacing: '3px', 
                        textTransform: 'uppercase', 
                        marginBottom: '1rem' 
                    }}>
                        Overview
                    </p>
                    <h2 style={{ 
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
                        fontWeight: '800', 
                        marginBottom: '4rem', 
                        color: 'var(--text-primary)',
                        fontFamily: 'Georgia, serif',
                        letterSpacing: '-1px',
                        lineHeight: '1.1'
                    }}>
                        Resume
                    </h2>
                    
                    <h3 style={{ 
                        fontSize: 'clamp(2rem, 4vw, 3rem)', 
                        fontWeight: '800', 
                        marginBottom: '0.8rem', 
                        color: 'var(--text-primary)',
                        fontFamily: 'Georgia, serif',
                        letterSpacing: '-1px',
                        lineHeight: '1.2'
                    }}>
                        Palla Devi Satya Sai Sri Chaitanya
                    </h3>
                    <p style={{ 
                        color: 'var(--accent-active)', 
                        fontSize: '1.2rem', 
                        marginBottom: '2rem',
                        fontWeight: '500'
                    }}>
                        Full-Stack Developer
                    </p>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '1.5rem', 
                        color: 'var(--text-secondary)', 
                        fontSize: '1.05rem', 
                        marginBottom: '2.5rem', 
                        flexWrap: 'wrap',
                        fontWeight: '500'
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><span style={{ backgroundColor: 'var(--text-primary)', borderRadius: '4px', padding: '2px 4px', fontSize: '0.7rem', color: 'var(--bg-primary)' }}>@</span> palladevisatyasaisrichaitanya@gmail.com</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📱 +91 6300066569</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📍 Punjab, India</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://linkedin.com/in/chaitanya53361" target="_blank" rel="noopener noreferrer" 
                           style={{ 
                               padding: '0.7rem 1.8rem', 
                               background: 'rgba(255, 255, 255, 0.05)', 
                               border: '1px solid var(--glass-border)', 
                               borderRadius: '8px', 
                               color: 'var(--text-primary)', 
                               fontWeight: '600', 
                               textDecoration: 'none',
                               display: 'inline-block',
                               transition: 'all 0.2s ease'
                           }}
                           onMouseOver={e => e.currentTarget.style.background='rgba(255, 255, 255, 0.1)'}
                           onMouseOut={e => e.currentTarget.style.background='rgba(255, 255, 255, 0.05)'}
                           >
                            LinkedIn
                        </a>
                        <a href="https://github.com/chaitanya-7023" target="_blank" rel="noopener noreferrer" 
                           style={{ 
                               padding: '0.7rem 1.8rem', 
                               background: 'rgba(255, 255, 255, 0.05)', 
                               border: '1px solid var(--glass-border)', 
                               borderRadius: '8px', 
                               color: 'var(--text-primary)', 
                               fontWeight: '600', 
                               textDecoration: 'none',
                               display: 'inline-block',
                               transition: 'all 0.2s ease'
                           }}
                           onMouseOver={e => e.currentTarget.style.background='rgba(255, 255, 255, 0.1)'}
                           onMouseOut={e => e.currentTarget.style.background='rgba(255, 255, 255, 0.05)'}
                           >
                            GitHub
                        </a>
                        <button onClick={forceDownloadCV} 
                           style={{ 
                               padding: '0.7rem 1.8rem', 
                               background: 'linear-gradient(45deg, var(--accent-active), var(--accent-primary))', 
                               border: 'none', 
                               borderRadius: '8px', 
                               color: 'var(--text-primary)', 
                               fontWeight: '700', 
                               cursor: 'pointer', 
                               display: 'flex', 
                               alignItems: 'center', 
                               gap: '0.5rem',
                               fontSize: '1rem',
                               transition: 'all 0.2s ease',
                               boxShadow: '0 4px 15px rgba(255, 159, 28, 0.3)'
                           }}
                           onMouseOver={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 25px rgba(240, 58, 71, 0.5)'; }}
                           onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 15px rgba(255, 159, 28, 0.3)'; }}
                           >
                            <i className="fas fa-arrow-down" style={{ fontSize: '0.9em' }}></i> Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
