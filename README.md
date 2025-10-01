# ShareeGhor - Bangladesh Women's Fashion E-Commerce

A modern, fully functional frontend e-commerce website for Bangladeshi women's clothing. Built with React, Vite, Tailwind CSS, and ready to deploy on Vercel.

## 🌟 Features

- **Product Catalog**: Browse 20+ women's clothing items including Sarees, Salwar Kameez, Kurtis, Lehenga, and more
- **Advanced Filtering**: Filter by category, price range, and sort options
- **Shopping Cart**: Add/remove items, update quantities with persistent cart (localStorage)
- **Multi-Step Checkout**: Shipping info → Payment → Order review
- **Order Confirmation**: Order success page with tracking ID and estimated delivery
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Bangladesh Context**: 
  - Prices in BDT (৳)
  - Bangladeshi cities/areas
  - Cash on Delivery (COD) payment option
  - Local delivery charges

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

## 📦 Deployment on Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

Your site will be live in minutes! ✨

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **LocalStorage** - Cart persistence

## 📁 Project Structure

```
e-commerce/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── context/        # React context (Cart state)
│   ├── data/           # Product data & constants
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## 🎨 Features Breakdown

### Shopping Cart
- Add items with size and color selection
- Update quantities
- Remove items
- Cart persists across sessions (localStorage)
- Cart sidebar with smooth animations

### Checkout Process
- **Step 1**: Shipping information (name, email, phone, address, city)
- **Step 2**: Payment method (COD or Card - UI only)
- **Step 3**: Order review
- Form validation for all fields
- Bangladesh phone number validation (01XXXXXXXXX)

### Order Confirmation
- Unique tracking ID generation
- Estimated delivery date (3-7 days)
- Complete order summary
- Shipping and payment details
- Next steps information

### Product Features
- Product listing with filters
- Product detail page
- Size and color selection
- Stock availability
- Ratings and reviews
- Discount badges

## 🌐 Pages

- `/` - Home page with featured products
- `/products` - Product listing with filters
- `/product/:id` - Product detail page
- `/checkout` - Multi-step checkout
- `/order-success` - Order confirmation

## 💡 Key Highlights

✅ **No Backend Required** - Pure frontend, perfect for free hosting  
✅ **No Database** - Uses localStorage for cart persistence  
✅ **Bangladesh Focused** - BDT currency, local cities, COD payment  
✅ **Production Ready** - Optimized build, responsive design  
✅ **Vercel Optimized** - Includes vercel.json for SPA routing  

## 🎯 Next Steps (Optional Enhancements)

- Add product search functionality
- Implement wishlist feature
- Add product image gallery/zoom
- Integrate payment gateway (bKash, Nagad, etc.)
- Add order history (with backend)
- Implement user authentication
- Add product reviews system

## 📄 License

This project is open source and available under the MIT License.

## 👥 Support

For support, email support@shareeghor.com or call +880 1712-345678

---

Made with ❤️ for Bangladeshi Women
