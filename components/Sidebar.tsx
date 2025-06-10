'use client';

import React from 'react';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  maxPrice: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  maxPrice
}) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  const handlePriceChange = (index: number, value: string) => {
    const numValue = parseInt(value) || 0;
    const newRange: [number, number] = [...priceRange];
    newRange[index] = numValue;
    onPriceRangeChange(newRange);
  };

  return (
    <div className="bg-blue-700 text-white p-6 rounded-lg h-fit">
      <h2 className="text-xl font-bold mb-6">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 border-white mr-3 flex items-center justify-center transition-colors ${
                selectedCategory === category ? 'bg-white' : 'group-hover:bg-blue-600'
              }`}>
                {selectedCategory === category && (
                  <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                )}
              </div>
              <span className="group-hover:text-blue-200 transition-colors">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price</h3>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              className="w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>${maxPrice}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Max: ${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};