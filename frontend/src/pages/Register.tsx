// Register.tsx
import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import register from "../assets/png/register.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform client-side validation if needed
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    try {
      // Send registration data to the server
      await axios.post("http://localhost:3000/register", {
        username,
        firstname,
        secondname,
        email,
        password,
        confirmPassword,
      });

      // Handle success or redirect to login page
      console.log("Registration successful");
      alert("Registration successful");
    } catch (error) {
      // Handle registration error
      console.error("Error during registration:", error);
      alert("Error during registration: ");
    }
  };

  return (
    <div className="flex ">
    <div className="flex min-h-full flex-col mb-10 py-10 lg:px-8 w-1/2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
        <form className="space-y-10" onSubmit={handleRegister}>
          <div className="flex space-x-9">
            <div >
              
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="block w-full py-1.5 text-gray-900 shadow-sm bg-red-100 p-2 placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6 border-b border-black outline-none"
              />
            </div>
            <div className="">
              
              <input
                id="secondname"
                name="secondname"
                type="text"
                placeholder="Second Name"
                value={secondname}
                onChange={(e) => setSecondname(e.target.value)}
                required
                className="block w-full py-1.5 text-gray-900 shadow-sm bg-red-100 p-2 placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6 border-b border-black outline-none"
              />
            </div>
          </div>

          <div>
            
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full py-1.5 text-gray-900 shadow-sm bg-red-100 p-2 placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6 border-b border-black outline-none"
            />
          </div>
          <div>
            
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full py-1.5 text-gray-900 shadow-sm bg-red-100 p-2 placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6 border-b border-black outline-none"
            />
          </div>

          <div>
            
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full py-1.5 text-gray-900 shadow-sm bg-red-100 p-2 placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6 border-b border-black outline-none"
            />
          </div>

          <div>
            
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full py-1.5 text-gray-900 shadow-sm bg-red-100 p-2 placeholder:text-gray-400  focus:ring-inset sm:text-sm sm:leading-6 border-b border-black outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="  flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Alreday a member?
            <Link
              to="/Login"
              className="ml-1 font-semibold leading-6 text-red-500  hover:text-red-600 "
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
    <div className="w-1/2 ">
      <img src={register} className=" " alt="" />
    </div>
    </div>
  );
};

export default Register;
