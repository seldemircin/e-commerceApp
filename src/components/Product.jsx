import React from "react";
import { Link } from "react-router-dom";
import "../style/Product.css";

function Product({ product }) {
  return (
    <div className="col">
      <div className="card border-0" id="product-card">
        <Link to={"/product-details/" + product.id}>
          <div className="card-img-top">
            <span className="badge bg-danger fw-medium ms-0 rounded-0 mt-2 rounded-end">
              Discount
            </span>
            <img
              src={product.image}
              alt=""
              className="img-fluid p-2 p-md-3"
              style={{ objectFit: "contain", height: "200px", width: "100%" }}
            />
          </div>
          <div className="card-body border-top">
            <h4 className="card-title fw-medium">{product.title}</h4>
            <span
              className={`fw-semibold ${
                product.price <= 200 ? "text-danger " : "text-dark"
              }`}
            >
              {product.price} $
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
