import { useState, useEffect } from 'react'

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSitemapOpen, setIsSitemapOpen] = useState(false)

  // Contact details from the Contact page
  const phoneNumber = "9585754821" // Phone number from contact page
  const whatsappNumber = "9585754821" // Using same number for WhatsApp
  const whatsappMessage = "Hi! I’m exploring the services of Vikoshiya Technologies. Could you provide me with more details?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsExpanded(false) // Close expanded menu when hiding
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Check for sitemap modal
  useEffect(() => {
    const checkSitemapModal = () => {
      const sitemapModal = document.querySelector('[class*="fixed inset-0 bg-black bg-opacity-70"]')
      setIsSitemapOpen(!!sitemapModal)
    }

    // Check immediately
    checkSitemapModal()

    // Set up observer for DOM changes
    const observer = new MutationObserver(checkSitemapModal)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  // Hide buttons when sitemap is open
  if (isSitemapOpen) {
    return null
  }

  return (
    <>
      {/* Floating Action Buttons */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        {/* Main Action Button */}
        <div className="relative">
          {/* WhatsApp Button - appears when expanded */}
          <div className={`absolute bottom-16 right-0 transition-all duration-300 transform ${
            isExpanded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
          }`}>
            <button
              onClick={handleWhatsAppClick}
              className="floating-action-btn whatsapp-btn text-white p-4 rounded-full transition-all duration-300 group relative"
              title="Chat on WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </button>
            {/* WhatsApp Label */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Chat on WhatsApp
              </div>
              {/* Arrow pointing to button */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>

          {/* Call Button - appears when expanded */}
          <div className={`absolute bottom-32 right-0 transition-all duration-300 transform ${
            isExpanded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
          }`}>
            <button
              onClick={handleCallClick}
              className="floating-action-btn call-btn text-white p-4 rounded-full transition-all duration-300 group relative"
              title="Call us directly"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </button>
            {/* Call Label */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Call us directly
              </div>
              {/* Arrow pointing to button */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>

          {/* Main Toggle Button */}
          <button
            onClick={toggleExpanded}
            className={`floating-main-btn floating-action-btn text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 relative ${
              isExpanded ? 'rotate-45' : 'rotate-0'
            }`}
            title="Contact Options"
          >
            {isExpanded ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop - closes the menu when clicked */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  )
}

export default FloatingActions