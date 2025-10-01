import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import { formatPrice } from '../utils/helpers';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    // You could add a toast notification here
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="card hover:scale-105">
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              if (!e.target.dataset.fallback) {
                e.target.dataset.fallback = 'true';
                e.target.src = `data:image/svg+xml;utf8,${encodeURIComponent(`
                  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'>
                    <rect width='100%' height='100%' fill='%23f3f4f6'/>
                    <text x='50%' y='50%' font-size='20' text-anchor='middle' fill='%239ca3af' dy='.3em'>Image Unavailable</text>
                  </svg>
                `)}`;
                e.target.classList.remove('group-hover:scale-110');
                e.target.classList.add('object-contain', 'p-6');
              }
            }}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              -{discountPercentage}%
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-primary-600 font-semibold mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="mt-3 w-full btn-primary flex items-center justify-center space-x-2"
            >
              <FiShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
