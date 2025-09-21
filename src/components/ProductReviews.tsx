import React, { useState } from 'react';
import { Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

interface ProductReviewsProps {
  productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const [reviews] = useState<Review[]>([
    {
      id: 'r1',
      productId: '1',
      userName: 'John D.',
      rating: 5,
      comment: 'Absolutely love this coffee! The floral notes are amazing and the quality is consistently excellent.',
      date: '2024-01-10',
      verified: true,
    },
    {
      id: 'r2',
      productId: '1',
      userName: 'Sarah M.',
      rating: 4,
      comment: 'Great coffee with bright flavors. Perfect for morning brewing.',
      date: '2024-01-05',
      verified: true,
    },
    {
      id: 'r3',
      productId: '2',
      userName: 'Mike R.',
      rating: 5,
      comment: 'Smooth and balanced, exactly what I was looking for. The chocolate notes are delightful.',
      date: '2024-01-08',
      verified: false,
    },
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    name: '',
  });

  const productReviews = reviews.filter(r => r.productId === productId);
  const averageRating = productReviews.length > 0
    ? productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length
    : 0;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    // For now, just show success feedback to user
    setShowReviewForm(false);
    setNewReview({ rating: 5, comment: '', name: '' });
  };

  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-dark-brown mb-2">Customer Reviews</h3>
          {productReviews.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(averageRating)
                        ? 'text-yellow-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-light-brown">
                {averageRating.toFixed(1)} out of 5 ({productReviews.length} reviews)
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="btn-secondary text-sm py-2 px-4"
        >
          Write a Review
        </button>
      </div>

      {showReviewForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-coffee-50 p-6 rounded-lg mb-6"
        >
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-brown mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-brown mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= newReview.rating
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      } hover:text-yellow-500 hover:fill-current transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-brown mb-2">
                Your Review
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                required
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary py-2 px-6 text-sm">
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="btn-secondary py-2 px-6 text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {productReviews.length > 0 ? (
        <div className="space-y-4">
          {productReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-b pb-4 last:border-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-coffee-200 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-coffee-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold text-dark-brown">{review.userName}</span>
                      {review.verified && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-light-brown">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-light-brown">{review.comment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-light-brown py-8">
          No reviews yet. Be the first to review this product!
        </p>
      )}
    </div>
  );
};

export default ProductReviews;
