import React from "react";
import "../styles/Projects.css";

class Projects extends React.Component {
    render() {
        return (
            <section className="page-section" id="Projects">
                <div className="project-section-heading">
                    <h2 className="sectionCentralHeading">Projects</h2>
                    <h3 className="section-subheading text-muted">All of my current work projects and contributions.</h3>
                </div>
                <div className="projectContainer">
                    <div className="post">
                        <div className="postHeader">
                            {/* <h2 className="sectionCentralSecondaryHeading">Current</h2> */}
                        </div>
                        <div className="grid">
                            <div className="grid-item">
                                <a href="https://github.com/lixu4n/Celeste" className="card-link">
                                    <div className="card">
                                        <img src="projectImageAndroid2.png" alt="project thumbnail" className="card-img" />
                                        <div className="card-body">
                                            <h2 className="card-title">Knapsack Algorithms</h2>
                                            <h2 className="card-title" style={{ color: "#ffc800;" }}>Android</h2>
                                            <p className="card-text">An Android app allowing users to create cycling club events. Features admin account and event management, club owner role, and participant role.</p>
                                            <button className="card-button">Java</button>
                                            <button className="card-button">Kotlin</button>
                                            <button className="card-button">Android Studio</button>
                                            <button className="card-button">SQL</button>
                                            <button className="card-button">Firebase</button>
                                            <button className="card-button">XML</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="grid-item">
                                <a href="https://github.com/lixu4n/KnapsackProblem" className="card-link">
                                    <div className="card">
                                        <img src="projectImagePersonalWebsite.png" alt="project thumbnail" className="card-img" />
                                        <div className="card-body">
                                            <h2 className="card-title">Personal Website</h2>
                                            <h2 className="card-title" style={{ color: "#ffc800;" }}>Web page</h2>
                                            <p className="card-text">You're on it! This website contains an About Me, my Experience, and Projects. It is responsive and resizeable.</p>
                                            <button className="card-button">HTML5</button>
                                            <button className="card-button">CSS</button>
                                            <button className="card-button">JavaScript</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            
            </section>
        );
    }
}

export default Projects;
