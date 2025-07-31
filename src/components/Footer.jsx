import { useState } from 'react'
import { Link } from 'react-router-dom'
import v1Logo from '../assets/v1.png'
import SitemapModal from './SitemapModal.jsx'

const Footer = () => {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <img src={v1Logo} alt="Vikoshiya Technologies logo" className="h-12 bg-gray-50 w-auto mb-4" />
              <p className="text-gray-400 text-sm">
                Vikoshiya Technologies delivers innovative, reliable IT solutions and services to help your business grow and succeed in the digital era.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#services"
                    className="hover:underline text-gray-400"
                    onClick={e => {
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        const section = document.getElementById('services');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    Services
                  </a>
                </li>
                <li><Link to="/about" className="hover:underline text-gray-400">About</Link></li>
                <li><Link to="/blog" className="hover:underline text-gray-400">Blog</Link></li>
                <li><Link to="/contact" className="hover:underline text-gray-400">Contact</Link></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><i className="fas fa-map-marker-alt mr-2"></i> 123 Main Street, Suite 400, Cityville, Country</li>
                <li><i className="fas fa-phone mr-2"></i> +1 (234) 567-890</li>
                <li><i className="fas fa-envelope mr-2"></i> info@vikoshiya.com</li>
              </ul>
            </div>
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-5 mt-2">
                <a href="https://facebook.com/yourcompany" target="_blank" className="text-gray-400 hover:text-white text-2xl" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/yourcompany" target="_blank" className="text-gray-400 hover:text-white text-2xl" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/" target="_blank" className="text-gray-400 hover:text-white text-2xl" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 Vikoshiya Technologies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <button 
                onClick={() => setIsSitemapOpen(true)}
                className="text-gray-400 hover:text-white text-sm cursor-pointer"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Sitemap Modal */}
      <SitemapModal 
        isOpen={isSitemapOpen} 
        onClose={() => setIsSitemapOpen(false)} 
      />
    </>
  )
}

export default Footer 