// App.tsx
import Home from "./home";
import Newpage from "./NewPage";
import ProductForm from "../components/ProductForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";

const Ap: React.FC = () => {
  return (
    <div>
      
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page">NewPage</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page" element={<Newpage />}></Route>
          <Route path="/product" element={<ProductForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Ap;
