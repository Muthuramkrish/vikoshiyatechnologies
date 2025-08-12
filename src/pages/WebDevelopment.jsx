import React from 'react';
import Footer from '../components/Footer.jsx';
import webImage from '../assets/web.png';
import CTASection from '../components/CTASection.jsx'

const WebDevelopment = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-[100vh] flex items-center justify-center mb-12" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            Custom solutions built for your business needs
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={webImage} 
              alt="Team developing modern web applications" 
              className="rounded-lg shadow-xl max-w-lg md:max-w-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Web Development Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              We create responsive, high-performance websites and web applications using the latest technologies including React, Node.js, and more.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Our Web Development Services Include:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Custom website and web application development
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  E-commerce platforms and payment integration
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Enterprise portal and dashboard solutions
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  API development, integration, and microservices
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Content management systems (CMS) & headless CMS
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  UI/UX design and accessibility optimization
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
            Why Choose Our Professional Web Development Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-bolt text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Modern & Scalable</h3>
              <p className="text-gray-600">
                Utilize the latest frameworks and cloud technologies to ensure your web solutions are fast, secure, and ready to grow with your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-mobile-alt text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Mobile Responsive</h3>
              <p className="text-gray-600">
                Deliver a seamless experience across all devices, ensuring your website looks and performs perfectly for every user, everywhere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-handshake text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Business Growth</h3>
              <p className="text-gray-600">
                Drive engagement, conversions, and revenue with user-centric, business-focused design and development strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-code text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Clean Code Architecture</h3>
              <p className="text-gray-600">
                Well-structured, maintainable codebase with modern development practices, proper documentation, and scalable architecture that ensures long-term project success and easy future enhancements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-lock text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Security First</h3>
              <p className="text-gray-600">
                Safeguard your business and users with robust security practices, regular updates, and proactive threat monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-life-ring text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Enjoy peace of mind with continuous maintenance, updates, and expert technical support from our dedicated team.
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

export default WebDevelopment; 