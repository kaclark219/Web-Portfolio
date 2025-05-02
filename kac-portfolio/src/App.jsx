import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/style.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { GithubLogo, ArrowRight, GameController } from 'phosphor-react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Art from './pages/Art';
import Games from './pages/Games';


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/programming">Programming</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/games">Games</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programming" element={<Projects />} />
        <Route path="/design" element={<Art />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

