import React from "react";
import "./Contact.css";
import arrow from "../assets/arrow.png";

const Contact = () => {
    return (
        <div className="contact">
            <h3 className="contact__title">Let's work together!</h3>

            <div className="contact__section">
                <h4 className="contact__section-title">Contact Details</h4>
                <p className="contact__section-email">joshuahovis3@gmail.com</p>
                <p className="contact__section-location">United States</p>
            </div>

            {/* <h4 className="contact__section-title">Socials</h4> */}
            <ul className="contact__socials">
                Socials
                <li className="contact__socials-item">
                    <a href="https://github.com/joshhovis">
                        Github
                        <svg
                            className="contact__socials-icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            viewBox="0,0,256,256"
                        >
                            <g
                                fill="currentColor"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                            >
                                <g transform="scale(16,16)">
                                    <path d="M12.0918,1.07813l-5.84961,5.84961l-2.82812,-2.82617l-1.41406,1.41406v8.48438h8.48438l1.41602,-1.41406l-2.83008,-2.83008l5.84961,-5.84961z"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <li className="contact__socials-item">
                    <a href="https://www.linkedin.com/in/joshua-hovis/">
                        Linkedin
                        <svg
                            className="contact__socials-icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            viewBox="0,0,256,256"
                        >
                            <g
                                fill="currentColor"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray=""
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                            >
                                <g transform="scale(16,16)">
                                    <path d="M12.0918,1.07813l-5.84961,5.84961l-2.82812,-2.82617l-1.41406,1.41406v8.48438h8.48438l1.41602,-1.41406l-2.83008,-2.83008l5.84961,-5.84961z"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
