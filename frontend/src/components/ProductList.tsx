import React, { useState, useEffect } from "react";
import empty from "../assets/png/empty.png";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: string;
  image_path: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/sse");

    eventSource.onmessage = (event) => {
      const productsData = JSON.parse(event.data);
      setProducts(productsData);
    };

    eventSource.onerror = (error) => {
      console.error("Error with SSE connection:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleOrder = async (productId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        console.log("Order placed successfully!");
        alert("Order placed ")
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 h-full">
      <h2 className="text-3xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length === 0 ? (
          <div
            className="bg-no bg-no-repeat w-screen "
            style={{
              backgroundImage: `url(${empty})`,
              backgroundPosition: "center  ",
              height: "50vh",
            }}
          >
            No Product Found
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className=" p-1  ">
              <Link to='/Cart'>
                <img
                  src={`http://localhost:3000/api/product-images${product.image_path}`}
                  alt={product.name}
                  className="w-full h-80 hover:bg-neutral-200  mb-4 border-none  bg-neutral-100"
                />
              </Link>
              <div>
                <div className="flex gap-x-40">
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-400">{product.description}</p>
                    <p className="mt-2">Availability: {product.availability}</p>
                  </div>
                  <div className="">
                    <p className="mt-2 text-lg font-bold  ">${product.price}</p>
                  </div>
                </div>

                <button
                  className="mt-4 bg-red-500 active:bg-red-600 text-white px-4 py-2 rounded-md"
                  onClick={() => handleOrder(product.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
