import { Metadata } from 'next';
import ContactPage from '../../components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us - All Round Mart',
  description: 'Get in touch with All Round Mart. We are here to help with any questions or concerns.',
};

export default function Contact() {
  return <ContactPage />;
}