"use client"
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetInvolved from './SubPages/GetInvolved';
import OurTeam from './SubPages/OurTeam';
import Projects from './SubPages/Projects';
import Home from './SubPages/Home';



export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);



  return (
    <div>
      {isClient && (
        <BrowserRouter>
          <div className='min-h-screen max-w-screen mx-0'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/get-involved" element={<GetInvolved />} />
            </Routes>
            <Footer />
            
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}