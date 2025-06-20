import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/Home';
import { AboutPage } from './components/About';
import { SocialLinksSidebar, VerticalEmail } from './components/Layout';
import './App.css';

function App() {
    const [theme, toggleTheme] = useTheme();
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavClick = (page) => {
        if (['home', 'about'].includes(page)) {
            setCurrentPage(page);
        }
    };
    
    return (
        <div className="app">
            <div className="container">
                <Navbar onNavClick={handleNavClick} onToggleTheme={toggleTheme} theme={theme} />
                <SocialLinksSidebar />
                <VerticalEmail />
                <main>
                    <HomePage isVisible={currentPage === 'home'} />
                    <AboutPage isVisible={currentPage === 'about'} />
                </main>
            </div>
        </div>
    );
}

export default App;