import React from "react";
// import ProductCard from "./ProductCard";
import products1 from "../api/products1";
import './Comp.css'

export default function MovingItems() {
  return (
    <div className="moving-cards-wrapper">
      <div className="moving-cards-track">
        {products1?.length > 0 &&
          products1.concat(products1).map((product1, index) => (
        <div className="moving-card" key={index}>
        <div style={{ width: 200, height: 150, background: "#ccc", textAlign: "center", lineHeight: "150px" }}>
            {product1.title}
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}
