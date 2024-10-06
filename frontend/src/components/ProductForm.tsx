import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  description: string;
  price: string;
  availability: string;
  image: File | null;
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    availability: "",
    image: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Product created:", result);
        alert("Product created")
      } else {
        const errorData = await response.json();
        console.error(
          "Failed to create product:",
          response.status,
          errorData.message
        );
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-800 p-6 rounded-md shadow-md"
    >
      <h1 className="text-3xl text-semibold">Publish new product</h1>
      <br />
      <label className="block mb-4">
        <span className="text-gray-700">Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md" 
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Description:</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
          required
        ></textarea>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Price:</span>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Availability:</span>
        <input
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="border-none focus:outline-none bg-gray-100 w-full mt-1 p-3 rounded-md"
          required
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
