import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    </>
  );
}

export default App;
