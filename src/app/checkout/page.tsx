import { Metadata } from 'next';
import CheckoutPage from '../../components/CheckoutPage';

export const metadata: Metadata = {
  title: 'Checkout - All Round Mart',
  description: 'Complete your purchase securely at All Round Mart.',
};

export default function Checkout() {
  return <CheckoutPage />;
}