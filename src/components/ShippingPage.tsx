import React from 'react';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const ShippingPage = () => {
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

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Options</h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Standard Shipping (Free)</h3>
              <p className="text-gray-600 mb-2">Delivery within 2-3 business days</p>
              <p className="text-sm text-gray-500">Available throughout Germany via DHL</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-green-600">FREE</span>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Truck className="h-6 w-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Express Shipping</h3>
              <p className="text-gray-600 mb-2">Next business day delivery</p>
              <p className="text-sm text-gray-500">Order before 2 PM for next-day delivery</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">€9.99</span>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600 mb-2">Available in Köln and surrounding areas</p>
              <p className="text-sm text-gray-500">Order before 12 PM for same-day delivery</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">€14.99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Areas</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Standard Delivery</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• All of Germany</li>
                  <li>• Major cities and rural areas</li>
                  <li>• PO Box delivery available</li>
                  <li>• Apartment and office delivery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Same-Day Delivery</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Köln city center</li>
                  <li>• Surrounding municipalities</li>
                  <li>• Within 25km radius</li>
                  <li>• Business and residential addresses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Tracking</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Track your order every step of the way with our comprehensive tracking system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-sm">Order Confirmed</h4>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-sm">Processing</h4>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-sm">Shipped</h4>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-green-600">4</span>
                </div>
                <h4 className="font-semibold text-sm">Delivered</h4>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Partners</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              We work with trusted shipping partners to ensure reliable delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900">DHL</h4>
                <p className="text-sm text-gray-600">Standard & Express delivery</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900">Deutsche Post</h4>
                <p className="text-sm text-gray-600">Standard delivery</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-900">Local Courier</h4>
                <p className="text-sm text-gray-600">Same-day delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Questions about shipping or need to track your order? Contact us!
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> seemarehman942@gmail.com</p>
              <p><strong>Phone:</strong> +49 706736259</p>
              <p><strong>Address:</strong> Grüngürtelstr. 118, 50996, Köln, Germany</p>
              <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;