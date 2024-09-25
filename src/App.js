import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';

import './App.css';
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">

      <div id="content">
        <Navbar></Navbar>
       
        <Intro></Intro>

        <AboutMe></AboutMe>

        <Experience></Experience>
       
        <Projects></Projects>

        <Footer></Footer>

     
      </div>
      

    </div>
  );
}

export default App;
