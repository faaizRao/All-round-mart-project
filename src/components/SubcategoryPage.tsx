import React from 'react';
import Link from 'next/link';
import { Category, Subcategory } from '../data/categories';
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

interface SubcategoryPageProps {
  category: Category;
  subcategory: Subcategory;
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

const SubcategoryPage: React.FC<SubcategoryPageProps> = ({ category, subcategory, products }) => {
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
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href={`/categories/${category.slug}`} className="text-gray-700 hover:text-blue-600">
                {category.name}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">{subcategory.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Subcategory Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <IconComponent className="h-12 w-12" />
          </div>
          <div>
            <div className="text-blue-100 mb-1">{category.name}</div>
            <h1 className="text-4xl font-bold mb-2">{subcategory.name}</h1>
            <p className="text-xl text-blue-100">{subcategory.description}</p>
            <p className="text-blue-100 mt-2">
              {products.length} product{products.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
      </div>

      {/* Related Subcategories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other {category.name} Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.subcategories
            .filter(sub => sub.slug !== subcategory.slug)
            .map((relatedSubcategory) => (
            <Link
              key={relatedSubcategory.id}
              href={`/categories/${category.slug}/${relatedSubcategory.slug}`}
              className="group p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-sm">
                  {relatedSubcategory.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{subcategory.name} Products</h2>
          <div className="text-sm text-gray-600">
            Showing {products.length} product{products.length !== 1 ? 's' : ''}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16">
            <IconComponent className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found in {subcategory.name}
            </h3>
            <p className="text-gray-600 mb-8">
              Check back later for new products in this category.
            </p>
            <Link
              href={`/categories/${category.slug}`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Browse All {category.name}
            </Link>
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

export default SubcategoryPage;