import { Metadata } from 'next';
import { Package, RefreshCw, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns & Exchanges - All Round Mart',
  description: 'Learn about our return policy, exchange process, and how to return items for refund or exchange.',
};

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
        <p className="text-xl text-gray-600">
          We want you to be completely satisfied with your purchase
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <RefreshCw className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Easy Returns</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Return any item within 30 days of purchase for a full refund or exchange.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Items must be in original condition</li>
            <li>• Original packaging required</li>
            <li>• Receipt or order number needed</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Package className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Free Return Shipping</h2>
          </div>
          <p className="text-gray-600 mb-4">
            We provide prepaid return labels for all returns within Germany.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• No return shipping costs</li>
            <li>• Print label from your account</li>
            <li>• Drop off at any post office</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-4">
          Have questions about returns or need help with your order? We're here to help!
        </p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> seemarehman942@gmail.com</p>
          <p><strong>Phone:</strong> +49 706736259</p>
          <p><strong>Address:</strong> Grüngürtelstr. 118, 50996, Köln, Germany</p>
          <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}