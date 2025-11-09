'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Search } from 'lucide-react';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Search className="h-6 w-6 text-gray-400" />
          <h1 className="text-3xl font-bold text-gray-900">
            Search Results
          </h1>
        </div>
        {query && (
          <p className="text-gray-600">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{query}"
          </p>
        )}
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No products found
          </h2>
          <p className="text-gray-600 mb-8">
            {query 
              ? `We couldn't find any products matching "${query}". Try different keywords.`
              : 'Please enter a search term to find products.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;