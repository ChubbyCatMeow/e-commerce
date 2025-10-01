import React from 'react';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { formatPrice } from '../utils/helpers';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 text-sm mb-1">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          {item.selectedSize} | {item.selectedColor}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary-600">
            {formatPrice(item.price)}
          </span>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                onUpdateQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor,
                  item.quantity - 1
                )
              }
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <FiMinus className="w-3 h-3" />
            </button>
            <span className="text-sm font-semibold w-6 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                onUpdateQuantity(
                  item.id,
                  item.selectedSize,
                  item.selectedColor,
                  item.quantity + 1
                )
              }
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <FiPlus className="w-3 h-3" />
            </button>
            <button
              onClick={() =>
                onRemove(item.id, item.selectedSize, item.selectedColor)
              }
              className="p-1 rounded-md hover:bg-red-100 text-red-600 transition-colors ml-2"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
