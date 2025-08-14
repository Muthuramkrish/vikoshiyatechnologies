import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why We Started Vikoshiya Technologies: Our Mission and Vision",
      excerpt: "Discover the story behind Vikoshiya Technologies - from our humble beginnings in Singapore to becoming a comprehensive technology powerhouse, and our mission to empower businesses with exceptional digital solutions.",
      date: "June 15, 2025",
      category: "Company Story",
      image: "https://i.pinimg.com/736x/c9/88/0a/c9880a8abf25f389be7154e8fee18270.jpg",
      author: "Vikoshiya Team",
      readTime: "8 min read",
      tags: ["company story", "mission", "vision", "technology", "digital transformation"],
      structuredData: {
        "@type": "Article",
        "headline": "Why We Started Vikoshiya Technologies: Our Mission and Vision",
        "description": "Discover the story behind Vikoshiya Technologies - from our humble beginnings in Singapore to becoming a comprehensive technology powerhouse.",
        "author": {
          "name": "Vikoshiya Technologies"
        },
        "publisher": {
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-06-15",
        "image": "https://i.pinimg.com/736x/c9/88/0a/c9880a8abf25f389be7154e8fee18270.jpg"
      }
    },
    {
      id: 2,
      title: "React vs. Next.js: Which One Should You Use for Your Business Website?",
      excerpt: "Choosing between React and Next.js? Here's a breakdown—and why I believe React is still the smartest choice for building fast, flexible business websites.",
      date: "June 30, 2025",
      category: "Web Development",
      image: "https://i.pinimg.com/1200x/41/2e/a7/412ea792b6963690a4a9dce67b73f216.jpg",
      author: "Rajesh Kumar",
      readTime: "6 min read",
      tags: ["react", "next.js", "web development", "frontend", "javascript", "framework comparison"],
      structuredData: {
        "@type": "Article",
        "headline": "React vs. Next.js: Which One Should You Use for Your Business Website?",
        "description": "Choosing between React and Next.js? Here's a breakdown—and why I believe React is still the smartest choice for building fast, flexible business websites.",
        "author": {
          "name": "Rajesh Kumar"
        },
        "publisher": {
        "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-06-30",
        "image": "https://i.pinimg.com/1200x/41/2e/a7/412ea792b6963690a4a9dce67b73f216.jpg"
      }
    },
    {
      id: 3,
      title: "What is Quality Assurance and Why Every Website Needs It",
      excerpt: "Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever.",
      date: "July 14, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
      author: "Muthuramakrishnan",
      readTime: "10 min read",
      tags: ["quality assurance", "testing", "website security", "user experience", "performance", "bug prevention"],
      structuredData: {
        "@type": "Article",
        "headline": "What is Quality Assurance and Why Every Website Needs It",
        "description": "Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever.",
        "author": {
          "@type": "Person",
          "name": "Muthuramakrishnan"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-07-14",
        "image": "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg"
      }
    },
    {
      id: 4,
      title: "Manual vs. Automated Testing: Which One Is Right for Your Web App?",
      excerpt: "Manual or automated testing? Here's how I decide which approach fits best—based on the project, timeline, and long-term goals of your web app.",
      date: "July 28, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/1200x/2a/33/c7/2a33c7347de60d0c65be83a72c4495be.jpg",
      author: "Rajesh Kumar",
      readTime: "7 min read",
      tags: ["manual testing", "automated testing", "qa", "web app testing", "cypress", "playwright"],
      structuredData: {
        "@type": "Article",
        "headline": "Manual vs. Automated Testing: Which One Is Right for Your Web App?",
        "description": "Manual or automated testing? Here's how I decide which approach fits best—based on the project, timeline, and long-term goals of your web app.",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-07-28",
        "image": "https://i.pinimg.com/1200x/2a/33/c7/2a33c7347de60d0c65be83a72c4495be.jpg"
      }
    },
    {
      id: 5,
      title: "E-commerce Essentials: Must-Have Features for Online Stores",
      excerpt: "Planning to launch your online store? Discover the must-have features that turn visitors into loyal customers, from intuitive catalogs and secure checkout to mobile-first design and post-purchase support.",
      date: "August 1, 2025",
      category: "Ecommerce",
      image: "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Muthuramakrishnan M",
      readTime: "12 min read",
      tags: ["ecommerce", "online store", "shopping cart", "payment gateway", "mobile commerce", "user experience"],
      structuredData: {
        "@type": "Article",
        "headline": "E-commerce Essentials: Must-Have Features for Online Stores",
        "description": "Planning to launch your online store? Discover the must-have features that turn visitors into loyal customers, from intuitive catalogs and secure checkout to mobile-first design and post-purchase support.",
        "author": {
          "@type": "Person",
          "name": "Muthuramakrishnan M"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-08-01",
        "image": "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    {
      id: 6,
      title: "Website Timeline: How Long Should Development Really Take?",
      excerpt: "Creating a website can be an exciting journey—but one of the most common questions clients ask is, 'How long will it take?' Unfortunately, there's no universal answer. Some websites are completed in days, while others take months.",
      date: "August 8, 2025",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Logeshwari",
      readTime: "8 min read",
      tags: ["web development", "timeline", "project management", "planning", "development process"],
      structuredData: {
        "@type": "Article",
        "headline": "Website Timeline: How Long Should Development Really Take?",
        "description": "Creating a website can be an exciting journey—but one of the most common questions clients ask is, 'How long will it take?' Unfortunately, there's no universal answer.",
        "author": {
          "@type": "Person",
          "name": "Logeshwari"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-08-08",
        "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    },
    
    {
      id: 7,
      title: "Domain Names and Hosting: A Business Owner's Guide",
      excerpt: "Understanding domain names and web hosting is crucial for any business going online. Learn the key differences, best practices for choosing domains, hosting types, and how to set up your digital foundation for success.",
      date: "August 14, 2025",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Vijayalakshmi K",
      readTime: "6 min read",
      tags: ["domain names", "web hosting", "website setup", "business website", "digital foundation"],
      structuredData: {
        "@type": "Article",
        "headline": "Domain Names and Hosting: A Business Owner's Guide",
        "description": "Understanding domain names and web hosting is crucial for any business going online. Learn the key differences, best practices, and how to set up your digital foundation.",
        "author": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-08-14",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link to={`/blog/${post.id}`} className="block">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">By {post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Read more <i className="fas fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
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