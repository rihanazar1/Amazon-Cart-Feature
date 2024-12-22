import React from 'react';

const Cart = ({ value, handleClick, index }) => {
  const { images, price, addcart } = value;

  return (
    <div className="w-full h-96 bg-white shadow-md rounded-xl p-5 flex flex-col justify-between transform hover:scale-105 transition-transform">
      {/* Image Section */}
      <div className="h-48 w-48 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images}
          alt="Product"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Price Section */}
      <div className="text-center mt-4">
        <p className="text-lg font-bold text-gray-800">{price}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-5">
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
          Buy Now
        </button>
        <button
          onClick={() => handleClick(index)}
          className={`w-full py-3 rounded-lg font-semibold ${
            addcart
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-yellow-400 text-black hover:bg-yellow-500'
          }`}
        >
          {addcart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Cart;
