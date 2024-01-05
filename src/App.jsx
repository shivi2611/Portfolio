import './App.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Pictures from './components/Pictures';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <div className='app'>
    <NavBar className="NavBar"/>
    <Banner className="Banner"/>
    <Pictures className="Pictures1"/>
    <About className="About"/>
    <Skills className="Skills"/>
    <Projects className="Projects"/>
    <Pictures className="Pictures2"/>
    <Contact className="Contact"/>
    </div>
  )
}

export default App
