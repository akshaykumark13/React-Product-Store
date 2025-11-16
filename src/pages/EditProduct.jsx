import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import ProductForm from "../components/ProductForm";
import ErrorAlert from "../components/ErrorAlert";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useProducts();

  const product = state.products.find((p) => String(p.id) === id);
  if (!product) return <ErrorAlert message="Product not found" />;

  const handleUpdate = (values) => {
    const updated = { ...product, ...values, price: parseFloat(values.price) };
    dispatch({ type: "UPDATE_PRODUCT", payload: updated });
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor:'#b8f06e',width:'100vw'}}>
      <h2 className="text-center">Edit Product</h2>
      <div className="row justify-content-center" style={{maxWidth:'70%', alignItems:'center', marginLeft:'15%'}}>
         <ProductForm onSubmit={handleUpdate} initialValues={product} />
      </div>
    </div>
  );
}
