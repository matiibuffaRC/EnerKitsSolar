// import React from 'react';
import { useState } from 'react';

function HeaderComponent() {

    const[openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
    
    const handleClickMenuMobile = () => {
        setOpenMenuMobile(prev => !prev);
        console.log("Se apretó el botón del menú mobile");
    }


    return (
        <div className="nunito text-[white] h-16.25 fixed w-full z-40 bg-white/10 backdrop-blur-lg border border-white/20 lg:rounded-full lg:w-150">
            <div className="flex flex-row px-2 justify-between items-center h-full">
                <div> {/* Parte del logo */}
                    <div className="border border-white" onClick={()=>{handleClickMenuMobile()}}>
                        <h1>EnerKits</h1>
                    </div>
                </div>
                <div> {/* Parte del nav */}
                    <nav className={`fixed w-72 h-screen top-0 left-0 bg-gray-900/90 backdrop-blur-md p-4 z-10 transition-transform duration-300 ${openMenuMobile ? "translate-x-0" : "-translate-x-[105%]"}`} onClick={()=>{handleClickMenuMobile()}}>
                        <ul className='h-full flex flex-col items-start gap-4 p-1 text-[1.2rem]'>
                            <li>Inicio</li>
                            <li>Nosotros</li>
                            <li>Contacto</li>
                            <li>Consulta gratis</li>
                        </ul>
                    </nav>
                </div>
                <div className={`absolute inset-0 h-screen w-full bg-black/50 z-0 transition-opacity duration-300 ${!openMenuMobile ? "opacity-0" : "opacity-100"}`} onClick={()=>{handleClickMenuMobile()}}></div> {/* Overlay */}
            </div>
        </div>
    )
}

export default HeaderComponent