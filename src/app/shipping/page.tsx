import { Metadata } from 'next';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping Information - All Round Mart',
  description: 'Learn about our shipping options, delivery times, and shipping costs across Germany.',
};

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
        <p className="text-xl text-gray-600">
          Fast and reliable delivery across Germany
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Truck className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Free Shipping</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Enjoy free standard shipping on all orders across Germany.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• No minimum order required</li>
            <li>• Standard delivery: 2-3 business days</li>
            <li>• Express delivery available</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Fast Processing</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Orders are processed and shipped within 24 hours on business days.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>• Same-day processing for orders before 2 PM</li>
            <li>• Real-time tracking information</li>
            <li>• Email notifications at each step</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-4">
          Questions about shipping or need to track your order? Contact us!
        </p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> Info@allroundpunkt.com</p>
          <p><strong>Phone:</strong> +49 706736259</p>
          <p><strong>Address:</strong> Grüngürtelstr. 118, 50996, Köln, Germany</p>
          <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
}