

import { useState, useRef, useEffect } from "react";
import { FaPlus, FaArrowUp, FaMusic } from "react-icons/fa6";
import { Textarea } from "../components/Textarea";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (audioFile?: File | null) => void;
}

export function ChatInput({ value, onChange, onSubmit }: ChatInputProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleAudioClick = () => {
    setShowOptions(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Limpa o valor para permitir selecionar o mesmo arquivo
      fileInputRef.current.click();
    }
  };

  // Fecha o menu ao clicar fora
  useEffect(() => {
    if (!showOptions) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  // Envia mensagem e áudio (se houver)
  const handleSend = () => {
    onSubmit(audioFile);
    setAudioFile(null); // Limpa o arquivo após envio
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Botão + */}
  <div className="relative">
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-1 mr-9 border-none bg-transparent hover:bg-gray-200 rounded-full  transition cursor-pointer"
          onClick={() => setShowOptions((v) => !v)}
          tabIndex={0}
          aria-label="Mais opções"
          style={{ boxShadow: 'none' }}
        >
          <FaPlus size={20} />
        </button>
        {/* Menu de opções */}
        {showOptions && (
          <div
            ref={optionsRef}
            className="absolute left-0 bottom-full mb-5 ml-5 bg-white rounded-lg shadow-lg p-1 z-30 min-w-[140px] flex flex-col gap-1"
          >
            <button
              className="w-full text-left px-1 py-1 hover:bg-gray-100 rounded flex items-center gap-2 cursor-pointer"
              onClick={handleAudioClick}
            >
              <FaMusic className="inline-block" size={15} /> Enviar áudio
            </button>
          </div>
        )}
        {/* Input de arquivo oculto */}
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            if (file) setAudioFile(file);
          }}
        />
      </div>
      <Textarea
        placeholder="Pergunte alguma coisa"
        rows={1}
        style={{ minHeight: '3.5rem', height: '3.5rem' }}
        className="w-full bg-white pl-10 border border-gray-400"
        onInput={e => {
          const textarea = e.currentTarget;
          textarea.style.height = "auto";
          textarea.style.height = textarea.value ? textarea.scrollHeight + "px" : "3.5rem";
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        value={value}
        onChange={onChange}
      />
      {/* Mostra nome do arquivo de áudio selecionado */}
      {audioFile && (
        <div className="absolute left-16 bottom-14 flex items-center gap-2 bg-gray-100 rounded px-2 py-1 shadow text-xs">
          <FaMusic />
          <span className="truncate max-w-[120px]">{audioFile.name}</span>
          <button className="ml-1 text-red-500 hover:text-red-700" onClick={() => setAudioFile(null)} title="Remover">
            ×
          </button>
        </div>
      )}
      <button className="cursor-pointer" onClick={handleSend}>
        <FaArrowUp size={22} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black p-1 h-7 w-7 rounded-full text-white" />
      </button>
    </div>
  );
}
