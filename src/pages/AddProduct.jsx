import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import ProductForm from "../components/ProductForm";

export default function AddProduct() {
  const { dispatch } = useProducts();
  const navigate = useNavigate();

  const handleAdd = (values) => {
    const newProduct = {
      ...values,
      id: Date.now(), // temporary client-side ID
      price: parseFloat(values.price),
    };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    navigate("/");
  };

  return (
    <div className="container py-5" style={{ backgroundColor:'#b8f06e'}}>
      <h2 className="text-center">Add New Product</h2>
      <div style={{maxWidth:'70%', paddingLeft:'30%'}}>
        <ProductForm onSubmit={handleAdd} />
      </div>
    </div>
  );
}
