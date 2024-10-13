import React from "react";
import "../styles/Experience.css"; 
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';


class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.boxRefs = [];
    this.state = {
      isVisible: Array(5).fill(false), // Array to track visibility of each box
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          this.setState((prevState) => {
            const newVisible = [...prevState.isVisible];
            newVisible[index] = true; // Mark the box as visible
            return { isVisible: newVisible };
          });
          observer.unobserve(entry.target); // Stop observing the box after it becomes visible
        }
      });
    });

    this.boxRefs.forEach((box) => {
      if (box) observer.observe(box);
    });
  }

  render() {
    return (
      <section className="page-section" id="experience">
        <div className="project-section-heading">
          <h2 className="sectionCentralHeading">Experience</h2>
        </div>
        
        <div className="experience-container">
          {this.renderExperienceBox(
            logo1,
            "Government of Canada",
            "Web Application Developer Intern",
            "September 2024 - Present",
            0
          )}
          {this.renderExperienceBox(
            logo1,
            "Government of Canada",
            "Product/Advisor Intern",
            "May 2024 - August 2024",
            1
          )}
          {this.renderExperienceBox(
            logo1,
            "Government of Canada",
            "IT Analyst Student",
            "January 2024 - May 2024",
            2
          )}
          {this.renderExperienceBox(
            logo2,
            "Philippine Center Canada",
            "Front-End Software Developer",
            "January 2024 - May 2024",
            3
          )}
          {this.renderExperienceBox(
            logo1,
            "Government of Canada",
            "Technical Incident Analyst Student",
            "May 2022 - August 2023",
            4
          )}
        </div>
      </section>
    );
  }

  renderExperienceBox(logo, title, position, date, index) {
    return (
      <div
        className={`work-experience-box ${this.state.isVisible[index] ? 'slide-up' : ''}`}
        ref={(el) => (this.boxRefs[index] = el)}
        key={index}
      >
        <div className="work-experience-flex">
          <img src={logo} alt="Logo" className="work-experience-logo" />
          <div className="work-experience-details">
            <h4 className="work-experience-title">{title}</h4>
            <h5 className="work-position-title">{position}</h5>
          </div>
        </div>
        <div className="work-term-date">{date}</div>
      </div>
    );
  }
}

export default Experience;
