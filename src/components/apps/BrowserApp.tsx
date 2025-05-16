// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, RefreshCw, Search, X, Heart, ExternalLink } from 'lucide-react';

// interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const BrowserApp: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('contact');
//   const [url, setUrl] = useState('https://portfolio.example/contact');
//   const [contactForm, setContactForm] = useState<ContactFormData>({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
  
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     switch (tab) {
//       case 'contact':
//         setUrl('https://portfolio.example/contact');
//         break;
//       case 'github':
//         setUrl('https://github.com/username');
//         break;
//       case 'linkedin':
//         setUrl('https://linkedin.com/in/username');
//         break;
//       case 'twitter':
//         setUrl('https://twitter.com/username');
//         break;
//     }
//   };
  
//   const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setContactForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };
  
//   const handleContactFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, you would submit the form data to a server
//     console.log('Form submitted:', contactForm);
//     setFormSubmitted(true);
    
//     // Reset form after submission
//     setTimeout(() => {
//       setContactForm({
//         name: '',
//         email: '',
//         message: ''
//       });
//       setFormSubmitted(false);
//     }, 3000);
//   };
  
//   // Render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'contact':
//         return (
//           <div className="max-w-2xl mx-auto p-6">
//             <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            
//             <p className="mb-4 text-gray-600">
//               I'm always open to new opportunities and collaborations. Feel free to reach out!
//             </p>
            
//             {formSubmitted ? (
//               <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
//                 <p className="font-medium">Thank you for your message!</p>
//                 <p>I'll get back to you as soon as possible.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleContactFormSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={contactForm.name}
//                     onChange={handleContactFormChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={contactForm.email}
//                     onChange={handleContactFormChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     value={contactForm.message}
//                     onChange={handleContactFormChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   ></textarea>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             )}
            
//             <div className="mt-10 flex flex-col sm:flex-row items-center justify-around p-6 bg-gray-50 rounded-lg">
//               <a 
//                 href="#github" 
//                 onClick={(e) => { e.preventDefault(); handleTabChange('github'); }}
//                 className="flex items-center justify-center p-3 mb-4 sm:mb-0"
//               >
//                 <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//                 <span>GitHub</span>
//               </a>
              
//               <a 
//                 href="#linkedin" 
//                 onClick={(e) => { e.preventDefault(); handleTabChange('linkedin'); }}
//                 className="flex items-center justify-center p-3 mb-4 sm:mb-0"
//               >
//                 <svg className="w-8 h-8 mr-2 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                 </svg>
//                 <span>LinkedIn</span>
//               </a>
              
//               <a 
//                 href="#twitter" 
//                 onClick={(e) => { e.preventDefault(); handleTabChange('twitter'); }}
//                 className="flex items-center justify-center p-3"
//               >
//                 <svg className="w-8 h-8 mr-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//                 <span>Twitter</span>
//               </a>
//             </div>
//           </div>
//         );
//       case 'github':
//         return (
//           <div className="min-h-full flex flex-col items-center justify-center p-8 text-center">
//             <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//             </svg>
//             <h2 className="text-2xl font-bold mb-2">GitHub Profile</h2>
//             <p className="mb-6 text-gray-600">Check out my open source projects and contributions.</p>
//             <div className="flex items-center justify-center space-x-4">
//               <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
//                 <Heart className="w-4 h-4 mr-2" />
//                 Star
//               </button>
//               <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
//                 <ExternalLink className="w-4 h-4 mr-2" />
//                 View Profile
//               </button>
//             </div>
//           </div>
//         );
//       case 'linkedin':
//         return (
//           <div className="min-h-full flex flex-col items-center justify-center p-8 text-center">
//             <svg className="w-16 h-16 mb-4 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//             </svg>
//             <h2 className="text-2xl font-bold mb-2">LinkedIn Profile</h2>
//             <p className="mb-6 text-gray-600">Connect with me professionally and view my work experience.</p>
//             <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
//               <ExternalLink className="w-4 h-4 mr-2" />
//               View LinkedIn Profile
//             </button>
//           </div>
//         );
//       case 'twitter':
//         return (
//           <div className="min-h-full flex flex-col items-center justify-center p-8 text-center">
//             <svg className="w-16 h-16 mb-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//             </svg>
//             <h2 className="text-2xl font-bold mb-2">Twitter Profile</h2>
//             <p className="mb-6 text-gray-600">Follow me for updates on my latest projects and thoughts.</p>
//             <button className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500">
//               <ExternalLink className="w-4 h-4 mr-2" />
//               Follow @username
//             </button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };
  
//   return (
//     <div className="h-full flex flex-col bg-gray-50">
//       {/* Browser toolbar */}
//       <div className="h-10 bg-gray-200 flex items-center px-2 py-1 space-x-2">
//         <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-300">
//           <ChevronLeft className="w-4 h-4" />
//         </button>
//         <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-300">
//           <ChevronRight className="w-4 h-4" />
//         </button>
//         <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-300">
//           <RefreshCw className="w-4 h-4" />
//         </button>
        
//         <div className="flex-1 flex items-center bg-white rounded-md border border-gray-300 px-2">
//           <Search className="w-4 h-4 text-gray-400 mr-1" />
//           <input
//             type="text"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             className="flex-1 py-1 px-1 text-sm outline-none"
//           />
//         </div>
//       </div>
      
//       {/* Browser tabs */}
//       <div className="flex items-center bg-gray-300 px-2 text-sm">
//         <div 
//           className={`px-3 py-1 rounded-t-md flex items-center space-x-2 cursor-pointer ${
//             activeTab === 'contact' ? 'bg-white' : 'bg-gray-200 hover:bg-gray-100'
//           }`}
//           onClick={() => handleTabChange('contact')}
//         >
//           <span>Contact</span>
//           <X className="w-3 h-3 text-gray-500 hover:text-gray-700" />
//         </div>
//         <div 
//           className={`px-3 py-1 rounded-t-md flex items-center space-x-2 cursor-pointer ${
//             activeTab === 'github' ? 'bg-white' : 'bg-gray-200 hover:bg-gray-100'
//           }`}
//           onClick={() => handleTabChange('github')}
//         >
//           <span>GitHub</span>
//           <X className="w-3 h-3 text-gray-500 hover:text-gray-700" />
//         </div>
//         <div 
//           className={`px-3 py-1 rounded-t-md flex items-center space-x-2 cursor-pointer ${
//             activeTab === 'linkedin' ? 'bg-white' : 'bg-gray-200 hover:bg-gray-100'
//           }`}
//           onClick={() => handleTabChange('linkedin')}
//         >
//           <span>LinkedIn</span>
//           <X className="w-3 h-3 text-gray-500 hover:text-gray-700" />
//         </div>
//         <div 
//           className={`px-3 py-1 rounded-t-md flex items-center space-x-2 cursor-pointer ${
//             activeTab === 'twitter' ? 'bg-white' : 'bg-gray-200 hover:bg-gray-100'
//           }`}
//           onClick={() => handleTabChange('twitter')}
//         >
//           <span>Twitter</span>
//           <X className="w-3 h-3 text-gray-500 hover:text-gray-700" />
//         </div>
//         <div className="px-2 py-1 cursor-pointer">
//           <span className="text-gray-600">+</span>
//         </div>
//       </div>
      
//       {/* Browser content */}
//       <div className="flex-1 bg-white overflow-auto">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default BrowserApp;




import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Search,
  X,
  Heart,
  ExternalLink
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const BrowserApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [url, setUrl] = useState('https://portfolio.example/contact');
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'contact':
        setUrl('https://portfolio.example/contact');
        break;
      case 'github':
        setUrl('https://github.com/username');
        break;
      case 'linkedin':
        setUrl('https://linkedin.com/in/username');
        break;
      case 'twitter':
        setUrl('https://twitter.com/username');
        break;
    }
  };

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    setFormSubmitted(true);

    setTimeout(() => {
      setContactForm({
        name: '',
        email: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'contact':
        return (
          <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="mb-4 text-gray-600">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            {formSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleContactFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['github', 'linkedin', 'twitter'].map((platform) => (
                <a
                  href={`#${platform}`}
                  key={platform}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(platform);
                  }}
                  className="flex items-center justify-center bg-gray-100 p-4 rounded hover:bg-gray-200 transition"
                >
                  <span className="capitalize">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        );
      case 'github':
      case 'linkedin':
      case 'twitter':
        const colors = {
          github: 'text-black',
          linkedin: 'text-blue-700',
          twitter: 'text-blue-400'
        };

        return (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className={`w-16 h-16 mb-4 ${colors[activeTab]}`}>
              {activeTab === 'github' ? (
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626..." />
                </svg>
              ) : activeTab === 'linkedin' ? (
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14..." />
                </svg>
              ) : (
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557..." />
                </svg>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2 capitalize">{activeTab} Profile</h2>
            <p className="mb-6 text-gray-600">Check out my {activeTab} page.</p>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Profile
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100">
        <div className="flex gap-1">
          <button className="icon-btn"><ChevronLeft className="w-4 h-4" /></button>
          <button className="icon-btn"><ChevronRight className="w-4 h-4" /></button>
          <button className="icon-btn"><RefreshCw className="w-4 h-4" /></button>
        </div>
        <div className="flex-1 flex items-center bg-white border border-gray-300 rounded px-2">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-1 text-sm outline-none"
            placeholder="Enter URL"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap px-2 bg-gray-200 text-sm overflow-x-auto">
        {['contact', 'github', 'linkedin', 'twitter'].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`flex items-center px-4 py-2 m-1 rounded-t-md cursor-pointer ${
              activeTab === tab ? 'bg-white shadow' : 'bg-gray-300 hover:bg-gray-100'
            }`}
          >
            <span className="capitalize">{tab}</span>
            <X className="w-3 h-3 ml-2 text-gray-400 hover:text-red-500" />
          </div>
        ))}
        <div className="flex items-center px-4 py-2 m-1 text-gray-600 hover:text-black cursor-pointer">
          +
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-white">{renderContent()}</div>
    </div>
  );
};

export default BrowserApp;
