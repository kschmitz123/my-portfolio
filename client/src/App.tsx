import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ProjectPreview from "./components/ProjectPreview";

function App() {
  return (
    <Router>
      <Header />
      <Jumbotron />
      <ProjectPreview />
      <Footer />
    </Router>
  );
}

export default App;
