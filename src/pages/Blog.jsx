import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Web Development Innovations: Delivering Excellence",
      excerpt: "Discover how Vikoshiya Technologies leverages the latest web technologies and rigorous quality assurance to deliver secure, scalable, and high-performing solutions for our clients.",
      date: "January 15, 2024",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "Company Updates: Our Latest Milestones",
      excerpt: "Discover recent achievements, new partnerships, and exciting projects at Vikoshiya Technologies. See how we're growing and innovating for our clients.",
      date: "January 10, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Transforming Businesses with Expert IT Services",
      excerpt: "At Vikoshiya Technologies, we empower organizations with end-to-end IT solutions—custom web development, robust QA, and seamless integrations.",
      date: "January 5, 2024",
      category: "IT Services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div 
        className="hero-bg flex items-center justify-center" 
        style={{ '--hero-image': "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights & Innovation</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
          Explore expert perspectives, industry trends, and company news from the team driving digital transformation. Stay informed, inspired, and ahead of the curve with our thought leadership and technology updates.
          </p>
        </header>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Read more <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </article>
            ))}
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

export default Blog 