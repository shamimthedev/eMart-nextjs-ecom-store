"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
  discount?: number;
}

interface CartModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const CartModal = ({ isOpen = true, onClose }: CartModalProps) => {
  // Mock data - replace with actual cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Cotton Dress",
      price: 89,
      originalPrice: 129,
      image: "/woman.png",
      quantity: 1,
      size: "M",
      color: "Pink",
      availability: 'in-stock',
      discount: 31
    },
    {
      id: "2",
      name: "Summer Collection Top",
      price: 49,
      image: "/woman.png",
      quantity: 2,
      size: "L",
      color: "Blue",
      availability: 'low-stock'
    },
    {
      id: "3",
      name: "Casual Wear Set",
      price: 75,
      originalPrice: 95,
      image: "/woman.png",
      quantity: 1,
      size: "S",
      color: "White",
      availability: 'in-stock',
      discount: 21
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const savings = cartItems.reduce((total, item) => {
    if (item.originalPrice) {
      return total + ((item.originalPrice - item.price) * item.quantity);
    }
    return total;
  }, 0);

  // Actions
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Handle checkout logic here
  };

  const getAvailabilityColor = (availability: CartItem['availability']) => {
    switch (availability) {
      case 'in-stock': return 'text-success-600';
      case 'low-stock': return 'text-warning-600';
      case 'out-of-stock': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  const getAvailabilityText = (availability: CartItem['availability']) => {
    switch (availability) {
      case 'in-stock': return 'In Stock';
      case 'low-stock': return 'Only few left';
      case 'out-of-stock': return 'Out of Stock';
      default: return 'Unknown';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-96 max-h-[80vh] absolute top-12 right-0 bg-white rounded-2xl shadow-large border border-gray-100 z-50 overflow-hidden animate-scale-in flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pinki to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M7 13h10M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
            <p className="text-sm text-gray-500">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        /* Empty Cart */
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6 text-sm">Add some items to get started</p>
          <Link 
            href="/shop"
            className="bg-gradient-to-r from-pinki to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-6">
            {cartItems.map((item, index) => (
              <div 
                key={item.id} 
                className="flex gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={100}
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.discount && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      -{item.discount}%
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-2">
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-pinki transition-colors duration-200">
                        {item.name}
                      </h3>
                      {(item.size || item.color) && (
                        <p className="text-xs text-gray-500 mt-1">
                          {item.size && `Size: ${item.size}`}
                          {item.size && item.color && ' • '}
                          {item.color && `Color: ${item.color}`}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1"
                      title="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  {/* Price and Original Price */}
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                    )}
                  </div>

                  {/* Availability */}
                  <div className={`text-xs font-medium ${getAvailabilityColor(item.availability)}`}>
                    {getAvailabilityText(item.availability)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        disabled={item.quantity <= 1}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="text-sm font-semibold min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                    <span className="font-bold text-pinki">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary and Actions */}
          <div className="border-t border-gray-200 p-4 bg-gray-50 flex-shrink-0">
            {/* Savings Display */}
            {savings > 0 && (
              <div className="flex items-center justify-between mb-2 p-2 bg-success-50 rounded-lg">
                <span className="text-sm font-medium text-success-800">You&apos;re saving</span>
                <span className="font-bold text-success-600">${savings.toFixed(2)}</span>
              </div>
            )}

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-semibold text-gray-900">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            
            <p className="text-xs text-gray-500 mb-3 text-center">
              Shipping and taxes calculated at checkout
            </p>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pinki to-purple-600 text-white py-3 px-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure Checkout
                  </>
                )}
              </button>
              
              <div className="flex gap-2">
                <Link 
                  href="/cart"
                  className="flex-1 text-center py-2.5 px-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 text-sm"
                >
                  View Cart
                </Link>
                <Link 
                  href="/shop"
                  className="flex-1 text-center py-2.5 px-3 border border-pinki text-pinki rounded-full font-semibold hover:bg-pinki hover:text-white transition-all duration-300 text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Clear Cart Option */}
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="w-full mt-2 text-xs text-gray-500 hover:text-red-500 transition-colors duration-200"
              >
                Clear all items
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;