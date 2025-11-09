import { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About Us - All Round Mart',
  description: 'Learn about All Round Mart, your trusted online shopping destination in Germany since 2023. Quality products, fast delivery, and excellent customer service.',
};

export default function About() {
  return <AboutPage />;
}