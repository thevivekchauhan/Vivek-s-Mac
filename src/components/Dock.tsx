import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Folder, Terminal, FileText, Globe, User } from 'lucide-react';
import DockIcon from './DockIcon';

const Dock: React.FC = () => {
  const { openWindow, windows } = useAppContext();
  
  const isAppOpen = (app: string) => {
    return windows.some(window => window.app === app && window.isOpen);
  };
  
  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center space-x-1 shadow-lg z-50">
      <DockIcon
        icon={<Folder className="w-full h-full text-blue-400" />}
        label="Finder"
        isOpen={isAppOpen('finder')}
        onClick={() => openWindow('finder', 'Finder')}
      />
      <DockIcon
        icon={<Terminal className="w-full h-full text-gray-800" />}
        label="Terminal"
        isOpen={isAppOpen('terminal')}
        onClick={() => openWindow('terminal', 'Terminal')}
      />
      <DockIcon
        icon={<FileText className="w-full h-full text-yellow-500" />}
        label="Notes"
        isOpen={isAppOpen('notes')}
        onClick={() => openWindow('notes', 'About Me')}
      />
      <DockIcon
        icon={<Globe className="w-full h-full text-blue-500" />}
        label="Browser"
        isOpen={isAppOpen('browser')}
        onClick={() => openWindow('browser', 'Contact')}
      />
      <DockIcon
        icon={<User className="w-full h-full text-green-500" />}
        label="Resume"
        isOpen={isAppOpen('resume')}
        onClick={() => openWindow('resume', 'Resume')}
      />
    </div>
  );
};

export default Dock;