
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ProductDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: string;
  image_path: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else {
          if (response.status === 404) {
            console.error("Product not found");
          } else {
            console.error("Failed to fetch product details");
          }
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <img
        src={`http://localhost:3000/api/product-images/${product.image_path}`}
        alt={product.name}
        className="w-full h-auto"
      />
      <p className="text-gray-400">{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetail;
