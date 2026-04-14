import { FaWhatsapp } from "react-icons/fa";

function WhatsappIcon() {
    return (
        <a  title="Whatsapp icon"
            href="https://wa.me/5493564507240"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
            >
            <FaWhatsapp size={24} />
        </a>
    );
}

export default WhatsappIcon;