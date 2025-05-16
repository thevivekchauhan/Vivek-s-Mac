import React, { createContext, useContext, useState } from 'react';

type Window = {
  id: string;
  title: string;
  app: string;
  isOpen: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  defaultSize: { width: number; height: number };
};

type AppContextType = {
  windows: Window[];
  activeWindowId: string | null;
  openWindow: (app: string, title: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
  restoreWindow: (id: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(1);

  const getDefaultSize = (app: string) => {
    switch (app) {
      case 'finder':
        return { width: 800, height: 500 };
      case 'terminal':
        return { width: 600, height: 400 };
      case 'notes':
        return { width: 500, height: 600 };
      case 'browser':
        return { width: 900, height: 600 };
      default:
        return { width: 700, height: 500 };
    }
  };

  const getDefaultPosition = () => {
    // Random position near the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    return {
      x: centerX - 350 + Math.random() * 100 - 50,
      y: centerY - 250 + Math.random() * 100 - 50,
    };
  };

  const openWindow = (app: string, title: string) => {
    // Check if window already exists
    const existingWindow = windows.find(w => w.app === app && !w.isOpen);
    
    if (existingWindow) {
      setWindows(windows.map(window => {
        if (window.id === existingWindow.id) {
          return { ...window, isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 };
        }
        return window;
      }));
      setActiveWindowId(existingWindow.id);
      setMaxZIndex(maxZIndex + 1);
      return;
    }
    
    const defaultSize = getDefaultSize(app);
    const newWindow: Window = {
      id: `${app}-${Date.now()}`,
      title,
      app,
      isOpen: true,
      isMinimized: false,
      isFullscreen: false,
      zIndex: maxZIndex + 1,
      position: getDefaultPosition(),
      size: { ...defaultSize },
      defaultSize: { ...defaultSize }
    };
    
    setWindows([...windows, newWindow]);
    setActiveWindowId(newWindow.id);
    setMaxZIndex(maxZIndex + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, isOpen: false } : window
    ));
    
    if (activeWindowId === id) {
      const remainingWindows = windows.filter(w => w.isOpen && w.id !== id);
      if (remainingWindows.length > 0) {
        const topWindow = remainingWindows.reduce((prev, current) => 
          prev.zIndex > current.zIndex ? prev : current
        );
        setActiveWindowId(topWindow.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, isMinimized: true } : window
    ));
    
    if (activeWindowId === id) {
      const remainingWindows = windows.filter(w => w.isOpen && !w.isMinimized && w.id !== id);
      if (remainingWindows.length > 0) {
        const topWindow = remainingWindows.reduce((prev, current) => 
          prev.zIndex > current.zIndex ? prev : current
        );
        setActiveWindowId(topWindow.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  const maximizeWindow = (id: string) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, isFullscreen: !window.isFullscreen } : window
    ));
  };

  const focusWindow = (id: string) => {
    setWindows(windows.map(window => 
      window.id === id 
        ? { ...window, zIndex: maxZIndex + 1 } 
        : window
    ));
    setActiveWindowId(id);
    setMaxZIndex(maxZIndex + 1);
  };

  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, position } : window
    ));
  };

  const updateWindowSize = (id: string, size: { width: number; height: number }) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, size } : window
    ));
  };

  const restoreWindow = (id: string) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, isMinimized: false, zIndex: maxZIndex + 1 } : window
    ));
    setActiveWindowId(id);
    setMaxZIndex(maxZIndex + 1);
  };

  return (
    <AppContext.Provider
      value={{
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updateWindowPosition,
        updateWindowSize,
        restoreWindow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};