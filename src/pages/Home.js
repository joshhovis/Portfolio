import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import "./Home.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import profilePhoto from "../assets/cartoon-profile.png";

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
                    className="home__image"
                    src={profilePhoto}
                    alt="cartoon of Joshua"
                />
                <div className="home__text-wrapper">
                    <p className="home__welcome">Welcome</p>
                    <p className="home__description">
                        Hi, I'm <span className="home__name">Joshua Hovis</span>{" "}
                        , a software developer with a focus on the front end
                        user experience.
                    </p>
                    <p className="home__invite">
                        Feel free to reach out to me if you would like to
                        discuss new opportunities or projects!
                    </p>

                    <div className="home__links">
                        <button className="home__button">
                            <Link
                                to="https://github.com/joshhovis"
                                className="home__link"
                            >
                                <img
                                    className="home__link-image"
                                    src={github}
                                    alt="github logo"
                                />
                            </Link>
                        </button>
                        <button className="home__button">
                            <Link
                                to="https://www.linkedin.com/in/joshua-hovis/"
                                className="home__link"
                            >
                                <img
                                    className="home__link-image"
                                    src={linkedin}
                                    alt="linkedin logo"
                                />
                            </Link>
                        </button>
                    </div>
                </div>
            </section>

            <section className="home__section">
                <About />
            </section>

            <section className="home__section">
                <Contact />
            </section>

            <section className="home__timezone">
                <h3 className="home__timezone-title">Time zone</h3>
                <div className="home__timezone-info">
                    <p className="home__timezone-time">{currentTime} EST</p>
                    <p className="home__timezone-location">United States</p>
                </div>
            </section>

            <section className="home__current">
                <span className="home__current-icon"></span>
                <h4 className="home__current-title">Current</h4>
                <p className="home__current-question">
                    What am I currently working on?
                </p>
                <p className="home__current-answer">
                    Enrolled in school to obtain a BS in Software Engineering -
                    35% finished
                </p>
                <p className="home__current-answer">
                    Volunteering for different organizations to help them
                    achieve their tech needs
                </p>
            </section>

            <section className="home__projects-link">
                <Link to="/projects" className="home__projects-link-text">
                    Projects
                </Link>
            </section>

            <section className="home__footer">
                <p className="home__footer-text">
                    2024 - Crafted using{" "}
                    <a href="/" className="home__footer-link">
                        React
                    </a>{" "}
                    by <span className="home__footer-author">Joshua Hovis</span>
                </p>
            </section>
        </main>
    );
};

export default Home;
