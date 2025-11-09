import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to All Round Mart
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your One-Stop Shopping Destination in Germany
          </p>
          <p className="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
            Discover amazing deals on electronics, fashion, home & kitchen, beauty, sports, and kids toys. 
            Quality products with fast delivery across Germany.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/categories/electronics"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Shop Electronics
            </Link>
            <Link
              href="/categories/fashion"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Fashion
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Wide Selection</h3>
              <p className="text-blue-100 text-sm">Thousands of products across multiple categories</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-blue-100 text-sm">Quick shipping across Germany</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-blue-100 text-sm">Safe and secure checkout with Stripe</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Headphones className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;