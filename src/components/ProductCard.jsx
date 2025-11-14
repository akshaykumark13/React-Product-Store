import React from "react";
import { useNavigate } from "react-router-dom";
import './Comp.css'

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card h-100 shadow-sm text-center"
      role="button"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3 mx-auto"
        style={{ height: 200, objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">
          {product.title.length > 50
            ? product.title.slice(0, 50) + "..."
            : product.title}
        </h6>
        <div className="mt-auto fw-bold text-success">${product.price.toFixed(2)}
          
        </div>
      </div>
    </div>
  );
}
