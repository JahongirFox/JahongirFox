import React from "react";
import './Contact.css'
import gmail from '../Img/gmail.png'
import telegram from '../Img/telegram.png'

function Contact() {
    return(
        <div id="Contact">
                <p>Get in Touch</p>
                <h1>Contact Me</h1>
                <div className="centerrr">
                    <div className="Border-contact">
                        <div className="Center-cards">
                            <div className="center-icons">
                                <a href="https://mail.google.com/mail/u/0/#search/raxmatjonovjahongir5%40gmail.com"> 
                                    <div className="mail-p">
                                    <img width={"29px"} src={gmail} alt="" />
                                    <p>Example@gmail.com</p>
                                </div>
                                </a>
                                <a href="https://t.me/JahongirFox">
                                <div className="telegram-p">
                                    <img width={"30px"} src={telegram} alt="" />
                                    <p>Telegram</p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact;