import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";

interface Message {
  id: string;
  sender: string;
  text: string;
  createdAt?: string;
}

interface ChatBoxProps {
  messages: Message[];
  message: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

export function ChatBox({ messages, message, onChange, onSubmit }: ChatBoxProps) {
  return (
    <div className="bg-white shadow-lg p-2 sm:p-4 md:p-5 w-full max-w-full sm:max-w-2xl md:max-w-3xl h-[60vh] rounded-xl mt-4 overflow-y-auto scrollbar-hide flex flex-col justify-between">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {messages.map((msg, index) => (
            <MessageBubble key={index} text={msg.text} isUser={msg.sender === 'user'} />
          ))}
        </div>
      </div>
      <ChatInput value={message} onChange={onChange} onSubmit={onSubmit} />
    </div>
  );
}
