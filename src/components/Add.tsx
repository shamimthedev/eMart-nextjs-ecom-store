// src/components/Add.tsx
"use client";

import { useState } from "react";

interface AddProps {
  stock: number;
  price: number;
  productName: string;
}

const Add = ({ stock, price }: AddProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
    if (type === "increment" && quantity < stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const totalPrice = price * quantity;

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-100 rounded-2xl">
            <button
              onClick={() => handleQuantityChange("decrement")}
              disabled={quantity <= 1}
              className="w-12 h-12 flex items-center justify-center rounded-l-2xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <div className="w-16 h-12 flex items-center justify-center font-semibold text-lg">
              {quantity}
            </div>
            
            <button
              onClick={() => handleQuantityChange("increment")}
              disabled={quantity >= stock}
              className="w-12 h-12 flex items-center justify-center rounded-r-2xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>

          {/* Stock Warning */}
          {stock <= 10 && (
            <div className="flex items-center gap-2 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                Only {stock} items left in stock!
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Total Price */}
      <div className="p-4 bg-gradient-to-r from-pinki/5 to-purple-500/5 rounded-2xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-700">Total Price:</span>
          <span className="text-2xl font-bold text-gray-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        {quantity > 1 && (
          <div className="text-sm text-gray-600 mt-1">
            ${price} × {quantity} items
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart || stock === 0}
          className={`flex-1 relative overflow-hidden py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
            addedToCart
              ? 'bg-green-500 text-white'
              : stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-pinki to-purple-600 text-white hover:from-pinki/90 hover:to-purple-600/90 hover:shadow-lg hover:shadow-pinki/25 active:scale-98'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            {isAddingToCart ? (
              <>
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Adding to Cart...
              </>
            ) : addedToCart ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Added to Cart!
              </>
            ) : stock === 0 ? (
              'Out of Stock'
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5-5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                Add to Cart
              </>
            )}
          </div>
        </button>

        <button
          className="sm:w-auto px-6 py-4 border-2 border-pinki text-pinki rounded-2xl font-semibold text-lg hover:bg-pinki hover:text-white transition-all duration-300 active:scale-98"
          disabled={stock === 0}
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="hidden sm:inline">Add to Wishlist</span>
          </div>
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 active:scale-98"
        disabled={stock === 0}
      >
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Buy Now - ${totalPrice.toFixed(2)}
        </div>
      </button>
    </div>
  );
};

export default Add;