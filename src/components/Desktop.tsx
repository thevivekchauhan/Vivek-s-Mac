import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import MenuBar from './MenuBar';
import Dock from './Dock';
import WindowManager from './WindowManager';

const Desktop: React.FC = () => {
  const { windows } = useAppContext();
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContextMenuOpen(true);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
  };
  
  const closeContextMenu = () => {
    setIsContextMenuOpen(false);
  };
  
  return (
    <div 
      className="relative h-full w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      onContextMenu={handleContextMenu}
      onClick={closeContextMenu}
    >
      <MenuBar />
      
      <main className="absolute inset-0 pt-6 pb-16">
        <WindowManager />
      </main>
      
      <Dock />
      
      {isContextMenuOpen && (
        <div 
          className="absolute z-50 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
          style={{ 
            left: contextMenuPosition.x, 
            top: contextMenuPosition.y,
            maxWidth: '200px'
          }}
        >
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">New Folder</li>
            <li className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">Change Wallpaper</li>
            <li className="border-t border-gray-200 mt-1 px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">Show View Options</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Desktop;