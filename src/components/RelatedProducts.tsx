// src/components/RelatedProducts.tsx
'use client'

import Image from "next/image";
import Link from "next/link";

interface RelatedProductsProps {
  currentProductId: number;
}

// Sample related products data - in real app, this would be filtered based on category, tags, etc.
const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49,
    originalPrice: 89,
    description: "Premium noise-cancelling wireless headphones with 30h battery life",
    images: {
      primary: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondary: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    badge: "Best Seller",
    rating: 4.8,
    slug: "wireless-headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    originalPrice: 249,
    description: "Fitness tracking smartwatch with heart rate monitor",
    images: {
      primary: "https://images.pexels.com/photos/5208784/pexels-photo-5208784.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondary: "https://images.pexels.com/photos/5208781/pexels-photo-5208781.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    badge: "New",
    rating: 4.6,
    slug: "smart-watch"
  },
  {
    id: 3,
    name: "Camera Lens",
    price: 299,
    description: "Professional 85mm portrait lens for stunning photography",
    images: {
      primary: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondary: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    rating: 4.9,
    slug: "camera-lens"
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 79,
    originalPrice: 99,
    description: "Ergonomic aluminum laptop stand with adjustable height",
    images: {
      primary: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondary: "https://images.pexels.com/photos/704241/pexels-photo-704241.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    rating: 4.4,
    slug: "laptop-stand"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 89,
    originalPrice: 129,
    description: "Portable waterproof speaker with deep bass and 24h battery",
    images: {
      primary: "https://images.pexels.com/photos/6195901/pexels-photo-6195901.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondary: "https://images.pexels.com/photos/5721479/pexels-photo-5721479.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    rating: 4.5,
    slug: "bluetooth-speaker"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 59,
    originalPrice: 79,
    description: "High-precision gaming mouse with RGB lighting and programmable buttons",
    images: {
      primary: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondary: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    rating: 4.7,
    slug: "gaming-mouse"
  }
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

// Product Card Component (similar to ProductList but smaller for related products)
const RelatedProductCard = ({ product }: { product: typeof allProducts[0] }) => {
  return (
    <Link 
      href={`/${product.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-pinki/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
        {product.badge && (
          <div className="absolute top-3 left-3 z-20 bg-pinki text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.badge}
          </div>
        )}
        
        <Image
          src={product.images.primary}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="absolute object-cover z-10 group-hover:opacity-0 transition-opacity duration-500"
        />
        <Image
          src={product.images.secondary}
          alt={`${product.name} alternate view`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="absolute object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        {product.rating && <StarRating rating={product.rating} />}
        
        {/* Title and Price */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-pinki transition-colors duration-200 line-clamp-2 text-sm">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking the button
            // Handle add to cart logic here
            console.log('Added to cart:', product.name);
          }}
          className="w-full bg-pinki/10 text-pinki border border-pinki/20 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-pinki hover:text-white hover:border-pinki hover:shadow-md active:scale-98"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

const RelatedProducts = ({ currentProductId }: RelatedProductsProps) => {
  // Filter out the current product and limit to 4 related products
  const relatedProducts = allProducts
    .filter(product => product.id !== currentProductId) // NOW USING currentProductId!
    .slice(0, 4); // Show only 4 related products

  // If no related products after filtering, show a message
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            You Might Also Like
          </h2>
          <p className="text-gray-600">
            Discover similar products that other customers have loved
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <RelatedProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Link */}
        <div className="text-center mt-8">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-pinki hover:text-pinki/80 font-medium transition-colors duration-200 group"
          >
            <span>View All Products</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;