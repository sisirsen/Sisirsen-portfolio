import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Skills />

      <Footer />
    </>
  );
}

export default App;
