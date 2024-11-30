import React from "react";
import CategoryList from "../components/CategoryList";
import { useSelector } from "react-redux";
function WomensClothing() {
  const { products } = useSelector((store) => store.products);
  const items = products.filter((p) => p.category == "women's clothing");
  return (
    <div className="container">
      <CategoryList items={items} />
    </div>
  );
}

export default WomensClothing;
