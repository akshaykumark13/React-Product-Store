import React from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";
import { useProducts } from "../context/ProductsProvider";

export default function ProductList() {
  const { state } = useProducts();

  if (state.loading) return <Loading />;
  if (state.error) return <ErrorAlert message={state.error} />;

  return (
  <div className="container-fluid py-4">
    <div className="row justify-content-center">
      {state.products.map((p) => (
        <div key={p.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  </div>

  );
}
