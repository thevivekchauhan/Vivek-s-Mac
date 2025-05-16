import React, { useState, useEffect } from 'react';

interface ClockProps {
  textColor?: string;
}

export const Clock: React.FC<ClockProps> = ({ textColor = 'black' }) => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    
    return date.toLocaleString('en-US', options);
  };
  
  return (
    <div className={`text-${textColor} text-sm font-medium`}>
      {formatDate()}
    </div>
  );
};