// src/app/[slug]/page.tsx

import Add from "@/src/components/Add";
import BreadcrumbNavigation from "@/src/components/BreadcrumbNavigation";
import CustomizeProduct from "@/src/components/CustomizeProduct";
import ProductImages from "@/src/components/ProductImages";
import ProductReviews from "@/src/components/ProductReviews";
import ProductTabs from "@/src/components/ProductTabs";
import RelatedProducts from "@/src/components/RelatedProducts";

// Sample product data - in real app, this would come from API based on slug
const productData = {
  id: 1,
  name: "Premium Wireless Noise-Cancelling Headphones",
  brand: "AudioTech Pro",
  price: 299,
  originalPrice: 399,
  rating: 4.8,
  reviewCount: 1247,
  stock: 15,
  sku: "ATP-WH-001",
  description: "Experience premium sound quality with our flagship wireless headphones featuring advanced noise-cancellation technology, 40-hour battery life, and premium materials for ultimate comfort.",
  features: [
    "40-hour battery life with quick charge",
    "Advanced noise-cancellation technology", 
    "Premium leather ear cushions",
    "Wireless & wired connectivity",
    "Voice assistant compatible",
    "Foldable design for portability"
  ],
  specifications: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    "Battery Life": "40 hours",
    "Charging Time": "2 hours",
    "Weight": "250g",
    "Connectivity": "Bluetooth 5.0, 3.5mm jack",
    "Warranty": "2 years"
  },
  colors: [
    { name: "Midnight Black", value: "#000000", available: true },
    { name: "Pearl White", value: "#FFFFFF", available: true },
    { name: "Rose Gold", value: "#E8B4B8", available: false }
  ],
  sizes: [
    { name: "One Size", available: true }
  ],
  images: [
    "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3259584/pexels-photo-3259584.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  category: "Electronics",
  subcategory: "Audio",
  tags: ["wireless", "noise-cancelling", "premium", "bluetooth"]
};

const SinglePage = () => {
  const discountPercentage = Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100);

  return (
    <div className="pt-20 min-h-screen bg-gray-50/50">
      {/* Breadcrumb Navigation */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4">
        <BreadcrumbNavigation 
          category={productData.category}
          subcategory={productData.subcategory}
          productName={productData.name}
        />
      </div>

      {/* Main Product Section */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-16">
        <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Product Images */}
            <div className="w-full lg:w-1/2 lg:sticky top-24 h-max">
              <ProductImages images={productData.images} productName={productData.name} />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col gap-8">
              {/* Product Header */}
              <div className="space-y-4">
                {/* Brand & SKU */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-pinki bg-pinki/10 px-3 py-1 rounded-full">
                    {productData.brand}
                  </span>
                  <span className="text-sm text-gray-500">SKU: {productData.sku}</span>
                </div>

                {/* Product Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {productData.name}
                </h1>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.floor(productData.rating) 
                              ? "text-yellow-400 fill-current" 
                              : star <= productData.rating 
                              ? "text-yellow-400 fill-current opacity-50" 
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">{productData.rating}</span>
                    <span className="text-gray-500">
                      ({productData.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {productData.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              {/* Pricing */}
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${productData.price}
                  </span>
                  {productData.originalPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ${productData.originalPrice}
                      </span>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {discountPercentage}% OFF
                      </span>
                    </>
                  )}
                </div>
                
                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-medium">
                    {productData.stock > 10 ? 'In Stock' : `Only ${productData.stock} left in stock`}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              {/* Product Customization */}
              <CustomizeProduct 
                colors={productData.colors}
                sizes={productData.sizes}
              />

              {/* Add to Cart Section */}
              <Add 
                stock={productData.stock}
                price={productData.price}
                productName={productData.name}
              />

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                <ul className="space-y-3">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-pinki/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-pinki" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-pinki/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600">Free Shipping</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-pinki/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600">2 Year Warranty</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-10 h-10 bg-pinki/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-5 h-5 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600">30-Day Returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-16">
        <ProductTabs specifications={productData.specifications} />
      </div>

      {/* Reviews Section */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-16">
        <ProductReviews 
          rating={productData.rating} 
          reviewCount={productData.reviewCount}
        />
      </div>

      {/* Related Products */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-16">
        <RelatedProducts currentProductId={productData.id} />
      </div>
    </div>
  );
};

export default SinglePage;