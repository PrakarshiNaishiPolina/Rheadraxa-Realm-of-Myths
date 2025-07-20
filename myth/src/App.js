import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gods from './pages/Gods';
import Heroes from './pages/Heroes';
import Monsters from './pages/Monsters';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gods" element={<Gods />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/monsters" element={<Monsters />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
