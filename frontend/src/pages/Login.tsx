
import Register from "./Register";
import login from "../assets/png/log.jpg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        console.log("Login successful");
        alert("Login successful")
        
      } else {
        const data = await response.json();
        console.error("Error during login:", data.error);
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      
    }
  };

  return (
    <div className="flex ">
    <div className=" min-h-full px-6 py-12 lg:px-8 w-1/2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
        
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring ring-red-50 outline-none p-3 placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 00 placeholder:text-gray-400  ring ring-red-50 outline-none p-3 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600  "
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/Register"
            className="ml-1 font-semibold leading-6 text-red-500  hover:text-red-600"
          >
            Register
          </Link>
          <Routes>
            <Route path="/Register/*" element={<Register />} />
          </Routes>
        </p>
      </div>
    </div>
    <div>
    <img src={login} className="h-[600px] w-[900px]" alt="" />
    </div>
    </div>
  );
};

export default LogIn;
