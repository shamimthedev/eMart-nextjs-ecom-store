"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    
    if (open) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const menuItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Shop', href: '/shop', icon: '🛍️' },
    { name: 'Categories', href: '/categories', icon: '📦' },
    { name: 'Deals', href: '/deals', icon: '🔥' },
    { name: 'About', href: '/about', icon: '📖' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  const accountItems = [
    { name: 'My Account', href: '/account', icon: '👤' },
    { name: 'Orders', href: '/orders', icon: '📋' },
    { name: 'Wishlist', href: '/wishlist', icon: '❤️' },
    { name: 'Cart', href: '/cart', icon: '🛒', badge: '2' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative w-8 h-8 flex flex-col items-center justify-center cursor-pointer group z-50"
        aria-label="Toggle menu"
      >
        <span 
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            open ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
          }`}
        />
        <span 
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 my-1 ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span 
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            open ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
          }`}
        />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-pinki to-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg">👋</span>
            </div>
            <div>
              <h3 className="font-semibold">Welcome!</h3>
              <p className="text-xs opacity-90">Sign in for better experience</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Navigation Links */}
          <div className="py-6">
            <div className="px-6 mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</h4>
            </div>
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-4 px-6 py-4 text-gray-800 hover:bg-gray-50 hover:text-pinki transition-all duration-200 border-l-4 border-transparent hover:border-pinki group"
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  <svg className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Account Section */}
          <div className="border-t border-gray-100 py-6">
            <div className="px-6 mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</h4>
            </div>
            <div className="space-y-1">
              {accountItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-4 px-6 py-4 text-gray-800 hover:bg-gray-50 hover:text-pinki transition-all duration-200 border-l-4 border-transparent hover:border-pinki group relative"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-pinki text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {item.badge}
                    </span>
                  )}
                  <svg className="w-5 h-5 ml-auto transform group-hover:translate-x-1 transition-transform duration-200 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-100 p-6 space-y-3">
            <button className="w-full bg-gradient-to-r from-pinki to-purple-600 text-white py-3 px-4 rounded-full font-semibold hover:from-pinki/90 hover:to-purple-600/90 transition-all duration-300 hover:scale-105">
              Sign In
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
              Create Account
            </button>
          </div>

          {/* Support Links */}
          <div className="border-t border-gray-100 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link href="/help" className="text-gray-600 hover:text-pinki transition-colors duration-200">
                Help Center
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-pinki transition-colors duration-200">
                Customer Support
              </Link>
              <Link href="/track" className="text-gray-600 hover:text-pinki transition-colors duration-200">
                Track Order
              </Link>
              <Link href="/returns" className="text-gray-600 hover:text-pinki transition-colors duration-200">
                Returns
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Connect with us</p>
              <div className="flex gap-3 justify-center">
                {[
                  { name: 'Facebook', icon: '/facebook.png' },
                  { name: 'Instagram', icon: '/instagram.png' },
                  { name: 'Twitter', icon: '/x.png' }
                ].map((social) => (
                  <button key={social.name} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                    <Image src={social.icon} alt={social.name} width={16} height={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;