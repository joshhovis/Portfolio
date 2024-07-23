import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import ColorSelect from "../components/ColorSelect";
import SocialLogos from "../components/SocialLogos";

import "./Home.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import profilePhoto from "../assets/cartoon-profile.png";
import arrow from "../assets/arrow.png";

import { usePrimaryColor } from "../PrimaryColorContext";

const Home = () => {
    const currentTime = new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const { primaryColor, setPrimaryColor } = usePrimaryColor();

    const handleResize = () => {
        const colorFooter = document.getElementById("color-footer");
        const colorSection = document.getElementById("color-section");
        const footerSection = document.getElementById("footer-section");

        if (window.innerWidth >= 1024) {
            if (colorFooter && colorSection && footerSection) {
                colorFooter.parentNode.insertBefore(colorSection, colorFooter);
                colorFooter.parentNode.insertBefore(footerSection, colorFooter);
                colorFooter.remove();
            }
        } else {
            if (!colorFooter && colorSection && footerSection) {
                const newColorFooter = document.createElement("div");
                newColorFooter.id = "color-footer";
                newColorFooter.className = "home__color-footer";
                newColorFooter.appendChild(colorSection);
                newColorFooter.appendChild(footerSection);
                document.querySelector(".home").appendChild(newColorFooter);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Call handleResize on mount to check the initial size

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <main className="home" style={{ "--primary-color": primaryColor }}>
            <section className="home__intro">
                <img
                    className="home__intro-image"
                    src={profilePhoto}
                    alt="cartoon of Joshua"
                />
                <div className="home__intro-text">
                    <div className="home__intro-text-wrapper">
                        <p className="home__intro-text-welcome">Welcome</p>
                        <p className="home__intro-text-description">
                            Hi, I'm{" "}
                            <span className="home__intro-text-name">
                                Joshua Hovis
                            </span>{" "}
                            , a software developer with a focus on the front end
                            user experience and micro interactions.
                        </p>
                        <p className="home__intro-text-invite">
                            Feel free to reach out to me if you would like to
                            discuss new opportunities or projects!
                        </p>
                    </div>

                    <SocialLogos />
                </div>
            </section>

            <section className="home__about">
                <About />
            </section>

            <section className="home__contact">
                <Contact />
            </section>

            <section className="home__timezone">
                <h3 className="home__timezone-title">Time zone</h3>
                <div className="home__timezone-info">
                    <p className="home__timezone-time">{currentTime} EST,</p>
                    <p className="home__timezone-location">United States</p>
                </div>
            </section>

            <section className="home__current">
                <div className="home__current-header">
                    <div>
                        <h4 className="home__current-header-title">Current</h4>
                        <p className="home__current-header-question">
                            What am I currently working on?
                        </p>
                    </div>
                    <div className="home__current-icon"></div>
                </div>
                <p className="home__current-answer">
                    Enrolled in school to obtain a BS in Software Engineering -
                    35% finished
                </p>
                <p className="home__current-answer">
                    Volunteering for different organizations to help them
                    achieve their tech needs.
                </p>
            </section>

            <section className="home__projects">
                <Link to="/projects" className="home__projects-link">
                    <h2 className="home__projects-link-header">Projects</h2>
                    <svg
                        className="home__projects-icon"
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
                </Link>
            </section>

            <div id="color-footer" className="home__color-footer">
                <section id="color-section" className="home__color">
                    <ColorSelect setPrimaryColor={setPrimaryColor} />
                </section>

                <section id="footer-section" className="home__footer">
                    <p className="home__footer-text">
                        2024 - Crafted using{" "}
                        <a
                            href="https://react.dev/"
                            className="home__footer-react"
                        >
                            React
                        </a>{" "}
                        and{" "}
                        <a
                            className="home__footer-scss"
                            href="https://sass-lang.com/documentation/"
                        >
                            SCSS
                        </a>{" "}
                        by{" "}
                        <a
                            href="https://github.com/joshhovis"
                            className="home__footer-author"
                        >
                            Joshua Hovis
                        </a>
                    </p>
                </section>
            </div>
        </main>
    );
};

export default Home;
