import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

function CardList({ products }) {
  return (
    <div className="w-100">
      {products &&
        products.map((p, index) => <CardItem product={p} key={index} />)}
    </div>
  );
}

export default CardList;
