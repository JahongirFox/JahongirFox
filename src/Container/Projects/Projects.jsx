import React from "react";
import './Projects.css'
import chillpro from '../Img/chillpro.png'
import fasten from '../Img/Fasten.png'

function Projects() {
    return(
        <div id="Projects">
            <p>Browse My Recent</p>
            <h1>Projects</h1>
                <div className="Block">
                    <div className="Flex-projects">
                        <div className="Card-1">
                            <div className="card-img-p">
                                <img width={"300px"} src={chillpro} alt="" />
                                <p>Project One</p>
                                <div className="block-btn">
                                <a href="https://github.com/JahongirFox/ChillPro-Service"><button>Git Hub</button></a> <br />
                                <a href="https://www.chillpro.uz/"><button>Live Demo</button></a> <br />
                                </div>
                            </div>
                        </div>
                        <div className="Card-1">
                            <div className="card-img-p">
                                <img width={"300px"} src={fasten} alt="" />
                                <p>Project Two</p>
                                <div className="block-btn">
                                    <a href="https://github.com/JahongirFox/Fasten"><button>Git Hub</button></a> <br />
                                    <a href="https://fasten.com/ru_uz"><button>Live Demo</button></a> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>      
    )
}

export default Projects;