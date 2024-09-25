import React from "react";
import "../styles/Intro.css";
import arrow from '../images/arrow.png';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: ""
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  /*
  I will use context switching for my page switch later onn....... LOL 

  */
  handlePageChange(selectedPage) {
    this.setState({ selectedPage });
    const element = document.getElementById(selectedPage);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    const { selectedPage } = this.state;
    //for now, itll slow down compile time?

    return (
      <div id="home">
        <span className="intro-title">
          I'm <span className="intro-name">Céleste</span>
        </span>

        <div className="intro-description">
          <div className="description-content">
            <div className="image-container">
              <img src={arrow} alt="arrow image" className="arrow-image" />
            </div>
            <div className="text-container">
              <p>
                I am a 4th year computer science student specializing in web development and data analysis,
                dedicated to creating impactful, user-centered digital solutions.
              </p>

              <div className="text-link">
                <p 
                  href="#experience" 
                  className={`${selectedPage === "experience" ? "active" : ""}`} 
                  onClick={() => this.handlePageChange("experience")}
                >
                  See my experience ⟶
                </p>

               
              </div>

              <p>
                  this is in continuous improvement... btw!
                </p>
            </div>
          </div>

  


          {
            /*
            <a
              href="https://www.linkedin.com/in/celesteduguay/"
              className="intro-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="linkedin_icon.png"
                alt="LinkedIn"
                style={{ width: "25px", height: "25px" }}
              />
            </a>

            <a
              href="https://github.com/lixu4n"
              className="intro-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="github_icon.png"
                alt="GitHub Logo"
                style={{ width: "25px", height: "25px" }}
              />
            </a>
            */
          }

        </div>
      </div>
    );
  }
}

export default Intro;
