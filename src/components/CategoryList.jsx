import React from "react";
import Product from "./Product";

function CategoryList({ items }) {
  return (
    <div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4 py-4">
        {items &&
          items.map((item, index) => <Product product={item} key={index} />)}
      </div>
    </div>
  );
}

export default CategoryList;
