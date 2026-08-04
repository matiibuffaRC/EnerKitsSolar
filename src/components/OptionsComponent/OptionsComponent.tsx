// import React from 'react';
import { options } from "../../assets/data/options.tsx";
import { Link } from 'react-router-dom';

interface CTAButtonProps {
    to?: string;
    href?: string;
    label: string;
    variant?: "solid" | "outline";
}

function CTAButton({ to, href, label, variant = "solid" }: CTAButtonProps) {
    const borderClass = variant === "solid" ? "border-2 border-[#E0F600]" : "border border-[#E0F600]";
    const textClass = variant === "solid" ? "text-white" : "text-[#E0F600]";

    const content = (
        <>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black font-bold">
                {label}
            </span>
            <span className="absolute -inset-px w-0 bg-[#E0F600] transition-all duration-300 ease-in-out group-hover:w-[calc(100%+2px)] rounded-full"></span>
        </>
    );

    const className = `relative overflow-hidden rounded-full ${borderClass} px-4 py-2 ${textClass} group inline-block`;

    if (to) {
        return (
            <Link to={to} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
        </a>
    );
}

function OptionCard({ option, index }: { option: (typeof options)[number]; index: number }) {
    const isReversed = index % 2 !== 0;

    return (
        <div className="w-full md:max-w-5xl lg:max-w-7xl bg-cover bg-center flex flex-col items-center justify-center text-white rounded-4xl relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.01]" style={{ backgroundImage: `url(${option.background})` }} >
            {/* Overlay para garantizar legibilidad del texto sobre cualquier imagen de fondo */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent md:bg--to-r md:from-black/70 md:via-black/30 md:to-transparent"></div>

            <div className={`flex flex-col z-10 w-full items-center justify-center p-5 gap-5 md:flex-row md:p-10 md:h-150 ${ isReversed ? "md:flex-row-reverse" : "md:flex-row" }`} >
                <div className="max-w-90 pt-3">
                    <h2 className="nunito text-2xl md:text-4xl font-bold">{option.title}</h2>
                    <h3 className="pt-sans md:text-md text-gray-300">{option.text}</h3>
                    <div className="my-3 md:my-5">
                        <CTAButton to={option.url} label="Ver más" variant="solid" />
                    </div>
                </div>
                <div>
                    <img src={option.img} alt={`${option.title} image`} className="w-60 h-50 md:w-100 md:h-80 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}

function OptionsComponent() {
    return (
        <section className="bg-black flex flex-col items-center gap-5 p-5 pb-50">
            {options.map((option, index) => (
                <OptionCard key={option.id} option={option} index={index} />
            ))}

            <div className="w-full md:max-w-5xl lg:max-w-7xl bg-[url('/bg-opcion2-img.jpg')] bg-cover bg-bottom flex flex-col items-center justify-center text-white rounded-4xl relative shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <div className="absolute z-10 inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85)_0%,transparent_80%)]"></div>
                <div className="flex flex-col z-20 w-full items-center justify-center p-15 gap-5 md:flex-row md:p-10 md:h-150">
                    <div className="max-w-90 pt-3 flex flex-col items-center justify-center">
                        <h2 className="nunito text-2xl md:text-4xl font-bold">
                            Independencia <span className="text-[#E0F600]">solar</span>
                        </h2>
                        <h3 className="pt-sans md:text-md text-gray-200 text-center">
                            Dejá de comprar electricidad y empezá a venderla. Te asersoramos sin compromiso.
                        </h3>
                        <div className="my-3 md:my-5">
                            <CTAButton href="https://wa.me/5493564507240" label="Solicitar consulta gratuita" variant="outline" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OptionsComponent;