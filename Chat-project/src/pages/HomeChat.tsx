// React icons
    import { useState } from "react";

    // Animação de digitação
    import { TypeAnimation } from 'react-type-animation';

    // Componente Textarea
  import { ChatBox } from "../components/ChatBox";
  import { ChatInput } from "../components/ChatInput";

    type Message = {
      id: string;
      sender: string;
      text: string;
      createdAt?: string;
    };

    export function HomeChat() {
      const [showChat, setShowChat] = useState(false);
      const [messages, setMessages] = useState<Message[]>([]);
      const [message, setMessage] = useState<string>("");
      const [inputInside, setInputInside] = useState(false);
      const text = message.trim() !== "";

      function handleSubmit() {
        if (!text) return;
        const newMsg: Message = {
          id: 'tmp-' + Date.now(),
          sender: 'user',
          text: message,
          createdAt: new Date().toISOString(),
        };
        setMessages(prev => [...prev, newMsg]);
        setShowChat(true);
        setInputInside(true);
        setMessage("");
      }

      return (
  <div className="flex justify-center items-center min-h-screen w-full bg-primary flex-col gap-4 px-2">
          


          {showChat && (
            <ChatBox
              messages={messages}
              message={message}
              onChange={e => setMessage(e.target.value)}
              onSubmit={handleSubmit}
            />
          )}
        
          



          {!inputInside && (
            <>
              <TypeAnimation
                className='text-secondary text-2xl mt-5 font-bold'
                sequence={[
                  'Olá seja bem vindo ao seu asistente virtual!',
                  1000,
                  'Como posso ajudar você hoje?',
                  2000,
                ]}
                wrapper="span"
                speed={30} // velocidade de digitação
                repeat={Infinity} // loop infinito
              />
              <div className="relative max-w-lg w-full mx-auto">
                <ChatInput
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onSubmit={handleSubmit}
                />
              </div>
            </>
          )}
        
        
        
        
        
        
          <h6 className="text-gray-600 font-sans font-medium mb-5">Powered by OpenAI</h6>
        </div>
      );
    }


