// import React from 'react'
import ProductDeleteForm from "./ProductDeleteForm";
import ProductForm from "./ProductForm";
import profile from "../assets/png/prf.png";
import ProductUpdate from "./ProductUpdateForm";
// import { Additem } from "../pages/Additem";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Mavigate = () => {
  return (
    <div className="w-52 mt-5 h-screen ">
      <div className="flex p-2 gap-x-2">
        <div
          className="h-12 w-12 rounded-full mt-2 bg-slate-400 bg-no-repeat"
          style={{
            backgroundImage: `url(${profile})`,
            backgroundSize: `110%`,
            backgroundPosition: "center ",
          }}
        ></div>
        <div className="">
          <div className="text-sm text-bold mt-2 mb-2">Peter parker</div>
          <div className="text-xs">London,UK</div>
        </div>
      </div>
      <div>
        <div className="flex ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>

          <h1 className="ml-2 text-lg text-bold mt-3">Control Panel</h1>
        </div>
        <div>
          <div className=" pl-3 pt-4 gap-y-5 grid">
            <Link to="/add" className="p-1  w-full hover:bg-neutral-200 ">
              <div className="flex gap-x-1">
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New Product
              </div>
            </Link>
            <Link to="/update" className="p-1  w-full hover:bg-neutral-200 ">
              <div className="flex gap-x-1">
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
                Update Product
              </div>
            </Link>
            <Link to="/delete" className="p-1 w-full hover:bg-neutral-200">
              <div className="flex gap-x-1">
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Delete Product
              </div>
            </Link>
            
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/add" element={<ProductForm />} />
        <Route path="/update" element={<ProductUpdate />} />
        <Route path="/delete" element={<ProductDeleteForm />} />
      </Routes>
    </div>
  );
};
