import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Comp.css'
import axios from "axios";

export default function Header() {

  const API_URL ='https://fakestoreapi.com/products';

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProduct,setFilterProduct] = useState([]);


  // Fetch Product
  useEffect(()=>{
    const fetchProducts = async() =>{
      const res = await axios.get(API_URL);
      setProducts(res.data);
      setFilterProduct(res.data)
    }
    fetchProducts();
  },[])

  // Handle Submission
 const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    const query = searchQuery.toLowerCase();
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilterProduct(results);
  };


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold" to="/">
        🛒 FakeStore
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

       <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

         {/* CENTER SEARCH BAR */}
         {/* */}
    <form onSubmit={handleSearch} className="d-flex mx-auto" style={{ width: "40%" }}> 
      <input
        className="form-control SearchInput_input__NOK7W"
        id="search"
        type="search"
        placeholder="Search for Products"
        autoCapitalize="none"
        autoComplete="off"
        name="s"
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              end
              to="/"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add"
              className="nav-link"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "normal",
              })}
            >
              Add Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    {/* PRODUCT DISPLAY SECTION */}
      {/* <div className="container mt-4">
        <div className="row">
          {filterProduct.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
