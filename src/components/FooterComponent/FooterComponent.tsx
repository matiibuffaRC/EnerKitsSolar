// import React from 'react';

// Icono
import phoneIcon from "../../assets/icons/phone-call.png";
import ubiIcon from "../../assets/icons/pin.png";
import mailIcon from "../../assets/icons/email.png";
// 

import { Link } from 'react-router-dom';


function FooterComponent() {
    return (
        <>
            <footer className="h-full bg-black text-white border-t border-gray-100/20 px-5">
                <div className="h-full flex flex-col items-center gap-2 py-5 md:flex-row md:gap-15 justify-center md:items-start border-b border-gray-100/20">
                    <div className="flex flex-col gap-1 md:justify-start h-full">
                        <h3 className="text-2xl text-center font-bold">Enerkits</h3>
                        <div className="flex flex-col gap-3">
                            <a href="https://wa.me/5493564507240" target="__blank" className="flex items-center gap-1 group pl-4">
                                <div className="p-1.5 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-gray-200 transition">
                                    <img src={phoneIcon} alt="Phone icon" className="w-2.5  h2.53"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="pt-sans text-gray-200 text-md">Teléfono</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-1 group pl-4">
                                <div className="p-1.5 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-gray-200 transition">
                                    <img src={mailIcon} alt="Phone icon" className="w-2.5 h-2.5"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="pt-sans text-gray-200 text-md">Email</span>
                                    
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-1 group pl-4">
                                <div className="p-1.5 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-gray-200 transition">
                                    <img src={ubiIcon} alt="Phone icon" className="w-2.5 h-2.5"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="pt-sans text-gray-200 text-md">Ubicación</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="h-full text-center flex flex-col md:justify-start md:items-start">
                        <h3 className="text-2xl font-bold">Productos</h3>
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <div className="pt-sans text-gray-200">
                                <a href="#" title="Link to products" className="text-md">Kits solares</a>
                            </div>
                            <div className="pt-sans text-gray-200">
                                <a href="#" title="Link to products" className="text-md">Plantas fotovoltaicas</a>
                            </div>
                        </div>
                    </div>

                    <div className="h-full text-center flex flex-col md:justify-start">
                        <h3 className="text-2xl font-bold ">Sistemas de instalación</h3>
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <div className="pt-sans text-gray-200">
                                <Link to="/products" title="Link to products" className="text-md">Sistemas on grid</Link>
                            </div>
                            <div className="pt-sans text-gray-200">
                                <Link to="/products" title="Link to products" className="text-md">Sistemas off grid</Link>
                            </div>
                            <div className="pt-sans text-gray-200">
                                <Link to="/products" title="Link to products" className="text-md">Sistemas hibridos</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-center py-3">
                        <h3 className="nunito text-gray-200 text-md">Made by Matías Buffa - © 2026</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent