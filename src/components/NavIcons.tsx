"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // TEMPORARY - In real app, this would come from auth context
  const isLoggedIn = false;
  const cartItemCount = 2;
  const notificationCount = 3;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen(prev => !prev);
    }
  };

  const notifications = [
    {
      id: 1,
      type: "order",
      title: "Order Shipped",
      message: "Your order #12345 is on the way!",
      time: "2 min ago",
      unread: true
    },
    {
      id: 2,
      type: "promotion",
      title: "Flash Sale",
      message: "50% off on electronics. Limited time!",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      type: "wishlist",
      title: "Price Drop",
      message: "Item in your wishlist is now 20% off",
      time: "2 hours ago",
      unread: false
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order':
        return '📦';
      case 'promotion':
        return '🔥';
      case 'wishlist':
        return '❤️';
      default:
        return '🔔';
    }
  };

  return (
    <div className="flex items-center gap-3 xl:gap-4">
      {/* Profile Icon */}
      <div ref={profileRef} className="relative">
        <button
          onClick={handleProfile}
          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 group"
        >
          {isLoggedIn ? (
            <div className="w-8 h-8 bg-gradient-to-r from-pinki to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">U</span>
            </div>
          ) : (
            <svg className="w-5 h-5 text-gray-600 group-hover:text-pinki transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </button>

        {/* Profile Dropdown */}
        {isProfileOpen && isLoggedIn && (
          <div className="absolute top-12 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-pinki to-purple-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-semibold">U</span>
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm opacity-90">john@example.com</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {[
                { name: 'My Profile', href: '/profile', icon: '👤' },
                { name: 'My Orders', href: '/orders', icon: '📋' },
                { name: 'Wishlist', href: '/wishlist', icon: '❤️' },
                { name: 'Settings', href: '/settings', icon: '⚙️' },
                { name: 'Help Center', href: '/help', icon: '❓' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-pinki transition-colors duration-150"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-4">
              <button className="w-full text-left text-gray-700 hover:text-red-600 font-medium transition-colors duration-150">
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Notifications */}
      <div ref={notificationRef} className="relative">
        <button
          onClick={() => setIsNotificationOpen(prev => !prev)}
          className="relative w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-pinki transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM15 17H9a6 6 0 01-6-6V7a6 6 0 016-6h6a6 6 0 016 6v4" />
          </svg>
          
          {notificationCount > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-gentle">
              {notificationCount > 9 ? '9+' : notificationCount}
            </div>
          )}
        </button>

        {/* Notifications Dropdown */}
        {isNotificationOpen && (
          <div className="absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <button className="text-sm text-pinki hover:text-pinki/80 font-medium">
                Mark all read
              </button>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                    notification.unread ? 'bg-blue-50/50' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {notification.title}
                        </h4>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-pinki rounded-full mt-1"></div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                      <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 text-center">
              <Link
                href="/notifications"
                className="text-sm text-pinki hover:text-pinki/80 font-medium"
                onClick={() => setIsNotificationOpen(false)}
              >
                View all notifications
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Wishlist Icon */}
      <Link
        href="/wishlist"
        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 group"
      >
        <svg className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </Link>

      {/* Cart Icon */}
      <div className="relative">
        <button
          onClick={() => setIsCartOpen(prev => !prev)}
          className="relative w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 group"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-pinki transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3H1m6 10v6a1 1 0 001 1h10a1 1 0 001-1v-6" />
          </svg>
          
          {cartItemCount > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-pinki text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce-gentle">
              {cartItemCount > 9 ? '9+' : cartItemCount}
            </div>
          )}
        </button>

        {/* Cart Modal */}
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
};

export default NavIcons;