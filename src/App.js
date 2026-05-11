import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Alert from "./components/ui/Alert";

function App() {
  const [state, setState] = useState(null);
  const showAlert = () => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onNavigate={handleScroll} />
      <Alert alert={state} />
      <Home id="home" />
      <About id="about" />
      <Project id="projects" />
      <Contact id="contact" showAlert={showAlert} />
      <Footer />
    </>
  );
}

export default App;
