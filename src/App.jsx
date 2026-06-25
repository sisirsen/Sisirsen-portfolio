import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/buttons/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <About />
      
      <Skills />

      <Projects />

      <Contact/>

<ScrollToTop />

      <Footer />
    </>
  );
}

export default App;
