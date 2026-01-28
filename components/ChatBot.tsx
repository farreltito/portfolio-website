
import React, { useState, useRef, useEffect } from 'react';
import { askFarrelAI } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hey! I'm Farrel's AI assistant. Ask me anything about his work!" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await askFarrelAI(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[450px] bg-white neo-border neo-shadow flex flex-col animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-yellow-400 p-4 neo-border-b-4 border-black flex justify-between items-center">
            <span className="font-black text-lg">FARREL AI</span>
            <button onClick={() => setIsOpen(false)} className="font-bold text-2xl hover:rotate-90 transition-transform">×</button>
          </div>
          
          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 font-medium neo-border ${m.role === 'user' ? 'bg-blue-400 text-white' : 'bg-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 neo-border animate-pulse">...thinking</div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 bg-white neo-border-t-4 border-black flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Farrel..."
              className="flex-grow p-2 neo-border focus:outline-none focus:bg-yellow-50 font-bold"
            />
            <button 
              onClick={handleSend}
              className="px-4 py-2 bg-blue-500 text-white neo-border neo-shadow active:neo-shadow-none active:translate-x-1 active:translate-y-1 transition-all"
            >
              GO
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-yellow-400 rounded-full neo-border neo-shadow flex items-center justify-center text-3xl hover:scale-110 transition-transform active:scale-95"
        >
          🤖
        </button>
      )}
    </div>
  );
};

export default ChatBot;
