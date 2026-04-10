// import React from 'react';
import phoneIcon from "../../assets/icons/phone-call.png";
import ubiIcon from "../../assets/icons/pin.png";
import mailIcon from "../../assets/icons/email.png";

function ContactComponent() {
    return (
        <>
            <section className="bg-black text-white py-50 px-5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                    <div className="bg-gray-900/20 p-4 md:p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-6 text-[#E0F600]">Contactame</h2>
                        <form className="flex flex-col gap-4">
                            <input type="text" placeholder="John Doe" className="p-3 rounded-lg bg-black border border-zinc-700 focus:border-[#E0F600] outline-none transition"/>
                            <input type="email" placeholder="tucorreo@gmail.com" className="p-3 rounded-lg bg-black border border-zinc-700 focus:border-[#E0F600] outline-none transition"/>
                            <textarea  placeholder="Tu mensaje" className="p-3 rounded-lg bg-black border border-zinc-700 focus:border-[#E0F600] outline-none transition resize-none"></textarea>
                            <button type="submit" className="mt-2 border border-[#E0F600] text-[#E0F600] py-3 rounded-lg font-semibold relative overflow-hidden group">
                                <span className="relative z-10 group-hover:text-black transition duration-300 cursor-pointer">
                                    Enviar mensaje
                                </span>
                                <span className="absolute inset-0 bg-[#E0F600] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </button>
                        </form>
                    </div>

                    
                    <div className="flex flex-col justify-center gap-6">
                        <h2 className="text-3xl font-bold text-[#E0F600]">¿Tenés alguna consulta? Hablemos!</h2>
                        <p className="text-zinc-400">
                            Podés contactarnos por este formulario o a través de nuestras redes sociales.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="#" className="flex items-center gap-3 group">
                                <div className="p-2 flex items-center justify-center bg-[#E0F600] rounded-full group-hover:bg-[#E0F600] transition">
                                    <img src={phoneIcon} alt="Phone icon" className="w-5  h-5"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="nunito text-[#E0F600] font-bold">Teléfono</span>
                                    <span className="nunito text-gray-300 group-hover:text-[#E0F600] transition">+54 9 11 6242-8739</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-3 group">
                                <div className="p-2 flex items-center justify-center bg-[#E0F600] rounded-full group-hover:bg-[#E0F600] transition">
                                    <img src={mailIcon} alt="Phone icon" className="w-5 h-5"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="nunito text-[#E0F600] font-bold">Email</span>
                                    <span className="nunito text-gray-300 group-hover:text-[#E0F600] transition">enerKits@gmail.com</span>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-3 group">
                                <div className="p-2 flex items-center justify-center bg-[#E0F600] rounded-full group-hover:bg-[#E0F600] transition">
                                    <img src={ubiIcon} alt="Phone icon" className="w-5 h-5"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="nunito text-[#E0F600] font-bold">Ubicación</span>
                                    <span className="nunito text-gray-300 group-hover:text-[#E0F600] transition wrap-normal">25 de Mayo 1889, San Francisco</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                </section>
        </>
    )
}

export default ContactComponent