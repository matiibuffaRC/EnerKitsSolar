import { useState } from "react";
import { productsData } from "../../assets/data/productsAndSystems";

// 👉 nuevas categorías basadas en tus datos
const categories = ["Todos", "Baterías", "Cables", "Conectores", "Sistemas", "Paneles"];

function ProductsComponent() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [menuOpen, setMenuOpen] = useState(false);

    const filteredProducts =
        selectedCategory === "Todos"
            ? productsData
            : productsData.filter(
                (product) => product.category === selectedCategory
            );

    return (
        <section className="bg-black text-white min-h-screen px-6 relative">
            <div className="py-18 md:pt-25 max-w-6xl mx-auto">
                
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden bg-[#E0F600] text-black w-full px-4 py-2 rounded-xl mb-4 font-semibold"
                >
                    Filtrar
                </button>

                {menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                    />
                )}

                <div className="flex gap-6 items-start">
                    
                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 left-0 h-screen w-64 bg-zinc-900 p-6 z-50 transform transition-transform duration-300 ${
                            menuOpen ? "translate-x-0" : "-translate-x-full"
                        }
                        md:sticky md:top-26 md:h-[calc(100vh-6rem)]
                        md:translate-x-0 md:w-64 md:shrink-0`}
                    >
                        {/* Header mobile */}
                        <div className="flex justify-between items-center mb-4 md:hidden pt-12 md:pt-0">
                            <h3 className="text-[#E0F600] font-bold">
                                Filtros
                            </h3>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Título desktop */}
                        <h3 className="text-[#E0F600] font-bold mb-4 hidden md:block">
                            Categorías
                        </h3>

                        <ul className="space-y-2 overflow-y-auto h-full pr-2">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition hover:cursor-pointer
                                        ${
                                            selectedCategory === cat
                                                ? "bg-[#E0F600] text-black"
                                                : "hover:bg-zinc-800"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Productos */}
                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-zinc-900 border border-zinc-700 p-1 shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                {/* Imagen */}
                                <div className="h-44 md:h-40 bg-zinc-800  mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h4 className="text-sm md:text-lg font-semibold">
                                    {product.name}
                                </h4>
                                <p className="text-xs md:text-sm text-zinc-400">
                                    {product.category}
                                </p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-[#E0F600] font-bold text-sm md:text-base">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProductsComponent;