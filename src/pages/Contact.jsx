import { useState, useEffect } from 'react'
import Footer from '../components/Footer.jsx'

// API base URL based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.PROD 
    ? 'https://vikoshiyatechnologies.com/api'
    : 'http://localhost:5000/api'
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Reset form after 3 seconds when thank you message is shown
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false)
        setFormData({ name: '', email: '', message: '' })
        setError('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showThankYou])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      let data = null
      try {
        data = await res.json()
      } catch (jsonErr) {
        // Not JSON
        data = null
      }
      if (res.ok) {
        setShowThankYou(true)
      } else {
        // Log error for debugging
        console.error('Backend error:', data)
        setError((data && data.error) || 'Failed to send message. Please try again later.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      {/* Contact Content */}
      <div className="min-h-screen bg-gray-50  py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info - Second on mobile, First on desktop */}
            <div className="flex-1 flex flex-col justify-center text-lg md:text-xl gap-5 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Office</h3>
              <div className="flex items-center gap-3 text-sm md:text-base">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
                4/786, Veeraperumal kovil street, Soolakkarai, Virudhunagar - 626 003
              </div>
              <iframe 
                className="w-full h-48 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3934.673996545211!2d77.94844614298984!3d9.537025820039736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753178988985!5m2!1sen!2sin" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-600"></i>
                <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600 transition-colors">
                  +91 95857 54821
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-600"></i>
                <a href="mailto:info@vikoshiyatechnologies.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  info@vikoshiyatechnologies.com
                </a>
              </div>
              <div className="flex gap-5 mt-4">
                <a href="https://facebook.com/yourcompany" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                  <i className="fab fa-square-facebook"></i>
                </a>
                <a href="https://twitter.com/yourcompany" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://whatsapp.com/channel/0029Vb6Oqf3ISTkIJqCVf03t" target="_blank" className="text-blue-600 hover:text-blue-700 text-2xl" aria-label="Whatsapp">
                  <i className="fab fa-square-whatsapp"></i>
                </a>
                <a href="https://instagram.com" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors" aria-label="Instagram">
                  <i className="fab fa-square-instagram"></i>
                </a>
              </div>
            </div>

            {/* Contact Form - First on mobile, Second on desktop */}
            <div className="flex-1 flex justify-center order-1 md:order-2">
              <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-20 text-lg md:text-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                {!showThankYou ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg md:text-xl"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg md:text-xl"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-lg md:text-xl min-h-[120px] resize-vertical"
                    />
                    {error && <div className="text-red-600 text-base font-medium text-center">{error}</div>}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg hover:from-blue-800 hover:to-blue-950 transition-all disabled:opacity-60"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                ) : (
                  <div className="text-green-600 font-semibold text-xl text-center py-8">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Contact 