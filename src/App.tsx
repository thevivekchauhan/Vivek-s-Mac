import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import BootScreen from './components/BootScreen';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/Desktop';
import { AppProvider } from './context/AppContext';

function App() {
  const [bootState, setBootState] = useState<'booting' | 'login' | 'desktop'>('booting');
  
  useEffect(() => {
    // Simulate boot sequence
    const bootTimer = setTimeout(() => {
      setBootState('login');
    }, 3000);
    
    return () => clearTimeout(bootTimer);
  }, []);
  
  const handleLogin = () => {
    setBootState('desktop');
  };
  
  return (
    <AppProvider>
      <div className="h-screen w-screen overflow-hidden bg-black text-white">
        {bootState === 'booting' && <BootScreen />}
        {bootState === 'login' && <LoginScreen onLogin={handleLogin} />}
        {bootState === 'desktop' && <Desktop />}
        <Toaster position="bottom-right" />
      </div>
    </AppProvider>
  );
}

export default App;