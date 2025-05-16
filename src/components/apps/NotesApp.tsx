import React, { useState } from 'react';
import { FileText, Search, Star, Trash, FolderPlus } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  isStarred: boolean;
  lastModified: string;
  folder: string;
}

const NotesApp: React.FC = () => {
  const [notes] = useState<Note[]>([
    {
      id: '1',
      title: 'About Me',
      content: `# Hello, I'm Vivek Chauhan

## Full Stack Developer

I'm a passionate developer with a love for clean code and intuitive user interfaces. My journey in software development began 5 years ago, and I've been continuously learning and growing ever since.

### My Expertise

* **Frontend**: React, Vue, Angular
* **Backend**: Node.js, Express, Django
* **Database**: MongoDB, PostgreSQL, MySQL
* **DevOps**: Docker, AWS, CI/CD

### My Approach

I believe in building software that not only meets technical requirements but also provides a delightful user experience. I focus on writing maintainable, scalable code that can evolve with changing needs.

### Personal Interests

When I'm not coding, I enjoy:
- Hiking in the mountains
- Reading science fiction
- Playing the piano
- Photography

I'm always open to new challenges and opportunities to collaborate. Feel free to reach out!`,
      isStarred: true,
      lastModified: '2023-05-15',
      folder: 'Personal'
    },
    {
      id: '2',
      title: 'Project Ideas',
      content: '1. E-commerce platform with AR capabilities\n2. Smart home dashboard\n3. Fitness tracking app with ML recommendations\n4. Recipe sharing social network\n5. Virtual event platform',
      isStarred: false,
      lastModified: '2023-04-20',
      folder: 'Work'
    },
    {
      id: '3',
      title: 'Learning Goals',
      content: '- Master TypeScript\n- Improve knowledge of system design\n- Learn Rust\n- Study machine learning fundamentals\n- Get AWS certification',
      isStarred: true,
      lastModified: '2023-03-10',
      folder: 'Personal'
    }
  ]);
  
  const [selectedNoteId, setSelectedNoteId] = useState<string>(notes[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  
  const selectedNote = notes.find(note => note.id === selectedNoteId) || notes[0];
  
  const filteredNotes = searchTerm 
    ? notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : notes;
  
  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    const formattedContent = content
      .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mb-3 mt-4">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mb-2 mt-3">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>')
      .replace(/- (.+)$/gm, '<li class="ml-4">• $1</li>');
    
    return formattedContent;
  };
  
  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4">
        <div className="flex items-center">
          <button className="p-1 rounded hover:bg-gray-200 mr-1">
            <FolderPlus className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200 mr-1">
            <FileText className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 rounded hover:bg-gray-200">
            <Trash className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        
        <div className="ml-auto relative">
          <input
            type="text"
            placeholder="Search notes"
            className="w-48 pl-8 pr-2 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Notes list */}
        <div className="w-64 border-r border-gray-200 overflow-auto">
          <div className="p-2">
            {filteredNotes.map(note => (
              <div
                key={note.id}
                className={`p-2 cursor-pointer rounded ${
                  selectedNoteId === note.id ? 'bg-yellow-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedNoteId(note.id)}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-sm">{note.title}</h3>
                  {note.isStarred && <Star className="w-3 h-3 text-yellow-500" />}
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {note.content.replace(/^#+\s+(.+)$/gm, '').substring(0, 50)}...
                </p>
                <p className="text-xs text-gray-400 mt-1">{note.lastModified}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Note content */}
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">{selectedNote.title}</h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(selectedNote.content) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;