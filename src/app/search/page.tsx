import { Suspense } from 'react';
import SearchResults from '../../components/SearchResults';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results - All Round Mart',
  description: 'Search results for products at All Round Mart.',
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}