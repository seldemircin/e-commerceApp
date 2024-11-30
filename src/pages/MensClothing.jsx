import React from "react";
import CategoryList from "../components/CategoryList";
import { useSelector } from "react-redux";
function MensClothing() {
  const { products } = useSelector((store) => store.products);
  const items = products.filter((p) => p.category == "men's clothing");
  return (
    <div className="container">
      <CategoryList items={items} />
    </div>
  );
}

export default MensClothing;
