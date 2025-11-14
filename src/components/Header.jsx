import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Comp.css'

export default function Header() {

  return (
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
    <form className="d-flex mx-auto" style={{ width: "40%" }}>
      <input
        className="form-control SearchInput_input__NOK7W"
        id="search"
        type="search"
        placeholder="Search for Products"
        autoCapitalize="none"
        autoComplete="off"
        name="s"
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
  );
}
