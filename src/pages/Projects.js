import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import lld from "../assets/LLD.webp";
import timeDashboard from "../assets/time-dashboard.png";
import bmi from "../assets/bmi.png";
import newsForm from "../assets/news-form.png";
import portfolio from "../assets/screenshot-portfolio.png";

import { usePrimaryColor } from "../PrimaryColorContext";

const Projects = () => {
    const { primaryColor } = usePrimaryColor();

    return (
        <div className="projects" style={{ "--primary-color": primaryColor }}>
            <button className="projects__button">
                <Link to="/" className="projects__button-link">
                    Back
                </Link>
            </button>
            <h1 className="projects__title">Projects</h1>

            <div className="projects__list">
                <div className="projects__list-item">
                    <img
                        className="projects__list-img"
                        src={lld}
                        alt="Little Lights Dentistry home page"
                    />
                    <h3 className="projects__list-title">
                        Little Lights Dentistry
                    </h3>
                    <p className="projects__list-description">
                        I led a major digital transformation for Little Lights
                        Dentistry by migrating their outdated Squarespace 6
                        website to a modern Squarespace 7 platform, resulting in
                        enhanced user experience, significant cost savings of
                        approximately $4,000, and ongoing support to ensure
                        continued effectiveness.
                    </p>
                    <div className="projects__list-tools">
                        <h4 className="projects__list-tools-item">
                            Squarespace 7
                        </h4>
                        <h4 className="projects__list-tools-item">
                            HTML/CSS/JS
                        </h4>
                    </div>
                    <div className="projects__list-link-row">
                        <Link
                            to="https://www.littlelightsdentistry.org/"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Live Site
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="projects__list-item">
                    <img
                        className="projects__list-img"
                        src={portfolio}
                        alt="Joshua hovis portfolio home page"
                    />
                    <h3 className="projects__list-title">Portfolio</h3>
                    <p className="projects__list-description">
                        A personal portfolio website showcasing my skills,
                        projects, and experience as a software developer,
                        designed to provide a comprehensive overview of my work
                        and capabilities. The site leverages React features such
                        as Context API for state management and custom hooks for
                        encapsulating reusable logic, ensuring a responsive and
                        interactive user experience.
                    </p>
                    <div className="projects__list-tools">
                        <h4 className="projects__list-tools-item">React</h4>
                        <h4 className="projects__list-tools-item">HTML/SCSS</h4>
                        <h4 className="projects__list-tools-item">
                            JavaScript
                        </h4>
                    </div>
                    <div className="projects__list-link-row">
                        <Link
                            to="https://joshhovis.github.io/BMI-Calculator/"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Live Site
                            </button>
                        </Link>
                        <Link
                            to="https://github.com/joshhovis/BMI-Calculator"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Source Code
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="projects__list-item">
                    <img
                        className="projects__list-img"
                        src={timeDashboard}
                        alt="Time tracking dashboard"
                    />
                    <h3 className="projects__list-title">
                        Time Tracking Dashboard
                    </h3>
                    <p className="projects__list-description">
                        A data visualization dashboard that fetches data from a
                        provided json file and then displays said data based on
                        the selected timeframe.
                    </p>
                    <div className="projects__list-tools">
                        <h4 className="projects__list-tools-item">HTML/SCSS</h4>
                        <h4 className="projects__list-tools-item">
                            JavaScript
                        </h4>
                        <h4 className="projects__list-tools-item">
                            Data Visualization
                        </h4>
                    </div>
                    <div className="projects__list-link-row">
                        <Link
                            to="https://joshhovis.github.io/Time-Tracking-Dashboard/"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Live Site
                            </button>
                        </Link>
                        <Link
                            to="https://github.com/joshhovis/Time-Tracking-Dashboard"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Source Code
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="projects__list-item">
                    <img
                        className="projects__list-img"
                        src={newsForm}
                        alt="Newsletter sign up form"
                    />
                    <h3 className="projects__list-title">
                        Newsletter Sign-Up Form
                    </h3>
                    <p className="projects__list-description">
                        A sign-up form using custom JavaScript form validation
                    </p>
                    <div className="projects__list-tools">
                        <h4 className="projects__list-tools-item">HTML/SCSS</h4>
                        <h4 className="projects__list-tools-item">
                            JavaScript
                        </h4>
                        <h4 className="projects__list-tools-item">
                            Form Validation
                        </h4>
                    </div>
                    <div className="projects__list-link-row">
                        <Link
                            to="https://joshhovis.github.io/Newsletter-Form/"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Live Site
                            </button>
                        </Link>
                        <Link
                            to="https://github.com/joshhovis/Newsletter-Form"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Source Code
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="projects__list-item">
                    <img
                        className="projects__list-img"
                        src={bmi}
                        alt="Body mass index calculator"
                    />
                    <h3 className="projects__list-title">BMI Calculator</h3>
                    <p className="projects__list-description">
                        A simple bmi calculator using JavaScript
                    </p>
                    <div className="projects__list-tools">
                        <h4 className="projects__list-tools-item">HTML/CSS</h4>
                        <h4 className="projects__list-tools-item">
                            JavaScript
                        </h4>
                    </div>
                    <div className="projects__list-link-row">
                        <Link
                            to="https://joshhovis.github.io/BMI-Calculator/"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Live Site
                            </button>
                        </Link>
                        <Link
                            to="https://github.com/joshhovis/BMI-Calculator"
                            className="projects__list-link"
                        >
                            <button className="projects__list-button">
                                Source Code
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
