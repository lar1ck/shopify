import React, { useState, useEffect } from "react";

interface ProductUpdateFormProps {
  productName: string;
}

const ProductUpdateForm: React.FC<ProductUpdateFormProps> = ({
  productName,
}) => {
  const [productDetails, setProductDetails] = useState({
    description: "",
    price: 0,
    availability: "",
    image_path: "",
  });

  useEffect(() => {
    if (productName) {
      fetch(`http://localhost:3000/products/${productName}`)
        .then((response) => response.json())
        .then((data) => setProductDetails(data))
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    }
  }, [productName]);

  const handleUpdate = () => {
    fetch(`http://localhost:3000/products/${productName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        alert("Product details updated successfully!");
      })
      .catch(() => alert("Error updating product details:"));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails({ ...productDetails, description: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails({ ...productDetails, price: +e.target.value });
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetails({ ...productDetails, availability: e.target.value });
  };


  return (
    <div className="bg-white text-gray-800 p-6 rounded-md ">
      <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Product Name:
        </label>
        <input
          type="text"
          value={productName}
          readOnly
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <input
          type="text"
          value={productDetails.description}
          onChange={handleDescriptionChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Price:
        </label>
        <input
          type="number"
          value={productDetails.price}
          onChange={handlePriceChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Availability:
        </label>
        <input
          type="text"
          value={productDetails.availability}
          onChange={handleAvailabilityChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 ml-auto"
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

const Appi: React.FC = () => {
  const [productName, setProductName] = useState<string>("");

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  return (
    <div className="bg-white text-gray-800 p-4 min-h-screen flex">
      <div className="bg-white text-gray-800 p-8 rounded-md w-full">
        <h1 className="text-3xl font-semibold mb-4">Product Update</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name:
          </label>
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
          />
        </div>

        <ProductUpdateForm productName={productName} />
      </div>
    </div>
  );
};

export default Appi;
