import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';

import './App.css';
import AboutMe from "./components/AboutMe";
import CoverLetter from "./components/CoverLetter";
import DigitalHumanities from "./components/DigitalHumanities";

function App() {
  return (
    <div className="App">

      <div id="content">
        <Navbar></Navbar>

        
       
        <Intro></Intro>

        <CoverLetter></CoverLetter>

        <AboutMe></AboutMe>


        <Experience></Experience>
       
        <Projects></Projects>

        <DigitalHumanities></DigitalHumanities>

        <Footer></Footer>

     
      </div>
      

    </div>
  );
}

export default App;
