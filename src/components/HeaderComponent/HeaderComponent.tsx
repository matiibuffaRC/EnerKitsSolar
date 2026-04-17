// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/imgs/EnerkitsLogo.png"

function HeaderComponent() {

    const[openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
    
    const handleClickMenuMobile = () => {
        setOpenMenuMobile(prev => !prev);
        console.log("Se apretó el botón del menú mobile");
    }


    return (
        <div className='relative'>
            <div className="nunito text-[white] h-15 fixed left-1/2 -translate-x-1/2 w-full z-400 bg-white/10 backdrop-blur-lg border border-white/20 md:rounded-full md:w-175 md:top-3 md:py-8">
                <div className="flex flex-row px-5 justify-between items-center h-full">
                    <div> {/* Parte del logo */}
                        <div>
                            <img src={Logo} alt="Enerkits logo" className='h-4.5'/>
                        </div>
                    </div>
                    <button aria-label="Abrir menú" onClick={handleClickMenuMobile} className="md:hidden relative w-5 h-5 flex items-center justify-center z-50" >
                        <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${openMenuMobile  ? "rotate-45 translate-y-0"  : "-translate-y-1.5"} `}></span>
                        <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${openMenuMobile  ? "opacity-0 scale-x-0"  : "opacity-100 scale-x-100"} `}></span>
                        <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${openMenuMobile  ? "-rotate-45 translate-y-0"  : "translate-y-1.5"} `}></span>
                    </button>
                    <nav className={`fixed w-72 h-screen top-0 left-0 border border-gray-500 bg-zinc-900 backdrop-blur-md z-10 transition-transform duration-300 md:hidden ${openMenuMobile ? "-translate-x-0.5" : "-translate-x-[105%]"}`} >
                        <div className='border-b border-gray-500 flex flex-row items-center justify-center p-7'>
                            <img src={Logo} alt="Enerkits logo" className='h-7'/>
                        </div>
                        <ul className='h-full flex flex-col items-start gap-4 p-5 text-[1.2rem]'>
                            <li className='cursor-pointer'><Link to="/#inicio" onClick={()=>{handleClickMenuMobile()}}>Inicio</Link></li>
                            <li className='cursor-pointer'><Link to="/#nosotros" onClick={()=>{handleClickMenuMobile()}}>Nosotros</Link></li>
                            <li className='cursor-pointer'><Link to="/products" onClick={()=>{handleClickMenuMobile()}}>Sistemas</Link></li>
                            <li className='cursor-pointer'><Link to="/#contacto" onClick={()=>{handleClickMenuMobile()}}>Contacto</Link></li>
                            <li className="text-[#E0F600] font-bold cursor-pointer"><Link to="" onClick={()=>{handleClickMenuMobile()}}>Consulta gratis</Link></li>
                        </ul>
                    </nav>

                    <div className={`absolute inset-0 h-screen w-full bg-black/50 z-0 transition-opacity duration-300 md:hidden ${!openMenuMobile ? "opacity-0 hidden" : "opacity-100"}`} onClick={()=>{handleClickMenuMobile()}}>
                        {/* Overlay */}
                    </div>

                    <nav className='hidden md:block'>
                        <ul className=' flex flex-row gap-5 items-center font-bold text-md'>
                            <li className='cursor-pointer nav-link'><Link to="/#inicio">Inicio</Link></li>
                            <li className='cursor-pointer nav-link'><Link to="/#nosotros">Nosotros</Link></li>
                            <li className='cursor-pointer nav-link'><Link to="/products">Sistemas</Link></li>
                            <li className='cursor-pointer nav-link'><Link to="/#contacto">Contacto</Link></li>
                            <li className="bg-[#E0F600] text-black px-4 py-1 rounded-2xl cursor-pointer">
                                <Link to="">Consulta gratis</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent

// Falta agregar:
//  - Navegación en el menú mobile
//  - Navegación en el menú md and lg
//  - Efectos hover
//  - Alguna animación si es necesario