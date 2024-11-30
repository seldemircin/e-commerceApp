import React from "react";
import ProductList from "../components/ProductList";
import "../style/Home.css";
import { SlArrowDown } from "react-icons/sl";

function Home() {
  return (
    <div>
      <div className="bg-photo d-flex justify-content-center align-items-center">
        <div className="text-white h-100" id="desc">
          <div className="h-50 d-flex align-items-end">
            <p className="fs-3">Welcome The E-Commerce App !</p>
          </div>
          <div className="h-50 d-flex align-items-end ">
            <a href="#home_products" className="fs-1 mb-3">
              <SlArrowDown />
            </a>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
}

export default Home;
