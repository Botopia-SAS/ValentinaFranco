'use client';

import React from 'react';

const Products: React.FC = () => {
    const products = [
        {
            id: 1,
            name: "Besties - Huesos Masticables Medianos",
            image: "/products/besties-huesos.jpg",
            price: 19000,
            discountedPrice: 17000,
            discount: "5%",
            rating: 4.5,
            units: "5 uds",
        },
        {
            id: 2,
            name: "Royal Canin - Medium Adult",
            image: "/products/royalcaninma.png",
            price: 195990,
            discountedPrice: 182271,
            discount: "5%",
            rating: 4.8,
            units: "15 KG",
        },
        {
            id: 3,
            name: "Salsa Natural Select Tocineta",
            image: "/products/salsatocineta.jpg",
            price: 9500,
            discountedPrice: 9025,
            discount: "5%",
            rating: 4.6,
            units: "375 ML",
        },
        {
            id: 4,
            name: "Royal Canin Puppy",
            image: "/products/royalcaninpuppy.jpeg",
            price: 170620,
            discountedPrice: 161640,
            discount: "5%",
            rating: 4.7,
            units: "3 KG",
        },
    ];

    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Favoritos</h2>
                {/* Contenedor de scroll horizontal */}
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[250px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition flex-shrink-0"
                        >
                            {/* Imagen del producto */}
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-contain p-4"
                                />
                                {product.discount && (
                                    <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                                        {product.discount}
                                    </span>
                                )}
                            </div>

                            {/* Detalles del producto */}
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                <div className="flex items-center text-sm text-gray-600 mb-2">
                                    <span className="text-yellow-400 mr-1">★</span>
                                    {product.rating} / 5
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-gray-500 line-through text-xs">
                                        Antes: ${product.price.toLocaleString()}
                                    </span>
                                    <span className="text-red-500 font-bold text-sm">
                                        ${product.discountedPrice.toLocaleString()}
                                    </span>
                                </div>
                                <span className="text-gray-500 text-xs">{product.units}</span>
                            </div>

                            {/* Botón de agregar al carrito */}
                            <div className="p-4 border-t border-gray-200">
                                <button className="w-full bg-gray-800 text-white font-semibold py-2 rounded hover:bg-purple-700 transition">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
