import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsProvider";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <ProductsProvider>
        <AppRoutes />
      </ProductsProvider>
    </Router>
  );
}
