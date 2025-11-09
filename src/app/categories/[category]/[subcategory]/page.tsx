import { notFound } from 'next/navigation';
import { getCategoryBySlug, getSubcategoryBySlug } from '../../../../data/categories';
import { getProductsByCategoryAndSubcategory } from '../../../../data/products';
import SubcategoryPage from '../../../../components/SubcategoryPage';
import { Metadata } from 'next';

interface SubcategoryPageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
  
  if (!category || !subcategory) {
    return {
      title: 'Page Not Found - All Round Mart',
    };
  }

  return {
    title: `${subcategory.name} - ${category.name} - All Round Mart`,
    description: `Shop ${subcategory.name.toLowerCase()} in ${category.name.toLowerCase()} at All Round Mart. ${subcategory.description}`,
    openGraph: {
      title: `${subcategory.name} - ${category.name}`,
      description: subcategory.description,
    },
  };
}

export default async function SubcategoryPageComponent({ params }: SubcategoryPageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
  
  if (!category || !subcategory) {
    notFound();
  }
  
  const products = getProductsByCategoryAndSubcategory(category.name, subcategory.slug);
  
  return <SubcategoryPage category={category} subcategory={subcategory} products={products} />;
}