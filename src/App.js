import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./public/css/style.scss";
import "./public/css/mediaQuery.scss";
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
  
    <Router>
    <Navbar />
    <Routes>
        <Route index element={<Home />} />
        <Route exact path="/" component={Home} />
        <Route path="/#about" component={About} />
        <Route path="/#contact" component={Contact} />
    </Routes>
    <Footer />
  </Router>


    </div>
  );
}

export default App;
