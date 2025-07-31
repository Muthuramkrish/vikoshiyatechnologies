import React from 'react';
import Footer from '../components/Footer.jsx';
import qaImage from '../assets/qa.png';
import CTASection from '../components/CTASection.jsx'

const QualityAssurance = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative w-full h-[100vh] flex items-center justify-center mb-12" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Quality Assurance Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            Ensuring your applications meet the highest quality standards
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={qaImage} 
              alt="QA specialists testing applications" 
              className="rounded-lg shadow-xl max-w-lg md:max-w-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Comprehensive Testing Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Our QA experts implement rigorous testing methodologies to identify and resolve issues before they impact your users.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Our QA Services Include:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  End-to-end functional and regression testing
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Automated test strategy and implementation
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Performance, load, and scalability testing
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Security and compliance validation
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  User experience (UX) and accessibility audits
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  API and integration testing
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
                  Continuous quality consulting & reporting
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
            Benefits of Our QA Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-shield-alt text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Risk Reduction</h3>
              <p className="text-gray-600">
                Proactively identify and resolve issues before they reach your users, minimizing the risk of costly failures and reputational damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-users text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">User Satisfaction</h3>
              <p className="text-gray-600">
                Deliver seamless, reliable digital experiences that build trust, loyalty, and positive brand perception among your customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-rocket text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Faster Time-to-Market</h3>
              <p className="text-gray-600">
                Accelerate your product launches and updates with streamlined QA processes and efficient defect management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-piggy-bank text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">
                Lower your total cost of ownership by reducing rework, post-release fixes, and support needs through early defect detection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-balance-scale text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meet industry standards and legal requirements with thorough validation, documentation, and audit-ready QA processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
              <i className="fas fa-sync-alt text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-xl mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">
                Benefit from ongoing quality monitoring, analytics, and process optimization to drive lasting business value and innovation.
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

export default QualityAssurance; 