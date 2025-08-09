'use client'

import { useState } from "react"

export function Header(){

    const [menuAberto, setMenuAberto] = useState(false);

    return(
        <header className="h-[82px] w-full px-4 flex items-center fixed top-0 left-0 z-50 justify-between">
            <a href="#" className="w-fit text-[#938EA7]/80 font-medium text-[16px] md:text-lg tracking-[0.15em]">
            DEV PAULA 👩‍💻
            </a>

            <button className="flex flex-col justify-between md:hidden h-6 w-8 " 
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu">
                <span className="w-full h-1 bg-white block rounded" ></span>
                <span className="w-full h-1 bg-white block rounded"></span>
                <span className="w-full h-1 bg-white block rounded"></span>
            </button>

            <nav className="hidden md:flex gap-5 text-white tracking-[0.05em] ">
                <a href="#inicio" className="px-5 py-3 border rounded-lg hover:border-gray-400 transition-colors duration-250">Início</a>
                <a href="#sobre" className="px-5 py-3 border rounded-lg  hover:border-gray-500 transition-colors duration-250">Sobre</a>
                <a href="#projetos" className="px-5 py-3 border rounded-lg  hover:border-gray-500 transition-colors duration-250">Projetos</a>
                <a href="#habilidades" className="px-5 py-3 border rounded-lg  hover:border-gray-500 transition-colors duration-250">Habilidades</a>
            </nav>

            {menuAberto && (
                <nav className="absolute top-[82px] left-0 w-full bg-[#111111]/40 backdrop-blur  border-b border-white/10 shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)] flex flex-col items-center gap-3 py-4 text-white tracking-[0.05em] md:hidden">
                <a href="#inicio" className="px-5 py-3  w-4/5 text-center" onClick={() => setMenuAberto(false)}>Início</a>
                <a href="#sobre" className="px-5 py-3 w-4/5 text-center" onClick={() => setMenuAberto(false)}>Sobre</a>
                <a href="#projetos" className="px-5 py-3  w-4/5 text-center" onClick={() => setMenuAberto(false)}>Projetos</a>
                <a href="#habilidades" className="px-5 py-3  w-4/5 text-center" onClick={() => setMenuAberto(false)}>Habilidades</a>
                </nav>
            )}
        </header>
    )
}