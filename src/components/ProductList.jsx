import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="bg-secondary">
      <div className="container" id="home_products">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4 py-4">
          {products &&
            products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
