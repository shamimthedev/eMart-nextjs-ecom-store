// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* MOBILE */}
        <div className="h-full flex items-center justify-between md:hidden">
          <Link href="/" className="group">
            <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-pinki to-purple-600 bg-clip-text text-transparent">
              eMart
            </div>
          </Link>
          <Menu />
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/* LEFT */}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="eMart logo" 
                  width={32} 
                  height={32}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <div className="text-2xl font-bold tracking-wide bg-gradient-to-r from-pinki to-purple-600 bg-clip-text text-transparent">
                eMart
              </div>
            </Link>
            
            {/* Navigation Links */}
            <nav className="hidden xl:flex gap-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Shop', href: '/shop' },
                { name: 'Categories', href: '/categories' },
                { name: 'Deals', href: '/deals' },
                { name: 'About', href: '/about' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-pinki font-medium transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-pinki transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-6">
            <Searchbar />
            <NavIcons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;