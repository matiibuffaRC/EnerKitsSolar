import tiendaNubeLogo from "../../assets/icons/tiendanube-svgrepo-com.svg";
import mercadoLibreLogo from "../../assets/icons/mercadolibre-svgrepo-com.svg";
import shopifyLogo from "../../assets/icons/shopify-color-svgrepo-com.svg";
import vtexLogo from "../../assets/icons/VTEX-64045aa2.png";
import magentoLogo from "../../assets/icons/magento-2-logo.svg";

interface Platform {
    name: string;
    logo: string;
}

const PLATFORMS: Platform[] = [
    { name: "Tienda Nube", logo: tiendaNubeLogo },
    { name: "Mercado Libre", logo: mercadoLibreLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "VTEX", logo: vtexLogo },
    { name: "Magento", logo: magentoLogo },
];

function PlatformIntegration() {
    return (
        <section className="bg-[#111] text-white py-10 px-5 md:py-16">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 md:gap-12">
                <h2 className="nunito font-bold text-2xl md:text-4xl">
                    Integración con múltiples plataformas
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-15 sm:gap-10 md:gap-14 w-full">
                    {PLATFORMS.map((platform) => (
                        <div
                            key={platform.name}
                            className="flex flex-col items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-all duration-300">
                            <div className="h-10 md:h-12 lg:h-14 flex items-center justify-center grayscale cursor-pointer hover:grayscale-0 transition-all duration-300">
                                <img src={platform.logo} alt={`Logo de ${platform.name}`} className="h-full w-auto object-contain" />
                            </div>
                            <span className="pt-sans text-sm md:text-lg font-bold text-white">
                                {platform.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PlatformIntegration;