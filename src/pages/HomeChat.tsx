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
      text?: string;
      audioUrl?: string;
      createdAt?: string;
    };



    export function HomeChat() {
      const [showChat, setShowChat] = useState(false);
      const [messages, setMessages] = useState<Message[]>([]);
      const [message, setMessage] = useState<string>("");
      const [inputInside, setInputInside] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const text = message.trim() !== "";


      function handleSubmit(audioFile?: File | null) {
        if (!text && !audioFile) return;
        let newMsg: Message = {
          id: 'tmp-' + Date.now(),
          sender: 'user',
          createdAt: new Date().toISOString(),
        };
        if (audioFile) {
          const audioUrl = URL.createObjectURL(audioFile);
          newMsg.audioUrl = audioUrl;
        }
        if (text) {
          newMsg.text = message;
        }
        setMessages(prev => [...prev, newMsg]);
        setShowChat(true);
        setInputInside(true);
        setMessage("");
        setIsLoading(true);
        // Simulação de resposta da IA
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: 'ai-' + Date.now(),
            sender: 'ai',
            text: 'Esta é uma resposta da IA.',
            createdAt: new Date().toISOString(),
          }]);
          setIsLoading(false);
        }, 2000);
      }

      return (
  <div className="flex justify-center items-center min-h-screen w-full bg-primary flex-col gap-4 px-2">
          



          {showChat && (
            <>
              <ChatBox
                messages={messages}
                message={message}
                onChange={e => setMessage(e.target.value)}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </>
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


