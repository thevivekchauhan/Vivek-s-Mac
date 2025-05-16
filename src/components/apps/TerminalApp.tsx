import React, { useEffect, useState, useRef } from 'react';

interface TerminalLine {
  text: string;
  isCommand: boolean;
}

const TerminalApp: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // Initial terminal text
  useEffect(() => {
    const initialLines: TerminalLine[] = [
      { text: 'Welcome to Terminal', isCommand: false },
      { text: 'Last login: ' + new Date().toLocaleString(), isCommand: false },
      { text: '', isCommand: false },
      { text: '~ $ echo "Hello, I\'m a full-stack developer!"', isCommand: true },
    ];
    
    let delay = 0;
    initialLines.forEach((line, index) => {
      setTimeout(() => {
        setLines(prevLines => [...prevLines, line]);
        
        // Auto-response after the echo command
        if (index === 3) {
          setTimeout(() => {
            setLines((prevLines) => [
              ...prevLines,
              { text: "Hello, I'm Vivek Chauhan!", isCommand: false },
              { text: "", isCommand: false },
              { text: "~ $ ls - Welcome to my terminal!", isCommand: true },
            ]);
            
            // Skills response
            setTimeout(() => {
              setLines(prevLines => [
                ...prevLines,
                // { text: 'total 16', isCommand: false },
                { text: 'drwxr-xr-x  2 dev  staff  React       Advanced', isCommand: false },
                { text: 'drwxr-xr-x  2 dev  staff  TypeScript  Intermediate', isCommand: false },
                { text: 'drwxr-xr-x  2 dev  staff  JavaScript  Advanced', isCommand: false },
                { text: 'drwxr-xr-x  2 dev  staff  Node.js     Intermediate', isCommand: false },
                { text: 'drwxr-xr-x  2 dev  staff  MongoDB      Intermediate', isCommand: false },
                // { text: 'drwxr-xr-x  2 dev  staff  AWS         Intermediate', isCommand: false },
                // { text: 'drwxr-xr-x  2 dev  staff  Docker      Intermediate', isCommand: false },
                { text: '', isCommand: false },
                { text: '~ $ ', isCommand: true },
              ]);
            }, 500);
          }, 300);
        }
      }, delay);
      delay += line.isCommand ? 500 : 100;
    });
  }, []);
  
  useEffect(() => {
    // Scroll to bottom when new lines are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCursorPosition(e.target.selectionStart || 0);
  };
  
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle key commands
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        if (inputValue.trim()) {
          const fullCommand = `~ $ ${inputValue}`;
          
          // Add to history
          setCommandHistory(prev => [inputValue, ...prev]);
          setHistoryIndex(-1);
          
          // Add to terminal
          setLines(prevLines => [...prevLines, { text: fullCommand, isCommand: true }]);
          
          // Process command
          processCommand(inputValue);
          
          // Clear input
          setInputValue('');
        }
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
        break;
        
      case 'ArrowDown':
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInputValue('');
        }
        break;
        
      case 'Tab':
        e.preventDefault();
        // Simple tab completion
        if (inputValue.startsWith('cd ')) {
          setInputValue('cd skills/');
        } else if (inputValue.startsWith('ls')) {
          setInputValue('ls -la');
        }
        break;
    }
  };
  
  const processCommand = (command: string) => {
    const cmd = command.trim().toLowerCase().split(' ')[0];
    
    // Wait a bit before showing response
    setTimeout(() => {
      switch (cmd) {
        case 'clear':
          setLines([]);
          break;
          
        case 'ls':
          setLines(prevLines => [
            ...prevLines,
            { text: 'projects/  skills/  about.md  resume.pdf  contact.json', isCommand: false },
            { text: '', isCommand: false },
            { text: '~ $ ', isCommand: true },
          ]);
          break;
          
        case 'cat':
          if (command.includes('about.md')) {
            setLines(prevLines => [
              ...prevLines,
              { text: '# About Me', isCommand: false },
              { text: '', isCommand: false },
              { text: 'I am a passionate full-stack developer with expertise in building', isCommand: false },
              { text: 'modern web applications using React, TypeScript, and Node.js.', isCommand: false },
              { text: '', isCommand: false },
              { text: 'I enjoy solving complex problems and creating intuitive user interfaces.', isCommand: false },
              { text: '', isCommand: false },
              { text: '~ $ ', isCommand: true },
            ]);
          } else if (command.includes('contact.json')) {
            setLines((prevLines) => [
              ...prevLines,
              { text: "{", isCommand: false },
              {
                text: '  "email": "thechauhanvivek@gmail.com",',
                isCommand: false,
              },
              {
                text: '  "github": "github.com/thevivekchauhan",',
                isCommand: false,
              },
              {
                text: '  "linkedin": "linkedin.com/in/thevivekchauhan",',
                isCommand: false,
              },
              { text: '  "twitter": "@vivekchauhan005"', isCommand: false },
              { text: "}", isCommand: false },
              { text: "", isCommand: false },
              { text: "~ $ ", isCommand: true },
            ]);
          } else {
            setLines(prevLines => [
              ...prevLines,
              { text: `cat: ${command.split(' ')[1]}: No such file or directory`, isCommand: false },
              { text: '', isCommand: false },
              { text: '~ $ ', isCommand: true },
            ]);
          }
          break;
          
        case 'help':
          setLines(prevLines => [
            ...prevLines,
            { text: 'Available commands:', isCommand: false },
            { text: '  ls            - List files and directories', isCommand: false },
            { text: '  cat [file]    - Display file contents', isCommand: false },
            { text: '  clear         - Clear the terminal', isCommand: false },
            { text: '  help          - Show this help message', isCommand: false },
            { text: '  whoami        - Display user information', isCommand: false },
            { text: '  experience    - Show work experience', isCommand: false },
            { text: '', isCommand: false },
            { text: '~ $ ', isCommand: true },
          ]);
          break;
          
        case 'whoami':
          setLines((prevLines) => [
            ...prevLines,
            { text: "Vivek Chauhan", isCommand: false },
            { text: "Full Stack Developer", isCommand: false },
            { text: "You are in Vivek customized MAC.", isCommand: false },
            // { text: "", isCommand: false },
            { text: "~ $ ", isCommand: true },
          ]);
          break;
          
        case 'experience':
          setLines((prevLines) => [
            ...prevLines,
            { text: "-- PROFESSIONAL EXPERIENCE --", isCommand: false },
            { text: "", isCommand: false },
            {
              text: "MERN Developer | iCoderz | 2025 - Present",
              isCommand: false,
            },
            {
              text: "- Developed a web application using React and Node.js",
              isCommand: false,
            },
            {
              text: "- Implemented RESTful APIs and integrated with MongoDB",
              isCommand: false,
            },
            {
              text: "- Implemented authentication and authorization using JWT",
              isCommand: false,
            },
            { text: "", isCommand: false },
            {
              text: "Web Developer | BitBeast | Oct 2023 - Sep 2024",
              isCommand: false,
            },
            {
              text: "- Built responsive web applications using React",
              isCommand: false,
            },
            {
              text: "- Collaborated with designers to create user-friendly interfaces",
              isCommand: false,
            },
            // { text: "- ", isCommand: false },
            { text: "", isCommand: false },
            { text: "~ $ ", isCommand: true },
          ]);
          break;
          
        default:
          setLines(prevLines => [
            ...prevLines,
            { text: `command not found: ${cmd}`, isCommand: false },
            { text: 'Type "help" to see available commands.', isCommand: false },
            { text: '', isCommand: false },
            { text: '~ $ ', isCommand: true },
          ]);
      }
    }, 200);
  };
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  return (
    <div 
      className="h-full bg-black text-green-400 font-mono p-4 overflow-auto cursor-text"
      onClick={focusInput}
      ref={terminalRef}
    >
      {lines.map((line, i) => (
        <div key={i} className={`${line.isCommand ? 'text-white' : 'text-green-400'}`}>
          {line.text}
        </div>
      ))}
      
      <div className="flex">
        <span className="mr-0 text-white">
          {lines.length > 0 && lines[lines.length - 1].text === '~ $ ' ? '' : '~ $ '}
        </span>
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-white outline-none caret-transparent"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            autoFocus
          />
          <span className="absolute left-0 top-0 text-white">
            {inputValue.substring(0, cursorPosition)}
            <span className="animate-pulse bg-white w-2 h-5 inline-block"></span>
            {inputValue.substring(cursorPosition)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalApp;