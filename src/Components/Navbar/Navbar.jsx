import React, { useState } from 'react';
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollToAbout = (About) => {
        document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Mobil menyuni yopish
    };
    const scrollToProjects = (Projects) => {
        document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Mobil menyuni yopish
    };
    const scrollToContact = (Contact) => {
        document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Mobil menyuni yopish
    };
    return(
        <nav>
            <div className='Flex'>
                    <a href="http://localhost:3000/"><p>JahongirFox</p></a>

                     {/* Hamburger Button (1000px dan kichik bo‘lganda ko‘rinadi) */}
                     <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
                <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <button onClick={() => scrollToAbout("About")}>About</button>
                    <button onClick={() => scrollToProjects("Projects")}>Projects</button>
                    <button onClick={() => scrollToContact("Contact")}>Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;