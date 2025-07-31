import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const Home = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const headerHeight = document.querySelector('nav')?.offsetHeight || 0
            const targetPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target
      const anchor = target.closest('a')
      if (anchor?.href && anchor.href.includes('#')) {
        e.preventDefault()
        const id = anchor.href.split('#')[1]
        const element = document.getElementById(id)
        if (element) {
          const headerHeight = document.querySelector('nav')?.offsetHeight || 0
          const targetPosition = element.offsetTop - headerHeight
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Handle initial hash navigation
    handleHashNavigation()

    // Add event listeners
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      // Remove event listeners
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div 
        className="hero-bg"
        style={{ '--hero-image': "url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Your Digital Transformation
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            We build modern, secure, and scalable web solutions that drive business growth and deliver exceptional user experiences. Partner with Vikoshiya Technologies to unlock your company's full digital potential.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services')
                if (servicesSection) {
                  const headerHeight = document.querySelector('nav')?.offsetHeight || 0
                  const targetPosition = servicesSection.offsetTop - headerHeight
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Explore Services
            </button>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored IT solutions designed to meet your business requirements and exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-laptop-code text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom websites and web applications built with modern technologies for optimal performance and user experience.
              </p>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd1217ef-0fd1-4724-b058-ab7fbd3c7796.png"
                alt="Developers coding a website with modern UI elements on screen"
                className="w-full rounded-md mb-4"
              />
              <Link 
                to="/web-development" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn more <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>

            {/* Quality Assurance Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-check-double text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive testing services to ensure your applications meet the highest quality standards before launch.
              </p>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9b2b15d-dbe0-4356-8ff3-ccb6471aae1d.png"
                alt="Quality assurance specialist testing application on multiple devices"
                className="w-full rounded-md mb-4"
              />
              <Link 
                to="/quality-assurance" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn more <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>

            {/* Ecommerce Website Development Card */}
            <div className="service-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shopping-cart text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ecommerce Website Development</h3>
              <p className="text-gray-600 mb-4">
                Powerful, scalable, and secure ecommerce solutions tailored for your online business.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1493020258366-be3ead1b3027?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern ecommerce workspace with laptop and shopping cart"
                className="w-full rounded-md mb-4"
              />
              <Link 
                to="/ecommerce" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Learn more <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/72f906f1-d94a-4ffd-8387-cd1f1f95365c.png"
                alt="Vikoshiya Technologies team collaborating in modern office space with computers and whiteboards"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12 text-justify">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Vikoshiya Technologies</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Vikoshiya Technologies, we're more than just an IT company — we're part of a journey that started back in 2012.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                It all began in Singapore, where we laid our foundation in the electrical and instrumentation field. Over the years, we've expanded into media (2015) and infrastructure (2016), and now, in 2024, we've stepped into the world of technology with a new chapter based in Virudhunagar, India.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We're proud of where we've come from, and even more excited about where we're going.
              </p>
              <p className="text-lg font-semibold text-blue-600">Let's build something meaningful — together.</p>
              <Link 
                to="/about" 
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home 