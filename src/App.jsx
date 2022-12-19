import React from "react";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
