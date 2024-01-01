import React from "react";
import "../styles/Projects.css";

class Projects extends React.Component {
    render() {
        return (
            <section className="page-section" id="Projects">
                <div className="project-section-heading"></div>
                <div className="sectionCentralHeading">Projects</div>
                <div className="projectContainer">
                    <div className="post">
                        <div className="postHeader">
                            {/* <h2 className="sectionCentralSecondaryHeading">Current</h2> */}
                        </div>
                        <div className="grid">
                            <div className="grid-item">
                                <a href="https://github.com/lixu4n/Celeste" className="card-link">
                                    <div className="card">
                                       
                                        <div className="card-body">
                                            <h2 className="card-title">Personal Website</h2>
                                            <h2 className="card-title" style={{ color: "#ffc800;" }}>Web Page</h2>
                                            <p className="card-text">The first iteration of my personal website.</p>
                                            <button className="card-button">React</button>
                                            <button className="card-button">JavaScript</button>
                                 
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="grid-item">
                                <a href="https://github.com/lixu4n/KnapsackProblem" className="card-link">
                                    <div className="card">
                                    
                                        <div className="card-body">
                                            <h2 className="card-title">Search Algorithms Project</h2>
                                            <h2 className="card-title" style={{ color: "#ffc800;" }}>Jupyter Notebook</h2>
                                            <p className="card-text">Testing different search algorithms on the classic knapsack problem.</p>
                                            <button className="card-button">Python</button>
                                            <button className="card-button">Google Colaboratory</button>
                                            <button className="card-button">Jupyter Notebook</button>
                                            <button className="card-button">Kaggle Datasets</button>
                                            <button className="card-button">Artificial Intelligence</button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="grid-item">
                                <a href="https://github.com/lixu4n/My-Grocery-Strore-V2" className="card-link">
                                    <div className="card">
                                      
                                        <div className="card-body">
                                            <h2 className="card-title">Yums! Grocery Store Front-End Development Project</h2>
                                            <h2 className="card-title" style={{ color: "#ffc800;" }}>Web Page</h2>
                                            <p className="card-text">This simple responsive website designed in the scope of a User Interface course. The deployed version focuses on front-end development. </p>
                                            <button className="card-button">HTML5</button>
                                            <button className="card-button">CSS</button>
                                            <button className="card-button">JavaScript</button>
                                            <button className="card-button">User Interface</button>
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
