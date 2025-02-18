import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span class="sss">
                    <img src={"/logo.png"} alt="Logo" className="logo-image" /></span>
                <span className="logo-text"> SaveMate</span>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">About Us</a>
                <a href="#" className="nav-item">Login</a>
                <a href="#" className="nav-item">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;