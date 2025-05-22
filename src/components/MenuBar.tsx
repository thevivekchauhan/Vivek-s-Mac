import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Volume2, Battery } from 'lucide-react';
import { Clock } from './Clock';

const MenuBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  
  const handleClick = (menu: string) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };
  
  const closeDropdowns = () => {
    setDropdownOpen(null);
  };
  
  useEffect(() => {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.menu-item')) {
        closeDropdowns();
      }
    });
    
    return () => {
      document.removeEventListener('click', closeDropdowns);
    };
  }, []);
  
  return (
    <div className="absolute top-0 left-0 right-0 h-6 bg-black/20 backdrop-blur-md z-50 flex items-center justify-between px-2 text-white/90 shadow-sm">
      <div className="flex items-center">
        <div className="menu-item px-2 cursor-pointer" onClick={() => handleClick('apple')}>
          <Apple size={16} />
          {dropdownOpen === 'apple' && (
            <div className="absolute top-6 left-1 w-56 bg-gray-700/90 backdrop-blur-md rounded-b-lg shadow-lg overflow-hidden">
              <ul>
                <li className="px-4 py-1 hover:bg-blue-500">About This Portfolio</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">System Preferences</li>
                <li className="px-4 py-1 hover:bg-blue-500">App Store</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Force Quit</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Sleep</li>
                <li className="px-4 py-1 hover:bg-blue-500">Restart</li>
                <li className="px-4 py-1 hover:bg-blue-500">Shut Down</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Lock Screen</li>
                <li className="px-4 py-1 hover:bg-blue-500">Log Out</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="menu-item px-2 cursor-pointer" onClick={() => handleClick('finder')}>
          <span className="font-medium">Finder</span>
          {dropdownOpen === 'finder' && (
            <div className="absolute top-6 left-8 w-56 bg-gray-700/90 backdrop-blur-md rounded-b-lg shadow-lg overflow-hidden">
              <ul>
                <li className="px-4 py-1 hover:bg-blue-500">About Finder</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Preferences</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Empty Trash</li>
                <li className="px-4 py-1 hover:bg-blue-500">Services</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Hide Finder</li>
                <li className="px-4 py-1 hover:bg-blue-500">Hide Others</li>
                <li className="px-4 py-1 hover:bg-blue-500">Show All</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="menu-item px-2 cursor-pointer" onClick={() => handleClick('file')}>
          <span>File</span>
          {dropdownOpen === 'file' && (
            <div className="absolute top-6 left-24 w-56 bg-gray-700/90 backdrop-blur-md rounded-b-lg shadow-lg overflow-hidden">
              <ul>
                <li className="px-4 py-1 hover:bg-blue-500">New Folder</li>
                <li className="px-4 py-1 hover:bg-blue-500">New Finder Window</li>
                <li className="px-4 py-1 hover:bg-blue-500">New Tab</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Close Window</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Get Info</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="menu-item px-2 cursor-pointer" onClick={() => handleClick('edit')}>
          <span>Edit</span>
          {dropdownOpen === 'edit' && (
            <div className="absolute top-6 left-44 w-56 bg-gray-700/90 backdrop-blur-md rounded-b-lg shadow-lg overflow-hidden">
              <ul>
                <li className="px-4 py-1 hover:bg-blue-500">Undo</li>
                <li className="px-4 py-1 hover:bg-blue-500">Redo</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Cut</li>
                <li className="px-4 py-1 hover:bg-blue-500">Copy</li>
                <li className="px-4 py-1 hover:bg-blue-500">Paste</li>
                <li className="px-4 py-1 hover:bg-blue-500">Select All</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="menu-item px-2 cursor-pointer" onClick={() => handleClick('view')}>
          <span>View</span>
          {dropdownOpen === 'view' && (
            <div className="absolute top-6 left-64 w-56 bg-gray-700/90 backdrop-blur-md rounded-b-lg shadow-lg overflow-hidden">
              <ul>
                <li className="px-4 py-1 hover:bg-blue-500">as Icons</li>
                <li className="px-4 py-1 hover:bg-blue-500">as List</li>
                <li className="px-4 py-1 hover:bg-blue-500">as Columns</li>
                <li className="px-4 py-1 hover:bg-blue-500">as Gallery</li>
                <li className="border-t border-gray-600 px-4 py-1 hover:bg-blue-500">Show Path Bar</li>
                <li className="px-4 py-1 hover:bg-blue-500">Show Status Bar</li>
                <li className="px-4 py-1 hover:bg-blue-500">Hide Sidebar</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 text-sm">
        <div className="flex items-center space-x-2">
          <Wifi size={16} />
          <Battery size={16} />
          <Volume2 size={16} />
        </div>
        <Clock textColor="white" />
      </div>
    </div>
  );
};

export default MenuBar;




