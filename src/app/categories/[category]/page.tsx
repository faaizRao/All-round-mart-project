import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '../../../data/categories';
import { getProductsByCategory } from '../../../data/products';
import CategoryDetailPage from '../../../components/CategoryDetailPage';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    return {
      title: 'Category Not Found - All Round Mart',
    };
  }

  return {
    title: `${category.name} - All Round Mart`,
    description: `Shop ${category.name.toLowerCase()} products at All Round Mart. ${category.description}`,
    openGraph: {
      title: `${category.name} - All Round Mart`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    notFound();
  }
  
  const products = getProductsByCategory(category.name);
  
  return <CategoryDetailPage category={category} products={products} />;
}