import Image from "next/image";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ShopZone</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Shop
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Categories
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              <button className="relative text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0H9m8 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Discover Amazing Products
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest trends with unbeatable prices and fast delivery
              </p>
              <div className="cta-buttons flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-square bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Carousel */}
      <section className="promotional-carousel py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            items={[
              {
                id: "summer-sale",
                content: (
                  <div className="promo-slide bg-gradient-to-r from-orange-500 to-red-500 text-white p-12 text-center">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                        🌞 Summer Sale Spectacular!
                      </h3>
                      <p className="text-xl lg:text-2xl mb-8 text-orange-100">
                        Up to 60% off on summer essentials. Limited time only!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors">
                          Shop Summer Collection
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors">
                          View All Deals
                        </button>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "free-shipping",
                content: (
                  <div className="promo-slide bg-gradient-to-r from-green-500 to-emerald-500 text-white p-12 text-center">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                        🚚 Free Shipping Weekend
                      </h3>
                      <p className="text-xl lg:text-2xl mb-8 text-green-100">
                        Free shipping on all orders. No minimum purchase required!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
                          Start Shopping
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "new-arrivals",
                content: (
                  <div className="promo-slide bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-12 text-center">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                        ✨ New Arrivals Daily
                      </h3>
                      <p className="text-xl lg:text-2xl mb-8 text-purple-100">
                        Discover the latest trends and must-have items every day
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors">
                          See What's New
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                          Subscribe for Updates
                        </button>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "loyalty-program",
                content: (
                  <div className="promo-slide bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-12 text-center">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                        💎 VIP Loyalty Program
                      </h3>
                      <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                        Earn points, get exclusive discounts, and enjoy premium benefits
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                          Join VIP Program
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                          Learn About Benefits
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            loop={true}
            className="h-80 lg:h-96"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Shop by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="category-card text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 group-hover:bg-gray-200 transition-colors">
                <span className="text-4xl">👕</span>
              </div>
              <h4 className="font-semibold text-gray-900">Clothing</h4>
            </div>
            <div className="category-card text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 group-hover:bg-gray-200 transition-colors">
                <span className="text-4xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900">Electronics</h4>
            </div>
            <div className="category-card text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 group-hover:bg-gray-200 transition-colors">
                <span className="text-4xl">🏠</span>
              </div>
              <h4 className="font-semibold text-gray-900">Home & Garden</h4>
            </div>
            <div className="category-card text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-2xl p-8 mb-4 group-hover:bg-gray-200 transition-colors">
                <span className="text-4xl">⚽</span>
              </div>
              <h4 className="font-semibold text-gray-900">Sports</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h3>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="product-card bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="product-image aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-center justify-center">
                  <span className="text-6xl">👕</span>
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-info p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Premium Cotton T-Shirt
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Comfortable and stylish everyday wear
                </p>
                <div className="product-price-actions flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    $29.99
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="product-card bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="product-image aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-info p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wireless Headphones
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  High-quality sound with noise cancellation
                </p>
                <div className="product-price-actions flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    $199.99
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="product-card bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="product-image aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-center justify-center">
                  <span className="text-6xl">⌚</span>
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-info p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Smart Watch
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Track your fitness and stay connected
                </p>
                <div className="product-price-actions flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    $299.99
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="product-card bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="product-image aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 flex items-center justify-center">
                  <span className="text-6xl">👟</span>
                </div>
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-info p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Running Shoes
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Lightweight and comfortable for all terrains
                </p>
                <div className="product-price-actions flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    $129.99
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Limited Time Offer!</h3>
            <p className="text-xl mb-6">
              Get 30% off on all electronics. Use code TECH30
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Electronics Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white p-6 rounded-xl shadow-sm">
              <div className="rating flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Amazing quality products and fast shipping. Highly
                recommended!"
              </p>
              <div className="customer-info flex items-center">
                <div className="avatar w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-white p-6 rounded-xl shadow-sm">
              <div className="rating flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Great customer service and excellent product variety."
              </p>
              <div className="customer-info flex items-center">
                <div className="avatar w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600">SA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Adams</h4>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-white p-6 rounded-xl shadow-sm">
              <div className="rating flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Best online shopping experience I've had. Will definitely shop
                again!"
              </p>
              <div className="customer-info flex items-center">
                <div className="avatar w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Johnson</h4>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </section>

      {/* FAQ Section */}
      <section className="faq-section py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </div>
          <Accordion
            items={[
              {
                id: "shipping",
                title: "What are your shipping options and delivery times?",
                content: "We offer standard shipping (5-7 business days) for $5.99, express shipping (2-3 business days) for $12.99, and overnight shipping for $19.99. Free standard shipping is available on orders over $75. International shipping is available to most countries with delivery times varying by location."
              },
              {
                id: "returns",
                title: "What is your return policy?",
                content: "We accept returns within 30 days of purchase for most items in their original condition. Items must be unworn, unused, and in original packaging. Electronics and personalized items may have different return policies. Return shipping is free for defective items, otherwise customers are responsible for return shipping costs."
              },
              {
                id: "sizing",
                title: "How do I find the right size for clothing items?",
                content: "Each product page includes a detailed size chart specific to that item. We recommend measuring yourself and comparing to our size charts for the best fit. If you're between sizes, we generally recommend sizing up. Our customer service team is also available to help with sizing questions."
              },
              {
                id: "payment",
                title: "What payment methods do you accept?",
                content: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options through Klarna and Afterpay. All transactions are processed securely using industry-standard encryption."
              },
              {
                id: "warranty",
                title: "Do your products come with a warranty?",
                content: "Yes, most of our products come with manufacturer warranties. Electronics typically include 1-2 year warranties, while clothing and accessories have quality guarantees. Warranty terms vary by product and manufacturer. Extended warranty options are available for many electronics at checkout."
              },
              {
                id: "account",
                title: "Do I need to create an account to make a purchase?",
                content: "While you can checkout as a guest, creating an account offers many benefits including order tracking, faster checkout, saved addresses, wishlist functionality, and exclusive member offers. Account creation is free and takes just a few minutes."
              }
            ]}
            allowMultiple={false}
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive deals and new arrivals
            </p>
            <div className="newsletter-form max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="footer-brand">
              <h4 className="text-2xl font-bold mb-4">ShopZone</h4>
              <p className="text-gray-400 mb-4">
                Your one-stop destination for quality products at unbeatable
                prices.
              </p>
              <div className="social-links flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home & Garden
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sports
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@shopzone.com</li>
                <li>📞 1-800-SHOPZONE</li>
                <li>📍 123 Commerce St, City, State 12345</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
