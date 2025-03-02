import React from "react";
import './Home.css'
import Git from '../Img/github.png'
import linkedin from '../Img/linkedin.png'
import Upwork from '../Img/upwork.png'
function Home() {
    return(
        <div className="Home-Page">
            <div id="Home">
                <div className="Home-page">
                    <p>Hello,I'm</p>
                    <h1>Jahongir Raxmatjonov</h1>
                    <h2>Full-Stack Developer</h2>
                    <div className="Button">
                        <a href="#nimadur">Contact Me</a>
                    </div>
                    <div className="Icons-center">
                        <div className="Icons">
                            <a href="https://github.com/JahongirFox"><img width={"50px"} src={Git} alt="" /></a>
                            <a href="https://www.linkedin.com/in/jahongir-raxmatjonov-5a5743342/"><img width={"48px"} src={linkedin} alt="" /></a>
                            <a href="https://www.upwork.com/"><img width={"50px"} src={Upwork} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* BU About Page _______________________________________ */}

          





















        </div>
    )
}

export default Home;