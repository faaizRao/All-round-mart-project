import { Metadata } from 'next';
import SuccessPage from '../../components/SuccessPage';

export const metadata: Metadata = {
  title: 'Order Successful - All Round Mart',
  description: 'Thank you for your order! Your payment has been processed successfully.',
};

export default function Success() {
  return <SuccessPage />;
}