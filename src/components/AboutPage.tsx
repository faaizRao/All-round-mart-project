import React from 'react';
import { Store, Users, Award, TrendingUp, Heart, Shield, Truck, Mail, Phone, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About All Round Mart
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted one-stop shopping destination in Germany since 2023. 
          We bring quality products and exceptional service to customers across the nation.
        </p>
      </div>

      {/* Company Story */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-8 md:p-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-blue-100 mb-4">
            Founded in 2023 by Seema Rehman, All Round Mart was born from a vision to create 
            a comprehensive online shopping platform that serves the diverse needs of German customers. 
            Based in the heart of Köln, we've grown from a small startup to a trusted name in 
            online retail across Germany.
          </p>
          <p className="text-lg text-blue-100 mb-4">
            Our mission is simple: provide high-quality products across multiple categories, 
            from cutting-edge electronics to fashionable clothing, home essentials to beauty products, 
            all while maintaining competitive prices and exceptional customer service.
          </p>
          <p className="text-lg text-blue-100">
            Today, we proudly serve thousands of satisfied customers throughout Germany, 
            offering fast delivery, secure payments, and a shopping experience that puts 
            our customers first.
          </p>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Store className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">2023</div>
          <p className="text-gray-600">Established</p>
        </div>
        
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        
        <div className="text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">1,000+</div>
          <p className="text-gray-600">Products</p>
        </div>
        
        <div className="text-center">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-orange-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
          <p className="text-gray-600">Satisfaction Rate</p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Customer First</h3>
            </div>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We strive to exceed 
              expectations with every order, every interaction, and every delivery.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Quality Assurance</h3>
            </div>
            <p className="text-gray-600">
              We carefully select every product in our catalog, ensuring that only 
              high-quality items reach our customers. Your satisfaction is our guarantee.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Fast & Reliable</h3>
            </div>
            <p className="text-gray-600">
              We understand the importance of timely delivery. Our efficient logistics 
              ensure your orders reach you quickly and safely across Germany.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Categories</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Electronics:</strong> Latest smartphones, laptops, audio devices, and gaming consoles</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Fashion:</strong> Trendy clothing, shoes, and accessories for men and women</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Home & Kitchen:</strong> Modern appliances, cookware, and home decor</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Beauty:</strong> Premium skincare, makeup, and personal care products</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Sports:</strong> Fitness equipment, activewear, and outdoor gear</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Kids & Toys:</strong> Educational toys, games, and children's products</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Free Shipping:</strong> On all orders across Germany</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Secure Payments:</strong> Stripe-powered secure checkout</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Fast Delivery:</strong> 2-3 business days standard delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Easy Returns:</strong> 30-day hassle-free return policy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Quality Products:</strong> Carefully curated selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Customer Support:</strong> Dedicated support team ready to help</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitment to You</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600 mb-4">
                Every product we sell meets our strict quality standards. We work directly with 
                trusted manufacturers and suppliers to ensure authenticity and quality.
              </p>
              <p className="text-gray-600">
                If you're not completely satisfied with your purchase, our 30-day return policy 
                ensures you can shop with confidence.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Privacy</h3>
              <p className="text-gray-600 mb-4">
                Your privacy and security are paramount. We use industry-standard encryption 
                and secure payment processing to protect your personal information.
              </p>
              <p className="text-gray-600">
                We never share your data with third parties and comply with all German and 
                European data protection regulations (GDPR).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Founder</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">SR</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Seema Rehman</h3>
            <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
            <p className="text-gray-600 mb-6">
              With a passion for entrepreneurship and a vision to revolutionize online shopping 
              in Germany, Seema Rehman founded All Round Mart in 2023. Her commitment to customer 
              satisfaction and quality products has been the driving force behind our success.
            </p>
            <p className="text-gray-600">
              "Our goal is to make online shopping accessible, affordable, and enjoyable for 
              everyone in Germany. We're not just selling products; we're building relationships 
              with our customers." - Seema Rehman
            </p>
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">All Round Mart</p>
                  <p className="text-gray-600">Grüngürtelstr. 118</p>
                  <p className="text-gray-600">50996 Köln</p>
                  <p className="text-gray-600">Germany</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:Info@allroundpunkt.com" className="text-blue-600 hover:text-blue-700">
                    Info@allroundpunkt.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+4970673625" className="text-blue-600 hover:text-blue-700">
                    +49 706736259
                  </a>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Customer Support:</strong><br />
                  We typically respond within 24 hours<br />
                  Available Monday - Friday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Shop With Us */}
      <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Shop With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6">
            <div className="text-blue-600 mb-3">
              <Shield className="h-10 w-10" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure Shopping</h4>
            <p className="text-gray-600 text-sm">
              SSL encryption and secure payment processing through Stripe ensure your 
              transactions are always protected.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="text-green-600 mb-3">
              <Truck className="h-10 w-10" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-gray-600 text-sm">
              Free standard shipping on all orders with delivery within 2-3 business days 
              across Germany.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="text-purple-600 mb-3">
              <Award className="h-10 w-10" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quality Products</h4>
            <p className="text-gray-600 text-sm">
              Every product is carefully selected and verified to meet our high standards 
              of quality and authenticity.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="text-orange-600 mb-3">
              <Users className="h-10 w-10" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">
              Our knowledgeable customer support team is always ready to assist you with 
              any questions or concerns.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="text-red-600 mb-3">
              <Heart className="h-10 w-10" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Easy Returns</h4>
            <p className="text-gray-600 text-sm">
              Not satisfied? Our 30-day return policy makes it easy to return or exchange 
              any item, no questions asked.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <div className="text-indigo-600 mb-3">
              <Store className="h-10 w-10" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Wide Selection</h4>
            <p className="text-gray-600 text-sm">
              From electronics to fashion, home goods to toys, find everything you need 
              in one convenient place.
            </p>
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
          <p className="text-lg text-blue-100 mb-6">
            At All Round Mart, we promise to provide you with an exceptional shopping experience 
            from start to finish. We're committed to offering competitive prices, authentic products, 
            fast delivery, and outstanding customer service.
          </p>
          <p className="text-lg text-blue-100">
            Your satisfaction is our success, and we work tirelessly to ensure every customer 
            has a positive experience with All Round Mart.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
        <p className="text-lg text-gray-600 mb-8">
          We'd love to hear from you! Get in touch with our team for any inquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
          >
            Contact Us
          </a>
          <a
            href="mailto:Info@allroundpunkt.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-block"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;