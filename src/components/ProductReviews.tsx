// src/components/ProductReviews.tsx
'use client'

import Image from "next/image";
import { useState } from "react";

interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
}

const ProductReviews = ({ rating, reviewCount }: ProductReviewsProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Sample reviews data - in real app, this would come from API
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2025-01-15",
      title: "Absolutely amazing quality!",
      comment: "These headphones exceeded my expectations. The sound quality is incredible and the noise cancellation works perfectly. Highly recommended!",
      verified: true,
      helpful: 24,
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "Mike Chen", 
      rating: 4,
      date: "2025-01-10",
      title: "Great value for money",
      comment: "Really good headphones for the price. Battery life is excellent and they're comfortable to wear for long periods.",
      verified: true,
      helpful: 18,
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 5,
      date: "2025-01-08",
      title: "Perfect for work from home",
      comment: "The noise cancellation is a game-changer for video calls. Sound quality is crisp and clear.",
      verified: false,
      helpful: 12,
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const StarRating = ({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${size} ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  const ratingBreakdown = [
    { stars: 5, count: 856, percentage: 68.7 },
    { stars: 4, count: 234, percentage: 18.8 },
    { stars: 3, count: 98, percentage: 7.9 },
    { stars: 2, count: 35, percentage: 2.8 },
    { stars: 1, count: 24, percentage: 1.9 }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Overall Rating */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{rating}</div>
                <StarRating rating={rating} size="w-6 h-6" />
                <div className="text-sm text-gray-600 mt-2">
                  Based on {reviewCount.toLocaleString()} reviews
                </div>
              </div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm text-gray-600">{item.stars}</span>
                  <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-pinki h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-8">
          {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
              <div className="flex items-start gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={review.rating} />
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-pinki transition-colors duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 01-2-2V4a2 2 0 012-2h2.343M7 12V4a2 2 0 012-2h4.343a2 2 0 011.789 1.106l3.5 7A2 2 0 0117.842 12H15" />
                      </svg>
                      Helpful ({review.helpful})
                    </button>
                    <button className="text-gray-600 hover:text-pinki transition-colors duration-200">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 2 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="px-8 py-3 border-2 border-pinki text-pinki rounded-2xl font-semibold hover:bg-pinki hover:text-white transition-all duration-300"
            >
              {showAllReviews ? 'Show Less Reviews' : `Show All ${reviews.length} Reviews`}
            </button>
          </div>
        )}

        {/* Write Review Button */}
        <div className="mt-8 p-6 bg-gradient-to-r from-pinki/5 to-purple-500/5 rounded-2xl">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-4">
              Help other customers by writing a review about this product
            </p>
            <button className="bg-gradient-to-r from-pinki to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-pinki/90 hover:to-purple-600/90 transition-all duration-300">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;