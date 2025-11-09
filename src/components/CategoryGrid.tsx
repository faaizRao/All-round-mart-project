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

const colorMap = {
  'electronics': 'bg-blue-500',
  'fashion': 'bg-pink-500',
  'home-kitchen': 'bg-green-500',
  'beauty': 'bg-purple-500',
  'sports': 'bg-orange-500',
  'kids-toys': 'bg-yellow-500'
};

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.slug as keyof typeof iconMap];
            const colorClass = colorMap[category.slug as keyof typeof colorMap];
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className={`${colorClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;