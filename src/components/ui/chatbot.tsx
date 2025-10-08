
"use client";

import { useState } from "react";
import { Bot, Send, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";

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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          drag
          dragConstraints={{
            top: -250,
            left: -350,
            right: 350,
            bottom: 250,
          }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, y: 100, x: 100 }}
          animate={{ scale: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 120 }}
          className="fixed bottom-6 right-6 z-50 cursor-grab"
        >
          <button className="loader">
            <Bot className="w-8 h-8 text-amber-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
            <span></span>
          </button>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] bg-background p-0 flex flex-col">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Bot /> Pran Ai
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-end gap-2 ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                        >
                        {message.sender === "bot" && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                            </Avatar>
                        )}
                        <div
                            className={`max-w-[75%] rounded-lg px-4 py-2 ${
                            message.sender === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-card"
                            }`}
                        >
                            <p className="text-sm">{message.text}</p>
                        </div>
                        {message.sender === "user" && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback><User size={20} /></AvatarFallback>
                            </Avatar>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
        <div className="p-4 border-t bg-background">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}

