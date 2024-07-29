"use client"
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetInvolved from './pages/GetInvolved';
import OurTeam from './pages/OurTeam';
import Projects from './pages/Projects';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Sponsors from './pages/Sponsors';
import ScrollToTop from './components/ScrollToTop';



export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);



  return (
    <div>
      {isClient && (
        <BrowserRouter basename="/">
          <div className='min-h-screen max-w-screen mx-0'>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/sponsors" element={<Sponsors />} />
            </Routes>
            <Footer />
            
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

