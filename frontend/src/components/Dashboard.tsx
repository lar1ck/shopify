import ProductDeleteForm from "./ProductDeleteForm";
import ProductForm from "./ProductForm";
import ProductUpdate from "./ProductUpdateForm";
import sec from "../assets/png/sec.jpg";
import profile from "../assets/png/prf.png";
import empty from "../assets/png/empty.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="p-10 flex">
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
            <div className="text-sm text-bold mt-2 mb-2">Genghis Khan</div>
            <div className="text-xs text-neutral-500">Entreprenuer</div>
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
            <div className=" pl-3 pt-4 gap-y-3 grid">
              <Link
                to="/add"
                className="p-2 rounded-lg w-full hover:bg-neutral-200 duration-300 "
              >
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
              <Link
                to="/update"
                className="p-2 rounded-lg w-full hover:bg-neutral-200 duration-300"
              >
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
              <Link
                to="/delete"
                className="p-2 w-full rounded-lg hover:bg-neutral-200 duration-300"
              >
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
              <Link
                to="/order"
                className="p-2 w-full rounded-lg hover:bg-neutral-200 duration-300"
              >
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
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  Orders
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

      <div className="w-screen">
        <div className="ml-10">
          <div className="w-full bg-neutral-200 m-4 h-32 p-5 rounded-xl flex">
            <div className="flex gap-x-4">
              <div
                className="h-24 w-24 rounded-full  bg-slate-400"
                style={{
                  backgroundImage: `url(${profile})`,
                  backgroundSize: `110%`,
                  backgroundPosition: "center top ",
                }}
              ></div>
              <div className="">
                <div className="text-2xl text-bold mt-2 mb-2">Genghis Khan</div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <b>4,9</b>
                  <p className="m--1 text-neutral-400">(reviews)</p>
                  <div> Mongol, Khentii Mountains</div>
                </div>
              </div>
              <div className="ml-96 p-5 flex gap-x-48">
                <div className="ml-30 ">
                  <Link to="/Dashboard">
                    <button className=" p-4 rounded-full text-bold w-32 text-white  bg-red-500">
                    Log out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full bg-neutral-200 m-4 h-76 p-5 rounded-xl flex bg-no-repeat   "
            style={{
              backgroundImage: `url(${sec})`,
              backgroundPosition: "center right -150px",
              height: "45vh",
            }}
          >
            <div className="pl-5 pt-2">
              <h1 className="text-bold text-4xl w-1/2 ">
                Seller's Hub: Empower Your Business.
              </h1>
              <p className="pt-3 italic">
                Welcome to Seller's Hub, your central command for e-commerce{" "}
                <br />
                success. Maximize your impact by crafting compelling product{" "}
                <br />
                descriptions and setting competitive prices.
              </p>
              <div className="flex mt-3 gap-x-3 ">
                <div className="flex bg-blue-200 p-1 gap-x-1">
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
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <span className=" ">Privacy Assurance</span>
                </div>
                <div className="bg-pink-200 p-1 flex">
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
                      d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                    />
                  </svg>

                  <span className="ml-1 ">Secure Transactions</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div
            className="bg-no bg-no-repeat"
            style={{
              backgroundImage: `url(${empty})`,
              backgroundPosition: "center ",
              height: "100vh",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
