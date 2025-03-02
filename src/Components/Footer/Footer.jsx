import React from 'react';
import './Footer.css'

function Footer() {
    const scrollToAbout = (About) => {
        document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = (Projects) => {
        document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = (Contact) => {
        document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
    };
    return(
        <footer>
                 <div className='center-footer'>
                    <div className='Footer'>
                        <button onClick={() => scrollToAbout("About")}>About</button> <br />
                        <button onClick={() => scrollToProjects("Projects")}>Projects</button> <br />
                        <button onClick={() => scrollToContact("Contact")}>Contact</button> <br />
                    </div>
                </div>
                <div className='copy'>
                     <p>Copyright © 2022 Jahongir Raxmatjonov. All Rights Reserved.</p>
                </div>
        </footer>
    )
}

export default Footer;