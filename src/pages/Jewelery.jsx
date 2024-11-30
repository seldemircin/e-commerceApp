import React from "react";
import CategoryList from "../components/CategoryList";
import { useSelector } from "react-redux";
function Jewelery() {
  const { products } = useSelector((store) => store.products);
  const items = products.filter((p) => p.category == "jewelery");
  return (
    <div className="container">
      <CategoryList items={items} />
    </div>
  );
}

export default Jewelery;
