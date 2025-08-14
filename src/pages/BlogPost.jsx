import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import CTASection from '../components/CTASection.jsx'
import ArticleSummary from '../components/ArticleSummary.jsx'
import RelatedArticles from '../components/RelatedArticles.jsx'

// Image Popup Modal Component
const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt, authorName }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-2xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Image */}
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          
          {/* Author name overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">{authorName}</h3>
            <p className="text-gray-200 text-sm">Author Profile Picture</p>
          </div>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
        aria-label="Close modal"
      />
    </div>
  )
}

const BlogPost = () => {
  const { id } = useParams()
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Blog posts data with structured content for better AI identification
  const blogPosts = [
    {
      id: 1,
      title: "Why We Started Vikoshiya Technologies: Our Mission and Vision",
      excerpt: "Discover the story behind Vikoshiya Technologies - from our humble beginnings in Singapore to becoming a comprehensive technology powerhouse, and our mission to empower businesses with exceptional digital solutions.",
      date: "June 16, 2025",
      category: "Company Story",
      image: "https://i.pinimg.com/736x/c9/88/0a/c9880a8abf25f389be7154e8fee18270.jpg",
      author: "Vikoshiya Team",
      authorImage: "/src/assets/v1.png",
      readTime: "8 min read",
      tags: ["company story", "mission", "vision", "technology", "digital transformation"],
      structuredData: {
        "@type": "Article",
        "headline": "Why We Started Vikoshiya Technologies: Our Mission and Vision",
        "description": "Discover the story behind Vikoshiya Technologies - from our humble beginnings in Singapore to becoming a comprehensive technology powerhouse.",
        "author": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vikoshiya Technologies"
        },
        "datePublished": "2025-06-16",
        "image": "https://i.pinimg.com/736x/c9/88/0a/c9880a8abf25f389be7154e8fee18270.jpg"
      },
        content: `
        <p>In 2012, a vision took root in Singapore—a vision that would eventually span continents and evolve into something much greater than we initially imagined. What started as Vikoshiya's journey in electrical and instrumentation has now blossomed into a comprehensive technology powerhouse, with our latest chapter opening in Virudhunagar, India, in 2025.</p>
        
        <h2>The Journey That Shaped Our Purpose</h2>
        <p>Our story isn't just about business expansion; it's about understanding what truly matters in the digital age. Over more than a decade, we've witnessed firsthand how technology can transform lives, businesses, and entire communities. From our early days working with electrical systems in Singapore to expanding into media in 2015 and infrastructure in 2016, each step taught us valuable lessons about quality, reliability, and the importance of genuine partnerships.</p>
        
        <p>But it was in 2025, as we ventured into the technology sector, that our true mission crystallized. We realized that the digital world was filled with companies that promised the moon but delivered mediocre results. Businesses were struggling to find partners who truly understood their needs, who cared about their success beyond just completing a project.</p>
        
        <h2>Our Mission: Building Digital Excellence with Heart</h2>
        <p>At Vikoshiya Technologies, our mission is simple yet profound: To empower businesses with exceptional web development, quality assurance, and ecommerce solutions that drive real growth while fostering lasting partnerships built on trust, transparency, and genuine care.</p>
        
        <p>We didn't start this company just to write code or run tests. We started it because we believe that every business deserves a technology partner who:</p>
        <ul>
          <li>Listens first, codes second - Understanding your vision is more important than showcasing our technical prowess</li>
          <li>Delivers quality that lasts - We're not interested in quick fixes; we build solutions that grow with your business</li>
          <li>Stands by their work - When we say we'll support you, we mean it for the long haul</li>
          <li>Treats your success as our success - Your growth is our greatest achievement</li>
        </ul>
        
        <h2>The Problems We're Solving</h2>
        <p>In our years of experience across different industries, we've identified critical gaps in the technology services landscape:</p>
        
        <h3>1. The Trust Deficit</h3>
        <p>Too many businesses have been burned by agencies that overpromise and underdeliver. We're here to restore faith in what a true technology partnership should look like.</p>
        
        <h3>2. One-Size-Fits-All Solutions</h3>
        <p>Every business is unique, yet many providers offer cookie-cutter solutions. We believe in crafting bespoke digital experiences tailored to your specific needs and goals.</p>
        
        <h3>3. The Communication Gap</h3>
        <p>Technical jargon and poor communication plague the industry. We speak your language—business language—and keep you informed every step of the way.</p>
        
        <h3>4. Short-Term Thinking</h3>
        <p>Many providers disappear after project completion. We're building relationships that span years, not projects.</p>
        
        <h2>Our Vision: Transforming Digital Partnerships</h2>
        <p>Our vision extends far beyond being just another web development company. We envision a future where businesses and technology partners collaborate as true allies, where digital transformation is accessible to companies of all sizes, and where quality and integrity are the foundation of every interaction.</p>
        
        <p>We see ourselves as:</p>
        <ul>
          <li><strong>Digital Transformation Enablers</strong> - Helping businesses navigate the complex digital landscape with confidence, providing not just services but strategic guidance that drives meaningful growth.</li>
          <li><strong>Quality Champions</strong> - Setting new standards for what businesses should expect from their technology partners—where excellence isn't an exception, it's the baseline.</li>
          <li><strong>Innovation Catalysts</strong> - Staying ahead of technological trends so our clients can focus on what they do best while we handle the complexities of modern web development, quality assurance, and ecommerce solutions.</li>
          <li><strong>Community Builders</strong> - Creating a network of successful businesses that have grown through strategic digital investments, fostering a community where knowledge and success are shared.</li>
        </ul>
        
        <h2>What This Means for You</h2>
        <p>When you partner with Vikoshiya Technologies, you're not just hiring a service provider—you're gaining a dedicated ally in your business journey. Here's what our mission and vision translate to in practical terms:</p>
        
        <h3>Immediate Impact:</h3>
        <ul>
          <li>Custom web solutions that reflect your brand and drive conversions</li>
          <li>Rigorous quality assurance that ensures your digital products work flawlessly</li>
          <li>Ecommerce platforms that turn visitors into loyal customers</li>
          <li>Transparent communication and regular progress updates</li>
        </ul>
        
        <h3>Long-Term Partnership:</h3>
        <ul>
          <li>Ongoing support and maintenance to keep your digital assets performing optimally</li>
          <li>Strategic advice on technology trends and opportunities</li>
          <li>Scalable solutions that grow with your business</li>
          <li>A team that genuinely cares about your continued success</li>
        </ul>
        
        <h2>Our Commitment to Excellence</h2>
        <p>We've learned that excellence isn't just about technical skills—though we certainly have those. It's about the complete experience: how we communicate, how we solve problems, how we handle challenges, and how we celebrate successes together.</p>
        
        <p>Our commitment includes:</p>
        <ul>
          <li><strong>Honest Work</strong> - Every project approached with integrity and transparency</li>
          <li><strong>Lasting Relationships</strong> - Building partnerships that extend far beyond project completion</li>
          <li><strong>Smart Solutions</strong> - Creating practical, efficient solutions that actually work</li>
          <li><strong>Quality First</strong> - Every deliverable meeting our high standards for performance and security</li>
          <li><strong>Care & Commitment</strong> - Genuine investment in your success and growth</li>
          <li><strong>Growth Focused</strong> - Designing solutions that scale with your business ambitions</li>
        </ul>
        
        <h2>Looking Forward: The Future We're Building</h2>
        <p>As we continue to grow and evolve, our core mission remains unchanged. We're building a company that businesses can trust, rely on, and grow with. We're proving that in an industry often characterized by complexity and confusion, clarity and care can prevail.</p>
        
        <p>We're excited about the future—not just for Vikoshiya Technologies, but for every business we'll have the privilege to partner with. Whether you're a startup taking your first steps into the digital world or an established company looking to transform your online presence, we're here to ensure your journey is successful, sustainable, and genuinely rewarding.</p>
        
        <h2>Ready to Start Your Journey?</h2>
        <p>Our story is still being written, and we'd love for your business to be part of the next chapter. We're not just offering services; we're offering a partnership built on the values that have guided us for over a decade: quality, integrity, and an unwavering commitment to your success.</p>
        
        <p>Because at Vikoshiya Technologies, we don't just build websites, conduct tests, or create ecommerce platforms. We build relationships, solve problems, and help dreams become digital realities.</p>
        
        <p><strong>Let's build something meaningful—together.</strong></p>
      `,
    },
    {
      id: 2,
      title: "React vs. Next.js: Which One Should You Use for Your Business Website?",
      excerpt: "Choosing between React and Next.js? Here's a breakdown—and why I believe React is still the smartest choice for building fast, flexible business websites.",
      content: `
        <p>When starting a business website, one of the first tech decisions you'll face is whether to go with plain React or a framework like Next.js. Both are powerful—but they serve different purposes. Since we build most of our client projects at Vikoshiya Technologies using React, I wanted to share why we made that choice—and why it might be right for your business too.</p>
    
        <h2>Understanding the Basics</h2>
        <p><strong>React</strong> is a JavaScript library for building UI components. It's flexible, fast, and highly customizable. Think of it like the engine of a car—you can build what you want, your way.</p>
        <p><strong>Next.js</strong> is a React-based framework that adds structure, routing, and server-side features. It's great for SEO-heavy and content-focused sites.</p>
    
        <h2>Where React Shines (And Why We Use It)</h2>
        <p>Here's why I personally prefer React for most business web applications:</p>
        <ul>
          <li><strong>Complete Flexibility:</strong> React lets us control every part of the architecture, so we can tailor solutions exactly to business requirements.</li>
          <li><strong>Single Page Application (SPA):</strong> For modern apps with dashboards, forms, and interactions, SPAs built in React give a faster and smoother experience.</li>
          <li><strong>Frontend-Only Simplicity:</strong> With APIs and headless backends, React keeps your frontend clean and focused—no unnecessary server complexity.</li>
          <li><strong>Custom Routing:</strong> We can build custom flows and navigation without being locked into file-based routes like in Next.js.</li>
        </ul>
    
        <h2>When Next.js Might Be Better</h2>
        <p>That said, I do respect what Next.js brings to the table. It's a great choice if:</p>
        <ul>
          <li>You need <strong>server-side rendering (SSR)</strong> for SEO-heavy pages like blogs or news portals.</li>
          <li>You want built-in routing and API handling out of the box.</li>
          <li>You're building a content-rich marketing site where SEO is a top priority.</li>
        </ul>
    
        <h2>Performance & SEO</h2>
        <p>People often say Next.js is better for SEO—but with proper meta tags, dynamic routing, and tools like React Helmet, we've consistently achieved excellent SEO results in our React builds. Plus, React's performance is unmatched when it comes to interactive UI and frontend speed.</p>
    
        <h2>Our Take at Vikoshiya Technologies</h2>
        <p>We build high-performance business applications, admin panels, ecommerce stores, and product UIs—all using React + Vite + Tailwind. This stack gives us the power to move fast and customize deeply without unnecessary overhead.</p>
        <p>If we ever need SEO-driven landing pages, we pair React with tools like Astro or a static CMS—not always Next.js.</p>
    
        <h2>Final Verdict</h2>
        <p>If your site needs rich interactivity, flexibility, and fast frontend performance, go with <strong>React</strong>. If you need out-of-the-box routing, SSR, and a more opinionated structure, consider <strong>Next.js</strong>.</p>
    
        <p>At the end of the day, both are excellent. But for most businesses we work with—especially product-driven companies or custom applications—<strong>React is the winner</strong>.</p>
    
      `,
      date: "june 30, 2025",
      category: "Web Development",
      image: "https://i.pinimg.com/1200x/41/2e/a7/412ea792b6963690a4a9dce67b73f216.jpg",
      author: "Rajesh Kumar",
      authorImage: "/src/assets/RK.png"
    },
    {
      id: 3,
      title: "What is Quality Assurance and Why Every Website Needs It",
      excerpt: "Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever.",
      content: `
        <p>Your website is often the first impression customers have of your business. A single glitch, broken link, or security vulnerability can cost you not just a sale, but a customer's trust forever. At Vikoshiya Technologies, having evolved from precision-focused electrical and instrumentation systems in Singapore, we understand that quality isn't optional—it's essential.</p>
        
        <h2>What is Quality Assurance?</h2>
        <p>Quality Assurance (QA) is the systematic process of ensuring your website functions flawlessly across all scenarios. It's not just about finding bugs—it's about preventing them, optimizing performance, ensuring security, and delivering exceptional user experiences.</p>
        
        <p>Think of QA as your website's comprehensive health check-up. It's the difference between hoping your website works and knowing it works.</p>
        
        <h2>Key Components of Website QA</h2>
        
        <h3>1. Functional Testing</h3>
        <p>Ensuring every feature works as intended—forms, checkout processes, user registration, and third-party integrations.</p>
        
        <h3>2. Performance Testing</h3>
        <p>Verifying your website handles real-world traffic with fast load speeds and optimal server response times.</p>
        
        <h3>3. Security Testing</h3>
        <p>Protecting against cyber threats through vulnerability assessments and compliance validation.</p>
        
        <h3>4. Compatibility Testing</h3>
        <p>Ensuring consistent experiences across browsers, devices, and operating systems.</p>
        
        <h3>5. User Experience Testing</h3>
        <p>Validating intuitive navigation, conversion optimization, and accessibility compliance.</p>
        
        <h2>Why Every Website Needs QA</h2>
        
        <h3>Brand Protection</h3>
        <ul>
          <li>88% of users won't return after a bad website experience</li>
          <li>One negative experience gets shared with 15+ people on average</li>
          <li>Poor mobile sites lose 40% of potential conversions</li>
        </ul>
        
        <h3>Financial Impact</h3>
        <ul>
          <li>Single hour of downtime costs e-commerce sites thousands</li>
          <li>Post-launch fixes cost 10-100x more than prevention</li>
          <li>Poor quality increases customer acquisition costs by 200-400%</li>
        </ul>
        
        <h3>Security & Compliance</h3>
        <ul>
          <li>Data breaches affect 1 in 4 companies annually</li>
          <li>Average breach cost: $4.45 million</li>
          <li>GDPR non-compliance fines up to €20 million</li>
        </ul>
        
        <h3>SEO Benefits</h3>
        <ul>
          <li>Page speed directly affects search rankings</li>
          <li>Mobile-friendliness impacts visibility</li>
          <li>User engagement metrics influence rankings</li>
        </ul>
        
        <h2>The Hidden Costs of Skipping QA</h2>
        <p>Without proper QA, businesses face:</p>
        <ul>
          <li>Multiplied customer acquisition costs</li>
          <li>Overwhelming support ticket volumes</li>
          <li>Expensive emergency fixes</li>
          <li>Lost SEO investments and reduced organic traffic</li>
        </ul>
        
        <h2>Our QA Methodology at Vikoshiya Technologies</h2>
        
        <h3>1. Requirements Analysis</h3>
        <p>Understanding your business objectives and technical requirements for customized QA strategy.</p>
        
        <h3>2. Comprehensive Testing</h3>
        <p>Rigorous protocols covering functionality, performance, security, and user experience.</p>
        
        <h3>3. Detailed Reporting</h3>
        <p>Clear documentation with prioritized recommendations and resolution support.</p>
        
        <h3>4. Post-Launch Monitoring</h3>
        <p>Ongoing quality monitoring to maintain optimal performance as your website evolves.</p>
        
        <h2>Specialized QA for Different Needs</h2>
        
        <h3>E-commerce Platforms</h3>
        <ul>
          <li>Payment gateway security</li>
          <li>Shopping cart functionality</li>
          <li>Inventory management</li>
          <li>Order processing workflows</li>
        </ul>
        
        <h3>Corporate Websites</h3>
        <ul>
          <li>Lead generation optimization</li>
          <li>Brand consistency</li>
          <li>CRM integrations</li>
          <li>Professional presentation</li>
        </ul>
        
        <h3>Web Applications</h3>
        <ul>
          <li>User authentication systems</li>
          <li>API integrations</li>
          <li>Workflow automation</li>
          <li>Scalability testing</li>
        </ul>
        
        <h2>Why Choose Vikoshiya Technologies</h2>
        
        <h3>Proven Experience</h3>
        <p>Our decade-long journey from Singapore's precision engineering to India's tech innovation has taught us that quality is non-negotiable.</p>
        
        <h3>Integrated Approach</h3>
        <p>Unlike standalone QA providers, we seamlessly integrate quality assurance with our web development and e-commerce services.</p>
        
        <h3>Business-Focused Testing</h3>
        <p>We test for business success, not just technical correctness, maximizing your website's ability to achieve objectives.</p>
        
        <h3>Long-term Partnership</h3>
        <p>Quality assurance is ongoing. We provide continued support as your website evolves and grows.</p>
        
        <h2>Taking Action</h2>
        <p>Quality assurance isn't just recommended—it's essential for success in today's digital landscape. Whether launching a new website or upgrading existing platforms, comprehensive QA protects your investment and drives business growth.</p>
        
        <p>Ready to ensure your website delivers the quality your business deserves? Let's discuss how our QA services can protect your investment, enhance your reputation, and drive digital success.</p>
        
        <p>Because when it comes to website quality, hoping for the best isn't a strategy—ensuring the best is.</p>
      `,
      date: "July 14, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
      author: "Muthuramakrishnan",
      authorImage: "/src/assets/profile.png"
    },
    {
      id: 4,
      title: "Manual vs. Automated Testing: Which One Is Right for Your Web App?",
      excerpt: "Manual or automated testing? Here's how I decide which approach fits best - based on the project, timeline, and long-term goals of your web app.",
      content: `
        <p>When you're building a web application - especially one meant for real users and real growth - testing is not optional. One of the most common questions I get from clients is: should we go with manual testing or invest in automation?</p>
    
        <p>As someone who's worked closely with QA engineers and managed multiple web projects at Vikoshiya Technologies, I've learned that the answer isn't always black and white. Let's break it down.</p>
    
        <h2>What Is Manual Testing?</h2>
        <p>Manual testing is exactly what it sounds like - humans clicking through the app, checking if features behave as expected, and reporting bugs. It's flexible, intuitive, and great for catching unexpected issues like design flaws or strange edge cases.</p>
    
        <h3>When I Recommend Manual Testing:</h3>
        <ul>
          <li>Early-stage MVPs or short-term projects</li>
          <li>Features still changing frequently</li>
          <li>User experience and UI feedback is critical</li>
          <li>Quick exploratory or smoke tests</li>
        </ul>
    
        <p>In fact, for many new client apps, we always begin with manual testing. It's fast to set up, and allows us to iterate quickly during development sprints.</p>
    
        <h2>What Is Automated Testing?</h2>
        <p>Automated testing involves writing scripts or code that test your application automatically. These tests can be run again and again - after every code change - saving time and catching bugs early.</p>
    
        <h3>When I Recommend Automated Testing:</h3>
        <ul>
          <li>Large-scale web apps with stable features</li>
          <li>Critical business flows (checkout, login, dashboard)</li>
          <li>Long-term projects that require CI/CD pipelines</li>
          <li>Apps with multiple releases and updates</li>
        </ul>
    
        <p>At Vikoshiya, we use tools like Cypress, Playwright, and Jest to create automated test suites that run as part of our deployment pipeline. They save us time and give clients confidence in every release.</p>
    
        <h2>Manual vs. Automated: Pros and Cons</h2>
        <table>
          <thead>
            <tr><th>Manual Testing</th><th>Automated Testing</th></tr>
          </thead>
          <tbody>
            <tr><td>Flexible & intuitive</td><td>Fast & repeatable</td></tr>
            <tr><td>No coding required</td><td>Initial setup takes time</td></tr>
            <tr><td>Good for UI/UX feedback</td><td>Great for regression testing</td></tr>
            <tr><td>Prone to human error</td><td>Can miss visual issues</td></tr>
          </tbody>
        </table>
    
        <h2>So, Which One Should You Choose?</h2>
        <p>Honestly, it depends on your app's stage and scale. My go-to strategy is to <strong>start with manual</strong>, then <strong>introduce automation gradually</strong> as the product stabilizes.</p>
        <p>This hybrid approach has worked best for our projects - it gives us speed and flexibility early on, and reliability as the app grows.</p>
    
        <h2>Final Thoughts</h2>
        <p>Manual testing is a great starting point. Automated testing is your long-term ally. If you're building a serious web app, you'll need both at different stages.</p>
        <p>If you're unsure which direction to go, reach out. I'd be happy to take a look at your web app and help you build a smart QA roadmap.</p>
      `,
      date: "July 28, 2025",
      category: "Quality Assurance",
      image: "https://i.pinimg.com/1200x/2a/33/c7/2a33c7347de60d0c65be83a72c4495be.jpg",
      author: "Rajesh Kumar",
      authorImage: "/src/assets/RK.png"
    },
    {
      id: 5,
      title: "E-commerce Essentials: Must-Have Features for Online Stores",
      excerpt: "Planning to launch your online store? Discover the must-have features that turn visitors into loyal customers, from intuitive catalogs and secure checkout to mobile-first design and post-purchase support.",
      content: `
        <p>Planning to launch your online store? As a web development company that's built our own ecommerce platform (Vikoshiya Shop), we know firsthand what features can make or break an online business. Let's dive into the must-have features that turn visitors into loyal customers.</p>
        <h2> Core Shopping Experience Features</h2>
        <h3>1. Intuitive Product Catalog</h3>
        <ul>
          <li>Clear product categories with logical navigation</li>
          <li>High-quality product images with zoom functionality</li>
          <li>Detailed product descriptions including specifications</li>
          <li>Customer reviews and ratings for social proof</li>
          <li>Related products to increase average order value</li>
          <li>Stock availability indicators to prevent disappointment</li>
        </ul>
        <h3>2. Smart Search & Filtering</h3>
        <ul>
          <li>Auto-complete search with typo tolerance</li>
          <li>Advanced filters (price, brand, color, size, ratings)</li>
          <li>Search suggestions based on popular queries</li>
          <li>"No results" page with alternative suggestions</li>
        </ul>
        <h3>3. Streamlined Shopping Cart</h3>
        <ul>
          <li>Persistent cart that saves items across sessions</li>
          <li>Quick add/remove functionality</li>
          <li>Real-time price calculations including taxes and shipping</li>
          <li>Save for later option</li>
          <li>Estimated delivery dates</li>
        </ul>
        <h2> Secure Checkout Process</h2>
        <h3>4. Multiple Payment Options</h3>
        <ul>
          <li>Credit/Debit cards (Visa, MasterCard, Rupay)</li>
          <li>Digital wallets (Paytm, PhonePe, Google Pay)</li>
          <li>UPI payments for Indian customers</li>
          <li>Net banking for traditional users</li>
          <li>Cash on delivery for trust-building</li>
          <li>EMI options for expensive items</li>
        </ul>
        <h3>5. Guest Checkout</h3>
        <ul>
          <li>No forced registration for first-time buyers</li>
          <li>Optional account creation after purchase</li>
          <li>Quick checkout in under 3 clicks</li>
        </ul>
        <h3>6. Security Features</h3>
        <ul>
          <li>SSL certificates for data encryption</li>
          <li>PCI DSS compliance for payment security</li>
          <li>Two-factor authentication for accounts</li>
          <li>Secure payment gateways like Razorpay, Stripe</li>
        </ul>
        <h2> Mobile-First Design</h2>
        <h3>7. Responsive Experience</h3>
        <ul>
          <li>Touch-friendly navigation and buttons</li>
          <li>Fast loading times (under 3 seconds)</li>
          <li>Mobile-optimized checkout process</li>
          <li>Thumb-friendly design for one-handed use</li>
        </ul>
        <h3>8. Progressive Web App (PWA) Features</h3>
        <ul>
          <li>Offline browsing capability</li>
          <li>Push notifications for offers and updates</li>
          <li>App-like experience without app store download</li>
          <li>Fast loading even on slow connections</li>
        </ul>
        <h2> Shipping & Logistics</h2>
        <h3>9. Flexible Delivery Options</h3>
        <ul>
          <li>Multiple shipping methods (standard, express, same-day)</li>
          <li>Delivery date selection when possible</li>
          <li>Real-time shipping costs calculation</li>
          <li>Free shipping thresholds to increase order value</li>
        </ul>
        <h3>10. Order Tracking</h3>
        <ul>
          <li>Real-time order status updates</li>
          <li>SMS and email notifications at each stage</li>
          <li>Tracking number integration with courier services</li>
          <li>Expected delivery time estimates</li>
        </ul>
        <h2> Customer Account Management</h2>
        <h3>11. User-Friendly Accounts</h3>
        <ul>
          <li>Easy registration and login process</li>
          <li>Social media login options (Google, Facebook)</li>
          <li>Order history and status tracking</li>
          <li>Wishlist functionality for future purchases</li>
          <li>Address book for faster checkout</li>
        </ul>
        <h3>12. Personalization Features</h3>
        <ul>
          <li>Recently viewed products</li>
          <li>Personalized recommendations based on browsing history</li>
          <li>Customized homepage for returning customers</li>
          <li>Birthday and anniversary special offers</li>
        </ul>
        <h2> Post-Purchase Experience</h2>
        <h3>13. Returns & Refunds</h3>
        <ul>
          <li>Clear return policy prominently displayed</li>
          <li>Easy return process with return labels</li>
          <li>Multiple refund options (original payment method, store credit)</li>
          <li>Return tracking system</li>
        </ul>
        <h3>14. Customer Support</h3>
        <ul>
          <li>Live chat for instant help</li>
          <li>FAQ section for common queries</li>
          <li>Contact forms for detailed issues</li>
          <li>Phone support for complex problems</li>
          <li>Order-specific help pages</li>
        </ul>
        <h2> Admin & Management Features</h2>
        <h3>15. Inventory Management</h3>
        <ul>
          <li>Real-time stock tracking</li>
          <li>Low stock alerts for reordering</li>
          <li>Bulk product upload capabilities</li>
          <li>Inventory reports and analytics</li>
        </ul>
        <h3>16. Analytics & Reporting</h3>
        <ul>
          <li>Sales reports by product, category, time period</li>
          <li>Customer behavior analytics</li>
          <li>Conversion tracking throughout the funnel</li>
          <li>Revenue insights and trends</li>
        </ul>
        <h2> SEO & Marketing Features</h2>
        <h3>17. Search Engine Optimization</h3>
        <ul>
          <li>SEO-friendly URLs for products and categories</li>
          <li>Meta tags optimization</li>
          <li>Schema markup for rich snippets</li>
          <li>Sitemap generation for search engines</li>
        </ul>
        <h3>18. Marketing Tools</h3>
        <ul>
          <li>Discount codes and coupon management</li>
          <li>Email marketing integration</li>
          <li>Social media sharing buttons</li>
          <li>Abandoned cart recovery emails</li>
        </ul>
        <h2> Pro Tips from Our Experience</h2>
        <h3>What We've Learned:</h3>
        <ul>
          <li>Simple is better - Don't overwhelm users with too many options</li>
          <li>Speed matters more than fancy animations</li>
          <li>Trust signals (reviews, security badges) increase conversions</li>
          <li>Mobile experience can't be an afterthought</li>
          <li>Customer support quality directly impacts repeat purchases</li>
        </ul>
        <h3>Common Mistakes to Avoid:</h3>
        <ul>
          <li>Complicated checkout processes</li>
          <li>Hidden shipping costs revealed at the last step</li>
          <li>Poor mobile experience on any device</li>
          <li>Weak search functionality that can't find products</li>
          <li>No guest checkout option</li>
        </ul>
        <h2> Getting Started with Your Online Store</h2>
        <p>At Vikoshiya Technologies, we've helped businesses launch successful ecommerce stores by focusing on these essential features. Our approach includes:</p>
        <h3>Our Ecommerce Development Process:</h3>
        <ul>
          <li>Requirements analysis - Understanding your business needs</li>
          <li>Custom design - Creating unique, brand-aligned experiences</li>
          <li>Feature development - Building only what you actually need</li>
          <li>Quality testing - Ensuring everything works perfectly</li>
          <li>Launch support - Being there when you go live</li>
          <li>Ongoing maintenance - Keeping your store updated and secure</li>
        </ul>
        <h3>Why Choose Us for Your Ecommerce Project:</h3>
        <ul>
          <li>Real experience - We run our own online store (Vikoshiya Shop)</li>
          <li>Modern technology - Using React, Node.js, and cloud platforms</li>
          <li>Security first - Implementing best practices from day one</li>
          <li>Mobile-optimized - Every store we build works perfectly on phones</li>
          <li>Honest pricing - No hidden costs or surprise fees</li>
          <li>Long-term support - We're in it for your success, not just the project</li>
        </ul>
        <h2>🎯 Ready to Launch Your Online Store?</h2>
        <p>Building an ecommerce store with all these features might seem overwhelming, but it doesn't have to be. We help you prioritize based on your budget and business goals, ensuring you get the features that matter most for your success.</p>
        <p>Start with the basics, then grow. That's our philosophy, and it works.</p>
        <p>Want to discuss your ecommerce project? We'd love to hear about your business and share how we can help you build an online store that actually drives sales.</p>
        <p>Contact us today:</p>
        <ul>
          <li>📧 Email: info@vikoshiyatechnologies.com</li>
          <li>📞 Phone: +91 [Your Number]</li>
          <li>🌐 Website: vikoshiyatechnologies.com</li>
          <li>💼 LinkedIn: <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer">Vikoshiya Technologies</a></li>
        </ul>
        <p>At Vikoshiya Technologies, we don't just build online stores - we build digital experiences that grow your business.</p>
        <p><strong>Let's build something meaningful - together.</strong></p>
      `,
      date: "August 1, 2025",
      category: "Ecommerce",
      image: "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Muthuramakrishnan M",
      authorImage: "/src/assets/profile.png"
    },
    {
      id: 6,
      title: "Website Timeline: How Long Should Development Really Take?",
      excerpt: "Creating a website can be an exciting journey—but one of the most common questions clients ask is, 'How long will it take?' Unfortunately, there's no universal answer. Some websites are completed in days, while others take months.",
      date: "August 8, 2025",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Logeshwari",
      authorImage: "/src/assets/logesh.png",
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
        "datePublished": "2025-08-10",
        "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      content: `
      <p>Creating a website is more than just a technical task—it's a creative and strategic process that shapes how your brand is experienced online. One of the most frequent questions clients ask is, "How long will it take to build my website?" The answer is rarely straightforward. Some websites can be ready in a matter of days, while others require months of careful planning and execution.</p>
    
      <p>The timeline depends on many factors: the complexity of your design, the availability of your content, the technology you choose, and even the speed of communication between you and your development team. In this guide, we'll break down these factors, outline typical timelines for different website types, walk you through each development stage, and share strategies to keep your project on track without sacrificing quality.</p>
    
      <h2>1. What Affects Website Development Time?</h2>
      <p>Website development isn't just about coding. A successful project blends creativity, technology, and strategy. The following factors have the biggest impact on your timeline:</p>
    
      <ul>
        <li><strong>🧱 Project Scope</strong> — The broader your site's functionality, the longer it will take. A small, informational website can be built quickly, whereas a platform with memberships, dashboards, and real-time integrations will require significantly more work.</li>
        <li><strong>🎨 Design Complexity</strong> — Clean and minimal templates are faster to implement than intricate, fully custom designs with animations, micro-interactions, and advanced layouts.</li>
        <li><strong>📄 Content Availability</strong> — If your copy, images, videos, and graphics are ready early, your timeline will shrink. Waiting for content is one of the top reasons projects stall.</li>
        <li><strong>💬 Speed of Feedback</strong> — Fast, clear feedback during design reviews and development milestones keeps the project moving forward. Delays in approvals can push timelines back by weeks.</li>
        <li><strong>🔧 Technology & Features</strong> — Using a CMS like WordPress or Webflow can speed up delivery. However, custom-coded solutions or advanced integrations (e.g., e-commerce payment gateways, booking systems) will take longer.</li>
        <li><strong>👨‍👩‍👧‍👦 Team Expertise</strong> — Experienced teams can anticipate challenges, make faster decisions, and deliver a polished product on time.</li>
      </ul>
    
      <h2>2. How Long Does It Really Take? Estimated Timelines</h2>
      <p>Here are common website types with typical development timelines (assuming clear requirements and timely communication):</p>
      <table>
        <thead>
          <tr>
            <th>Website Type</th>
            <th>Estimated Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic static site (3—5 pages)</td>
            <td>1—2 weeks</td>
          </tr>
          <tr>
            <td>Small business website</td>
            <td>2—4 weeks</td>
          </tr>
          <tr>
            <td>Medium dynamic website</td>
            <td>4—6 weeks</td>
          </tr>
          <tr>
            <td>E-commerce website</td>
            <td>6—10 weeks</td>
          </tr>
          <tr>
            <td>Custom web application</td>
            <td>3—6 months+</td>
          </tr>
        </tbody>
      </table>
    
      <h2>3. The Website Development Process</h2>
      <p>A professional website project is typically divided into the following stages:</p>
      <ul>
        <li><strong>🔍 Discovery & Planning (3—5 Days)</strong> — Defining goals, audience, features, and creating a project roadmap.</li>
        <li><strong>✏️ Wireframing & Design (1—2 Weeks)</strong> — Crafting user flows, layouts, and visual styles that align with your brand.</li>
        <li><strong>💻 Development (2—6 Weeks or More)</strong> — Building the structure, coding features, integrating systems, and ensuring compatibility across devices and browsers.</li>
        <li><strong>🧪 Testing & Quality Assurance (3—7 Days)</strong> — Checking for bugs, optimizing performance, and refining the design.</li>
        <li><strong>🚀 Launch (1 Day)</strong> — Migrating the site to the live environment and ensuring a smooth release.</li>
        <li><strong>🔧 Post-Launch Support (Ongoing)</strong> — Security updates, content updates, and new feature rollouts.</li>
      </ul>
    
      <h2>4. Strategies to Speed Up the Process</h2>
      <p>While rushing a project can harm quality, you can still keep timelines short by following these best practices:</p>
      <ul>
        <li>✅ Prepare all content before development begins.</li>
        <li>✅ Provide clear and consolidated feedback.</li>
        <li>✅ Choose technology that fits your needs without overcomplicating.</li>
        <li>✅ Work with an experienced and well-coordinated team.</li>
        <li>✅ Use collaboration tools like Trello, Asana, or Notion for smooth communication.</li>
      </ul>
    
      <h2>5. Common Causes of Delays</h2>
      <p>Even well-planned projects can face setbacks. The most common are:</p>
      <ul>
        <li>⚠️ Frequent changes to scope or requirements.</li>
        <li>⚠️ Delays in providing content or approvals.</li>
        <li>⚠️ Technical issues or unexpected integration challenges.</li>
        <li>⚠️ Underestimating testing and revision time.</li>
      </ul>
    
      <h2>Conclusion</h2>
      <p>Website development timelines vary greatly, but with proper planning, clear communication, and realistic expectations, you can ensure your site launches on time and delivers the impact you envision. Remember: a website is an investment in your brand's future—building it right is more important than building it fast.</p>
    `, 
  },
  {
    id: 7,
    title: "Domain Names and Hosting: A Business Owner's Guide",
    excerpt: "Understanding domain names and web hosting is crucial for any business going online. Learn the key differences, best practices for choosing domains, hosting types, and how to set up your digital foundation for success.",
    date: "August 14, 2025",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Vijayalakshmi K",
    authorImage: "/src/assets/v1.png",
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
    },
    content: `
      <h2>Domain Names and Hosting: A Business Owner's Guide</h2>
      <p>In today's digital-first world, your website is often the first touchpoint for customers. Before launching, you need to understand two key components: <strong>domain names</strong> and <strong>web hosting</strong>.</p>
      
      <h3>What is a Domain Name?</h3>
      <p>A domain name is your website's address—what people type into a browser to find you (e.g., <em>www.yourbusiness.com</em>). Think of it as your business's street address, while hosting is the building where your website "lives."</p>
      <ul>
        <li><strong>Domain Name:</strong> Street address</li>
        <li><strong>Hosting:</strong> The building housing your business</li>
      </ul>
      <p>The NCAA is a great example of strategic domain and hosting management. They own NCAA.com along with related domains like MarchMadness.com and FinalFour.org to ensure fans find official, secure content.</p>
      
      <h3>Choosing the Right Domain Name</h3>
      <ul>
        <li>Keep it short, simple, and easy to type</li>
        <li>Make it brandable and unique</li>
        <li>Use relevant keywords for SEO</li>
        <li>Avoid numbers and hyphens</li>
        <li>Secure multiple extensions (.com, .org, .net)</li>
      </ul>
      <p><em>Pro Tip:</em> Search for your desired domain using trusted registrars like Namecheap, GoDaddy, or Google Domains—and buy it before making your brand public.</p>
      
      <h3>What is Web Hosting?</h3>
      <p>Web hosting stores your site's files and makes them accessible online. The right hosting ensures speed, reliability, and scalability.</p>
      <ul>
        <li><strong>Shared Hosting:</strong> Budget-friendly, good for small sites</li>
        <li><strong>VPS Hosting:</strong> More power and control for growing businesses</li>
        <li><strong>Dedicated Hosting:</strong> Full control, high performance</li>
        <li><strong>Cloud Hosting:</strong> Flexible and scalable for fast growth</li>
      </ul>
      <p>The NCAA uses cloud hosting with load balancing during peak events to handle massive traffic without downtime.</p>
      
      <h3>NCAA Case Study: Smart Domain & Hosting Strategy</h3>
      <ol>
        <li>Centralized domain control for consistent branding</li>
        <li>Hosting optimized for high-traffic events</li>
        <li>Strong security (SSL, DDoS protection, monitoring)</li>
        <li>Event-specific domains for easy navigation</li>
      </ol>
      
      <h3>Domain vs Hosting: Key Differences</h3>
      <table>
        <tr>
          <th>Feature</th>
          <th>Domain Name</th>
          <th>Web Hosting</th>
        </tr>
        <tr>
          <td>What it is</td>
          <td>Website address (URL)</td>
          <td>Server space for storing files</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>www.mybusiness.com</td>
          <td>Bluehost, Hostinger, GoDaddy</td>
        </tr>
      </table>
      
      <h3>Getting Started</h3>
      <ol>
        <li>Choose and register your domain name</li>
        <li>Select a hosting provider (some offer both in one package)</li>
        <li>Connect your domain to your hosting</li>
        <li>Build your site using tools like WordPress, Shopify, or Wix</li>
      </ol>
      
      <h3>Top Hosting Recommendations</h3>
      <ul>
        <li><strong>Best for beginners:</strong> Bluehost</li>
        <li><strong>Best for e-commerce:</strong> Shopify or SiteGround</li>
        <li><strong>Budget-friendly:</strong> Hostinger or Namecheap</li>
      </ul>
      
      <p><strong>Final Thoughts:</strong> Your domain name and hosting form the foundation of your online presence. Choose wisely, and you'll set your business up for lasting digital success.</p>
      
      <h2>Why Domain and Hosting Matter for Your Business</h2>
      <p>At Vikoshiya Technologies, we've helped countless businesses establish their online presence. Here's why getting your domain and hosting strategy right from the start is crucial:</p>
      
      <h3>Brand Protection and Trust</h3>
      <p>Your domain name is more than just a web address—it's part of your brand identity. A professional domain (like yourbusiness.com) builds trust with customers, while a free subdomain (yourbusiness.freesite.com) can make your business appear less credible.</p>
      
      <h3>SEO Benefits</h3>
      <p>Search engines favor websites with relevant domain names and fast hosting. A well-chosen domain with keywords related to your business can improve your search rankings, while reliable hosting ensures your site loads quickly—a key ranking factor.</p>
      
      <h3>Scalability and Growth</h3>
      <p>As your business grows, your hosting needs will evolve. Starting with the right hosting provider who offers scalable solutions means you won't need to migrate your site later—a process that can be complex and risky.</p>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Choosing a domain that's too similar to competitors</strong> - This can confuse customers and dilute your brand</li>
        <li><strong>Going with the cheapest hosting option</strong> - Poor hosting can lead to slow load times, frequent downtime, and security issues</li>
        <li><strong>Not considering future needs</strong> - Plan for growth when selecting your hosting plan</li>
        <li><strong>Forgetting to renew your domain</strong> - Set up auto-renewal to prevent losing your domain</li>
        <li><strong>Not securing related domains</strong> - Register common variations and extensions to protect your brand</li>
      </ul>
      
      <h2>How Vikoshiya Technologies Can Help</h2>
      <p>We offer comprehensive domain and hosting solutions tailored to your business needs:</p>
      <ul>
        <li>Domain research and registration assistance</li>
        <li>Hosting recommendations based on your specific requirements</li>
        <li>Complete website setup and configuration</li>
        <li>Ongoing maintenance and support</li>
        <li>Migration services if you need to change providers</li>
      </ul>
      
      <p>Ready to establish your digital foundation? Contact us today to discuss your domain and hosting needs. We'll help you make the right choices for your business's online success.</p>
    `
  }  
  ] 

  // Handle author image click
  const handleAuthorImageClick = (authorImage, authorName) => {
    setSelectedImage({
      src: authorImage,
      alt: `${authorName} - Author`,
      name: authorName
    })
    setIsImageModalOpen(true)
  }

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
      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={selectedImage?.src}
        imageAlt={selectedImage?.alt}
        authorName={selectedImage?.name}
      />

      {/* Structured Data for AI */}
      {post.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.structuredData)
          }}
        />
      )}
      
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
          <header className="mb-12" itemScope itemType="http://schema.org/Article">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm" itemProp="datePublished">{post.date}</span>
              {post.readTime && (
                <>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" itemProp="headline">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6" itemProp="description">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <img 
                src={post.authorImage}
                alt="Author"
                className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transition-all duration-200"
                onClick={() => handleAuthorImageClick(post.authorImage, post.author)}
                title="Click to view author photo"
              />
              <span itemProp="author">By {post.author}</span>
            </div>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image - moved above content */}
          <div className="mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Article Summary */}
          <ArticleSummary post={post} />
          
          {/* Article Content - now below image */}
          {post.content && typeof post.content === 'string' ? (
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
          ) : (
            <StructuredContent content={post.content} />
          )}

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-600">Share this article:</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-x-twitter text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/vikoshiya-technologies-pvt-ltd/posts/?feedView=all" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="https://whatsapp.com/channel/0029Vb6Oqf3ISTkIJqCVf03t" target="_blank" className="text-blue-600 hover:text-blue-700" aria-label="Whatsapp">
                  <i className="fab fa-whatsapp"></i>
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

      {/* Related Articles */}
      <RelatedArticles currentPost={post} allPosts={blogPosts} />

      <CTASection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default BlogPost