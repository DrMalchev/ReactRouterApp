import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans from  './components/Vans'
import Dashboard  from './components/host/Dashboard'
import Income from './components/host/Income';
import Reviews from './components/host/Reviews';
import HostVans from './components/host/HostVans';
import HostVansDetails from './components/host/HostVansDetails';
import HostVanPricing from './components/host/HostVanPricing';
import HostVanPhotos from './components/host/HostVanPhotos';
import HostVanDetailInfo from './components/host/HostVanDetailInfo';
import "@fontsource/inter"; // Defaults to weight 400
import Footer from './components/Footer'
import VanDetail from './components/VanDetail'
import "./server"
import Layout from './components/Layout'
import Hostlayout from './components/host/Hostlayout';

function App(){
  return (
    <BrowserRouter>         
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<Hostlayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />} >
              <Route index element={<HostVanDetailInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>      
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);