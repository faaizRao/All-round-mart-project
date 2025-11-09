import React from 'react';
import { Package, RefreshCw, Clock, CheckCircle } from 'lucide-react';

const ReturnsPage = () => {
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

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600">Email us at Info@allroundpunkt.com or call +49 706736259</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold mb-2">Get Return Label</h3>
            <p className="text-sm text-gray-600">We'll send you a prepaid return shipping label</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold mb-2">Ship Item</h3>
            <p className="text-sm text-gray-600">Package item securely and drop off at post office</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">4</span>
            </div>
            <h3 className="font-semibold mb-2">Get Refund</h3>
            <p className="text-sm text-gray-600">Receive refund within 5-7 business days</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Policy Details</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">30-Day Return Window</h3>
                  <p className="text-gray-600">You have 30 days from the delivery date to return any item.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Condition Requirements</h3>
                  <p className="text-gray-600">Items must be unused, in original packaging, and in resalable condition.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Package className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Original Packaging</h3>
                  <p className="text-gray-600">Please return items in their original packaging with all accessories and documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exchanges</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              Need a different size or color? We offer free exchanges for items of equal or lesser value.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Same return process applies</li>
              <li>• We'll ship the replacement item once we receive your return</li>
              <li>• Price differences will be refunded or charged accordingly</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Have questions about returns or need help with your order? We&apos;re here to help!
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> Info@allroundpunkt.com</p>
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

export default ReturnsPage;