import { Product } from '../types';

// Update Product interface to include subcategory
export interface ExtendedProduct extends Product {
  subcategory: string;
}

export const products: ExtendedProduct[] = [
  // Electronics - Smartphones
  {
    id: 'el-001',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199.99,
    originalPrice: 1299.99,
    description: 'Latest Samsung flagship smartphone with AI features, 200MP camera, and S Pen.',
    images: ['/images/s24ultra.jpg'],
    category: 'Electronics',
    subcategory: 'smartphones',
    inStock: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 'el-004',
    name: 'iPhone 15 Pro Max',
    price: 1299.99,
    originalPrice: 1399.99,
    description: 'Apple iPhone 15 Pro Max with titanium design and advanced camera system.',
    images: ['/images/iphone15.jpg'],
    category: 'Electronics',
    subcategory: 'smartphones',
    inStock: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 'el-005',
    name: 'Google Pixel 8 Pro',
    price: 899.99,
    description: 'Google Pixel 8 Pro with AI-powered photography and pure Android experience.',
    images: ['/images/google pixels.jpg'],
    category: 'Electronics',
    subcategory: 'smartphones',
    inStock: true,
    rating: 4.7,
    reviews: 189
  },

  // Electronics - Laptops
  {
    id: 'el-002',
    name: 'Apple MacBook Air M3',
    price: 1099.99,
    description: 'Powerful and efficient laptop with M3 chip, perfect for work and creativity.',
    images: ['/images/Apple MacBook Pro.jpg'],
    category: 'Electronics',
    subcategory: 'laptops',
    inStock: true,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 'el-006',
    name: 'Dell XPS 13 Plus',
    price: 1299.99,
    originalPrice: 1499.99,
    description: 'Premium ultrabook with InfinityEdge display and latest Intel processors.',
    images: ['/images/Dell XPS 13 Plus Laptop.jpg'],
    category: 'Electronics',
    subcategory: 'laptops',
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'el-007',
    name: 'HP Spectre x360',
    price: 1199.99,
    description: '2-in-1 convertible laptop with touch screen and premium design.',
    images: ['/images/hpxspextra.jpg'],
    category: 'Electronics',
    subcategory: 'laptops',
    inStock: true,
    rating: 4.5,
    reviews: 134
  },

  // Electronics - Audio
  {
    id: 'el-003',
    name: 'Sony WH-1000XM5 Headphones',
    price: 349.99,
    originalPrice: 399.99,
    description: 'Industry-leading noise canceling wireless headphones with premium sound.',
    images: ['/images/Sony WH-1000XM5.jpg'],
    category: 'Electronics',
    subcategory: 'audio',
    inStock: true,
    rating: 4.7,
    reviews: 312
  },
  {
    id: 'el-008',
    name: 'Apple AirPods Pro 2',
    price: 249.99,
    description: 'Advanced noise cancellation and spatial audio with adaptive transparency.',
    images: ['/images/airpods-pro2.jpg'],
    category: 'Electronics',
    subcategory: 'audio',
    inStock: true,
    rating: 4.8,
    reviews: 278
  },
  {
    id: 'el-009',
    name: 'Bose QuietComfort Earbuds',
    price: 279.99,
    originalPrice: 329.99,
    description: 'Premium wireless earbuds with world-class noise cancellation.',
    images: ['/images/boseairbuds.jpg'],
    category: 'Electronics',
    subcategory: 'audio',
    inStock: true,
    rating: 4.6,
    reviews: 203
  },

  // Electronics - Gaming
  {
    id: 'el-010',
    name: 'PlayStation 5 Console',
    price: 499.99,
    description: 'Next-generation gaming console with ultra-high speed SSD and ray tracing.',
    images: ['/images/ps5.jpg'],
    category: 'Electronics',
    subcategory: 'gaming',
    inStock: true,
    rating: 4.9,
    reviews: 445
  },
  {
    id: 'el-011',
    name: 'Xbox Series X',
    price: 499.99,
    description: 'Most powerful Xbox ever with 4K gaming and quick resume feature.',
    images: ['/images/xbox-xseriesjpg.jpg'],
    category: 'Electronics',
    subcategory: 'gaming',
    inStock: true,
    rating: 4.8,
    reviews: 389
  },

  // Fashion - Men's Clothing
  {
    id: 'fa-001',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    description: 'Comfortable and stylish cotton t-shirt available in multiple colors.',
    images: ['/images/cotton-t-shirt.jpg'],
    category: 'Fashion',
    subcategory: 'mens-clothing',
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 'fa-002',
    name: 'Designer Jeans',
    price: 79.99,
    originalPrice: 99.99,
    description: 'High-quality denim jeans with perfect fit and modern style.',
    images: ['/images/desginer-jeans.jpg'],
    category: 'Fashion',
    subcategory: 'mens-clothing',
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'fa-003',
    name: 'Casual Button-Down Shirt',
    price: 59.99,
    description: 'Classic button-down shirt perfect for casual and business casual wear.',
    images: ['/images/bottom-shirt.jpg'],
    category: 'Fashion',
    subcategory: 'mens-clothing',
    inStock: true,
    rating: 4.4,
    reviews: 112
  },

  // Fashion - Women's Clothing
  {
    id: 'fa-004',
    name: 'Elegant Summer Dress',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Flowing summer dress perfect for any occasion.',
    images: ['/images/summer-dress.jpg'],
    category: 'Fashion',
    subcategory: 'womens-clothing',
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'fa-005',
    name: 'Professional Blazer',
    price: 129.99,
    description: 'Tailored blazer for professional and formal occasions.',
    images: ['/images/professional-blazer.jpg'],
    category: 'Fashion',
    subcategory: 'womens-clothing',
    inStock: true,
    rating: 4.6,
    reviews: 167
  },

  // Fashion - Shoes
  {
    id: 'fa-006',
    name: 'Running Sneakers',
    price: 119.99,
    originalPrice: 149.99,
    description: 'Comfortable running shoes with advanced cushioning technology.',
    images: ['/images/runnig-sneakers.jpg'],
    category: 'Fashion',
    subcategory: 'shoes',
    inStock: true,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 'fa-007',
    name: 'Leather Dress Shoes',
    price: 179.99,
    description: 'Premium leather dress shoes for formal occasions.',
    images: ['/images/leather-dress-shoes.jpg'],
    category: 'Fashion',
    subcategory: 'shoes',
    inStock: true,
    rating: 4.5,
    reviews: 145
  },

  // Home & Kitchen - Kitchen Appliances
  {
    id: 'hk-001',
    name: 'Smart Coffee Maker',
    price: 199.99,
    description: 'WiFi-enabled coffee maker with app control and programmable brewing.',
    images: ['/images/smart-coffee-maker.jpg'],
    category: 'Home & Kitchen',
    subcategory: 'kitchen-appliances',
    inStock: true,
    rating: 4.4,
    reviews: 78
  },
  {
    id: 'hk-003',
    name: 'Air Fryer Pro',
    price: 129.99,
    originalPrice: 159.99,
    description: 'Large capacity air fryer with digital controls and multiple presets.',
    images: ['/images/air fryer pro.jpg'],
    category: 'Home & Kitchen',
    subcategory: 'kitchen-appliances',
    inStock: true,
    rating: 4.6,
    reviews: 234
  },

  // Home & Kitchen - Cookware
  {
    id: 'hk-002',
    name: 'Non-Stick Cookware Set',
    price: 149.99,
    originalPrice: 199.99,
    description: '10-piece non-stick cookware set with ceramic coating.',
    images: ['/images/non-stick.jpg'],
    category: 'Home & Kitchen',
    subcategory: 'cookware',
    inStock: true,
    rating: 4.3,
    reviews: 134
  },
  {
    id: 'hk-004',
    name: 'Stainless Steel Pot Set',
    price: 199.99,
    description: 'Professional-grade stainless steel cookware set.',
    images: ['/images/steel-pots.jpg'],
    category: 'Home & Kitchen',
    subcategory: 'cookware',
    inStock: true,
    rating: 4.7,
    reviews: 189
  },

  // Beauty - Skincare
  {
    id: 'be-001',
    name: 'Luxury Skincare Set',
    price: 89.99,
    description: 'Complete skincare routine with cleanser, serum, and moisturizer.',
    images: ['/images/Luxury Skincare Set.jpg'],
    category: 'Beauty',
    subcategory: 'skincare',
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'be-003',
    name: 'Anti-Aging Serum',
    price: 59.99,
    originalPrice: 79.99,
    description: 'Advanced anti-aging serum with retinol and hyaluronic acid.',
    images: ['/images/anti-aging-serum.jpg'],
    category: 'Beauty',
    subcategory: 'skincare',
    inStock: true,
    rating: 4.8,
    reviews: 312
  },

  // Beauty - Makeup
  {
    id: 'be-002',
    name: 'Professional Makeup Brush Set',
    price: 49.99,
    originalPrice: 69.99,
    description: '15-piece professional makeup brush set with premium synthetic bristles.',
    images: ['/images/Professional Makeup Brush Set.jpg'],
    category: 'Beauty',
    subcategory: 'makeup',
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 'be-004',
    name: 'Long-Lasting Foundation',
    price: 39.99,
    description: 'Full coverage foundation with 24-hour wear and SPF protection.',
    images: ['/images/longlasting-foundation.jpg'],
    category: 'Beauty',
    subcategory: 'makeup',
    inStock: true,
    rating: 4.5,
    reviews: 145
  },

  // Sports - Fitness
  {
    id: 'sp-001',
    name: 'Yoga Mat Premium',
    price: 39.99,
    description: 'Eco-friendly yoga mat with superior grip and cushioning.',
    images: ['/images/Yoga-Mat-Premium.jpg'],
    category: 'Sports',
    subcategory: 'fitness',
    inStock: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: 'sp-002',
    name: 'Fitness Tracker Watch',
    price: 129.99,
    originalPrice: 159.99,
    description: 'Advanced fitness tracker with heart rate monitor and GPS.',
    images: ['/images/Fitness-Tracker- Watch.jpg'],
    category: 'Sports',
    subcategory: 'fitness',
    inStock: true,
    rating: 4.4,
    reviews: 118
  },
  {
    id: 'sp-003',
    name: 'Adjustable Dumbbells',
    price: 299.99,
    description: 'Space-saving adjustable dumbbells with quick weight selection.',
    images: ['/images/Adjustable-Dumbbells.jpg'],
    category: 'Sports',
    subcategory: 'fitness',
    inStock: true,
    rating: 4.7,
    reviews: 178
  },

  // Sports - Activewear
  {
    id: 'sp-004',
    name: 'Performance Running Shorts',
    price: 34.99,
    description: 'Moisture-wicking running shorts with built-in compression liner.',
    images: ['/images/Performance Running Shorts.jpg'],
    category: 'Sports',
    subcategory: 'activewear',
    inStock: true,
    rating: 4.6,
    reviews: 156
  },

  // Kids & Toys - Educational
  {
    id: 'kt-001',
    name: 'Educational Building Blocks',
    price: 34.99,
    description: 'STEM learning building blocks set for creative play and learning.',
    images: ['/images/Educational-Building-Blocks.jpg'],
    category: 'Kids & Toys',
    subcategory: 'educational-toys',
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: 'kt-003',
    name: 'Science Experiment Kit',
    price: 49.99,
    originalPrice: 64.99,
    description: 'Complete science kit with 50+ experiments for curious minds.',
    images: ['/images/Science-Experiment-Kit.jpg'],
    category: 'Kids & Toys',
    subcategory: 'educational-toys',
    inStock: true,
    rating: 4.9,
    reviews: 203
  },

  // Kids & Toys - Outdoor
  {
    id: 'kt-002',
    name: 'Remote Control Car',
    price: 59.99,
    originalPrice: 79.99,
    description: 'High-speed remote control car with LED lights and rechargeable battery.',
    images: ['/images/Remote-Control-Car.jpg'],
    category: 'Kids & Toys',
    subcategory: 'outdoor-toys',
    inStock: true,
    rating: 4.6,
    reviews: 87
  },
  {
    id: 'kt-004',
    name: 'Kids Trampoline',
    price: 199.99,
    description: 'Safe outdoor trampoline with safety net for kids aged 3-10.',
    images: ['/images/Kids-Trampoline.jpg'],
    category: 'Kids & Toys',
    subcategory: 'outdoor-toys',
    inStock: true,
    rating: 4.7,
    reviews: 134
  }
];

export const categories = [
  'Electronics',
  'Fashion', 
  'Home & Kitchen',
  'Beauty',
  'Sports',
  'Kids & Toys'
];

export const getProductById = (id: string): ExtendedProduct | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): ExtendedProduct[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): ExtendedProduct[] => {
  return products.filter(product => product.subcategory === subcategory);
};

export const getProductsByCategoryAndSubcategory = (category: string, subcategory: string): ExtendedProduct[] => {
  return products.filter(product => 
    product.category === category && product.subcategory === subcategory
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.originalPrice).slice(0, 8);
};