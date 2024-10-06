import myImage from "../assets/png/b.png";
import Home from "../pages/home";
import Newpage from "../pages/NewPage";
import { Dashboard } from "./Dashboard";
import { Products } from "../pages/Products";
import { Additem } from "../pages/Additem";
import ProductDeleteForm from "./ProductDeleteForm";
import Register from "../pages/Register";
import Order from "../pages/Orders";
import LogIn from "../pages/Login";
import ProductUpdate from "./ProductUpdateForm";
import Appis from "./convert";
import Cart from "../pages/cart";
import ProductDetail from "../pages/ProductDetail";
import { Dash } from "./dash";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Nav = () => {
  return (
    <Router>
      <div className="selection:bg-red-500 selection:text-white">
        <nav className="container  mx-auto pt-2 sticky z-50 top-0 inset-x-0 bg-opacity-95 bg-white ">
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <img className="  h-16 " src={myImage} alt="" />
            </div>
            <div className="hidden md:flex space-x-10">
              <Link
                to="/"
                className="transition hover:text-red-500 focus:text-red-500"
              >
                <b>Home</b>
              </Link>

              <Link
                to="/Dashboard"
                className="transition hover:text-red-500 focus:text-red-500"
              >
                <b>Dashboard</b>
              </Link>

              <Link
                to="/product"
                className="transition hover:text-red-500 focus:text-red-500"
              >
                <b>Products</b>
              </Link>
              <Link
                to="/cart"
                className="transition hover:text-red-500 focus:text-red-500"
              >
                <b>Cart</b>
              </Link>
            </div>
            <div>
              <span
                
                className=" transition-transform transform-gpu hover:scale-105 flex p-2 px-6 pt-2 text-white bg-red-500 rounded-full  hover:bg-red-600 md:block"
              >
                <Link to="/Register">
                  <span className="flex gap-x-1">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Appis />}></Route>
        <Route path="/page" element={<Newpage />}></Route>
        <Route path="/Dashboard/*" element={<Dashboard />}></Route>
        <Route path="/conv" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/delete" element={<ProductDeleteForm />}></Route>
        <Route path="/update" element={<ProductUpdate />}></Route>
        <Route path="/add" element={<Additem />}></Route>
        <Route path="/Register/*" element={<Register />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login/*" element={<LogIn />}></Route>
        <Route path="/productdetail" element={<ProductDetail />} /> 
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart/*" element={<Cart />}></Route>
        <Route path="/dash" element={<Dash/>}></Route>
      </Routes>
    </Router>
  );
};
