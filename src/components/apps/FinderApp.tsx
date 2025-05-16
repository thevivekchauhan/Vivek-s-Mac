import React, { useState } from 'react';
import { Folder, FileText, Code, Layout, Share2 } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  type: 'web' | 'mobile' | 'design' | 'other';
  description: string;
  date: string;
  icon: React.ReactNode;
}

const FinderApp: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  
  const projects: Project[] = [
    {
      id: 1,
      name: 'E-Commerce Website',
      type: 'web',
      description: 'A full-featured e-commerce platform built with React and Node.js.',
      date: '2023-05-15',
      icon: <Layout className="text-blue-500" />
    },
    {
      id: 2,
      name: 'Weather App',
      type: 'mobile',
      description: 'A weather application that provides real-time forecasts and alerts.',
      date: '2023-03-10',
      icon: <Code className="text-green-500" />
    },
    {
      id: 3,
      name: 'Portfolio Design',
      type: 'design',
      description: 'UI/UX design for a personal portfolio website.',
      date: '2023-01-20',
      icon: <FileText className="text-yellow-500" />
    },
    {
      id: 4,
      name: 'Social Media Dashboard',
      type: 'web',
      description: 'Analytics dashboard for social media metrics and engagement.',
      date: '2022-11-05',
      icon: <Share2 className="text-purple-500" />
    },
  ];
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };
  
  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div className="w-48 bg-gray-100 border-r border-gray-200 py-4">
        <div className="px-4 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Favorites</h3>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <Folder className="w-4 h-4 mr-2 text-blue-500" />
              <span>Projects</span>
            </li>
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <Folder className="w-4 h-4 mr-2 text-yellow-500" />
              <span>Documents</span>
            </li>
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <Folder className="w-4 h-4 mr-2 text-purple-500" />
              <span>Design Files</span>
            </li>
          </ul>
        </div>
        
        <div className="px-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Categories</h3>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <span className="w-3 h-3 mr-2 rounded-full bg-blue-500"></span>
              <span>Web Development</span>
            </li>
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <span className="w-3 h-3 mr-2 rounded-full bg-green-500"></span>
              <span>Mobile Apps</span>
            </li>
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <span className="w-3 h-3 mr-2 rounded-full bg-yellow-500"></span>
              <span>UI/UX Design</span>
            </li>
            <li className="flex items-center px-2 py-1 text-sm text-black rounded hover:bg-blue-100 cursor-pointer">
              <span className="w-3 h-3 mr-2 rounded-full bg-purple-500"></span>
              <span>Other Projects</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <button 
              className={`p-1 rounded ${activeView === 'grid' ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveView('grid')}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              className={`p-1 rounded ${activeView === 'list' ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
              onClick={() => setActiveView('list')}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-64 pl-8 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-black"
            />
            <svg className="w-4 h-4 absolute left-2.5 top-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Projects grid/list */}
        <div className="flex-1 p-4 overflow-auto">
          {activeView === 'grid' ? (
            <div className="grid grid-cols-4 gap-4">
              {projects.map(project => (
                <div
                  key={project.id}
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedProject?.id === project.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2">
                    {React.cloneElement(project.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="text-sm font-medium text-center text-black">{project.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Modified</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr
                    key={project.id}
                    className={`cursor-pointer ${
                      selectedProject?.id === project.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleProjectClick(project)}
                  >
                    <td className="px-4 py-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3">
                          {React.cloneElement(project.icon as React.ReactElement, { size: 18 })}
                        </div>
                        <span className="text-sm font-medium text-black">{project.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm capitalize text-black">{project.type}</td>
                    <td className="px-4 py-2 text-sm text-black">{project.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        {/* Info panel (only shown when a project is selected) */}
        {selectedProject && (
          <div className="h-64 border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                {React.cloneElement(selectedProject.icon as React.ReactElement, { size: 24 })}
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">{selectedProject.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{selectedProject.type} • Modified {selectedProject.date}</p>
                <p className="mt-2 text-sm text-black">{selectedProject.description}</p>
                
                <div className="mt-4 flex space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
                    Open Project
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinderApp;