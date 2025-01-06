// src/components/Footer.tsx
import React from 'react';
import { useFooterViewModel } from '../viewmodels/FooterViewModel';
import Image from 'next/image';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    const { aboutLinks, logo } = useFooterViewModel();

    return (
        <footer className="footer-container">
        
            <div className="footer-left">
                <div className="footer-logo">
                    <Image src={`/img/footer/${logo}`} alt="Logo" width={120} height={40} />
                </div>
               
            </div>

 
            <div className="footer-right">
                <h2 className="footer-about-title-left">About Us</h2>
                <div className="footer-links-container">
                    <ul className="footer-links">
                        {aboutLinks.slice(0, 2).map((link) => ( 
                            <li key={link.id}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>

            <h2 className="footer-about-title-right">คู่มือการใช้บริการ</h2>
                    <ul className="footer-links">
                        {aboutLinks.slice(2, 5).map((link) => ( 
                            <li key={link.id}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>

            </div>
        </footer>
    );
};

export default Footer;
