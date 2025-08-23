import Image from "next/image";
import Link from "next/link";

// Types for better structure
interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  slug: string;
  gradient: string;
  textColor: string;
}

// Sample category data - in real app, this would come from props/API
const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    description: "Latest gadgets & tech",
    image: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 245,
    slug: "electronics",
    gradient: "from-blue-600/80 to-purple-600/80",
    textColor: "text-white"
  },
  {
    id: 2,
    name: "Fashion",
    description: "Trendy clothing & accessories",
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 189,
    slug: "fashion",
    gradient: "from-pink-500/80 to-rose-500/80",
    textColor: "text-white"
  },
  {
    id: 3,
    name: "Home & Living",
    description: "Furniture & decor",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 156,
    slug: "home-living",
    gradient: "from-green-500/80 to-emerald-500/80",
    textColor: "text-white"
  },
  {
    id: 4,
    name: "Sports & Fitness",
    description: "Workout gear & equipment",
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 98,
    slug: "sports-fitness",
    gradient: "from-orange-500/80 to-red-500/80",
    textColor: "text-white"
  },
  {
    id: 5,
    name: "Beauty",
    description: "Skincare & cosmetics",
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 134,
    slug: "beauty",
    gradient: "from-purple-500/80 to-pink-500/80",
    textColor: "text-white"
  },
  {
    id: 6,
    name: "Books & Media",
    description: "Literature & entertainment",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 87,
    slug: "books-media",
    gradient: "from-indigo-500/80 to-blue-500/80",
    textColor: "text-white"
  },
  {
    id: 7,
    name: "Automotive",
    description: "Car accessories & parts",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 72,
    slug: "automotive",
    gradient: "from-gray-600/80 to-gray-800/80",
    textColor: "text-white"
  },
  {
    id: 8,
    name: "Food & Beverages",
    description: "Gourmet & specialty items",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    itemCount: 203,
    slug: "food-beverages",
    gradient: "from-yellow-500/80 to-orange-500/80",
    textColor: "text-white"
  }
];

// Category Card Component
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex-shrink-0 w-72 sm:w-80 block"
    >
      <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Background Image */}
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className={`text-sm font-medium ${category.textColor} opacity-90 mb-2`}>
              {category.itemCount} items
            </p>
            <h3 className={`text-2xl font-bold ${category.textColor} mb-2 group-hover:text-yellow-300 transition-colors duration-300`}>
              {category.name}
            </h3>
            <p className={`text-sm ${category.textColor} opacity-80 mb-4`}>
              {category.description}
            </p>
            
            {/* Shop Now Button */}
            <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
              <span className="text-sm font-medium">Shop Now</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

// Main CategoryList Component
const CategoryList = () => {
  return (
    <div className="relative">
      {/* Scroll Container */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 pb-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className="hidden lg:block">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      {/* View All Categories Button */}
      <div className="text-center mt-12 px-4">
        <Link href="/categories">
          <button className="bg-gradient-to-r from-pinki to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pinki/90 hover:to-purple-600/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Categories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;