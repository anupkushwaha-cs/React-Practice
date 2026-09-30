
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

     
      <div className="h-64 flex items-center justify-center p-6 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

    
      <div className="p-5">

      
        <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-2">
          {product.category}
        </p>


        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

    
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

 
        <p className="text-2xl font-bold text-gray-900 mt-4">
          ${product.price}
        </p>

        <button
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold
                     hover:bg-blue-700 active:scale-95 transition duration-200"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

