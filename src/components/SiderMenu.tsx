import { useState } from "react";
import { FiAlignLeft } from "react-icons/fi";

import img from '../assets/logo-ai.ico';



export function SiderMenu() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <>
      {/* Botão sempre visível, sem fundo extra */}
      <button
        onClick={() => setActiveMenu(!activeMenu)}
        className="fixed top-6 left-6 z-60 bg-transparent border-none outline-none cursor-pointer transition-all duration-300"
        style={{ boxShadow: "none" }}
      >
        <FiAlignLeft size={28} />
      </button>

     {/* Fechar o menu ao clicar fora */}
      {activeMenu && (
        <div className="fixed inset-0 bg-gray-800 z-50 opacity-50" onClick={() => setActiveMenu(false)} />
      )}

        <div className={`fixed top-0 left-0 h-screen w-72 z-50 bg-gray-200 px-4 pt-24 flex flex-col gap-10  shadow-lg transform transition-all duration-300 ease-in-out 
        ${activeMenu ? 'translate-x-0 opacity-100' :  '-translate-x-full opacity-0 pointer-events-none'}`}
        style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex items-center">
            <img src={img} alt="Logo" className="w-9 h-auto mb-2" />
            <h1 className="text-lg font-sans font-semibold">NexusAI</h1>
          </div>

          <div className="flex flex-col items-start gap-12">
          
          
          </div>
        </div>

      
    </>
  );
}