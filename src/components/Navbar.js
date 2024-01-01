import React from "react";
import "../styles/Navbar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPage: ""
        };
    }

    handlePageChange(selectedPage) {
        this.setState({ selectedPage });
    }

    render() {
        const { selectedPage } = this.state;
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className={`navbar-item ${selectedPage === "home" ? "active" : ""}`}>
                        <a href="#" onClick={() => this.handlePageChange("home")}>home</a>
                    </li>
        
                    <li className={`navbar-item ${selectedPage === "experience" ? "active" : ""}`}>
                        <a href="#" onClick={() => this.handlePageChange("experience")}>experience</a>
                    </li>
                    <li className={`navbar-item ${selectedPage === "projects" ? "active" : ""}`}>
                        <a href="#" onClick={() => this.handlePageChange("projects")}>projects</a>
                    </li>

            
                    
                    
                </ul>
            </nav>
        );
    }
}

export default NavBar;
