import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import vLogo from '../assets/v.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const handleServicesClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/#services')
    } else {
      const servicesSection = document.getElementById('services')
      if (servicesSection) {
        const headerHeight = document.querySelector('nav')?.offsetHeight || 0
        const targetPosition = servicesSection.offsetTop - headerHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-start justify-start">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.location.href = '/';
                }
              }}
            >
              <img 
                src={vLogo}
                alt="Vikoshiya Technologies logo"
                className="h-48 w-auto hover:opacity-80 transition-opacity duration-300" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-9 mr-8 mt-4">
            <button 
              onClick={handleServicesClick}
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium ${
                isActive('/') ? 'border-gray-300 text-gray-700' : ''
              }`}
            >
              Services
            </button>
            <Link 
              to="/about"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium ${
                isActive('/about') ? 'border-gray-300 text-gray-700' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium ${
                isActive('/blog') ? 'border-gray-300 text-gray-700' : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-base font-medium ${
                isActive('/contact') ? 'border-gray-300 text-gray-700' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button
                onClick={(e) => {
                  handleServicesClick(e)
                  setIsMenuOpen(false)
                }}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-lg font-medium w-full text-left"
              >
                Services
              </button>
              <Link
                to="/about"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 