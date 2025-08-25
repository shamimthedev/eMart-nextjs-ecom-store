// src/components/ProductTabs.tsx
'use client'

import { useState } from "react";

interface ProductTabsProps {
  specifications: Record<string, string>;
}

const ProductTabs = ({ specifications }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'shipping', label: 'Shipping & Returns' },
    { id: 'care', label: 'Care Instructions' }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
      {/* Tab Headers */}
      <div className="border-b border-gray-100">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-pinki border-b-2 border-pinki bg-pinki/5'
                  : 'text-gray-600 hover:text-pinki hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-8">
        {activeTab === 'specifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">{key}:</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Shipping Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free standard shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Express shipping available (2-3 business days)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>International shipping to most countries</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Returns & Exchanges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>30-day return policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free returns for defective items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Items must be in original condition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'care' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Product Care Instructions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Cleaning & Maintenance</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clean with a soft, dry cloth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Avoid exposure to extreme temperatures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Store in provided carrying case when not in use</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Storage & Handling</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep away from direct sunlight</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Handle with care to avoid damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pinki rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regular software updates recommended</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;