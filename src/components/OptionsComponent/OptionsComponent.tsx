// import React from 'react';
import { options } from "../../assets/data/options.tsx";

function OptionsComponent() {
    
    
    // Funciones del componente
    const printOptions = () => {
        return options.map(option => {
            return(
                <div key={option.id} className="w-full md:max-w-5xl lg:max-w-7xl bg-cover bg-center flex flex-col items-center justify-center text-white rounded-4xl" style={{ backgroundImage: `url(${option.background})` }}>
                    <div className="flex flex-col w-full items-center justify-center p-5 gap-5 md:flex-row md:p-10 md:h-150">
                        <div className="max-w-90 pt-3">
                            <h2 className="nunito text-2xl md:text-4xl font-bold">{option.title}</h2>
                            <h3 className="pt-sans md:text-md text-gray-300">{option.text}</h3>
                            <div className="my-3 md:my-5">
                                <a href="#" className="relative overflow-hidden rounded-full border border-[#E0F600] px-4 py-2 text-[#E0F600] group inline-block" >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                    Ver más
                                </span>
                                <span className="absolute -inset-px w-0 bg-[#E0F600] transition-all duration-300 ease-in-out group-hover:w-[calc(100%+2px)] rounded-full">
                                    {/*  */}
                                </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src={option.img} alt={`${option.title} image`} className="w-60 h-50 md:w-100 md:h-80" />
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <section className="bg-black flex flex-col items-center gap-5 p-5">
                {printOptions()}
            </section>
        </>
    )
}

export default OptionsComponent