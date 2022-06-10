import logo from './logo.svg';
import './App.css';
import Navbar from './component/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" exact element={<About />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
