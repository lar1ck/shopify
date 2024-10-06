import React, { useState, useEffect } from "react";

interface Order {
  order_id: number;
  product_id: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_availability: string;
  product_image_path: string;
}

const Cart: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    fetchOrders();
  },);

  const fetchOrders = () => {
    fetch("http://localhost:3000/api/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        calculateTotalPrice(data);
      })
      .catch((error) => console.error("Error fetching orders:", error));
  };

  const calculateTotalPrice = (orders: Order[]) => {
    const total = orders.reduce((acc, order) => acc + order.product_price, 0);
    setTotalPrice(total);
  };
  const HandleClick =  () => {
    if(totalPrice === 0) {
      alert("No items in cart");
      return
    }else{
      alert("Payment successful");
    }
    
  }


  const handleDeleteOrder = async (orderId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Order deleted successfully!");
        // Fetch orders again after deletion
        fetchOrders();
      } else {
        console.error("Failed to delete order");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="container ml-4 mr-0 flex mt-5">
      <div className="w-[70%] mr-5">
        <h2 className="text-2xl font-bold mb-4 ">
          Your Cart 
        </h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-1">
              {orders.map((order) => (
                <div
                  key={order.order_id}
                  className="bg-white overflow-hidden flex border-b border-black p-4"
                >
                  <img
                    src={`http://localhost:3000/${order.product_image_path}`}
                    alt={order.product_name}
                    className="w-32 h-30 object-cover bg-gray-100 rounded-lg"
                  />
                  <div className="p-4 text-xs">
                    <h3 className="text-lg font-bold">{order.product_name}</h3>
                    <p className="text-gray-600">{order.product_description}</p>
                    <p className="text-gray-600">${order.product_price}</p>
                  </div>
                  <div className="flex items-center justify-end flex-grow px-4">
                    <button
                      className="border-red-500 border px-2 py-1 rounded-md"
                      onClick={() => handleDeleteOrder(order.order_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="mt-4 text-xl max-h-96 px-16 py-10 bg-gray-50 w-[30%] rounded-md">
        <p className="font-bold text-lg">Summary <span className="text-sm text-gray-400">{orders.length} items</span></p>
        <div className="text-sm mt-3 text-gray-500 space-y-4 border-black border-b h-28">
          <p className="flex justify-between">
            <span>Subtotal Price</span>
            <span>${totalPrice}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping</span>
            <span>No fees</span>
          </p>
          <p className="flex justify-between">
            <span>Taxes</span>
            <span>Not included</span>
          </p>
        </div>
        <p className="flex justify-between text-sm mt-3 font-bold text-black">
          <span>Total Price</span>
          <span>${totalPrice}</span>
        </p>
        <button className="w-full bg-red-700 text-white text-sm p-2 mt-7" onClick={HandleClick}>Pay</button>
        <p className="text-center text-sm mt-3 "><i className="fa-solid fa-lock"></i><span className="text-gray-400"> Secure Transactions</span></p>
      </div>
    </div>
  );
};

export default Cart;
