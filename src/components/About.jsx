import React from 'react';
import './About.css';
import handImage from '../assets/hand.png'; // Correctly import the local image

export const AboutPage = ({ isVisible }) => (
    <div id="about" className={`page about-page ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="about-blobs-bg">
            <div className="about-blob-1"></div>
            <div className="about-blob-2"></div>
        </div>
        <div className="about-content">
            <div className="about-image-container">
               <div className="about-hand-bg">
                 <img src={handImage} alt="3D Hand pointing" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300/CCCCCC/FFFFFF?text=Image+Missing'; }} />
               </div>
            </div>
            <div className="about-text-content">
                <h2>This is it. ;)</h2>
                <div className="text-wrapper">
                    <p>A <strong className="highlight">MERN Stack Developer</strong> skilled in building responsive, scalable web apps with a passion for clean code and performance optimization.</p>
                    <p>Experienced in API development, database design with MongoDB, and creating dynamic front-ends with React.js. I love turning ideas into beautiful and functional user experiences.</p>
                    <p>Continuously learning and exploring new technologies to enhance my skills and build better, more efficient applications.</p>
                </div>
                 <div className="divider-line"></div>
            </div>
        </div>
    </div>
);