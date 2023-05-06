import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects'
import Particle from "./components/Particle"
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/particle.componet.css';


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Banner/>
      <Skills/>
      <Projects/>
      <div id="particle-container">
      <Particle/>
      </div>
    </div>
  );
}

export default App;
