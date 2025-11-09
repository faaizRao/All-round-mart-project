import { Metadata } from 'next';
import CategoriesOverview from '../../components/CategoriesOverview';

export const metadata: Metadata = {
  title: 'All Categories - All Round Mart',
  description: 'Browse all product categories at All Round Mart. Find electronics, fashion, home & kitchen, beauty, sports, and kids toys.',
};

export default function CategoriesPage() {
  return <CategoriesOverview />;
}