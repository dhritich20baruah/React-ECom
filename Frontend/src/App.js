import './App.css';
import React from 'react';
import Nav from './component/Nav';
import Shop from './component/Shop';
import Contact from './component/Contact';
import Products from './component/Products';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Products" element={<Products />} />
          <Route path="Contact" element={<Contact/>} />
        </Routes>
    </>
  );
}

export default App;
