import TypingIndicator from "./TypingIndicator";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import { useRef, useEffect } from "react";

interface Message {
  id: string;
  sender: string;
  text?: string;
  audioUrl?: string;
  createdAt?: string;
}

interface ChatBoxProps {
  messages: Message[];
  message: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}


export function ChatBox({ messages, message, onChange, onSubmit, isLoading }: ChatBoxProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const prevMessageRef = useRef("");

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    prevMessageRef.current = message;
  }, [messages, isLoading]);

  useEffect(() => {
    if (prevMessageRef.current !== message && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    prevMessageRef.current = message;
  }, [message]);

  return (
  <div className="bg-white shadow-lg p-2 sm:p-4 md:p-5 w-full max-w-full sm:max-w-3xl md:max-w-4xl h-[70vh] rounded-xl mt-4 overflow-y-auto flex flex-col justify-between" style={{overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#e5e7eb #fff'}}>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {messages.map((msg, index) => (
            <MessageBubble key={index} text={msg.text} audioUrl={msg.audioUrl} isUser={msg.sender === 'user'} />
          ))}
          {isLoading && (
            <div className="ml-2">
              <TypingIndicator />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
        <div className="px-0 pb-0">
          <ChatInput  value={message} onChange={onChange} onSubmit={onSubmit} />
        </div>
    </div>
  );
}
