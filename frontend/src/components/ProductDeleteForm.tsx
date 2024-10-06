import { useState, FormEvent } from "react";

interface DeleteFormData {
  productName: string;
}

const ProductDeleteForm: React.FC = () => {
  const [deleteFormData, setDeleteFormData] = useState<DeleteFormData>({
    productName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeleteFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/products/${deleteFormData.productName}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Product deleted successfully");
        alert("Product deleted successfully");
      } else if (response.status === 404) {
        console.error("Product not found");
        alert("Product not found");
      } else {
        console.error(
          "Failed to delete product:",
          response.status,
          response.statusText
        );
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product:");
    }
  };

  return (
    <form
      onSubmit={handleDelete}
      className="mx-auto bg-white text-gray-800 p-4 rounded-md"
    >
      <label className="block mb-4">Product Name:</label>
      <input
        type="text"
        name="productName"
        value={deleteFormData.productName}
        onChange={handleChange}
        className="border-none focus:outline-none bg-gray-100 w-full mb-3 mt-1 p-3 rounded-md"
        required
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Delete Product
        </button>
      </div>
    </form>
  );
};

export default ProductDeleteForm;
