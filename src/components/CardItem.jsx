import React from "react";
import "../style/CardItem.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCard } from "../redux/slices/cardSlice";

function CardItem({ product }) {
  let price = product.count * product.price;
  const { productsInCard } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  return (
    <div className="w-100">
      <div className="card mt-3" style={{ height: "100px" }}>
        <div className="row h-100">
          <div className="col-4 border-end">
            <img
              src={product.image}
              alt=""
              className="p-2"
              style={{ objectFit: "contain", height: "100px", width: "100%" }}
            />
          </div>
          <div className="col-8">
            <p className="fw-semibold" id="card-item-title">
              {product.title}
            </p>
            <div className="mt-2 fw-normal">
              <span>Count: {product.count}</span>
              <div className="mt-1 d-flex justify-content-between align-items-center">
                <span>{price} $</span>
                <button
                  className="me-3 fs-4 text-danger"
                  onClick={(e) => {
                    dispatch(deleteItemFromCard(product));
                  }}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
