import Footer from '../components/Footer.jsx'

const Terms = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Clear, transparent terms that govern our web development and quality assurance partnership
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h2>
              <p className="text-gray-600 mb-4">Last updated: January 2024</p>
              <p className="text-gray-600">
                Welcome to Vikoshiya Technologies. These Terms of Service govern your use of our web development, 
                quality assurance, and IT consulting services. By engaging our services, you agree to these terms.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  Acceptance of Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  By accessing and using the services provided by Vikoshiya Technologies, you accept and agree to be bound by 
                  these terms and conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-laptop-code text-blue-600 mr-3"></i>
                  Our Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Vikoshiya Technologies specializes in:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Web Development:</strong> Custom websites, web applications, e-commerce platforms, and API development</li>
                  <li><strong>Quality Assurance:</strong> Comprehensive testing, automated test implementation, and performance optimization</li>
                  <li><strong>IT Consulting:</strong> Technology strategy, digital transformation, and technical advisory services</li>
                  <li><strong>Maintenance & Support:</strong> Ongoing website maintenance, updates, and technical support</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to modify, suspend, or discontinue any service with reasonable notice.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-file-contract text-blue-600 mr-3"></i>
                  Project Agreements & Payment Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  Each project is governed by a separate agreement that includes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Detailed project scope, deliverables, and timelines</li>
                  <li>Payment schedule and terms (typically 50% upfront, 50% upon completion)</li>
                  <li>Revision limits and change request procedures</li>
                  <li>Intellectual property rights and ownership transfer</li>
                  <li>Warranty and support terms</li>
                </ul>
                <p className="text-gray-600">
                  Late payments may result in project suspension and additional fees. All fees are non-refundable unless otherwise specified.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-copyright text-blue-600 mr-3"></i>
                  Intellectual Property Rights
                </h3>
                <p className="text-gray-600 mb-4">
                  Intellectual property ownership is clearly defined in our agreements:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Client Deliverables:</strong> Upon full payment, ownership transfers to the client</li>
                  <li><strong>Our Tools & Libraries:</strong> We retain rights to reusable code, frameworks, and tools</li>
                  <li><strong>Third-Party Components:</strong> Subject to their respective licenses and terms</li>
                  <li><strong>Portfolio Rights:</strong> We may showcase completed work in our portfolio</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-user-secret text-blue-600 mr-3"></i>
                  Confidentiality & Non-Disclosure
                </h3>
                <p className="text-gray-600 mb-4">
                  We take confidentiality seriously and protect your sensitive information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>All project information and client data is treated as confidential</li>
                  <li>We sign NDAs when required and maintain strict access controls</li>
                  <li>Team members are bound by confidentiality agreements</li>
                  <li>Secure data handling and disposal procedures are followed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-exclamation-triangle text-blue-600 mr-3"></i>
                  Limitation of Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  Our liability is limited as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Total liability is limited to the amount paid for the specific service</li>
                  <li>We are not responsible for third-party services or integrations</li>
                  <li>Force majeure events are excluded from liability</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-shield-alt text-blue-600 mr-3"></i>
                  Warranties & Guarantees
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide the following warranties:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Functionality:</strong> Services will work as specified in the project agreement</li>
                  <li><strong>Compatibility:</strong> Websites work on specified browsers and devices</li>
                  <li><strong>Security:</strong> Implementation of industry-standard security practices</li>
                  <li><strong>Support:</strong> 30-day warranty period for bug fixes and adjustments</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-handshake text-blue-600 mr-3"></i>
                  Client Responsibilities
                </h3>
                <p className="text-gray-600 mb-4">
                  To ensure project success, clients agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Provide timely feedback and approvals</li>
                  <li>Supply necessary content, assets, and access credentials</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Maintain backups of their data and systems</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-times-circle text-blue-600 mr-3"></i>
                  Termination & Cancellation
                </h3>
                <p className="text-gray-600 mb-4">
                  Either party may terminate the agreement with written notice:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>30-day notice period for ongoing projects</li>
                  <li>Immediate termination for material breach</li>
                  <li>Payment for work completed up to termination date</li>
                  <li>Return of client materials and data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-balance-scale text-blue-600 mr-3"></i>
                  Governing Law & Dispute Resolution
                </h3>
                <p className="text-gray-600 mb-4">
                  These terms are governed by the laws of our jurisdiction. Disputes will be resolved through:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Good faith negotiation between parties</li>
                  <li>Mediation if direct negotiation fails</li>
                  <li>Arbitration as a final resolution method</li>
                  <li>Court proceedings only as a last resort</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-edit text-blue-600 mr-3"></i>
                  Changes to Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  We may update these terms from time to time. Changes will be:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li>Posted on our website with effective dates</li>
                  <li>Communicated to active clients via email</li>
                  <li>Applicable to new projects and renewals</li>
                  <li>Subject to client acceptance for ongoing projects</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-envelope text-blue-600 mr-3"></i>
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">
                        <strong>Legal Department:</strong><br />
                        Email: legal@vikoshiya.com<br />
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

export default Terms 