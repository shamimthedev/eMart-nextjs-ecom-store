// src/components/CustomizeProduct.tsx
'use client'

import { useState } from "react";

interface Color {
  name: string;
  value: string;
  available: boolean;
}

interface Size {
  name: string;
  available: boolean;
}

interface CustomizeProductProps {
  colors: Color[];
  sizes: Size[];
}

const CustomizeProduct = ({ colors, sizes }: CustomizeProductProps) => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(colors.find(c => c.available) || null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(sizes.find(s => s.available) || null);

  return (
    <div className="space-y-8">
      {/* Color Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Color</h3>
          {selectedColor && (
            <span className="text-sm text-gray-600 font-medium">
              {selectedColor.name}
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => color.available && setSelectedColor(color)}
              disabled={!color.available}
              className={`relative w-12 h-12 rounded-full border-2 transition-all duration-200 ${
                selectedColor?.name === color.name
                  ? 'border-pinki scale-110 shadow-lg'
                  : color.available 
                  ? 'border-gray-300 hover:border-pinki hover:scale-105'
                  : 'border-gray-200 cursor-not-allowed opacity-50'
              }`}
              style={{ backgroundColor: color.value }}
            >
              {selectedColor?.name === color.name && (
                <div className="absolute inset-0 rounded-full border-2 border-white shadow-inner" />
              )}
              {!color.available && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-red-500 rotate-45 rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      {sizes.length > 1 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Size</h3>
            <button className="text-sm text-pinki hover:underline font-medium">
              Size Guide
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => size.available && setSelectedSize(size)}
                disabled={!size.available}
                className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                  selectedSize?.name === size.name
                    ? 'border-pinki bg-pinki text-white shadow-lg transform scale-105'
                    : size.available
                    ? 'border-gray-300 text-gray-700 hover:border-pinki hover:text-pinki hover:bg-pinki/5'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-100'
                }`}
              >
                {size.name}
                {!size.available && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-500 rotate-12 rounded-full" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Options Summary */}
      {(selectedColor || selectedSize) && (
        <div className="p-4 bg-gray-50 rounded-xl">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Selected Options:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedColor && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm">
                <div 
                  className="w-4 h-4 rounded-full border border-gray-300" 
                  style={{ backgroundColor: selectedColor.value }}
                />
                {selectedColor.name}
              </span>
            )}
            {selectedSize && (
              <span className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm">
                Size: {selectedSize.name}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizeProduct;