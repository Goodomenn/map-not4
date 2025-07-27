import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx' 
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import AboutUs from './pages/about_us.jsx';
import ContactUs from './pages/contact_us.jsx';
import MekelleMap from './pages/map.jsx'; 
function App() {
  return (
    /*<MekelleMap />*/
    <main className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/map" element={<MekelleMap />} />
      </Routes>
      
    </main>
  );
}



export default App;