import React from "react";

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">About me</h1>
            <p className="about__description">
                Hi, I'm Joshua, a front-end software developer from the United
                States.
            </p>
            <p className="about__tools-title">
                My primary tools of choice include:
            </p>
            <ul className="about__tools-list">
                <li className="about__tool-item">JavaScript</li>
                <li className="about__tool-item">React</li>
                <li className="about__tool-item">Angular</li>
                <li className="about__tool-item">Astro</li>
                <li className="about__tool-item">Nodejs</li>
            </ul>
            <p className="about__passion">
                Beyond coding, I have a passion for building things. Whether
                it's crafting a new table or constructing an entire additional
                room in a house, I thrive on creating from the ground up. I find
                immense satisfaction in taking a plan and executing it to
                completion. Building a website from scratch gives me the same
                sense of accomplishment as constructing a piece of furniture
                with my own hands.
            </p>
            <p className="about__goal">
                Although I have my preferred tools, I always strive to choose
                the best one for each job, even if it means learning something
                new and expanding my skillset. My goal is to identify the most
                effective solution for every project, ensuring that I deliver
                the highest quality work.
            </p>
        </div>
    );
};

export default About;
