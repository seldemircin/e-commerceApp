import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "./Product";

function SearchList() {
  const { txt } = useParams();
  const { products } = useSelector((store) => store.products);
  const searchingItems = products.filter((p) =>
    p.title.toLowerCase().includes(txt.toLocaleLowerCase())
  );

  return (
    <div className="container">
      {searchingItems.length > 0 ? (
        <div>
          <div id="seach-info" className="mt-3 card d-inline-block">
            <div className="card-body">
              <span className="text-dark">
                {searchingItems.length} result{" "}
                <span style={{ color: "#008000" }}>founded.</span>
              </span>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4 py-4">
            {searchingItems.map((item, index) => (
              <Product product={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="mt-3 d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <div className="card w-50">
            <div className="card-body text-center">
              <span>
                No results found for your search{" "}
                <span className="text-danger">"{txt}."</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchList;
