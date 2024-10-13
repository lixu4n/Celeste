import React from "react";
import "../styles/Intro.css";


class Intro extends React.Component {
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


    return (
      <div id="home">
        <span className="intro-title">
          Hi I'm <span className="intro-name">Céleste</span>
        </span>

        <div className="intro-description">
          <div className="description-content">
            <section className="wrapper">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </section>
            
            <div className="text-container">
              <p>
                I am a 4th year computer science student based in Ottawa with interest in web development and data analysis. I am 
                dedicated to creating impactful, user-centered digital solutions.
              </p>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Intro;
