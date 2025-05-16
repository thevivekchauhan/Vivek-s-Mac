import React, { useRef, useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

interface WindowProps {
  id: string;
  title: string;
  isActive: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  defaultSize: { width: number; height: number };
  isFullscreen: boolean;
  onFocus: () => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  isActive,
  zIndex,
  position,
  size,
  defaultSize,
  isFullscreen,
  onFocus,
  children
}) => {
  const { closeWindow, minimizeWindow, maximizeWindow, updateWindowPosition, updateWindowSize } = useAppContext();
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<'se' | 'sw' | 'ne' | 'nw' | null>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  
  // Handle window dragging
  useEffect(() => {
    if (!dragRef.current) return;
    
    const dragElement = dragRef.current;
    
    const onMouseDown = (e: MouseEvent) => {
      if (!isActive) onFocus();
      if (isFullscreen) return;
      
      setIsDragging(true);
      
      // Store the initial mouse position and window position
      const initialMouseX = e.clientX;
      const initialMouseY = e.clientY;
      const initialWindowX = position.x;
      const initialWindowY = position.y;
      
      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        
        // Calculate new position
        const newX = initialWindowX + (e.clientX - initialMouseX);
        const newY = initialWindowY + (e.clientY - initialMouseY);
        
        // Update window position
        updateWindowPosition(id, { x: newX, y: newY });
      };
      
      const onMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };
    
    dragElement.addEventListener('mousedown', onMouseDown);
    
    return () => {
      dragElement.removeEventListener('mousedown', onMouseDown);
    };
  }, [id, isActive, isDragging, position, updateWindowPosition, onFocus, isFullscreen]);
  
  // Resize handlers
  const startResize = (direction: 'se' | 'sw' | 'ne' | 'nw') => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFullscreen) return;
    
    setIsResizing(true);
    setResizeDirection(direction);
    
    const initialMouseX = e.clientX;
    const initialMouseY = e.clientY;
    const initialWidth = size.width;
    const initialHeight = size.height;
    const initialX = position.x;
    const initialY = position.y;
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const deltaX = e.clientX - initialMouseX;
      const deltaY = e.clientY - initialMouseY;
      
      let newWidth = initialWidth;
      let newHeight = initialHeight;
      let newX = initialX;
      let newY = initialY;
      
      // Handle different resize directions
      switch (resizeDirection) {
        case 'se':
          newWidth = Math.max(300, initialWidth + deltaX);
          newHeight = Math.max(200, initialHeight + deltaY);
          break;
        case 'sw':
          newWidth = Math.max(300, initialWidth - deltaX);
          newX = initialX + (initialWidth - newWidth);
          newHeight = Math.max(200, initialHeight + deltaY);
          break;
        case 'ne':
          newWidth = Math.max(300, initialWidth + deltaX);
          newHeight = Math.max(200, initialHeight - deltaY);
          newY = initialY + (initialHeight - newHeight);
          break;
        case 'nw':
          newWidth = Math.max(300, initialWidth - deltaX);
          newHeight = Math.max(200, initialHeight - deltaY);
          newX = initialX + (initialWidth - newWidth);
          newY = initialY + (initialHeight - newHeight);
          break;
      }
      
      updateWindowSize(id, { width: newWidth, height: newHeight });
      updateWindowPosition(id, { x: newX, y: newY });
    };
    
    const onMouseUp = () => {
      setIsResizing(false);
      setResizeDirection(null);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  
  // Determine final position and size based on fullscreen state
  const finalPosition = isFullscreen ? { x: 0, y: 0 } : position;
  const finalSize = isFullscreen
    ? { width: window.innerWidth, height: window.innerHeight - 38 }
    : size;
  
  return (
    <motion.div
      ref={windowRef}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: finalPosition.x,
        y: finalPosition.y,
        width: finalSize.width,
        height: finalSize.height,
        zIndex
      }}
      transition={{ duration: 0.2 }}
      style={{ 
        zIndex,
        position: 'absolute',
        top: 0,
        left: 0,
        transformOrigin: 'center',
      }}
      onMouseDown={() => {
        if (!isActive) onFocus();
      }}
      className={`rounded-lg overflow-hidden shadow-2xl flex flex-col ${
        isActive ? 'ring-1 ring-white/50' : 'ring-1 ring-black/10'
      }`}
    >
      {/* Window title bar */}
      <div
        ref={dragRef}
        className={`h-8 flex items-center px-3 ${
          isActive ? 'bg-gray-200' : 'bg-gray-100'
        } cursor-move`}
      >
        <div className="flex items-center space-x-2">
          <button
            onClick={() => closeWindow(id)}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
          >
            <span className="text-red-800 opacity-0 hover:opacity-100 text-xs">×</span>
          </button>
          <button
            onClick={() => minimizeWindow(id)}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center"
          >
            <span className="text-yellow-800 opacity-0 hover:opacity-100 text-xs">−</span>
          </button>
          <button
            onClick={() => maximizeWindow(id)}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center"
          >
            <span className="text-green-800 opacity-0 hover:opacity-100 text-xs">+</span>
          </button>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
          {title}
        </div>
      </div>
      
      {/* Window content */}
      <div className="flex-1 bg-white overflow-auto">
        {children}
      </div>
      
      {/* Resize handles - only show if not fullscreen */}
      {!isFullscreen && (
        <>
          <div 
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" 
            onMouseDown={startResize('se')}
          />
          <div 
            className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize" 
            onMouseDown={startResize('sw')}
          />
          <div 
            className="absolute top-8 right-0 w-4 h-4 cursor-ne-resize" 
            onMouseDown={startResize('ne')}
          />
          <div 
            className="absolute top-8 left-0 w-4 h-4 cursor-nw-resize" 
            onMouseDown={startResize('nw')}
          />
        </>
      )}
    </motion.div>
  );
};

export default Window;