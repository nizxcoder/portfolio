import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  const [state, setState] = useState(null)
  const showAlert = ()=>{
    setState(true);
    setTimeout(()=>{
      setState(false);
    },2000);
  }
  return (
    <>
    <Navbar />
    <Alert alert={state}/>
    <Home/>
    <About/>
    <Project/>
    <Contact showAlert={showAlert}/>
    <Footer />
    </>
  );
}

export default App;
