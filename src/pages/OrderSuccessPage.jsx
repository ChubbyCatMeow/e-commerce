import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiPackage, FiTruck, FiHome } from 'react-icons/fi';
import { formatPrice } from '../utils/helpers';

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrderData(JSON.parse(lastOrder));
    } else {
      // Redirect to home if no order found
      navigate('/');
    }
  }, [navigate]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FiCheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>

          {/* Tracking ID */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your Tracking ID</p>
            <p className="text-2xl font-bold text-primary-600 mb-2">
              {orderData.trackingId}
            </p>
            <p className="text-sm text-gray-600">
              Save this ID to track your order
            </p>
          </div>

          {/* Estimated Delivery */}
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <FiTruck className="w-5 h-5" />
            <p className="font-medium">
              Estimated Delivery: <span className="text-primary-600">{orderData.estimatedDelivery}</span>
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <FiPackage className="mr-2" />
            Order Details
          </h2>

          {/* Order Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Items Ordered</h3>
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Size: {item.selectedSize} | Color: {item.selectedColor}
                    </p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="font-bold text-primary-600 mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Shipping Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">{orderData.shippingInfo.fullName}</p>
              <p className="text-gray-600">{orderData.shippingInfo.phone}</p>
              <p className="text-gray-600">{orderData.shippingInfo.email}</p>
              <p className="text-gray-600 mt-2">{orderData.shippingInfo.address}</p>
              <p className="text-gray-600">
                {orderData.shippingInfo.city}
                {orderData.shippingInfo.postalCode &&
                  ` - ${orderData.shippingInfo.postalCode}`}
              </p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Method</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">
                {orderData.paymentMethod === 'cod'
                  ? '💵 Cash on Delivery (COD)'
                  : '💳 Credit/Debit Card'}
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">{formatPrice(orderData.subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charge</span>
                <span className="font-semibold">
                  {orderData.deliveryCharge === 0
                    ? 'FREE'
                    : formatPrice(orderData.deliveryCharge)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total</span>
                <span className="text-primary-600">{formatPrice(orderData.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="flex-1 btn-primary text-center flex items-center justify-center">
            <FiHome className="mr-2" />
            Back to Home
          </Link>
          <Link to="/products" className="flex-1 btn-secondary text-center">
            Continue Shopping
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>You'll receive a confirmation email at {orderData.shippingInfo.email}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>We'll prepare your order and dispatch it within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Track your order using the tracking ID provided above</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              <span>
                Our delivery partner will contact you before delivery on{' '}
                {orderData.shippingInfo.phone}
              </span>
            </li>
            {orderData.paymentMethod === 'cod' && (
              <li className="flex items-start">
                <span className="mr-2">5.</span>
                <span>Pay in cash when you receive your order</span>
              </li>
            )}
          </ul>
        </div>

        {/* Customer Support */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Need help? Contact us at{' '}
            <a href="tel:+8801712345678" className="text-primary-600 hover:underline">
              +880 1712-345678
            </a>{' '}
            or{' '}
            <a href="mailto:support@shareeghor.com" className="text-primary-600 hover:underline">
              support@shareeghor.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
