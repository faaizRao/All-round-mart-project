export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentCategory: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest technology and electronic devices',
    image: '/images/category-electronics.svg',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        slug: 'smartphones',
        description: 'Latest smartphones and mobile devices',
        image: '/images/subcategory-smartphones.svg',
        parentCategory: 'electronics'
      },
      {
        id: 'laptops',
        name: 'Laptops & Computers',
        slug: 'laptops',
        description: 'Laptops, desktops, and computer accessories',
        image: '/images/subcategory-laptops.svg',
        parentCategory: 'electronics'
      },
      {
        id: 'audio',
        name: 'Audio & Headphones',
        slug: 'audio',
        description: 'Headphones, speakers, and audio equipment',
        image: '/images/subcategory-audio.svg',
        parentCategory: 'electronics'
      },
      {
        id: 'gaming',
        name: 'Gaming',
        slug: 'gaming',
        description: 'Gaming consoles, accessories, and games',
        image: '/images/subcategory-gaming.svg',
        parentCategory: 'electronics'
      }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trendy clothing and accessories for all',
    image: '/images/category-fashion.svg',
    subcategories: [
      {
        id: 'mens-clothing',
        name: "Men's Clothing",
        slug: 'mens-clothing',
        description: 'Stylish clothing for men',
        image: '/images/subcategory-mens.svg',
        parentCategory: 'fashion'
      },
      {
        id: 'womens-clothing',
        name: "Women's Clothing",
        slug: 'womens-clothing',
        description: 'Fashion-forward clothing for women',
        image: '/images/subcategory-womens.svg',
        parentCategory: 'fashion'
      },
      {
        id: 'shoes',
        name: 'Shoes & Footwear',
        slug: 'shoes',
        description: 'Comfortable and stylish footwear',
        image: '/images/subcategory-shoes.svg',
        parentCategory: 'fashion'
      },
      {
        id: 'accessories',
        name: 'Accessories',
        slug: 'accessories',
        description: 'Bags, jewelry, and fashion accessories',
        image: '/images/subcategory-accessories.svg',
        parentCategory: 'fashion'
      }
    ]
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    description: 'Everything for your home and kitchen needs',
    image: '/images/category-home.svg',
    subcategories: [
      {
        id: 'kitchen-appliances',
        name: 'Kitchen Appliances',
        slug: 'kitchen-appliances',
        description: 'Modern kitchen appliances and gadgets',
        image: '/images/subcategory-kitchen.svg',
        parentCategory: 'home-kitchen'
      },
      {
        id: 'cookware',
        name: 'Cookware & Bakeware',
        slug: 'cookware',
        description: 'Pots, pans, and baking essentials',
        image: '/images/subcategory-cookware.svg',
        parentCategory: 'home-kitchen'
      },
      {
        id: 'home-decor',
        name: 'Home Decor',
        slug: 'home-decor',
        description: 'Decorative items and home accessories',
        image: '/images/subcategory-decor.svg',
        parentCategory: 'home-kitchen'
      },
      {
        id: 'furniture',
        name: 'Furniture',
        slug: 'furniture',
        description: 'Quality furniture for every room',
        image: '/images/subcategory-furniture.svg',
        parentCategory: 'home-kitchen'
      }
    ]
  },
  {
    id: 'beauty',
    name: 'Beauty',
    slug: 'beauty',
    description: 'Beauty and personal care products',
    image: '/images/category-beauty.svg',
    subcategories: [
      {
        id: 'skincare',
        name: 'Skincare',
        slug: 'skincare',
        description: 'Premium skincare products and treatments',
        image: '/images/subcategory-skincare.svg',
        parentCategory: 'beauty'
      },
      {
        id: 'makeup',
        name: 'Makeup',
        slug: 'makeup',
        description: 'Cosmetics and makeup essentials',
        image: '/images/subcategory-makeup.svg',
        parentCategory: 'beauty'
      },
      {
        id: 'haircare',
        name: 'Hair Care',
        slug: 'haircare',
        description: 'Hair care products and styling tools',
        image: '/images/subcategory-haircare.svg',
        parentCategory: 'beauty'
      },
      {
        id: 'fragrance',
        name: 'Fragrance',
        slug: 'fragrance',
        description: 'Perfumes and body fragrances',
        image: '/images/subcategory-fragrance.svg',
        parentCategory: 'beauty'
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    slug: 'sports',
    description: 'Sports and fitness equipment',
    image: '/images/category-sports.svg',
    subcategories: [
      {
        id: 'fitness',
        name: 'Fitness Equipment',
        slug: 'fitness',
        description: 'Home gym and fitness equipment',
        image: '/images/subcategory-fitness.svg',
        parentCategory: 'sports'
      },
      {
        id: 'outdoor',
        name: 'Outdoor Sports',
        slug: 'outdoor',
        description: 'Outdoor activities and sports gear',
        image: '/images/subcategory-outdoor.svg',
        parentCategory: 'sports'
      },
      {
        id: 'activewear',
        name: 'Activewear',
        slug: 'activewear',
        description: 'Sports clothing and athletic wear',
        image: '/images/subcategory-activewear.svg',
        parentCategory: 'sports'
      },
      {
        id: 'team-sports',
        name: 'Team Sports',
        slug: 'team-sports',
        description: 'Equipment for team sports and games',
        image: '/images/subcategory-team-sports.svg',
        parentCategory: 'sports'
      }
    ]
  },
  {
    id: 'kids-toys',
    name: 'Kids & Toys',
    slug: 'kids-toys',
    description: 'Fun and educational toys for children',
    image: '/images/category-kids.svg',
    subcategories: [
      {
        id: 'educational-toys',
        name: 'Educational Toys',
        slug: 'educational-toys',
        description: 'Learning and development toys',
        image: '/images/subcategory-educational.svg',
        parentCategory: 'kids-toys'
      },
      {
        id: 'action-figures',
        name: 'Action Figures & Dolls',
        slug: 'action-figures',
        description: 'Action figures, dolls, and collectibles',
        image: '/images/subcategory-figures.svg',
        parentCategory: 'kids-toys'
      },
      {
        id: 'outdoor-toys',
        name: 'Outdoor Toys',
        slug: 'outdoor-toys',
        description: 'Outdoor play equipment and toys',
        image: '/images/subcategory-outdoor-toys.svg',
        parentCategory: 'kids-toys'
      },
      {
        id: 'baby-toddler',
        name: 'Baby & Toddler',
        slug: 'baby-toddler',
        description: 'Toys and products for babies and toddlers',
        image: '/images/subcategory-baby.svg',
        parentCategory: 'kids-toys'
      }
    ]
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string): Subcategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(sub => sub.slug === subcategorySlug);
};

export const getAllSubcategories = (): Subcategory[] => {
  return categories.flatMap(category => category.subcategories);
};