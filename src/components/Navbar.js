import React from "react";
import "../styles/Navbar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPage: ""
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(selectedPage) {
        this.setState({ selectedPage });
        const element = document.getElementById(selectedPage);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    render() {
        const { selectedPage } = this.state;
        return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <li className={`navbar-item ${selectedPage === "home" ? "active" : ""}`}>
                        <a href="#home" onClick={() => this.handlePageChange("home")}>celeste duguay.</a>
                    </li>
                </div>

                <ul className="navbar-nav">
                  
                <li className={`navbar-item ${selectedPage === "home" ? "active" : ""}`}>
                        <a href="#home" onClick={() => this.handlePageChange("home")}>home</a>
                    </li>
                    <li className={`navbar-item ${selectedPage === "experience" ? "active" : ""}`}>
                        <a href="#experience" onClick={() => this.handlePageChange("experience")}>experience</a>
                    </li>

        

                    <li className={`navbar-item ${selectedPage === "projects" ? "active" : ""}`}>
                        <a href="#projects" onClick={() => this.handlePageChange("projects")}>projects</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
