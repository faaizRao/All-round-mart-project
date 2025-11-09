import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CategoryPageProps {
  categoryName: string;
  products: Product[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName, products }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryName}</h1>
        <p className="text-gray-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''} in {categoryName}
        </p>
      </div>
      
      {products.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No products found in this category
          </h2>
          <p className="text-gray-600">
            Check back later for new products in {categoryName}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;