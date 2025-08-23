"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  url: string;
  bg: string;
  textColor: string;
  buttonStyle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Fresh & Trendy",
    description: "Discover the latest summer fashion trends with up to 50% off on selected items",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/collections/summer",
    bg: "bg-gradient-to-br from-amber-50 via-orange-50 to-pink-100",
    textColor: "text-gray-900",
    buttonStyle: "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-orange-500/25"
  },
  {
    id: 2,
    title: "Winter Essentials",
    subtitle: "Stay Warm & Stylish",
    description: "Premium winter collection featuring cozy sweaters, jackets and accessories",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/collections/winter",
    bg: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100",
    textColor: "text-gray-900",
    buttonStyle: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-500/25"
  },
  {
    id: 3,
    title: "Spring Awakening",
    subtitle: "Bloom in Style",
    description: "Light, comfortable and vibrant pieces perfect for the spring season",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/collections/spring",
    bg: "bg-gradient-to-br from-green-50 via-teal-50 to-cyan-100",
    textColor: "text-gray-900",
    buttonStyle: "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg hover:shadow-green-500/25"
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* Slides Container */}
      <div
        className="w-max h-full flex transition-all ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row relative`}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className={`h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-6 2xl:gap-8 text-center px-8 xl:px-16 z-10 ${slide.textColor}`}>
              <div className="space-y-4">
                <p className="text-sm xl:text-lg font-medium tracking-wider uppercase opacity-80">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg xl:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
                  {slide.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href={slide.url}>
                  <button className={`${slide.buttonStyle} px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                    Shop Collection
                  </button>
                </Link>
                <Link href="/deals">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/30">
                    View Deals
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent xl:bg-gradient-to-l z-10"></div>
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 ${
                  current === index ? 'scale-100' : 'scale-105'
                }`}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 xl:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 p-3 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
      >
        <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 xl:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 p-3 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
      >
        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              current === index
                ? "w-12 h-3 bg-white rounded-full"
                : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"
            }`}
          >
            {current === index && (
              <div className="absolute inset-0 bg-gradient-to-r from-pinki to-purple-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 p-2 rounded-full transition-all duration-300 hover:bg-white/20"
          title={isAutoPlay ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlay ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293L12 11" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Slider;