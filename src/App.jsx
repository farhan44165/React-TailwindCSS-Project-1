import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar1 from './Project1/Navbar1';
import Home from './Project1/Home';
import AboutUs from './Project1/AboutUs';
import ImageGallery from './Project1/ImageGallery';
import OurServices from './Project1/OurServices';
import OurTeam from './Project1/OurTeam';
import ContactUs from './Project1/ContactUs';
import Details from './Project1/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ImageGallery' element={<ImageGallery />} />
          <Route path='/OurServices' element={<OurServices />} />
          <Route path='/OurTeam' element={<OurTeam />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
