// Format price in BDT
export const formatPrice = (price) => {
  return `৳${price.toLocaleString('en-BD')}`;
};

// Generate random tracking ID
export const generateTrackingId = () => {
  const prefix = 'BD-WC';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};

// Calculate estimated delivery date (3-7 days from now)
export const getEstimatedDelivery = () => {
  const days = Math.floor(Math.random() * 5) + 3; // 3 to 7 days
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + days);
  
  return deliveryDate.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Calculate cart total
export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Calculate delivery charge
export const calculateDeliveryCharge = (city, total) => {
  // Free delivery for orders above 3000 BDT
  if (total >= 3000) return 0;
  
  // Inside Dhaka: 60 BDT, Outside Dhaka: 120 BDT
  return city === 'Dhaka' ? 60 : 120;
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate Bangladesh phone number
export const validatePhone = (phone) => {
  // Accepts formats: 01XXXXXXXXX or +8801XXXXXXXXX
  const re = /^(\+880|880|0)1[3-9]\d{8}$/;
  return re.test(phone.replace(/[\s-]/g, ''));
};

// Format phone number
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/[\s-]/g, '');
  if (cleaned.startsWith('+880')) {
    return cleaned;
  } else if (cleaned.startsWith('880')) {
    return `+${cleaned}`;
  } else if (cleaned.startsWith('0')) {
    return `+88${cleaned}`;
  }
  return phone;
};

// Save to localStorage
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Get from localStorage
export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

// Remove from localStorage
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};
