// import React from 'react';
import questionIcon from "../../assets/icons/question-mark-svgrepo-com.svg";
import communityIcon from "../../assets/icons/community-svgrepo-com.svg";
import writeIcon from "../../assets/icons/write-svgrepo-com.svg";
import lorryIcon from "../../assets/icons/lorry-svgrepo-com.svg";


function WorkingMethod() {
    return (
        <>
            <section className="bg-[#111] p-5 pb-10">
                <div className="text-white">
                    <div className="m-auto pt-5 pb-5 md:pb-10 md:max-w-5xl lg:max-w-7xl">
                        <h2 className="nunito font-bold text-2xl">Nuestro proceso de trabajo</h2>
                        <h2 className="nunito font-bold text-md">Por un futuro verde y sustentable</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center">
                        {/* Item 1 */}
                        <div className="flex flex-row md:flex-col md:gap-5 justify-between items-center md:max-w-70">
                            {/* Icon-item-1 */}
                            <div className="w-25 h-25 bg-black rounded-3xl relative flex justify-center items-center">
                                <img src={questionIcon} alt="Question icon" className="h-10 w-10 invert"/>
                                <div className="h-6 w-6 bg-gray-500 absolute rounded-full -top-1 -right-1 flex justify-center items-center">
                                    <h2 className="text-white font-bold">
                                        1
                                    </h2>
                                </div>
                                <div className="h-5 md:w-20 border-l-3 md:border-l-0 md:border-t-3 border-black absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-right-5 md:left-full left-1/2 right-1/2"></div>
                            </div>
                            {/* Information-item-1 */}
                            <div className="w-70 md:w-65 md:text-center px-2 h-26">
                                <h2 className="nunito text-xl font-bold text-[#e0f600]">Consultá</h2>
                                <h3 className="pt-sans">Hablanos y preguntanos para sacarte todas tus dudas!</h3>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col md:gap-5 justify-between items-center  md:max-w-70">
                            {/* Icon-item-1 */}
                            <div className="w-25 h-25 bg-black rounded-3xl relative flex justify-center items-center">
                                <img src={communityIcon} alt="Question icon" className="h-10 w-10 invert"/>
                                <div className="h-6 w-6 bg-gray-500 absolute rounded-full -top-1 -right-1 flex justify-center items-center">
                                    <h2 className="text-white font-bold">
                                        2
                                    </h2>
                                </div>
                                <div className="h-5 md:w-20 border-l-3 md:border-l-0 md:border-t-3 border-black absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-right-5 md:left-full left-1/2 right-1/2"></div>
                                <div className="h-5 md:w-20 border-l-3 md:border-l-0 md:border-t-3 border-black absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-left-20 md:right-full left-1/2 right-1/2"></div>
                            </div>
                            {/* Information-item-1 */}
                            <div className="w-70 md:w-65 md:text-center px-2 h-26">
                                <h2 className="nunito text-xl font-bold text-[#e0f600]">Propuesto</h2>
                                <h3 className="pt-sans">Buscamos el mejor paquete adaptado a tus necesidades y presupuesto.</h3>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col md:gap-5 justify-between items-center  md:max-w-70">
                            {/* Icon-item-1 */}
                            <div className="w-25 h-25 bg-black rounded-3xl relative flex justify-center items-center">
                                <img src={writeIcon} alt="Question icon" className="h-10 w-10 invert"/>
                                <div className="h-6 w-6 bg-gray-500 absolute rounded-full -top-1 -right-1 flex justify-center items-center">
                                    <h2 className="text-white font-bold">
                                        3
                                    </h2>
                                </div>
                                <div className="h-5 md:w-20 border-l-3 md:border-l-0 md:border-t-3 border-black absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-right-5 md:left-full left-1/2 right-1/2"></div>
                                <div className="h-5 md:w-20 border-l-3 md:border-l-0 md:border-t-3 border-black absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-left-20 md:right-full left-1/2 right-1/2"></div>
                            </div>
                            {/* Information-item-1 */}
                            <div className="w-70 md:w-65 md:text-center px-2 h-26">
                                <h2 className="nunito text-xl font-bold text-[#e0f600]">Cotización</h2>
                                <h3 className="pt-sans">Te elaboramos un presupuesto sin costo de acuerdo al sistema que más se adapte a tus necesidades.</h3>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col md:gap-5 justify-between items-center  md:max-w-70">
                            {/* Icon-item-1 */}
                            <div className="w-25 h-25 bg-black rounded-3xl relative flex justify-center items-center">
                                <img src={lorryIcon} alt="Question icon" className="h-10 w-10 invert"/>
                                <div className="h-6 w-6 bg-gray-500 absolute rounded-full -top-1 -right-1 flex justify-center items-center">
                                    <h2 className="text-white font-bold">
                                        4
                                    </h2>
                                </div>
                                <div className="h-0 md:h-5 md:w-20 border-l-3 md:border-l-0 md:border-t-3 border-black absolute  md:bottom-1/2 md:top-1/2 md:-left-20 md:right-full left-1/2 right-1/2"></div>
                            </div>
                            {/* Information-item-1 */}
                            <div className="w-70 md:w-65 md:text-center px-2 h-26">
                                <h2 className="nunito text-xl font-bold text-[#e0f600]">Envíos</h2>
                                <h3 className="pt-sans">Enviamos tus productos en un tiempo máximo de 7 días hábiles</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkingMethod