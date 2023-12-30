import React from "react";
import "../styles/Intro.css";


class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
       <hr className="divider" /> {/* Divider */}
          <span claxssName="intro-title">
            hi, my name is
            <span className="intro-name"> Céleste</span>
          </span>
        
          <div className="intro-subtitle">4th year computer science student @ university of ottawa</div>
         
         
          <div className="intro-description">
  <p>
    i'm a computer science student and artist based in Ottawa. i have a great
    interest in full-stack development, artificial intelligence, art, data visualization,
    and everything in between.
  </p>
  <p>
    "you can do it all but just not all at the same time" - unknown
  </p>
  <p>
    made with ♡ by céleste duguay
  </p>


  <a href="https://www.linkedin.com/in/celesteduguay/" className="intro-linkedin" target="_blank">
  <img src="/linkedin_icon.png" alt="linkedin" style={{ width: '25px', height: '25px' }} />
</a>

<a href="https://github.com/lixu4n" className="intro-github" target="_blank">
  <img src="/github_icon.png" alt="github logo img" style={{ width: '25px', height: '25px',}} />
</a>

<a href="mailto:cdugu093@uottawa.ca" className="intro-contactme">
<img src="/mail_to_icon.png" alt="mail logo img" style={{ width: '25px', height: '25px',}} />

   
</a>
</div> 



</div>
    );
  }
}

export default Intro;