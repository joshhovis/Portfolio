import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <h3 className="contact__title">Let's work together!</h3>

            <p className="contact__section-title">Contact Details</p>
            <p className="contact__email">joshuahovis3@gmail.com</p>

            <p className="contact__section-title">Socials</p>
            <ul className="contact__socials-list">
                <li className="contact__social-item">Linkedin</li>
                <li className="contact__social-item">Github</li>
            </ul>
        </div>
    );
};

export default Contact;
