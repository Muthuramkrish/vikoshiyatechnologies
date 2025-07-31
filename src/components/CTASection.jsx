import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          We're proud of where we've come from, and even more excited about where we're going. Let's build something meaningful — together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-blue-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            Get in Touch
          </Link>
          <Link
            to="/#services"
            className="bg-transparent hover:bg-blue-600 text-white border-2 border-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
