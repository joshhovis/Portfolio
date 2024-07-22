import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <main>
            <section>
                <p>Welcome</p>
                <p>
                    Hi, I'm <span>Joshua Hovis</span>, a software developer with
                    a focus on the front end user experience.
                </p>
                <p>
                    Feel free to reach out to me if you would like to discuss
                    new opportunities or projects!
                </p>

                <div>
                    <button>
                        <Link to="https://github.com/joshhovis">Github</Link>
                    </button>
                    <button>
                        <Link to="https://www.linkedin.com/in/joshua-hovis/">
                            Linkedin
                        </Link>
                    </button>
                </div>
            </section>

            <section>
                <About />
            </section>

            <section>
                <Contact />
            </section>
        </main>
    );
};

export default Home;
