import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

      <div id="content">
        <Navbar></Navbar>
        <Intro></Intro>
        
        <Skills></Skills>

     
      </div>
      

    </div>
  );
}

export default App;
