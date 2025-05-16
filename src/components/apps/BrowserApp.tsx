import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Search,
  X,
  Heart,
  ExternalLink,
  Github,
  Linkedin,
  Twitter
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
        setUrl('https://github.com/thevivekchauhan');
        break;
      case 'linkedin':
        setUrl('https://linkedin.com/in/thevivekchauhan');
        break;
      case 'twitter':
        setUrl('https://twitter.com/vivekchauhan005');
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
          <div className="max-w-3xl mx-auto p-4 md:p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Get in Touch</h1>
            <p className="mb-6 text-gray-700">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            {formSubmitted ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 border border-green-200">
                <p className="font-medium">Thank you for your message!</p>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleContactFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { platform: 'github', icon: <Github className="w-5 h-5 mr-2" /> },
                { platform: 'linkedin', icon: <Linkedin className="w-5 h-5 mr-2" /> },
                { platform: 'twitter', icon: <Twitter className="w-5 h-5 mr-2" /> }
              ].map(({ platform, icon }) => (
                <a
                  href={`#${platform}`}
                  key={platform}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange(platform);
                  }}
                  className="flex items-center justify-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 border border-gray-200"
                >
                  {icon}
                  <span className="capitalize font-medium text-gray-800">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        );
      case 'github':
      case 'linkedin':
      case 'twitter':
        const platformData = {
          github: {
            color: 'text-gray-900',
            icon: <Github className="w-16 h-16" />,
            name: 'GitHub'
          },
          linkedin: {
            color: 'text-blue-700',
            icon: <Linkedin className="w-16 h-16" />,
            name: 'LinkedIn'
          },
          twitter: {
            color: 'text-blue-500',
            icon: <Twitter className="w-16 h-16" />,
            name: 'Twitter'
          }
        };

        return (
          <div className="flex flex-col items-center justify-center p-8 text-center h-full">
            <div className={`mb-6 ${platformData[activeTab].color}`}>
              {platformData[activeTab].icon}
            </div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{platformData[activeTab].name} Profile</h2>
            <p className="mb-6 text-gray-700 max-w-md">Connect with me on {platformData[activeTab].name} to see my latest work and updates.</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Profile
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-100 border-b border-gray-300">
        <div className="flex gap-1">
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <RefreshCw className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-full px-4 py-1 max-w-2xl mx-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-1 text-sm outline-none bg-transparent"
            placeholder="Enter URL"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-2 bg-gray-200 text-sm overflow-x-auto">
        {['contact', 'github', 'linkedin', 'twitter'].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`flex items-center px-4 py-2 rounded-t-md cursor-pointer border-b-2 ${
              activeTab === tab 
                ? 'bg-white border-blue-500 text-gray-900' 
                : 'border-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="capitalize whitespace-nowrap">{tab}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Handle tab close here
              }}
              className="ml-2 p-1 rounded-full hover:bg-gray-200"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900">
          +
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default BrowserApp;