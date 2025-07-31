import React from 'react';
import Footer from '../components/Footer.jsx';
import CTASection from '../components/CTASection.jsx'
import ecommerceImage from '../assets/web1.png'; // You can replace this with a dedicated ecommerce image if available

const Ecommerce = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-[100vh] flex items-center justify-center mb-12" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Ecommerce Website Development
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            Powerful, scalable, and secure ecommerce solutions for your online business
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={ecommerceImage} 
              alt="Ecommerce web development illustration" 
              className="rounded-lg shadow-xl max-w-lg md:max-w-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Ecommerce Development Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              We build custom ecommerce platforms that drive sales, streamline operations, and deliver seamless shopping experiences. Our team leverages the latest technologies to create secure, scalable, and user-friendly online stores tailored to your business needs.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Our Ecommerce Services Include:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Custom ecommerce website & web app development
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Shopping cart & secure payment gateway integration
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Product catalog & inventory management
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Order processing & customer account features
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Mobile-optimized & responsive design
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Third-party integrations (shipping, CRM, analytics, etc.)
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Ongoing support, maintenance & performance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Us for Ecommerce Development?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-shopping-cart text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Conversion Focused</h3>
              <p className="text-gray-600">
                We design with your business goals in mind, optimizing every step of the customer journey to maximize sales and engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-lock text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Security is our top priority. We implement best practices to protect your store and customer data, ensuring safe transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-chart-line text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Our ecommerce platforms are built to grow with your business, supporting increased traffic, products, and features as you expand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-mobile-alt text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Mobile Ready</h3>
              <p className="text-gray-600">
                Deliver a seamless shopping experience on any device with responsive, mobile-first design.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-headset text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Our team is here to help you succeed, providing ongoing support, updates, and expert advice whenever you need it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-cogs text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Custom Integrations</h3>
              <p className="text-gray-600">
                We integrate your ecommerce site with the tools and services you rely on, from payment gateways to analytics and shipping providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />  
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ecommerce;