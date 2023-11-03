import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans from  './components/Vans'
import Navigation from './components/Navigation'
import "@fontsource/inter"; // Defaults to weight 400
import Footer from './components/Footer'
import "./server"

function App(){
  return (
    <BrowserRouter>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);