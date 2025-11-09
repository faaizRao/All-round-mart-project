import React from 'react';
import Link from 'next/link';
import { categories } from '../data/categories';
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Sparkles, 
  Dumbbell, 
  Baby 
} from 'lucide-react';

const iconMap = {
  'electronics': Smartphone,
  'fashion': Shirt,
  'home-kitchen': Home,
  'beauty': Sparkles,
  'sports': Dumbbell,
  'kids-toys': Baby
};

const CategoriesOverview = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Categories
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our complete range of products organized by category and subcategory
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => {
          const IconComponent = iconMap[category.slug as keyof typeof iconMap];
          
          return (
            <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-blue-100">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Subcategories Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      href={`/categories/${category.slug}/${subcategory.slug}`}
                      className="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {subcategory.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {subcategory.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Category Link */}
                <div className="mt-6 text-center">
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    View All {category.name}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesOverview;