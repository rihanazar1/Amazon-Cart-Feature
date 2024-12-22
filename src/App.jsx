import React, { useState } from 'react';
import Cart from './components/Cart.jsx';

const App = () => {
  const cartData = [
    {
      images:
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$99.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1653620199505-85e2e1f20b7d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$59.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1655557937610-32eee4f6c5df?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$129.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$199.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1518118202680-891d607277d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$49.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$99.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$59.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$129.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1489269637500-aa0e75768394?q=80&w=1682&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$199.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1518118202680-891d607277d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$49.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$199.99',
      addcart: false,
    },
    {
      images:
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '$199.99',
      addcart: false,
    },
  ];

  const [realcartData, setCartData] = useState(cartData);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleClickButton = (cardindex) => {
    setCartData((prev) =>
      prev.map((item, index) =>
        index === cardindex ? { ...item, addcart: !item.addcart } : item
      )
    );
  };

  const cartItems = realcartData.filter((item) => item.addcart);

  return (
    <div className="w-full h-full pt-10 flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-5 transition-transform duration-300 ${
          sidebarVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 ">Cart Items</h2>
        {cartItems.length > 0 ? (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.images}
                  alt="Product"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <p className="text-lg font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        {/* Cart Button */}
        <div
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="cursor-pointer text-xl font-semibold bg-gray-900 text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-700 transition-all "
        >
          Cart Items: {cartItems.length}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 ">
          {realcartData.map((item, index) => (
            <Cart
              key={index}
              value={item}
              index={index}
              handleClick={handleClickButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
