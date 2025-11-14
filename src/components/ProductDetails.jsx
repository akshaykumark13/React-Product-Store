import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";
import './Comp.css'

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useProducts();

  if (state.loading) return <Loading />;
  if (state.error) return <ErrorAlert message={state.error} />;

  const product = state.products.find((p) => String(p.id) === id);
  if (!product) return <ErrorAlert message="Product not found!" />;

  const handleDelete = () => {
    if (window.confirm("Delete this product?")) {
      dispatch({ type: "DELETE_PRODUCT", payload: product.id });
      navigate("/");
    }
  };

  return (
    <div className="detailespage"
  style={{
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: '30px 0',
    overflowX: 'hidden',
    color:'black'
  }}
>
  <div className="container-fluid mt-4">
    <div className="row justify-content-center align-items-center">
      <div className="card col-md-4 text-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid border rounded"
          style={{ maxHeight: 300, objectFit: "contain" }}
        />
      </div>
      <div className="col-md-6" style={{marginRight:'px'}}>
        <h3>{product.title}</h3>
        <h5 className="fw-bold mb-3" style={{color:'#3bc903ff'}}><strong>${product.price}</strong></h5>
        <p><strong>Category:</strong> {product.category}</p>
        <p>{product.description}</p>
        <div className="d-flex gap-2">
          <Link to={`/edit/${product.id}`} className="btn btn-primary">Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

