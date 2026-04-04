// import React from 'react';
import { useState } from 'react';

function HeaderComponent() {

    const[openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
    
    const handleClickMenuMobile = () => {
        setOpenMenuMobile(prev => !prev);
        console.log("Se apretó el botón del menú mobile");
    }


    return (
        <div>
            <div className="nunito text-[white] h-15 fixed left-1/2 -translate-x-1/2 w-full z-40 bg-white/10 backdrop-blur-lg border border-white/20 md:rounded-full md:w-175 md:top-5">
                <div className="flex flex-row px-8 justify-between items-center h-full">
                    <div> {/* Parte del logo */}
                        <div onClick={()=>{handleClickMenuMobile()}}>
                            <h1>EnerKits</h1>
                        </div>
                    </div>
                    <button aria-label="Abrir menú" onClick={handleClickMenuMobile} className="md:hidden relative w-7 h-7 flex items-center justify-center z-50" >
                        <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${openMenuMobile  ? "rotate-45 translate-y-0"  : "-translate-y-2"} `}></span>
                        <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${openMenuMobile  ? "opacity-0 scale-x-0"  : "opacity-100 scale-x-100"} `}></span>
                        <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${openMenuMobile  ? "-rotate-45 translate-y-0"  : "translate-y-2"} `}></span>
                    </button>
                    <nav className={`fixed w-72 h-screen top-0 left-0 bg-gray-900/90 backdrop-blur-md p-4 z-10 transition-transform duration-300 md:hidden ${openMenuMobile ? "-translate-x-0.5" : "-translate-x-[105%]"}`} 
                            onClick={()=>{handleClickMenuMobile()}}>
                        <ul className='h-full flex flex-col items-start gap-4 p-1 text-[1.2rem]'>
                            <li>Inicio</li>
                            <li>Nosotros</li>
                            <li>Contacto</li>
                            <li>Consulta gratis</li>
                        </ul>
                    </nav>
                    <div className={`absolute inset-0 h-screen w-full bg-black/50 z-0 transition-opacity duration-300 md:hidden ${!openMenuMobile ? "opacity-0" : "opacity-100"}`} onClick={()=>{handleClickMenuMobile()}}>
                        {/* Overlay */}
                    </div>
                    {/* Menú que aparece en resoluciones medianas y grandes */}
                    <nav className='hidden md:block'>
                        <ul className=' flex flex-row gap-5 items-center font-bold'>
                            <li>Inicio</li>
                            <li>Nosotros</li>
                            <li>Contacto</li>
                            <li className="bg-[#E0F600] text-black px-2 py-1 rounded-2xl">Consulta gratis</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent