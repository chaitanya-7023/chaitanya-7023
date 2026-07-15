import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container focus-footer">
                <a href="#home" className="logo">Chaitanya<span>.</span></a>
                <p>Designed and Built by Palla Devi Satya Sai Sri Chaitanya</p>
                <div className="footer-socials">
                    <a href="https://github.com/chaitanya-7023" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/chaitanya53361" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="mailto:palladevisatyasaisrichaitanya@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
