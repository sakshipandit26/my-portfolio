import React from 'react';
import { FacebookIconPath, InstagramIconPath, TwitterIconPath, GithubIconPath, LinkedInIconPath, TelegramIconPath } from './Icons';
import './Layout.css';

const SocialIcon = ({ path, url }) => ( <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d={path}/> </svg> </a> );

export const SocialLinksSidebar = () => {
    const icons = [ 
        { path: FacebookIconPath, url: "https://www.facebook.com/" },
        { path: InstagramIconPath, url: "https://www.instagram.com/sakshi_pandit26" },
        { path: TwitterIconPath, url: "https://twitter.com/" },
        { path: GithubIconPath, url: "https://github.com/Sakshipandit26" },
        { path: LinkedInIconPath, url: "https://www.linkedin.com/in/sakshi-pandit-a20857276/" },
        { path: TelegramIconPath, url: "https://telegram.org/" },
    ];
    return ( <div className="social-links-sidebar"> {icons.map((icon, index) => <SocialIcon key={index} path={icon.path} url={icon.url} />)} </div> );
};

export const VerticalEmail = () => ( <div className="vertical-email"> <div className="vertical-email-wrapper"> <a href="mailto:sakshipandit2618@gmail.com"> sakshipandit2618@gmail.com </a> <div className="line"></div> </div> </div> );
