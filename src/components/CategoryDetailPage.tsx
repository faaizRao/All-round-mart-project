import React from 'react';
import Link from 'next/link';
import { Category } from '../data/categories';
import { ExtendedProduct } from '../data/products';
import ProductCard from './ProductCard';
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Sparkles, 
  Dumbbell, 
  Baby 
} from 'lucide-react';

interface CategoryDetailPageProps {
  category: Category;
  products: ExtendedProduct[];
}

const iconMap = {
  'electronics': Smartphone,
  'fashion': Shirt,
  'home-kitchen': Home,
  'beauty': Sparkles,
  'sports': Dumbbell,
  'kids-toys': Baby
};

const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ category, products }) => {
  const IconComponent = iconMap[category.slug as keyof typeof iconMap];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600">
                Categories
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">{category.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <IconComponent className="h-12 w-12" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="text-xl text-blue-100">{category.description}</p>
            <p className="text-blue-100 mt-2">
              {products.length} product{products.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Subcategory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {category.subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/categories/${category.slug}/${subcategory.slug}`}
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="h-8 w-8 text-gray-600 group-hover:text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {subcategory.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {subcategory.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Products in Category */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All {category.name} Products</h2>
        {products.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found in this category
            </h3>
            <p className="text-gray-600">
              Check back later for new products in {category.name}.
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
    </div>
  );
};

export default CategoryDetailPage;