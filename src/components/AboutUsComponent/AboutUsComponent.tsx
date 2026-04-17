// import React from 'react';
import card1 from "../../assets/imgs/card1.png";
import checkIcon from "../../assets/icons/check-svgrepo-com.svg";

function AboutUsComponent({ id }: { id?: string }) {
    return (
        <section id={id} className="bg-black text-white p-5 pt-20">
            <div className="flex flex-col items-center gap-10 md:p-5">
                <div>
                    <h2 className="text-center nunito text-xl md:text-3xl font-bold my-2.5">
                        <span className="block">
                            Un equipo que te acompaña en el
                        </span>
                        <span className="m-0.5 block">
                            camino hacia un futuro <span className="bg-[#E0F600] px-2 py-1 md:py-0 md:px-3 rounded-full text-black">verde.</span>
                        </span>
                    </h2>
                    <h3 className="text-center text-gray-300 pt-sans md:max-w-150">
                        En Topquin Energies acompañamos a personas y empresas en el camino hacia la energía renovable, brindando asesoría personalizada, soluciones solares eficientes y proveedores de confianza. Trabajamos para simplificar la transición energética, reducir costos y generar impacto positivo, con un compromiso real por la innovación, la claridad y el futuro sostenible.
                    </h3>
                </div>
                <div className="p-5 h-full rounded-4xl w-full md:max-w-3xl lg:max-w-5xl bg-cover bg-center flex flex-col gap-10 md:flex-row md:justify-center md:h-100 md:items-center md:px-25 shadow-[0_2px_8px_rgba(0,0,0,0.05)]" style={{ backgroundImage: `url(${card1})` }} >
                    <div className="flex-1">
                        <h2 className="nunito font-bold text-2xl md:text-3xl">Nuestro equipo</h2>
                        <h3 className="pt-sans text-md">
                            Soluciones solares diseñadas para hogares. Nuestros kits permiten generar energía limpia y reducir costos mensuales sin modificar la estética de tu vivienda. Configuramos el sistema ideal para tu consumo real y acompañamos cada paso, desde la elección de componentes hasta la instalación final.
                        </h3>
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="nunito bg-[#E0F600] text-black px-5 py-1.5 mt-3 inline-block rounded-3xl font-bold text-md cursor-pointer">
                                <a href="https://wa.me/5493564507240" target="__blank">Consulta gratuita aquí</a>
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1">
                        <div className="flex flex-row gap-2 items-center w-full">
                            <img src={checkIcon} alt="Icon" className="h-5 w-5"/>
                            <h2 className="nunito text-lg md:text-2xl">+15 años de experiencia</h2>
                        </div>
                        <div className="flex flex-row gap-2 items-center w-full">
                            <img src={checkIcon} alt="Icon" className="h-5 w-5"/>
                            <h2 className="nunito text-lg md:text-2xl">Contacto directos con proveedores</h2>
                        </div>
                        <div className="flex flex-row gap-2 items-center w-full">
                            <img src={checkIcon} alt="Icon" className="h-5 w-5"/>
                            <h2 className="nunito text-lg md:text-2xl">Adaptable a todo tipo de casas</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsComponent