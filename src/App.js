import React, { useState, useEffect } from "react";
import FeaturedProductsSection from "./sections/FeaturedProductsSection";
import HeroSection from "./sections/HeroSection";
import Footer from './components/Footer'
import { Outlet, useLocation } from "react-router-dom";

const { default: Header } = require("./components/Header");



function App() {
  const location = useLocation();


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json =>
        setProducts(json)
      )
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === '/' &&
        <>
          <HeroSection />
          {/* <FeaturedProductsSection itemsCount={5} title="Featured Products" products={products} /> */}
          {/* <FeaturedProductsSection itemsCount={5} title="Recently Added Products" products={products} /> */}
        </>
      }
      <Footer />
    </>
  );
}

export default App;
