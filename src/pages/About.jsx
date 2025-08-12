import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="hero-bg flex items-center justify-center" 
        style={{ '--hero-image': "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Vikoshiya Technologies</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Discover our journey from Singapore to India, our values, and our commitment to delivering exceptional technology solutions.
          </p>
        </header>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A journey of innovation, growth, and unwavering commitment to excellence
            </p>
          </div>
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/72f906f1-d94a-4ffd-8387-cd1f1f95365c.png"
                alt="Vikoshiya Technologies team collaborating in modern office space"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">From Singapore to India: A Legacy of Innovation</h3>
              <p className="text-lg text-gray-600 mb-4 text-justify">
                At Vikoshiya Technologies, we're more than just an IT company — we're part of a journey that started back in 2012.
              </p>
              <p className="text-lg text-gray-600 mb-4 text-justify">
                It all began in Singapore, where we laid our foundation in the electrical and instrumentation field. Over the years, we've expanded into media (2015) and infrastructure (2016), and now, in 2025, we've stepped into the world of technology with a new chapter based in Virudhunagar, India.
              </p>
              <p className="text-lg text-gray-600 mb-4 text-justify">
                With over a decade of experience behind us, we understand what it takes to build something that lasts. Whether it's a circuit, a building, a brand, or a website — we believe in doing things with quality, care, and commitment.
              </p>
              <p className="text-lg text-gray-600 mb-6 text-justify">
                Vikoshiya Technologies is a full-stack web solutions provider, offering modern IT services, design, and digital transformation. Alongside our core tech services, we also operate a specialized eCommerce platform vikoshiya india Shop, delivering handpicked tech and utility products to customers nationwide.
              </p>
              <p className="text-lg text-gray-600 text-justify">
                We're a small team with big values — honest work, lasting relationships, and smart solutions that actually work. If you're looking for a tech partner who's in it for the long run, we'd love to be part of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our evolution</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-12">
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900">2012</h3>
                  <p className="text-gray-600">Founded in Singapore, specializing in electrical and instrumentation</p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 hover:bg-blue-500 transition-all duration-300"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 hover:bg-blue-500 transition-all duration-300"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900">2015</h3>
                  <p className="text-gray-600">Expanded into media services and digital content creation</p>
                </div>
              </div>
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900">2016</h3>
                  <p className="text-gray-600">Ventured into infrastructure development and project management</p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 hover:bg-blue-500 transition-all duration-300"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              <div className="flex items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 hover:bg-blue-500 transition-all duration-300"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-gray-900">2025</h3>
                  <p className="text-gray-600">Launched technology division in Virudhunagar, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg text-center hover:scale-105 hover:shadow-xl hover:bg-blue-100 transition-all duration-300 cursor-pointer">
              <i className="fas fa-laptop-code text-blue-600 text-4xl mb-6 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 text-lg">
                Custom websites and web applications built with modern technologies for optimal performance and user experience.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center hover:scale-105 hover:shadow-xl hover:bg-blue-100 transition-all duration-300 cursor-pointer">
              <i className="fas fa-check-double text-blue-600 text-4xl mb-6 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 text-lg">
                Comprehensive testing services to ensure your applications meet the highest quality standards before launch.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center hover:scale-105 hover:shadow-xl hover:bg-blue-100 transition-all duration-300 cursor-pointer">
              <i className="fas fa-shopping-cart text-blue-600 text-4xl mb-6 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ecommerce Web Solutions</h3>
              <p className="text-gray-600 text-lg">
                Powerful, scalable, and secure ecommerce platforms tailored to grow your online business and enhance customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-blue-300 hover:border transition-all duration-300 cursor-pointer">
              <i className="fas fa-handshake text-blue-600 text-2xl mb-4 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Honest Work</h3>
              <p className="text-gray-600">
                We believe in transparency, integrity, and delivering on our promises. Every project is approached with honesty and dedication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-blue-300 hover:border transition-all duration-300 cursor-pointer">
              <i className="fas fa-users text-blue-600 text-2xl mb-4 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lasting Relationships</h3>
              <p className="text-gray-600">
                We build partnerships that go beyond projects. Our clients become long-term collaborators in their digital success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-blue-300 hover:border transition-all duration-300 cursor-pointer">
              <i className="fas fa-lightbulb text-blue-600 text-2xl mb-4 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Solutions</h3>
              <p className="text-gray-600">
                We create practical, efficient solutions that actually work and grow with your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-blue-300 hover:border transition-all duration-300 cursor-pointer">
              <i className="fas fa-award text-blue-600 text-2xl mb-4 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                Every deliverable meets our high standards for performance, security, and user experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-blue-300 hover:border transition-all duration-300 cursor-pointer">
              <i className="fas fa-heart text-blue-600 text-2xl mb-4 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Care & Commitment</h3>
              <p className="text-gray-600">
                We care about your success and are committed to delivering solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-blue-300 hover:border transition-all duration-300 cursor-pointer">
              <i className="fas fa-chart-line text-blue-600 text-2xl mb-4 hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Focused</h3>
              <p className="text-gray-600">
                We design solutions that scale with your business, ensuring long-term success and adaptability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the dedicated professionals behind our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center hover:scale-110 hover:bg-blue-200 transition-all duration-300">
                <i className="fas fa-user-tie text-blue-600 text-3xl hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership Team</h3>
              <p className="text-gray-600">
                Experienced professionals with over a decade of industry expertise, guiding our strategic direction and ensuring project success.
              </p>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center hover:scale-110 hover:bg-blue-200 transition-all duration-300">
                <i className="fas fa-laptop-code text-blue-600 text-3xl hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Team</h3>
              <p className="text-gray-600">
                Skilled developers and designers creating innovative, responsive, and high-performance web solutions for our clients.
              </p>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center hover:scale-110 hover:bg-blue-200 transition-all duration-300">
                <i className="fas fa-check-circle text-blue-600 text-3xl hover:scale-110 transition-transform duration-300"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">QA Specialists</h3>
              <p className="text-gray-600">
                Quality assurance experts ensuring every solution meets the highest standards of performance, security, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

 {/* CTA Section */}
 <CTASection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default About 