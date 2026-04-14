import { useState } from "react";

const productsData = [
    { id: 1, name: "Producto 1", category: "Ropa", price: 100 },
    { id: 2, name: "Producto 2", category: "Tecnología", price: 200 },
    { id: 3, name: "Producto 3", category: "Ropa", price: 150 },
    { id: 4, name: "Producto 4", category: "Accesorios", price: 80 },
    { id: 5, name: "Producto 5", category: "Ropa", price: 100 },
    { id: 6, name: "Producto 6", category: "Tecnología", price: 200 },
    { id: 7, name: "Producto 7", category: "Ropa", price: 150 },
    { id: 8, name: "Producto 8", category: "Accesorios", price: 80 },
    { id: 9, name: "Producto 9", category: "Ropa", price: 100 },
    { id: 10, name: "Producto 10", category: "Tecnología", price: 200 },
    { id: 11, name: "Producto 11", category: "Ropa", price: 150 },
    { id: 12, name: "Producto 12", category: "Accesorios", price: 80 },
];

const categories = ["Todos", "Ropa", "Tecnología", "Accesorios"];

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
                    <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"/>
                )}

                <div className="flex gap-6 items-start">
                    
                    {/* Sidebar */}
                    <div
                        className={`
                        fixed top-0 left-0 h-screen w-64 bg-zinc-900 p-6 z-50
                        transform transition-transform duration-300
                        ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:sticky top-26 md:translate-x-0 md:w-1/4 md:h-[calc(100dvh-150px)]`}>
                        {/* Header mobile */}
                        <div className="flex justify-between items-center mb-4 md:hidden">
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
                                        className={`w-full text-left px-3 py-2 rounded-lg transition
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
                    <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <div className="h-40 bg-zinc-800 rounded-xl mb-4 flex items-center justify-center">
                                    <span className="text-zinc-500">
                                        Imagen
                                    </span>
                                </div>

                                <h4 className="text-lg font-semibold">
                                    {product.name}
                                </h4>
                                <p className="text-sm text-zinc-400">
                                    {product.category}
                                </p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-[#E0F600] font-bold">
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