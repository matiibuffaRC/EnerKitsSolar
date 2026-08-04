import { FaWhatsapp } from "react-icons/fa";

function WhatsappIcon() {
    return (
        <a
            title="Whatsapp icon"
            href="https://wa.me/5493564507240"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center"
        >
            {/* Anillo de pulso, decorativo, no debe capturar clicks */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping pointer-events-none"></span>

            <span className="relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                <FaWhatsapp size={27} />
            </span>
        </a>
    );
}

export default WhatsappIcon;