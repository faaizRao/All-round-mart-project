import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're here to help! Get in touch with us for any questions, concerns, or support needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">Info@allroundpunkt.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">+49 706736259</p>
                <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  Grüngürtelstr. 118<br />
                  50996, Köln<br />
                  Germany
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                <div className="text-gray-600 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                aria-label='text'
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
              aria-label = "mae"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
              aria-label='email'
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
              aria-label='tel'
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
              aria-label='req'
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Question</option>
                <option value="shipping">Shipping & Delivery</option>
                <option value="return">Returns & Exchanges</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe your inquiry in detail..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h3>
            <p className="text-gray-600 text-sm">
              We offer fast delivery across Germany. Most orders are delivered within 2-3 business days.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600 text-sm">
              We accept all major credit cards, debit cards, and digital payments through our secure Stripe integration.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Can I return or exchange items?</h3>
            <p className="text-gray-600 text-sm">
              Yes, we offer a 30-day return policy for most items. Please contact us for return instructions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
            <p className="text-gray-600 text-sm">
              Currently, we only ship within Germany. We&apos;re working on expanding to other European countries soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;