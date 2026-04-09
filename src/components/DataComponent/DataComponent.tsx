import { useEffect, useRef, useState } from "react";
import { qualifications } from "../../assets/data/data.tsx";
import '../../index.css';

function DataComponent() {
    // Variables de estado
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // se ejecuta solo una vez
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Funciones y lógica del componente
    const printQualifications = () => {
        return qualifications.map((qualification, indice)=>{
            return(
                <div key={indice} className={`${visible ? "fade-down flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2 py-5 md:px-4 bg-gray-900/50  w-full rounded-4xl" : ""} hover:-translate-y-0.5 hover:outline hover:outline-2 hover:outline-gray-600/90 hover:shadow-gray-900/50 hover:shadow-lg transition-transform duration-100 select-none cursor-pointer`}
                style={{ animationDelay: `${indice * 0.3}s`}}>
                    <div className="p-5 md:p-3 border border-black rounded-full bg-[#E0F600]">
                        <img src={qualification.icon} alt="" className="w-12"/>
                    </div>
                    <h3 className="pt-sans text-lg md:text-md font-bold px-5 md:px-0">{qualification.text}</h3>
                </div>
            )
        })
    }

    return (
        <>
            <section ref={sectionRef} className="bg-black text-white py-50 text-center flex flex-col items-center">
                <div className="flex flex-col justify-center items-center font-bold md:text-md md:max-w-150 lg:max-w-200">
                    <h2 className="nunito text-2xl md:text-2xl lg:text-4xl px-4">Nuestro objetivo es <span className="bg-[#E0F600] px-3 rounded-3xl text-black font-bold">simple</span></h2>
                    <h2 className="nunito text-2xl md:text-2xl lg:text-4xl px-2">ayudarte a generar tu propia energía verde, <span className="text-[#E0F600]">reducir costo</span> y construir un futuro más <span className="text-[#E0F600]">sostenible y limpio.</span></h2>
                </div>
                <div className="gap-5 md:gap-6 flex flex-col items-center md:flex-row mt-15 md:px-5">
                    {printQualifications()}
                </div>
            </section>
        </>
    )
}

export default DataComponent

// Nuestro objetivo es simple: ayudarte a generar tu propia energía verde, reducir costo y construir un futuro más sostenible y limpio.