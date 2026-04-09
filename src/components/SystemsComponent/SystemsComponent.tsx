// import React from 'react';
import { options } from "../../assets/data/systemsOptions.tsx";

function SystemsComponent() {
    // Funciones
    const printSystems = () => {
        return options.map(option => {
            return(
                <div key={option.id} className="flex-1 hover:-translate-y-2 transition-transform duration-700 shadow-lg shadow-gray-800/30">
                    <div className="flex items-center justify-center rounded">
                        <img src={option.img} alt={`${option.title} image`} className=""/>
                    </div>
                    <div className="text-white py-5">
                        <h2 className="nunito text-[#E0F600] text-2xl font-bold">{option.title}</h2>
                        <h3 className="pt-sans text-gray-300 text-lg">{option.subtitle}</h3>
                        <h4 className="text-md pr-2">{option.data}</h4>
                    </div>
                </div>
            )
        })
    }    
    return (
        <>
            <section className="bg-black flex flex-col items-center pb-50">
                <div className="p-5 md:max-w-5xl lg:max-w-7xl">
                    <h2 className="nunito text-[#E0F600] text-2xl font-bold py-5">Sistemas de instalación</h2>
                    <div className="flex flex-col gap-10 md:gap-5 md:flex-row">
                        {printSystems()}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SystemsComponent