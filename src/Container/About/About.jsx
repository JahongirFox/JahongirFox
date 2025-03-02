import React from "react";
import './About.css'
import Education from '../Img/education.png'
function About() {
    return(
        <div id="About">
            <div className="About-Page">
                    <p>Get To Know More</p>
                    <h1>About Me</h1>
            </div>
             <div className="CEnter">
                    <div className="Border">
                        <div className="About-img">
                            <div className="Center-img"> 
                                <img width={"70px"} src={Education} alt="" />
                            </div>
                            <p>Education</p>
                            <div className="Certificate">
                                <p>CoddyCamp IT Academy <br />High Certificate <br />19/2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Sumarry">
                        <div className="Summary-center">
                            <h3>Summary</h3>
                            <p>I am Full-Stack Developer, Hardworking and passionate person and positive person, I like working in a team, and I work hard and get along well with the team, I am looking for a good team and job, ready to help team achieve company goals.</p>
                        </div>
                </div>
            </div>
    )
}
export default About