import React from 'react';
import { useAppContext } from '../context/AppContext';
import Window from './Window';
import FinderApp from './apps/FinderApp';
import TerminalApp from './apps/TerminalApp';
import NotesApp from './apps/NotesApp';
import BrowserApp from './apps/BrowserApp';
import ResumeApp from './apps/ResumeApp';

const WindowManager: React.FC = () => {
  const { windows, focusWindow, activeWindowId } = useAppContext();
  
  const getAppContent = (app: string) => {
    switch (app) {
      case 'finder':
        return <FinderApp />;
      case 'terminal':
        return <TerminalApp />;
      case 'notes':
        return <NotesApp />;
      case 'browser':
        return <BrowserApp />;
      case 'resume':
        return <ResumeApp />;
      default:
        return <div>Unknown App</div>;
    }
  };
  
  return (
    <div className="relative h-full w-full">
      {windows
        .filter(window => window.isOpen && !window.isMinimized)
        .map(window => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            isActive={window.id === activeWindowId}
            zIndex={window.zIndex}
            position={window.position}
            size={window.size}
            defaultSize={window.defaultSize}
            isFullscreen={window.isFullscreen}
            onFocus={() => focusWindow(window.id)}
          >
            {getAppContent(window.app)}
          </Window>
        ))}
    </div>
  );
};

export default WindowManager;