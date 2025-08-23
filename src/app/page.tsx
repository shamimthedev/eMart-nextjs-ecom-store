import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <main className="pt-20"> {/* Add padding-top to account for fixed navbar */}
      {/* Hero Slider Section */}
      <section>
        <Slider />
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of trending products with the best quality and value
            </p>
          </div>
          <ProductList />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse categories to find exactly what you&apos;re looking for
            </p>
          </div>
          <CategoryList />
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pinki to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-pinki px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;