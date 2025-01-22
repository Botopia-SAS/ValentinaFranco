import React from 'react';
import Link from 'next/link';

const Categories: React.FC = () => {
    const categories = [
        { id: 1, name: "Alimento", icon: "/alimento.svg", link: "/" },
        { id: 2, name: "Veterinaria", icon: "/veterinaria.svg", link: "/" },
        { id: 3, name: "Cachorros", icon: "/cachorros.svg", link: "/" },
        { id: 4, name: "Juguetes", icon: "/juguetes.svg", link: "/" },
        { id: 5, name: "Farmapet", icon: "/farmapet.svg", link: "/" },
        { id: 6, name: "Accesorios", icon: "/accesorios.svg", link: "/" },
    ];

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorías</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map(category => (
                        <Link href={category.link} key={category.id}>
                            <div className="flex flex-col items-center bg-gray-100 hover:bg-gray-200 rounded-lg p-4 cursor-pointer transition">
                                <img
                                    src={category.icon}
                                    alt={category.name}
                                    className="w-16 h-16 mb-2"
                                />
                                <span className="text-gray-700 font-medium text-sm text-center">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
