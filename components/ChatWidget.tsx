import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2, MessageCircle, Sparkles } from 'lucide-react';
import { chatWithPoultryExpert } from '../services/geminiService';
import { ChatMessage } from '../types';

const SUGGESTIONS = [
  "Current price list?",
  "How to start?",
  "RIR vs Australorp?",
  "Location?",
  "Feeds guide"
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Legal Chicks Poultry Expert. Ask me anything about raising Rhode Island Reds, egg production, or our reseller program!' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text?: string) => {
    const messageToSend = text || input;
    if (!messageToSend.trim()) return;
    
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
    setIsLoading(true);

    const reply = await chatWithPoultryExpert(messageToSend);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="w-80 md:w-96 h-[550px] mb-4 flex flex-col bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden animate-[slideInUp_0.3s_ease-out]">
          <div className="p-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold">Poultry Pro AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100">
             {/* Suggestions */}
             {messages.length < 4 && (
               <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-1">
                 {SUGGESTIONS.map((s, i) => (
                   <button 
                     key={i}
                     onClick={() => handleSend(s)}
                     className="whitespace-nowrap px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                   >
                     {s}
                   </button>
                 ))}
               </div>
             )}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input
                className="flex-1 border border-slate-200 bg-slate-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Ask about chicks, feeds..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        id="chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-slate-800 text-white rotate-0' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 hover:shadow-blue-500/25'
        }`}
      >
        {isOpen ? (
          <>Close Support</>
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Ask AI Expert</span>
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;