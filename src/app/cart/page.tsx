import { Metadata } from 'next';
import CartPage from '../../components/CartPage';

export const metadata: Metadata = {
  title: 'Shopping Cart - All Round Mart',
  description: 'Review your items and proceed to checkout at All Round Mart.',
};

export default function Cart() {
  return <CartPage />;
}