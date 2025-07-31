import React from 'react'

const SitemapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-blue-700 transition-colors z-10"
        >
          ×
        </button>
        
        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p className="text-gray-600 mb-6">
            Find us at our office location. We're always happy to welcome visitors and discuss your project requirements.
          </p>
          
          {/* Google Maps iframe */}
          <div className="relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3934.673996545211!2d77.94844614298984!3d9.537025820039736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753178988985!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          
          {/* Address Information */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
            <p className="text-gray-600">
              123 Main Street, Suite 400<br />
              Cityville, Country<br />
              <strong>Phone:</strong> +1 (234) 567-890<br />
              <strong>Email:</strong> info@vikoshiya.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SitemapModal 