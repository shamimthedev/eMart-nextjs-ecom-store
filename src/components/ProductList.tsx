// src/components/ProductList.tsx
import Image from "next/image";
import Link from "next/link";

// Types for better TypeScript support
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: {
    primary: string;
    secondary: string;
  };
  badge?: string;
  rating?: number;
  slug: string;
}

// Sample data - in a real app, this would come from props or API
const products: Product[] = [
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

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link 
      href={`/${product.slug}`} // FIXED: Changed from `/products/${product.slug}` to `/${product.slug}`
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-2xl bg-gray-50">
        {product.badge && (
          <div className="absolute top-4 left-4 z-20 bg-pinki text-white px-3 py-1 rounded-full text-xs font-medium">
            {product.badge}
          </div>
        )}
        
        <Image
          src={product.images.primary}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="absolute object-cover z-10 group-hover:opacity-0 transition-opacity duration-500"
        />
        <Image
          src={product.images.secondary}
          alt={`${product.name} alternate view`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="absolute object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Quick View
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        {product.rating && <StarRating rating={product.rating} />}
        
        {/* Title and Price */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-pinki transition-colors duration-200 line-clamp-2 min-h-[48px]">
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

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button className="w-full bg-pinki/10 text-pinki border border-pinki/20 py-3 px-4 rounded-xl font-medium transition-all duration-200 hover:bg-pinki hover:text-white hover:border-pinki hover:shadow-lg hover:shadow-pinki/25 active:scale-98 mt-4">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

// Main ProductList Component
const ProductList = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;