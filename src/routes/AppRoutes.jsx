import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import ViewProduct from "../pages/ViewProduct";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/product/:id" element={<ViewProduct />} />
      </Route>
    </Routes>
  );
}

