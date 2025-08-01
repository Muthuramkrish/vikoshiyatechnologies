import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import WebDevelopment from './pages/WebDevelopment.jsx'
import QualityAssurance from './pages/QualityAssurance.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Ecommerce from './pages/Ecommerce.jsx'
import UnderMaintenance from './pages/UnderMaintenance.jsx'

function App() {
  return (
    // <div className="font-sans bg-gray-50">
    //   <ScrollToTop />
    //   <Navigation />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/privacy" element={<Privacy />} />
    //     <Route path="/terms" element={<Terms />} />
    //     <Route path="/web-development" element={<WebDevelopment />} />
    //     <Route path="/quality-assurance" element={<QualityAssurance />} />
    //     <Route path="/blog/:id" element={<BlogPost />} />
    //     <Route path="/ecommerce" element={<Ecommerce />} />
    //     <Route path="/under-maintenance" element={<UnderMaintenance />} />
    //   </Routes>
    // </div>
    <UnderMaintenance />
  )
}

export default App 