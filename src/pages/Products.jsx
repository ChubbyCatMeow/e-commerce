import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { FiFilter } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const slugToCategory = (slug) => {
  if (!slug) return null;
  const normalized = slug.replace(/-/g, ' ').toLowerCase();
  return categories.find(
    (c) => c.toLowerCase() === normalized
  ) || null;
};

const Products = ({ initialCategory }) => {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const derivedFromSlug = slugToCategory(slug);
  const startingCategory = initialCategory || derivedFromSlug || searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(startingCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Sync when route slug or prop changes
    const next = startingCategory;
    if (next !== selectedCategory) {
      setSelectedCategory(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, initialCategory]);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange === 'under-1000') {
      result = result.filter((product) => product.price < 1000);
    } else if (priceRange === '1000-2500') {
      result = result.filter((product) => product.price >= 1000 && product.price <= 2500);
    } else if (priceRange === '2500-5000') {
      result = result.filter((product) => product.price > 2500 && product.price <= 5000);
    } else if (priceRange === 'above-5000') {
      result = result.filter((product) => product.price > 5000);
    }

    // Sort products
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <FiFilter className="mr-2" />
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setPriceRange('all')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      priceRange === 'all'
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => setPriceRange('under-1000')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      priceRange === 'under-1000'
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    Under ৳1,000
                  </button>
                  <button
                    onClick={() => setPriceRange('1000-2500')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      priceRange === '1000-2500'
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    ৳1,000 - ৳2,500
                  </button>
                  <button
                    onClick={() => setPriceRange('2500-5000')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      priceRange === '2500-5000'
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    ৳2,500 - ৳5,000
                  </button>
                  <button
                    onClick={() => setPriceRange('above-5000')}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      priceRange === 'above-5000'
                        ? 'bg-primary-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    Above ৳5,000
                  </button>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full input-field"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-xl text-gray-600">
                  No products found matching your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
