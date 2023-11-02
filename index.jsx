import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import "@fontsource/inter"; // Defaults to weight 400
import Footer from './components/Footer'

function App(){
  return (
    <BrowserRouter>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);