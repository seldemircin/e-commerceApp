import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/ProductDetails.css";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { addToCard } from "../redux/slices/cardSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.products);
  const { title, price, image, description } = selectedProduct;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    {
      products &&
        products.map((p) => {
          if (p.id == id) {
            dispatch(setSelectedProduct(p));
          }
        });
    }
  };

  const handleAddToCart = () => {
    let payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };

    dispatch(addToCard(payload));
  };

  return (
    <div className="container mt-3" id="product-details">
      <div className="card">
        <div className="row">
          <div className="col-12 col-md-4 border-end border-bottom mb-3">
            <img
              src={image}
              className="rounded-start p-4"
              style={{ objectFit: "contain", height: "400px", width: "100%" }}
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body">
              <div className="content w-100">
                <h2 className="fs-4 mb-2 fw-medium w-75">{title}</h2>
                <p className="fw-normal my-3 fw-medium">{price} $</p>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample1"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Product Details
                </a>

                <div>
                  <select
                    className="form-select w-auto mt-3 border-dark"
                    value={count}
                    onChange={(e) => {
                      setCount(Number(e.target.value));
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <div className="mt-3">
                  <button
                    className="btn btn-dark w-50"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample2"
                    role="button"
                    aria-controls="offcanvasExample"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasExample1"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title fs-5"
                      id="offcanvasExampleLabel"
                    >
                      Product Details
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <div>{description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
