import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DockIconProps {
  icon: React.ReactNode;
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ icon, label, isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onClick();
        // Play sound effect
        const audio = new Audio('/sounds/click.mp3');
        audio.volume = 0.2;
        audio.play().catch(() => {});
      }}
      whileHover={{ scale: 1.2, y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-12 h-12 rounded-lg bg-white/90 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer">
        {icon}
      </div>
      
      {isOpen && (
        <div className="w-1.5 h-1.5 rounded-full bg-white absolute -bottom-2" />
      )}
      
      <div className="absolute -bottom-8 px-2 py-1 bg-gray-800/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </div>
      
      {/* Reflection effect */}
      <div className="w-12 h-2 mt-0.5 bg-white/30 rounded-full blur-sm transform scale-x-75" />
    </motion.div>
  );
};

export default DockIcon;