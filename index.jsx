import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans from  './components/Vans'
import Dashboard  from './components/host/Dashboard'
import Income from './components/host/Income';
import Reviews from './components/host/Reviews';
import "@fontsource/inter"; // Defaults to weight 400
import Footer from './components/Footer'
import VanDetail from './components/VanDetail'
import "./server"
import Layout from './components/Layout'

function App(){
  return (
    <BrowserRouter>         
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);