import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        closeMenu();
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for navbar
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>Chaitanya<span>.</span></a>
                <div className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                    <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                    <a href="#journey" onClick={(e) => handleNavClick(e, 'journey')}>Education</a>
                    <a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')}>Certification</a>
                    <a href="#resume-section" onClick={(e) => handleNavClick(e, 'resume-section')}>Resume</a>
                    <a href="#github-analytics" onClick={(e) => handleNavClick(e, 'github-analytics')}>GitHub</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                </div>
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
