import Footer from '../components/Footer.jsx'

const Privacy = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect your data while delivering exceptional web development and quality assurance services.
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 mb-4">Last updated: January 2024</p>
              <p className="text-gray-600">
                At Vikoshiya Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our web development and quality assurance services.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-database text-blue-600 mr-3"></i>
                  Information We Collect
                </h3>
                <p className="text-gray-600 mb-4">
                  We collect information to provide you with the best possible service experience:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and company details</li>
                  <li><strong>Project Information:</strong> Requirements, specifications, and technical details for web development projects</li>
                  <li><strong>Quality Assurance Data:</strong> Test cases, bug reports, and performance metrics for QA services</li>
                  <li><strong>Website Usage:</strong> Analytics data, cookies, and interaction patterns on our website</li>
                  <li><strong>Communication Records:</strong> Emails, chat logs, and meeting notes related to your projects</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-cogs text-blue-600 mr-3"></i>
                  How We Use Your Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Your information helps us deliver exceptional services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Develop and customize web solutions according to your specifications</li>
                  <li>Conduct comprehensive quality assurance testing and provide detailed reports</li>
                  <li>Provide technical support and maintenance services</li>
                  <li>Send project updates, invoices, and important communications</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-shield-alt text-blue-600 mr-3"></i>
                  Data Security & Protection
                </h3>
                <p className="text-gray-600 mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Secure cloud infrastructure with regular security audits</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                  <li>Employee training on data protection and privacy practices</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-handshake text-blue-600 mr-3"></i>
                  Information Sharing
                </h3>
                <p className="text-gray-600 mb-4">
                  We are committed to maintaining your trust and do not sell your personal information. We may share your information only in these circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>With your explicit consent for specific purposes</li>
                  <li>With trusted third-party service providers who assist in our operations</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-user-check text-blue-600 mr-3"></i>
                  Your Rights & Choices
                </h3>
                <p className="text-gray-600 mb-4">
                  You have complete control over your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request removal of your data (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-cookie-bite text-blue-600 mr-3"></i>
                  Cookies & Tracking
                </h3>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
                </ul>
                <p className="text-gray-600">
                  You can control cookie settings through your browser preferences.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-globe text-blue-600 mr-3"></i>
                  International Data Transfers
                </h3>
                <p className="text-gray-600 mb-4">
                  As a global technology company, your data may be processed in different countries. 
                  We ensure appropriate safeguards are in place to protect your information during international transfers.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-calendar-alt text-blue-600 mr-3"></i>
                  Data Retention
                </h3>
                <p className="text-gray-600 mb-4">
                  We retain your information only as long as necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Provide our services and maintain project records</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-envelope text-blue-600 mr-3"></i>
                  Contact Us
                </h3>
                <p className="text-gray-600 mb-4">
                  We welcome your questions and feedback about our privacy practices:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">
                        <strong>Privacy Officer:</strong><br />
                        Email: privacy@vikoshiya.com<br />
                        Phone: +1 (234) 567-890
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        <strong>Mailing Address:</strong><br />
                        Vikoshiya Technologies<br />
                        123 Main Street, Suite 400<br />
                        Cityville, Country 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Privacy 