// src/components/OrdersPage.tsx
import React, { useState, useEffect } from 'react';

// Define an interface for the order object
interface Order {
  order_id: number;
  product_id: number;
  product_name: string; 
  // Add other properties as needed
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  const handleDeleteOrder = async (orderId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Order deleted successfully!");
        
         fetch('http://localhost:3000/api/orders')
          .then(response => response.json())
          .then(data => setOrders(data));
      } else {
        console.error("Failed to delete order");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
  <h2 className="text-2xl font-bold mb-4 border-t-1 border-black">Orders</h2>
  {orders.length === 0 ? (
    <p>No orders available.</p>
  ) : (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.order_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product_id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product_name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <button
                className="text-sm bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleDeleteOrder(order.order_id)}
              >
                <i className="fa-regular fa-trash-can"></i>
                
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>


  );
};

export default Order;
