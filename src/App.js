import './App.css';
import {Routes, Route} from "react-router-dom";
import React  from 'react';

import Blog from "./pages/blog/blog.js";
import Home from "./pages/acceuil/home.js";
import Realisations from "./pages/realisations/realisation.js";
import Services from "./pages/services/services.js";
import Contact from "./pages/contact/contact.js";
import Legales from "./pages/legales/legales.js";

import Github from './composants/github/Github.js';
import Header from './composants/header/Header.js';
import Footer from './composants/footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Realisations" element={<Realisations/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Legales" element={<Legales/>}></Route>
        <Route path="/Github" element={<Github/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
