import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import name_logo from './assets/logo-name.PNG'
import logo_layer from './assets/logo-star-normal.PNG'
import logo_hover from './assets/logo-star-hover.PNG'
import './style/style.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { GithubLogo, ArrowRight, GameController, LinkedinLogo } from 'phosphor-react';

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
          <li>
            <Link to="/" className="logo-link">
              <div className="logo-wrapper">
                <img src={name_logo} alt="Katelyn Clark logo" className="name-logo" />
                <img src={logo_layer} alt="Star overlay" className="logo-star" />
                <img src={logo_hover} alt="Star hover overlay" className="logo-star hover" />
              </div>
            </Link>
          </li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/programming">Programming</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/games">Games</Link></li>
          <div className="nav-icon-group">
            <li className='nav-icon'>
              <a href="https://kaclark219.itch.io/" target="_blank" rel="noopener noreferrer">
                <GameController size={32}/>
              </a>
            </li>
            <li className='nav-icon'>
              <a href="https://www.linkedin.com/in/katelyn-a-clark/" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={32}/>
              </a>
            </li>
            <li className='nav-icon'>
              <a href="https://github.com/kaclark219" target="_blank" rel="noopener noreferrer">
                <GithubLogo size={32}/>
              </a>
            </li>
          </div>
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

