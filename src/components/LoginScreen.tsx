import React, { useState } from 'react';
import { Clock } from './Clock';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('guest');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate login (accept any password for demo)
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };
  
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
    >
      <div className="absolute top-8 w-full flex justify-center">
        <Clock textColor="white" />
      </div>
      
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User"
          className="w-24 h-24 rounded-full border-2 border-white/20 mb-4 object-cover"
        />
        <h2 className="text-xl font-medium text-white">Portfolio User</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="w-64">
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-white/10 backdrop-blur-md text-white border border-white/20 focus:border-white/50 focus:outline-none"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-white/10 backdrop-blur-md text-white border border-white/20 focus:border-white/50 focus:outline-none"
            placeholder="Password (any value)"
          />
        </div>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 rounded-md bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors focus:outline-none"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <p className="mt-4 text-sm text-white/70">For demo, any password will work</p>
    </div>
  );
};

export default LoginScreen;