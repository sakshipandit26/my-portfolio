import React from 'react';
import './Home.css';
import Image from '../assets/profile.jpg'; // Correctly import the local image


export const HomePage = ({ isVisible }) => {
    const handleDownloadCV = () => {
        const cvUrl = '/Sakshi_Pandit_CV.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'Sakshi_Pandit_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="home" className={`page home-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="home-content">
                <div className="intro-text">
                    <div className="hello-badge">Hello!</div>
                    <h1>I'm Sakshi <span role="img" aria-label="wave">👋</span></h1>
                    <p>MERN Stack Developer & UI/UX Enthusiast.<br />Based in Pune, India.</p>
                    <div className="button-group">
                        <button onClick={handleDownloadCV} className="btn btn-primary">Download CV</button>
                        <button className="btn btn-secondary">Get in Touch!</button>
                    </div>
                </div>
                <div className="image-container">
                    <div className="blob-shape"></div>
                    <div className="image-wrapper">
                        <img
                        //    src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d7e4-61f8-a9f2-40a8f1679903/raw?se=2025-06-20T13%3A35%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=029962b7-bded-5938-9e5a-da9059c6d3c5&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-20T12%3A22%3A24Z&ske=2025-06-21T12%3A22%3A24Z&sks=b&skv=2024-08-04&sig=D5qNEF90lF/a4udeRSFhpT7C8CvcFRv4b5SERv/8agw%3D"
                         src={Image}
                            alt="Sakshi Pandit"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/ffffff?text=Image+Missing'; }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};