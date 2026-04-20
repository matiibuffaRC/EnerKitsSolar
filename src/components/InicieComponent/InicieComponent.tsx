import { useEffect, useState } from "react";

function InicieComponent({ id }: { id?: string }) {
    const [visible, setVisible] = useState(true);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setVisible(true);
                setClicked(false);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        setClicked(true);

        window.scrollBy({
            top: window.innerHeight * 0.7,
            behavior: "smooth",
        });
    };

    return (
        <section id={id} className="bg-[url('/bg-img-InicieComponent.jpeg')] bg-cover bg-center h-screen w-full relative flex flex-col items-center justify-center">

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Gradiente radial */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85)_0%,transparent_60%)]"></div>

            {/* Contenido */}
            <div className="fade-down relative z-10 text-start md:text-center text-white px-4 md:px-4 flex flex-col items-start md:items-center">
                <h1 className=" nunito text-4xl md:px-10 mb-2 md:text-5xl font-bold md:hidden">
                    El sol y <span className="text-[#E0F600]">Enerkits</span> trabajan para vos
                </h1>
                <h1 className="hidden nunito text4xl md:px-10 mb-2 md:text-5xl font-bold md:block">
                    El sol trabaja para vos
                </h1>
                <h3 className="md:hidden pt-sans text-lg font-bold w-[65%] text-gray-300 px-1 md:px-0 md:text-xl md:max-w-125 md:w-full">
                    Energía solar y asesoría experta para optimizar tu inversión en el futuro verde.
                </h3>
                <h3 className="hidden md:block pt-sans text-lg font-bold w-[65%] text-gray-300 px-1 md:px-0 md:text-xl md:max-w-125 md:w-full">
                    Y nosotros también. Energía solar y asesoría experta para optimizar tu inversión en el futuro verde.
                </h3>
                <h3 className="nunito bg-[#E0F600] text-black px-5 py-1.5 mt-3 inline-block rounded-3xl font-bold text-lg md:text-xl cursor-pointer">
                    <a href="https://wa.me/5493564507240" target="__blank">Consulta gratuita aquí</a>
                </h3>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black via-black/40 to-transparent"></div>

            {/* Arrow Scroll */}
            <div
                onClick={handleClick}
                className={`
                    absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                    cursor-pointer
                    transition-all duration-500
                    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
                    ${clicked ? "scale-75 opacity-0" : "scale-100"}
                `}
            >
                <svg
                    className="w-8 h-8 text-[#AAA] animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}

export default InicieComponent;