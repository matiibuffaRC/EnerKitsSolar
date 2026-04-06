// import React from 'react';


function InicieComponent() {
    return (
        <div className="bg-[url('/bg-img-InicieComponent.jpeg')] bg-cover bg-center h-screen w-full relative flex flex-col items-center justify-center">

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Gradiente radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85)_0%,transparent_60%)]"></div>

            {/* Contenido */}
            <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
                <h2 className="nunito text-4xl px-10 mb-2 md:text-5xl font-bold">
                    El sol trabaja para vos
                </h2>
                <h3 className="pt-sans text-sm px-4 md:text-md md:max-w-100">
                    Y nosotros también. Energía solar y asesoría experta para optimizar tu inversión en el futuro verde.
                </h3>
                <h3 className="nunito bg-[#E0F600] text-black px-4 py-1 mt-5 inline-block rounded-2xl font-bold">
                    Consulta gratuita aquí
                </h3>
            </div>

        </div>
    )
}

export default InicieComponent