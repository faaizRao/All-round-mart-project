# 🛍️ All Round Mart - Complete eCommerce Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?style=flat-square&logo=stripe)](https://stripe.com/)

A complete, production-ready Next.js 14 eCommerce website for **All Round Mart**, owned by Seema Rehman and registered in Germany.

## 🏢 Business Information

- **Company**: All Round Mart
- **Owner**: Seema Rehman
- **Location**: Grüngürtelstr. 118, 50996, Köln, Germany
- **Email**: seemarehman942@gmail.com
- **Phone**: +49 706736259

## ✨ Features

### 🎯 **Complete eCommerce Solution**
- **25+ Products** across 6 main categories and 24 subcategories
- **Hierarchical Navigation** with nested category structure
- **Shopping Cart** with persistent storage and real-time updates
- **Stripe Payment Integration** for secure transactions
- **Email Notifications** for order confirmations
- **Search Functionality** across all products
- **Responsive Design** for all devices

### 🛒 **Product Categories**
1. **Electronics** → Smartphones, Laptops, Audio, Gaming
2. **Fashion** → Men's Clothing, Women's Clothing, Shoes, Accessories
3. **Home & Kitchen** → Kitchen Appliances, Cookware, Home Decor, Furniture
4. **Beauty** → Skincare, Makeup, Hair Care, Fragrance
5. **Sports** → Fitness Equipment, Outdoor Sports, Activewear, Team Sports
6. **Kids & Toys** → Educational Toys, Action Figures, Outdoor Toys, Baby & Toddler

### 🎨 **Design & UX**
- **Modern UI/UX** with gradient headers and clean layouts
- **Dark Mode Support** with automatic system detection
- **Mobile-First Design** optimized for all screen sizes
- **SEO Optimized** with meta tags and Open Graph support
- **Accessibility Compliant** with proper contrast and navigation

### 💳 **Payment & Orders**
- **Stripe Integration** (test mode ready)
- **Secure Checkout** with customer information collection
- **Order Confirmation Emails** with detailed HTML templates
- **Tax Calculation** (19% German VAT included)
- **Free Shipping** across Germany

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Stripe account (for payments)
- Gmail account (for email notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/all-round-mart.git
   cd all-round-mart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env.local` file:
   ```env
   # Stripe Keys (Test Mode)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_SECRET_KEY=sk_test_your_key_here

   # Email Configuration
   EMAIL_USER=seemarehman942@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
all-round-mart/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── categories/         # Nested category pages
│   │   ├── product/           # Dynamic product pages
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Stripe checkout
│   │   └── api/               # Payment API routes
│   ├── components/            # Reusable UI components
│   ├── context/              # Cart state management
│   ├── data/                 # Product & category data
│   └── types/                # TypeScript definitions
├── public/images/            # Product images (35+ images)
└── docs/                    # Documentation files
```

## 🌐 Live Demo

### Available Pages
- **Home** (`/`) - Hero section, categories, featured products
- **Categories** (`/categories`) - All categories overview
- **Category Pages** (`/categories/electronics`) - Products by category
- **Subcategories** (`/categories/electronics/smartphones`) - Filtered products
- **Product Details** (`/product/el-001`) - Individual product pages
- **Shopping Cart** (`/cart`) - Cart management
- **Checkout** (`/checkout`) - Stripe payment integration
- **Search** (`/search`) - Product search results
- **Contact** (`/contact`) - Business information
- **Shipping** (`/shipping`) - Shipping information
- **Returns** (`/returns`) - Return policy

## 🛠️ Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding Products
1. Edit `src/data/products.ts`
2. Add product images to `public/images/`
3. Follow existing product structure
4. Build and test

### Customization
- **Styling**: Tailwind CSS classes in components
- **Colors**: Update theme in `tailwind.config.js`
- **Business Info**: Update in Footer and Contact components
- **Categories**: Modify `src/data/categories.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security & Performance

### Security Features
- Environment variables for sensitive data
- Stripe secure payment processing
- Input validation and sanitization
- HTTPS enforcement in production

### Performance Optimizations
- Next.js Image optimization
- Static page generation
- Code splitting and lazy loading
- Optimized fonts and assets

## 📱 Mobile & Accessibility

### Responsive Design
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1280px+)

### Accessibility
- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🌙 Dark Mode

Automatic dark mode support with:
- System preference detection
- Smooth color transitions
- Proper text contrast
- Consistent branding

## 📊 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Email**: Nodemailer with Gmail SMTP
- **State Management**: React Context
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📞 Support & Contact

- **Email**: seemarehman942@gmail.com
- **Phone**: +49 706736259
- **Address**: Grüngürtelstr. 118, 50996, Köln, Germany
- **Business Hours**: Monday - Friday, 9:00 AM - 6:00 PM

## 📄 License

This project is proprietary software owned by Seema Rehman / All Round Mart.

## 🎯 Status

✅ **Production Ready**  
✅ **Fully Responsive**  
✅ **SEO Optimized**  
✅ **Payment Integration**  
✅ **Email Notifications**  
✅ **Dark Mode Support**  

---

**Built with ❤️ for All Round Mart - Your One-Stop Shopping Destination in Germany 🇩🇪**