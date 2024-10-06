// src/App.jsx
// import React from 'react';
// import myImage from '../assets/png/logo-no-background.png';
import myImag from "../assets/png/ch.jpg";
import myIma from "../assets/png/fm.jpg";
import myIm from "../assets/png/ml.jpg";
import myI from "../assets/png/glas.jpg";
import my from "../assets/png/man.jpg";
import { Link } from "react-router-dom";
// import Home from '../pages/home';
// import Newpage  from '../pages/NewPage';
// import ProductForm  from '../components/ProductForm';
// import { BrowserRouter as Router,Routes , Route, Link  } from 'react-router-dom';

function Appis() {
  return (
    <>
      <section>
        <div className="container flex flex-col-reverse md:flex-row px-6 items-center mx-auto ml-16  mt-10 space-y-0">
          <div className="flex flex-col mb-32 md:w-1/2 space-y-2">
            <h1 className="max-w-md text-5xl font-bold md:text-left text-center mb-4">
              Explore Now <br />
              for a World of Premium Goods.
            </h1>
            <p className="text-gray-700 md:left text-left">
              Shop confidently with our curated selection of premium products.
              Unparalleled quality, exceptional service, and a touch of luxury
              in every purchase.
            </p>
            <Link
              to="/Register"
              className="w-32 rounded-full p-2 text-center transition hover:text-red-500 border border-red-500"
            >
               <b>Get Started</b>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src={my} alt="" />
          </div>
        </div>
      </section>
      <div className="container-fluid flex md:flex-row px-6 items-left mx-auto mt-10 space-y-0 space-x-20">
        <div className="flex flex-col md:w-1/2 space-y-2 ml-14">
          <h1 className="max-w-md text-3xl font-bold md:text-left text-center mb-2">
            Discover Clear Vision, Define Your Style
          </h1>
          <p className="text-gray-700 md:left text-left">
            Elevate your look with our stunning collection of eyeglasses. From
            timeless classics to the latest trends, find the perfect frames that
            not only enhance your vision but also reflect your unique style.
            Explore our curated selection today and step into a world where
            clarity meets fashion.
          </p>
          <div >
            <img src={myI} className="h-[450px]" alt="" />
          </div>
        </div>
        <div className="flex-row space-y-10 md:w-1/2 md:flex-row ">
          <div className="flex-row">
            <h1 className="text-bold text-2xl mb-2 rounded-l-full">
              <span className="text-sm py-2 px-4 pt-2 text-white bg-red-500 rounded-full m-4">
                01
              </span>
              Curated Collections
            </h1>
            <p className="text-gray-700">
              Explore our carefully curated collections that bring together the
              latest trends, timeless classics, and unique finds. Our expertly
              selected items ensure you discover products that align with your
              style, making your shopping experience delightful and inspiring.
            </p>
          </div>
          <div className="flex-row">
            <h1 className="text-bold text-2xl mb-2">
              <span className="text-sm text-center py-2 px-4 pt-2 text-white bg-red-500 rounded-full m-4">
                02
              </span>
              Effortless Shopping Experience
            </h1>
            <p className="text-gray-700">
              Enjoy a seamless and user-friendly shopping journey. From
              intuitive navigation to hassle-free checkout, we prioritize your
              convenience. Our platform is designed to make finding and
              purchasing your favorite products quick and easy, so you can spend
              more time enjoying your purchases.
            </p>
          </div>
          <div className="flex-row">
            <h1 className="text-bold text-2xl mb-2">
              <span className="text-sm text-center py-2 px-4 pt-2 text-white bg-red-500 rounded-full m-4">
                03
              </span>
              Quality Assurance Guarantee
            </h1>
            <p className="text-gray-700">
              Shop with confidence knowing that each product on our platform
              undergoes rigorous quality checks. Our commitment to excellence
              ensures that you receive premium goods, crafted with precision and
              care. Your satisfaction is our priority, and our quality assurance
              guarantee reflects that commitment.
            </p>
          </div>
          {/* <div><img  src={m} alt="" /></div> */}
        </div>
      </div>
      
      <section className="mt-  p-20">
        <h1 className="font-bold text-4xl text-center mb-16 mx-auto bg-clip-text text-transparent bg-gradient-to-l from-red-700 to-blue-900">
          TESTIMONIAL FROM SATISFIED CUSTOMERS..
        </h1>
        <div className="flex space-x-6 mx-16 mt-32  ">
          <div className="flex flex-col items-center p-6 space-y-6 text-center rounded-lg md:w-1/3 bg-slate-200 ">
            <img className="-mt-20 rounded-full h-20 w-20" src={myIma} alt="" />
            <h5 className="text-1xl font-bold">Rosa</h5>
            <p className="text-small text-gray-900">
              "I am beyond thrilled with the products I've purchased from{" "}
              <span className="text-red-500">
                <b>"ShopFlare"</b>
              </span>
              . Every item feels like a carefully curated masterpiece. The
              attention to detail, quality craftsmanship, and the overall
              aesthetic have truly exceeded my expectations. Whether it's the
              innovative designs or the functionality of each product, it's
              evident that
              <span className="text-red-500">
                <b>"ShopFlare"</b>
              </span>
              prioritizes excellence."
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 text-center rounded-lg md:w-1/3 bg-slate-200 ">
            <img
              className="-mt-20 rounded-full h-20 w-20"
              src={myImag}
              alt=""
            />
            <h5 className="text-1xl font-bold">Emma</h5>
            <p className="text-small text-gray-900">
              "Wow, I love everything from{" "}
              <span className="text-red-500">
                <b>"ShopFlare"</b>
              </span>
              ! The colors, the fun designs - it's like they made everything
              just for me. My favorite part is how everything is so comfy!
              Whether it's clothes or toys, they always make me smile. And guess
              what? The package even had a surprise sticker inside! I can't wait
              to show all my friends.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-6 text-center rounded-lg md:w-1/3 bg-slate-200 ">
            <img className="-mt-20 rounded-full h-20 w-20" src={myIm} alt="" />
            <h5 className="text-1xl font-bold">John</h5>
            <p className="text-small text-gray-900">
              "I've been consistently impressed with the quality and innovation
              that{" "}
              <span className="text-red-500">
                <b>"ShopFlare"</b>
              </span>{" "}
              brings to the table. From tech gadgets to everyday essentials,
              each product showcases a perfect blend of style and functionality.
              The durability of the items is particularly noteworthy; it's
              evident that{" "}
              <span className="text-red-500">
                <b>"ShopFlare"</b>
              </span>{" "}
              takes pride in delivering goods that stand the test of time
            </p>
          </div>
        </div>
        {/* <div className="my-16">
          <Link
            to="/Register"
            className="w-32 rounded-full p-4 text-center ml-52 transition bg-red-500 hover:bg-white border border-red-400"
          >
            <b>Get Started</b>
          </Link>
        </div> */}
      </section>
      <section
        id="hh"
        className=" drop-shadow-2xl mt-10 bg-red-600 flex flex-col md:flex-row p-10 mx-auto justify-between shadow-inner shadow-gray-800"
      >
        <div>
          <h1 className="text-4xl font-bold text-white md:text-4xl space-x-20">
            Explore Now for a World of Premium Goods
          </h1>
        </div>
        <div>
          <Link
            to = "/Register"
            className="p-2 px-6 pt-2 text-white space-y-10 bg-red-600 rounded-full transition border border-white hover:border-red-600 md:block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

export default Appis;
