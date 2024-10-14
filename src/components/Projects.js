import React from "react";
import "../styles/Projects.css";

class Projects extends React.Component {
    render() {
        return (
            <section className="page-section" id="projects">
                <div className="projectContainer">
                    <div className="grid">
                        <div className="sectionCentralHeading">
                        <div className="grid-item">
                            <a href="https://github.com/lixu4n/Celeste" className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Personal Website</h2>
                                        <p className="card-text">This one! The first iteration of my personal website. Showcases my projects and my experience. Hosted on GitHub Pages.</p>
                                        <div className="card-buttons">
                                            <button className="card-button">React</button>
                                            <button className="card-button">JavaScript</button>
                                            <button className="card-button">GitHub Pages</button>
                                            <button className="card-button">HTML & CSS</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>



                        </div>
                       
                        <div className="grid-item">
                            <a href="https://github.com/lixu4n/KnapsackProblem" className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Search Algorithms Research</h2>
                                        <p className="card-text">Testing different search algorithms on the classic knapsack problem.</p>
                                        <div className="card-buttons">
                                            <button className="card-button">Python</button>
                                            <button className="card-button">Google Colaboratory</button>
                                            <button className="card-button">Kaggle Datasets</button>
                                            <button className="card-button">Scikit-Learn</button>
                                            <button className="card-button">Artificial Intelligence</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="grid-item">
                            <a href="https://github.com/lixu4n/My-Grocery-Strore-V2" className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Website Front-End and UI Focus</h2>
                                        <p className="card-text">This simple and fun responsive website was designed in the scope of a User Interface assignment. The deployed version focuses on front-end development.</p>
                                        <div className="card-buttons">
                                            <button className="card-button">HTML5</button>
                                            <button className="card-button">CSS</button>
                                            <button className="card-button">JavaScript</button>
                                            <button className="card-button">User Interface</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="grid-item">
                            <a href="https://github.com/lixu4n/VideoPersonIdentification" className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Video Footage Person Identification</h2>
                                        <p className="card-text">
                                            A project about histogram comparison with OpenCV GrabCut and the ROI Selection Tool. 
                                            In this first part of the project, the task is to use histograms to identify individuals within a video sequence.
                                        </p>
                                        <div className="card-buttons">
                                            <button className="card-button">OpenCV</button>
                                            <button className="card-button">Python</button>
                                            <button className="card-button">Computer Vision</button>
                                            <button className="card-button">Machine Learning</button>
                                            <button className="card-button">AI</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="grid-item">
                            <a href="https://github.com/lixu4n/DataMart-Design-And-Implementation" className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Game Design and Data Research</h2>
                                        <p className="card-text">
                                            Project made for my minor's program, Digital Humanities. Exploring forest fires data through a 'Choose your own adventure' styled game.
                                        </p>
                                        <div className="card-buttons">
                                            <button className="card-button">Minor Capstone</button>
                                            <button className="card-button">Twine Games, Game Design</button>
                                            <button className="card-button">HTML/CSS JS</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="grid-item">
                            <a href="https://omeka.uottawa.ca/arts-sciences-humaines-numeriques/exhibits/show/experience-interactive" className="card-link">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="card-title">Data Mart Design Implementation</h2>
                                        <p className="card-text">
                                            A project about histogram comparison with OpenCV GrabCut and the ROI Selection Tool. 
                                            In this first part of the project, the task is to use histograms to identify individuals within a video sequence.
                                        </p>
                                        <div className="card-buttons">
                                            <button className="card-button">Data Science</button>
                                            <button className="card-button">Data Warehouse</button>
                                            <button className="card-button">Python</button>
                                            <button className="card-button">Data Mining</button>
                                            <button className="card-button">PowerBI</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
