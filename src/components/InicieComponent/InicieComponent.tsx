// import React from 'react';


function InicieComponent() {
    return (
        <section className="bg-[url('/bg-img-InicieComponent.jpeg')] bg-cover bg-center h-screen w-full relative flex flex-col items-center justify-center">

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Gradiente radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85)_0%,transparent_60%)]"></div>

            {/* Contenido */}
            <div className="fade-down relative z-10 text-start md:text-center text-white px-4 md:px-4 flex flex-col items-start md:items-center">
                <h2 className=" nunito text-4xl md:px-10 mb-2 md:text-5xl font-bold md:hidden">
                    El sol y <span className="text-[#E0F600]">Enerkits</span> trabajan para vos
                </h2>
                <h2 className="hidden nunito text-4xl md:px-10 mb-2 md:text-5xl font-bold md:block">
                    El sol trabaja para vos
                </h2>
                <h3 className="md:hidden pt-sans text-lg font-bold w-[65%] text-gray-300 px-1 md:px-0 md:text-xl md:max-w-125 md:w-full">
                    Energía solar y asesoría experta para optimizar tu inversión en el futuro verde.
                </h3>
                <h3 className="hidden md:block pt-sans text-lg font-bold w-[65%] text-gray-300 px-1 md:px-0 md:text-xl md:max-w-125 md:w-full">
                    Y nosotros también. Energía solar y asesoría experta para optimizar tu inversión en el futuro verde.
                </h3>
                <h3 className="nunito bg-[#E0F600] text-black px-5 py-1.5 mt-3 inline-block rounded-3xl font-bold text-lg md:text-xl">
                    Consulta gratuita aquí
                </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black via-black/40 to-transparent"></div>
        </section>
    )
}

export default InicieComponent