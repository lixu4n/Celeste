import React from "react";
import "../styles/Skills.css";
import FadeInSection from "./FadeInSection";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const one = (
      <p>Here are some technologies I have been working with.</p>
    );

    const tech_stack = [
      "Python",
      "React.js",
      "Java",
      "Typescript",
      "Javascript ES6+",
      "C++"
    
    ];

    return (
      <div id="skills">
        <FadeInSection>
          <div className="skills-container">
            <span className="section-title">skills</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection key={i} delay={`${(i + 1) * 100}ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Skills;

