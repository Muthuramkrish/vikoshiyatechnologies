// import React from 'react';
// import Footer from '../components/Footer.jsx';
// import CTASection from '../components/CTASection.jsx';

// const Hrms = () => {
//   return (
//     <div className="font-sans bg-gray-50">
//       {/* Hero Section with Background Image */}
//       <section 
//         className="relative w-full h-[100vh] flex items-center justify-center mb-12" 
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="relative z-10 text-center w-full">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//             Human Resource Management System
//           </h1>
//           <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
//             Streamline your HR operations with comprehensive, cloud-based HRMS solutions
//           </p>
//         </div>
//       </section>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="flex justify-center">
//             <img 
//               src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//               alt="HRMS dashboard and employee management interface" 
//               className="rounded-lg shadow-xl max-w-lg md:max-w-xl w-full"
//             />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Complete HR Management Solutions
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Transform your human resource operations with our comprehensive HRMS platform. From employee onboarding to performance management, our solutions automate HR processes, improve efficiency, and enhance employee experience across your organization.
//             </p>
//             <div className="bg-blue-50 p-6 rounded-lg mb-8">
//               <h3 className="text-xl font-semibold text-blue-800 mb-4">
//                 Our HRMS Features Include:
//               </h3>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Employee information management & digital records
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Attendance tracking & time management system
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Payroll processing & salary management
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Leave management & approval workflows
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Performance evaluation & goal tracking
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Recruitment & candidate management
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-check-circle text-blue-500 mt-1 mr-2"></i>
//                   Employee self-service portal & mobile access
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Benefits Section */}
//       <section className="py-16 bg-blue-50">
//         <div className="max-w-5xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">
//             Why Choose Our HRMS Solutions?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
//               <i className="fas fa-clock text-blue-600 text-3xl mb-4"></i>
//               <h3 className="font-semibold text-xl mb-2">Time & Cost Savings</h3>
//               <p className="text-gray-600">
//                 Automate repetitive HR tasks, reduce administrative overhead, and free up your HR team to focus on strategic initiatives and employee development.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
//               <i className="fas fa-chart-bar text-blue-600 text-3xl mb-4"></i>
//               <h3 className="font-semibold text-xl mb-2">Data-Driven Insights</h3>
//               <p className="text-gray-600">
//                 Make informed decisions with comprehensive analytics, reporting dashboards, and real-time insights into workforce trends and performance metrics.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
//               <i className="fas fa-shield-alt text-blue-600 text-3xl mb-4"></i>
//               <h3 className="font-semibold text-xl mb-2">Compliance & Security</h3>
//               <p className="text-gray-600">
//                 Ensure regulatory compliance with automated reporting, secure data handling, and built-in privacy controls that protect sensitive employee information.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
//               <i className="fas fa-users text-blue-600 text-3xl mb-4"></i>
//               <h3 className="font-semibold text-xl mb-2">Employee Experience</h3>
//               <p className="text-gray-600">
//                 Enhance employee satisfaction with self-service capabilities, transparent processes, and streamlined communication between HR and staff.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
//               <i className="fas fa-expand-arrows-alt text-blue-600 text-3xl mb-4"></i>
//               <h3 className="font-semibold text-xl mb-2">Scalable Platform</h3>
//               <p className="text-gray-600">
//                 Grow your business with confidence using our flexible HRMS that adapts to your changing needs, from startups to large enterprises.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 hover:border">
//               <i className="fas fa-cloud text-blue-600 text-3xl mb-4"></i>
//               <h3 className="font-semibold text-xl mb-2">Cloud-Based Access</h3>
//               <p className="text-gray-600">
//                 Access your HR data anytime, anywhere with secure cloud hosting, automatic backups, and seamless integration with existing business systems.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <CTASection />  
      
//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Hrms;