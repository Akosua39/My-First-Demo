import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicePage from "./pages/ServicePage";
import Navbar from "./components/Navbar/Navbar"






const App = () => {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" elment={<AboutUsPage />} />
      <Route path="contact" element={<ContactUsPage />} />
      <Route path="services" element={<ServicePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App