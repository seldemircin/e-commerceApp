import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";
import MensClothing from "../pages/MensClothing";
import WomensClothing from "../pages/WomensClothing";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SearchList from "../components/SearchList";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/categories-electronics" element={<Electronics />} />
      <Route path="/categories-jewelery" element={<Jewelery />} />
      <Route path="/categories-mens" element={<MensClothing />} />
      <Route path="/categories-womens" element={<WomensClothing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search/:txt" element={<SearchList />} />
    </Routes>
  );
}

export default RouteConfig;
