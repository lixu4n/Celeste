import React from "react";
import "../styles/Intro.css";


class Intro extends React.Component {
  render() {
    return (
      <div id="home">
       
          <span className="intro-title">
            👋🏻 Hi I'm
            <span className="intro-name"> Céleste Duguay</span>
          </span>
        
          <div className="intro-subtitle">4th year Computer Science student @ University of Ottawa</div>
         
         
          <div className="intro-description">
  <p>
    I'm a Computer Science student and artist based in Ottawa. I have a great
    interest in full-stack development, artificial intelligence, art, data visualization,
    and everything in between. I have an additional minor in Digital Cultures that explore the intersections of art and technology. This intersection allows us to deepen our understanding of human culture and technology's evolving landscape.
  </p>
  <p>
  When I'm not in class, you'll catch me on the volleyball court, hitting the gym, experimenting with new recipes,
  or trying new creative art forms like crocheting.
  </p>
  <p>
    Made with ♡ by Céleste Duguay
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