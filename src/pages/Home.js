import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import "./Home.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import profilePhoto from "../assets/cartoon-profile.png";
import arrow from "../assets/arrow.png";

const Home = () => {
    const currentTime = new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <main className="home">
            <section className="home__intro">
                <img
                    className="home__intro-image"
                    src={profilePhoto}
                    alt="cartoon of Joshua"
                />
                <div className="home__intro-text">
                    <p className="home__intro-text-welcome">Welcome</p>
                    <p className="home__intro-text-description">
                        Hi, I'm{" "}
                        <span className="home__intro-text-name">
                            Joshua Hovis
                        </span>{" "}
                        , a software developer with a focus on the front end
                        user experience.
                    </p>
                    <p className="home__intro-text-invite">
                        Feel free to reach out to me if you would like to
                        discuss new opportunities or projects!
                    </p>

                    <div className="home__intro-links">
                        <button className="home__intro-button">
                            <Link
                                to="https://github.com/joshhovis"
                                className="home__intro-link"
                            >
                                <img
                                    className="home__intro-link-image"
                                    src={github}
                                    alt="github logo"
                                />
                            </Link>
                        </button>
                        <button className="home__intro-button">
                            <Link
                                to="https://www.linkedin.com/in/joshua-hovis/"
                                className="home__intro-link"
                            >
                                <img
                                    className="home__intro-link-image"
                                    src={linkedin}
                                    alt="linkedin logo"
                                />
                            </Link>
                        </button>
                    </div>
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
                    <img
                        className="home__projects-icon"
                        src={arrow}
                        alt="arrow icon"
                    />
                </Link>
            </section>

            <section className="home__footer">
                <p className="home__footer-text">
                    2024 - Crafted using{" "}
                    <a href="https://react.dev/" className="home__footer-react">
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
        </main>
    );
};

export default Home;
