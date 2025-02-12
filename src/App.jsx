import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CheckRisk from "./Pages/CheckRisk";
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Layout from "./Layout";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    
      <Routes> 
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/riskCheck" element={<CheckRisk />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Blogs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
  
  );
}

export default App;
