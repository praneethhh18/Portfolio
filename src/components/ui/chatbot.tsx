
"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Pran Ai, Praneeth's AI assistant. How can I help you today? (Note: AI responses are currently mocked)",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Mock bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "Thanks for your message! This is a demo interface. Praneeth will get back to you through his contact channels.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-sm h-[60vh] max-h-[480px] z-50 flex flex-col"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">
                <header className="p-4 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Avatar className="h-10 w-10 border-2 border-primary">
                                <AvatarFallback className="bg-primary/20 text-primary"><Bot size={24} /></AvatarFallback>
                            </Avatar>
                            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-card" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base">Pran Ai</h3>
                            <p className="text-xs text-muted-foreground">Online</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                        <ChevronDown className="h-5 w-5" />
                        <span className="sr-only">Close Chat</span>
                    </Button>
                </header>

                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-6">
                    <AnimatePresence>
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={cn("flex items-end gap-2",
                                    message.sender === "user" ? "justify-end" : "justify-start"
                                )}
                                >
                                {message.sender === "bot" && (
                                    <Avatar className="h-8 w-8 self-start">
                                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                                    </Avatar>
                                )}
                                <div
                                    className={`max-w-[80%] rounded-xl px-4 py-2.5 ${
                                    message.sender === "user"
                                        ? "bg-primary text-primary-foreground rounded-br-none"
                                        : "bg-secondary rounded-bl-none"
                                    }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                                {message.sender === "user" && (
                                    <Avatar className="h-8 w-8 self-start">
                                        <AvatarFallback><User size={20} /></AvatarFallback>
                                    </Avatar>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="p-4 border-t border-white/10 bg-card/50">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-background/50 border-white/20 focus:ring-primary"
                    />
                    <Button type="submit" size="icon" disabled={!inputValue.trim()} className="shrink-0">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </form>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        drag
        dragConstraints={{ top: -300, left: -400, right: 400, bottom: 300 }}
        whileHover={{ scale: 1.1, rotate: isOpen ? 0 : 15 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, y: 100, x: 100 }}
        animate={{ scale: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 120 }}
        className="fixed bottom-6 right-6 z-50 cursor-grab"
        onTap={() => setIsOpen(prev => !prev)}
      >
        <button className="loader">
            <AnimatePresence>
            {isOpen ? 
                <motion.div key="close" initial={{opacity: 0, rotate: -90}} animate={{opacity: 1, rotate: 0}} exit={{opacity: 0, rotate: 90}}>
                    <X className="w-8 h-8 text-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
                </motion.div>
                :
                <motion.div key="bot" initial={{opacity: 0, rotate: -90}} animate={{opacity: 1, rotate: 0}} exit={{opacity: 0, rotate: 90}}>
                    <Bot className="w-8 h-8 text-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
                </motion.div>
            }
            </AnimatePresence>
          <span />
        </button>
      </motion.div>
    </>
  );
}
