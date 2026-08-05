// import React from 'react';
import questionIcon from "../../assets/icons/question-mark-svgrepo-com.svg";
import communityIcon from "../../assets/icons/community-svgrepo-com.svg";
import writeIcon from "../../assets/icons/write-svgrepo-com.svg";
import lorryIcon from "../../assets/icons/lorry-svgrepo-com.svg";

interface Step {
    icon: string;
    title: string;
    description: string;
}


// Chequear esto
const STEPS: Step[] = [
    { icon: questionIcon, title: "Consultá", description: "Hablanos y preguntanos para sacarte todas tus dudas!" },
    { icon: communityIcon, title: "Propuesto", description: "Buscamos el mejor paquete adaptado a tus necesidades y presupuesto." },
    { icon: writeIcon, title: "Cotización", description: "Te elaboramos un presupuesto sin costo adaptado para vos." },
    { icon: lorryIcon, title: "Envíos", description: "Enviamos tus productos en un tiempo máximo de 7 días hábiles" },
];

const itemWrapperClass =
    "flex flex-row md:flex-col gap-4 md:gap-5 justify-start md:justify-center items-center w-full max-w-sm md:max-w-45 lg:max-w-60 mx-auto md:mx-0";

const iconBoxClass =
    "shrink-0 w-25 h-25 bg-zinc-700 border border-white/10 shadow-lg rounded-3xl relative flex justify-center items-center transition-all duration-300 hover:bg-zinc-600";

const badgeClass =
    "h-6 w-6 bg-[#e0f600] absolute rounded-full -top-1 -right-1 flex justify-center items-center shadow-md";

const infoWrapperClass = "flex-1 md:flex-none md:w-40 md:text-center px-2";
const titleClass = "nunito text-xl font-bold text-[#e0f600]";
const descriptionClass = "pt-sans text-sm md:text-xs lg:text-md text-gray-300";

// Color sólido y opaco: sin importar cuánto se solapen los segmentos, se ven idénticos
const connectorColorClass = "bg-zinc-700";

const connectorRightClass =
    `h-5 w-[3px] md:w-20 md:h-[3px] ${connectorColorClass} rounded-full absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-right-5 md:left-full left-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2`;

const connectorLeftClass =
    `h-5 w-[3px] md:w-20 md:h-[3px] ${connectorColorClass} rounded-full absolute -bottom-5 md:bottom-1/2 md:top-1/2 md:-left-20 md:right-full left-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2`;

const connectorLeftLastClass =
    `h-0 md:h-[3px] md:w-20 ${connectorColorClass} rounded-full absolute md:bottom-1/2 md:top-1/2 md:-left-20 md:right-full left-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2`;

function StepItem({ step, index }: { step: Step; index: number }) {
    const isFirst = index === 0;
    const isLast = index === STEPS.length - 1;

    return (
        <div className={itemWrapperClass}>
            <div className={iconBoxClass}>
                <img src={step.icon} alt={`Icono de ${step.title}`} className="h-10 w-10 invert" />
                <div className={badgeClass}>
                    <h2 className="text-black font-bold text-sm">{index + 1}</h2>
                </div>
                {!isLast && <div className={connectorRightClass}></div>}
                {!isFirst && (
                    <div className={isLast ? connectorLeftLastClass : connectorLeftClass}></div>
                )}
            </div>
            <div className={infoWrapperClass}>
                <h2 className={titleClass}>{step.title}</h2>
                <h3 className={descriptionClass}>{step.description}</h3>
            </div>
        </div>
    );
}

function WorkingMethod() {
    return (
        <section className="bg-[#111] p-5 pb-10">
            <div className="text-white">
                <div className="m-auto pt-5 pb-5 md:pb-10 md:max-w-5xl lg:max-w-7xl">
                    <h2 className="nunito font-bold text-2xl">Nuestro proceso de trabajo</h2>
                    <h2 className="nunito font-bold text-md">Por un futuro verde y sustentable</h2>
                </div>

                <div className="m-auto flex flex-col md:max-w-3xl lg:max-w-5xl md:flex-row gap-4 md:gap-0 justify-center items-center md:items-stretch">
                    {STEPS.map((step, index) => (
                        <StepItem key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkingMethod;