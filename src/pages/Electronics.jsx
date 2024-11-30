import React from "react";
import CategoryList from "../components/CategoryList";
import { useSelector } from "react-redux";

function Electronics() {
  const { products } = useSelector((store) => store.products);
  const items = products.filter((p) => p.category == "electronics");
  return (
    <div className="container">
      <CategoryList items={items} />
    </div>
  );
}

export default Electronics;
