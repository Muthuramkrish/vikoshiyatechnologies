import { useState, useEffect } from 'react'
import Footer from '../components/Footer.jsx'

// API base URL based on environment
const API_BASE_URL = import.meta.env.VITE_API_URL || (
  import.meta.env.PROD 
    ? 'https://vikoshiya-technologies.vercel.app/api'
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
            {/* Contact Info */}
            <div className="flex-1 flex flex-col justify-center text-lg md:text-xl gap-5">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Office</h3>
              <div className="flex items-center gap-3 text-sm md:text-base">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                </svg>
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
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                  <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 7.58 7.58l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z"/>
                </svg>
                <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                  <path d="M4 4h16v16H4z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                <a href="mailto:info@vikoshiyatechnologies.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  info@vikoshiyatechnologies.com
                </a>
              </div>
              <div className="flex gap-5 mt-4">
                <a href="https://facebook.com/yourcompany" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/yourcompany" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/" target="_blank" className="text-blue-600 hover:text-blue-800 text-2xl transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://whatsapp.com/channel/0029Vb6Oqf3ISTkIJqCVf03t" target="_blank" className="text-blue-600 hover:text-blue-700" aria-label="Whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 flex justify-center">
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