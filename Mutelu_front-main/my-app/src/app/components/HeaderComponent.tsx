"use client"; 

import React, { useState } from 'react';
import Link from 'next/link'; // นำเข้า Link
import '../styles/Header.css'; 

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-title-container">
                <Link href="../page/HomePageView" className="header-title">
                    <h1>MuTelu</h1>
                </Link>
                <h3 className="header-sub-title">Fortune for you</h3>
                <div className='icon-container'></div>
                <div className='btn'>
                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <button className="nav-button">บทความ</button>
                        <button className="nav-button">ดูดวง</button>
                        <button className="nav-button">สมัครหมอดู</button>
                        <button className="nav-button">เติมเงิน</button>
                        <button className="nav-button">ทำบุญออนไลน์</button>
                        <button className="nav-button">เครื่องรางเสริมดวง</button>
                        <button className="user-name-button nav-button">
                            {isMenuOpen ? (
                                "pagasus lerchortiyae"
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-5 h-5 inline-block mr-1" 
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.66-10 5v3h20v-3c0-3.34-6.69-5-10-5z"
                                    />
                                </svg>
                            )}
                        </button>
                    </nav>
                </div>
            </div>
            <div className="menu-toggle">
                <button onClick={toggleMenu} className="toggle-button">
                    {isMenuOpen ? '✖️' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Header;
