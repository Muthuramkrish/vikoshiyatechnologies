import { useParams, Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'

const BlogPost = () => {
  const { id } = useParams()

  // Blog posts data - same as in Blog.tsx
  const blogPosts = [
    {
      id: 1,
      title: "Web Development Innovations: Delivering Excellence",
      excerpt: "Discover how Vikoshiya Technologies leverages the latest web technologies and rigorous quality assurance to deliver secure, scalable, and high-performing solutions for our clients.",
      content: `
        <p>In today's rapidly evolving digital landscape, businesses need web solutions that not only meet current requirements but also scale with future growth. At Vikoshiya Technologies, we understand this challenge and have developed a comprehensive approach to web development that combines cutting-edge technologies with proven methodologies.</p>
        
        <h2>Our Development Philosophy</h2>
        <p>We believe in creating web applications that are not just functional, but exceptional. Our development process begins with a deep understanding of your business needs, followed by careful planning and execution using the latest technologies.</p>
        
        <h2>Technology Stack</h2>
        <p>Our team specializes in modern web technologies including:</p>
        <ul>
          <li>React.js and Next.js for dynamic user interfaces</li>
          <li>Node.js and Express for robust backend services</li>
          <li>MongoDB and PostgreSQL for reliable data management</li>
          <li>AWS and Azure for scalable cloud infrastructure</li>
        </ul>
        
        <h2>Quality Assurance Integration</h2>
        <p>Every web development project includes comprehensive testing and quality assurance. We implement automated testing, performance optimization, and security best practices to ensure your application meets the highest standards.</p>
        
        <h2>Client Success Stories</h2>
        <p>Our track record speaks for itself. We've helped numerous businesses transform their digital presence with custom web solutions that drive results and exceed expectations.</p>
      `,
      date: "January 15, 2024",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      author: "Vikoshiya Team"
    },
    {
      id: 2,
      title: "Company Updates: Our Latest Milestones",
      excerpt: "Discover recent achievements, new partnerships, and exciting projects at Vikoshiya Technologies. See how we're growing and innovating for our clients.",
      content: `
        <p>As we reflect on our journey and celebrate our achievements, we're thrilled to share the significant milestones that mark Vikoshiya Technologies' continued growth and success. These accomplishments represent not just our progress, but our unwavering commitment to delivering exceptional value to our clients and partners.</p>
        
        <h2>Strategic Partnership Expansion</h2>
        <p>We're excited to announce the formation of several strategic partnerships with leading technology companies and industry leaders. These collaborations represent a significant step forward in our ability to deliver comprehensive, cutting-edge solutions to our clients. Our new partnerships include:</p>
        <ul>
          <li>Cloud infrastructure partnerships with major cloud providers</li>
          <li>Technology alliances with software development tool vendors</li>
          <li>Industry-specific partnerships in healthcare, finance, and e-commerce</li>
          <li>Academic partnerships for research and innovation</li>
        </ul>
        
        <h2>Team Expansion & Expertise Growth</h2>
        <p>Our team has experienced remarkable growth, welcoming over 25 new talented professionals across various disciplines. This expansion includes:</p>
        <ul>
          <li>Senior software architects and technical leads</li>
          <li>Specialized QA engineers and automation experts</li>
          <li>UX/UI designers and frontend specialists</li>
          <li>DevOps engineers and cloud infrastructure experts</li>
          <li>Business analysts and project managers</li>
        </ul>
        <p>This diverse talent pool enables us to tackle more complex projects and deliver solutions that exceed client expectations.</p>
        
        <h2>Technology Infrastructure Investments</h2>
        <p>We've made substantial investments in our technology infrastructure to enhance our development capabilities and service delivery:</p>
        <ul>
          <li>Advanced development environments and tools</li>
          <li>Enhanced security and compliance frameworks</li>
          <li>Scalable cloud infrastructure for client projects</li>
          <li>Automated testing and deployment pipelines</li>
          <li>Advanced analytics and monitoring systems</li>
        </ul>
        
        <h2>Client Success & Project Milestones</h2>
        <p>Our client portfolio has grown significantly, and we're proud to report exceptional project outcomes:</p>
        <ul>
          <li>Successfully delivered 50+ projects across various industries</li>
          <li>Achieved 98% client satisfaction rate</li>
          <li>Reduced average project delivery time by 30%</li>
          <li>Implemented solutions for Fortune 500 companies</li>
          <li>Expanded services to 15+ new industry verticals</li>
        </ul>
        
        <h2>Industry Recognition & Awards</h2>
        <p>Our commitment to excellence has been recognized through several industry accolades and certifications:</p>
        <ul>
          <li>ISO 27001 certification for information security</li>
          <li>Recognition as a "Top Technology Service Provider"</li>
          <li>Awards for innovation in web development</li>
          <li>Certifications in cloud technologies and security</li>
        </ul>
        
        <h2>Geographic Expansion</h2>
        <p>We've expanded our service footprint to better serve our growing client base:</p>
        <ul>
          <li>New office locations in key business hubs</li>
          <li>Enhanced remote work capabilities</li>
          <li>24/7 support services for global clients</li>
          <li>Multi-timezone development teams</li>
        </ul>
        
        <h2>Innovation & R&D Initiatives</h2>
        <p>We've established dedicated research and development initiatives to stay at the forefront of technology:</p>
        <ul>
          <li>AI and machine learning capabilities</li>
          <li>Blockchain and distributed ledger technologies</li>
          <li>IoT and connected device solutions</li>
          <li>Advanced analytics and business intelligence</li>
        </ul>
        
        <h2>Community Engagement & Social Responsibility</h2>
        <p>Beyond our business achievements, we're proud of our contributions to the community:</p>
        <ul>
          <li>Technology education programs for underprivileged youth</li>
          <li>Environmental sustainability initiatives</li>
          <li>Partnerships with educational institutions</li>
          <li>Open-source contributions and knowledge sharing</li>
        </ul>
        
        <h2>Looking Forward: Our Vision for 2024</h2>
        <p>As we move forward, our focus remains on:</p>
        <ul>
          <li>Expanding our service offerings to meet evolving client needs</li>
          <li>Investing in emerging technologies and innovation</li>
          <li>Strengthening our partnerships and collaborations</li>
          <li>Enhancing our global delivery capabilities</li>
          <li>Maintaining our commitment to quality and excellence</li>
        </ul>
        
        <h2>Gratitude & Commitment</h2>
        <p>These achievements would not be possible without the trust and partnership of our clients, the dedication of our team, and the support of our stakeholders. We remain committed to building on this foundation and continuing to deliver exceptional value to all our partners.</p>
        
        <p>As we celebrate these milestones, we're excited about the opportunities ahead and look forward to continuing our journey of innovation, growth, and success. Thank you for being part of our story.</p>
      `,
      date: "January 10, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      author: "Vikoshiya Team"
    },
    {
      id: 3,
      title: "Transforming Businesses with Expert IT Services",
      excerpt: "At Vikoshiya Technologies, we empower organizations with end-to-end IT solutions—custom web development, robust QA, and seamless integrations.",
      content: `
        <p>In today's rapidly evolving digital landscape, businesses face unprecedented challenges and opportunities. At Vikoshiya Technologies, we understand that technology transformation is not just about implementing new systems—it's about fundamentally reshaping how organizations operate, compete, and deliver value to their customers.</p>
        
        <h2>The Digital Transformation Imperative</h2>
        <p>Digital transformation has become a critical imperative for businesses of all sizes. Organizations that fail to adapt risk falling behind their competitors and losing market relevance. Our comprehensive IT services are designed to help businesses navigate this complex transformation journey successfully.</p>
        
        <h2>Strategic Technology Consulting</h2>
        <p>We begin every engagement with a thorough assessment of your current technology landscape, business objectives, and market position. Our strategic consulting services help you identify the most impactful technology investments and create a roadmap for successful implementation.</p>
        
        <h2>Custom Software Development</h2>
        <p>Off-the-shelf solutions often fall short of meeting unique business requirements. Our custom software development services create tailored solutions that perfectly align with your business processes, workflows, and strategic goals. From enterprise applications to mobile solutions, we deliver software that drives real business value.</p>
        
        <h2>Cloud Infrastructure & DevOps</h2>
        <p>Modern businesses require scalable, reliable, and secure infrastructure. Our cloud expertise spans AWS, Azure, and Google Cloud platforms, enabling us to design and implement robust cloud solutions that support your growth and ensure high availability.</p>
        
        <h2>Data Analytics & Business Intelligence</h2>
        <p>Data is the new currency of business. Our analytics and BI services help you transform raw data into actionable insights, enabling data-driven decision making and uncovering new opportunities for growth and optimization.</p>
        
        <h2>Cybersecurity & Compliance</h2>
        <p>As cyber threats continue to evolve, protecting your digital assets has never been more critical. Our cybersecurity services provide comprehensive protection for your systems, data, and applications, ensuring compliance with industry regulations and standards.</p>
        
        <h2>Digital Experience Optimization</h2>
        <p>Customer expectations are higher than ever. Our digital experience services help you create seamless, engaging interactions across all touchpoints, from web and mobile applications to customer portals and e-commerce platforms.</p>
        
        <h2>Continuous Innovation & Support</h2>
        <p>Technology transformation is an ongoing journey, not a one-time project. We provide continuous support, maintenance, and optimization services to ensure your technology investments continue to deliver value and evolve with your business needs.</p>
        
        <h2>Success Stories</h2>
        <p>Our track record speaks for itself. We've helped numerous organizations across industries achieve remarkable results through strategic technology implementation. From startups to enterprise organizations, our clients have experienced improved efficiency, reduced costs, enhanced customer satisfaction, and accelerated growth.</p>
        
        <h2>Partnering for Success</h2>
        <p>At Vikoshiya Technologies, we believe in building long-term partnerships with our clients. We don't just deliver projects—we become an extension of your team, committed to your success and invested in your growth. Our collaborative approach ensures that every solution we deliver is perfectly aligned with your vision and objectives.</p>
      `,
      date: "January 5, 2024",
      category: "IT Services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      author: "Vikoshiya Team"
    }
  ]

  // Find the blog post by ID
  const post = blogPosts.find(p => p.id === parseInt(id || '0'))

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image - moved above content */}
          <div className="mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Article Content - now below image */}
          <article className="prose max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-12
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-blue-800 prose-h2:mb-6 prose-h2:mt-10
            prose-p:text-base prose-p:text-gray-800 prose-p:leading-7 prose-p:mb-7 prose-p:mt-0 prose-p:font-normal
            prose-li:text-base prose-li:text-gray-700 prose-li:mb-3 prose-li:pl-1
            prose-ul:pl-6 prose-ol:pl-6">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </article>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-600">Share this article:</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/posts/?feedView=all" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                </div>
              </div>
              <Link 
                to="/blog" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Back to Blog
              </Link>
            </div>
          </footer>
        </div>
      </div>

      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default BlogPost 