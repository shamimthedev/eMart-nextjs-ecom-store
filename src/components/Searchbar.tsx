"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

// Mock search suggestions - in real app, this would come from API
const searchSuggestions = [
  "Wireless headphones",
  "Smart watch",
  "Laptop stand",
  "Camera lens",
  "Gaming keyboard",
  "Bluetooth speaker",
  "Phone case",
  "Fitness tracker"
];

const popularSearches = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Sports",
  "Beauty",
  "Books"
];

const Searchbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.trim()) {
      const filtered = searchSuggestions.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-lg">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative group">
          {/* Search Input */}
          <input
            ref={inputRef}
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="Search products, brands, categories..."
            className="w-full pl-12 pr-20 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pinki/20 focus:border-pinki transition-all duration-200 group-hover:bg-white group-hover:shadow-sm"
          />

          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors duration-200 group"
            >
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Search Submit Button */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-pinki to-purple-600 hover:from-pinki/90 hover:to-purple-600/90 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </form>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden animate-slide-up">
          <div className="max-h-96 overflow-y-auto">
            {/* Current Query Results */}
            {query && suggestions.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Suggestions
                </h4>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group text-left"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-pinki/10 transition-colors duration-150">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                        {suggestion}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            {(!query || suggestions.length === 0) && (
              <div className="p-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {query && suggestions.length === 0 ? 'No results found. Try these popular searches:' : 'Popular Searches'}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group text-left"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-pinki/20 to-purple-600/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-pinki" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-800">
                        {search}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors duration-150 text-gray-600 hover:text-pinki">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white transition-colors duration-150 text-gray-600 hover:text-pinki">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>Categories</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;