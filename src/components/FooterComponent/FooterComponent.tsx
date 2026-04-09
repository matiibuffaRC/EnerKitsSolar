// import React from 'react';

// Icono
import phoneIcon from "../../assets/icons/phone-call.png";
import ubiIcon from "../../assets/icons/pin.png";
import mailIcon from "../../assets/icons/email.png";
// 

function FooterComponent() {
    return (
        <>
            <footer className="bg-black text-white border-t border-gray-100/20 flex flex-col items-center">
                <div className="flex flex-col gap-3 border border-white">
                    <h3 className="text-xl text-center">Enerkits</h3>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="flex items-center gap-1 group">
                            <div className="p-2 flex items-center justify-center bg-[#E0F600] rounded-full group-hover:bg-[#E0F600] transition">
                                <img src={phoneIcon} alt="Phone icon" className="w-5  h-5"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="nunito text-[#E0F600] font-bold text-lg">Teléfono</span>
                                
                            </div>
                        </a>

                        <a href="#" className="flex items-center gap-1 group">
                            <div className="p-2 flex items-center justify-center bg-[#E0F600] rounded-full group-hover:bg-[#E0F600] transition">
                                <img src={mailIcon} alt="Phone icon" className="w-5 h-5"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="nunito text-[#E0F600] font-bold text-lg">Email</span>
                                
                            </div>
                        </a>

                        <a href="#" className="flex items-center gap-1 group">
                            <div className="p-2 flex items-center justify-center bg-[#E0F600] rounded-full group-hover:bg-[#E0F600] transition">
                                <img src={ubiIcon} alt="Phone icon" className="w-5 h-5"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="nunito text-[#E0F600] font-bold text-lg">Ubicación</span>
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent