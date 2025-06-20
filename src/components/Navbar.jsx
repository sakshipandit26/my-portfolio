import React from 'react';
import { LogoIcon, MoonIcon, SunIcon } from './Icons';
import './Navbar.css';

export const Navbar = ({ onNavClick, onToggleTheme, theme }) => {
    const navLinks = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];
    return (
        <header className="navbar">
            <div className="navbar-logo" onClick={() => onNavClick('home')}>
                <LogoIcon />
                <span className="logo-name">SAKSHI PANDIT</span>
            </div>
            <nav className="navbar-links">
                {navLinks.map(link => (
                    <a key={link} href="#" onClick={(e) => { e.preventDefault(); onNavClick(link.toLowerCase()); }}>
                        {link}
                    </a>
                ))}
            </nav>
            <button onClick={onToggleTheme} className="theme-toggle">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
        </header>
    );
};
