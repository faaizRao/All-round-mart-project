import { notFound } from 'next/navigation';
import { getProductsByCategory, categories } from '../../../data/products';
import CategoryPage from '../../../components/CategoryPage';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    title: `${categoryName} - All Round Mart`,
    description: `Shop the best ${categoryName.toLowerCase()} products at All Round Mart. Quality items with fast delivery across Germany.`,
  };
}

export default async function Category({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Check if category exists
  const categoryExists = categories.some(cat => 
    cat.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  if (!categoryExists) {
    notFound();
  }
  
  const products = getProductsByCategory(categoryName);
  
  return <CategoryPage categoryName={categoryName} products={products} />;
}