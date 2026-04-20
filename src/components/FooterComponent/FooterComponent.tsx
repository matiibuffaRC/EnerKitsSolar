// import React from 'react';
import { Link } from 'react-router-dom';

// Iconos
import phoneIcon from "../../assets/icons/phone-call.png";
import ubiIcon from "../../assets/icons/pin.png";
import mailIcon from "../../assets/icons/email.png";

function FooterComponent() {
    return (
        <footer className="bg-black text-white border-t border-gray-800 px-6 md:px-16">
            
            {/* TOP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 border-b border-gray-800">
                
                {/* CONTACTO */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Enerkits</h3>

                    <div className="flex flex-col gap-4">

                        <a href="https://wa.me/5493564507240" rel='noopener' target="_blank"
                            className="flex items-center gap-3 group">

                            <div className="p-2 bg-gray-300 rounded-full group-hover:bg-gray-700 transition">
                                <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
                            </div>

                            <span className="text-gray-300 group-hover:text-gray-700 transition">
                                Teléfono
                            </span>
                        </a>

                        <a href="#"
                            className="flex items-center gap-3 group">

                            <div className="p-2 bg-gray-300 rounded-full group-hover:bg-gray-700 transition">
                                <img src={mailIcon} alt="Mail" className="w-4 h-4" />
                            </div>

                            <span className="text-gray-300 group-hover:text-gray-700 transition">
                                Email
                            </span>
                        </a>

                        <a href="#"
                            className="flex items-center gap-3 group">

                            <div className="p-2 bg-gray-300 rounded-full group-hover:bg-gray-700 transition">
                                <img src={ubiIcon} alt="Ubicación" className="w-4 h-4" />
                            </div>

                            <span className="text-gray-300 group-hover:text-gray-700 transition">
                                Ubicación
                            </span>
                        </a>
                    </div>
                </div>

                {/* PRODUCTOS */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Productos</h3>

                    <div className="flex flex-col gap-2">
                        <Link to="/products" className="text-gray-300 hover:text-white transition">
                            Kits solares
                        </Link>
                        <Link to="/products" className="text-gray-300 hover:text-white transition">
                            Plantas fotovoltaicas
                        </Link>
                    </div>
                </div>

                {/* SISTEMAS */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Sistemas</h3>

                    <div className="flex flex-col gap-2">
                        <Link to="/products" className="text-gray-300 hover:text-white transition">
                            Sistemas on grid
                        </Link>
                        <Link to="/products" className="text-gray-300 hover:text-white transition">
                            Sistemas off grid
                        </Link>
                        <Link to="/products" className="text-gray-300 hover:text-white transition">
                            Sistemas híbridos
                        </Link>
                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="text-center py-6">
                <p className="text-gray-500 text-sm">
                    © 2026 Enerkits — Made by Matías Buffa
                </p>
            </div>

        </footer>
    );
}

export default FooterComponent;