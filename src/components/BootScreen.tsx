import React, { useEffect, useState } from 'react';
import { Apple } from 'lucide-react';

const BootScreen: React.FC = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black">
      <Apple className="w-20 h-20 text-white mb-8" />
      <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
    </div>
  );
};

export default BootScreen;