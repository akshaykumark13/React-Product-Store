import React from "react";
import '../pages/Pages.css'
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import ErrorAlert from "../components/ErrorAlert";
import { useProducts } from "../context/ProductsProvider";
import bag from '../assets/bag.jpg'

import MovingItems from "../components/MovingItems";

export default function Home() {
  const { state } = useProducts();

  if (state.loading) return <Loading />;
  if (state.error) return <ErrorAlert message={state.error} />;

  return (
  <div className="container-fluid min-vh-100 d-flex flex-column" style={{ backgroundColor: '#868585ff' }}>
  <div className="flex-grow-1">
    <div className="HomeImg" style={{ backgroundImage: `url(${bag})` }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
      <h1 className="head">PRODUCTS</h1>
      </div>
      {/*    style={{ paddingLeft: '0px', marginBottom: '40px' }} */}
      <div className="moving-wrapper">
      <MovingItems />
    </div>
    </div>
    
    <div className="productlist" style={{ marginTop: '170px' }}>
      <ProductList />
    </div>
  </div>
  </div>
  );
}

