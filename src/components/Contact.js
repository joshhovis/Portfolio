import React from "react";
import "./Contact.css";

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
                    <a href="https://github.com/joshhovis">Github</a>
                </li>
                <li className="contact__socials-item">
                    <a href="https://www.linkedin.com/in/joshua-hovis/">
                        Linkedin
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
