import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Apparel', 'Home Decor', 'Accessories'] as const;
type Category = typeof categories[number];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#fcfaf7] pb-12">
      <Header />
      
      <main className="container mx-auto px-4 max-w-5xl">
        <div className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a6c54] mb-4 relative inline-block">
            Best-Selling Designs
            <span className="block w-16 h-1 bg-[#d4ac47] mx-auto mt-4 rounded-full"></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mt-2">
            Discover the designs our customers love the most.
          </p>
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 mb-12 max-w-[300px] mx-auto md:max-w-none">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-3 py-2 transition-all duration-300 border-2 text-xs md:text-base h-auto w-full md:w-auto",
                activeCategory === category 
                  ? "bg-[#0a6c54] text-white border-[#0a6c54] hover:bg-[#0a6c54] hover:text-white" 
                  : "bg-white text-[#0a6c54] border-gray-100 hover:border-[#0a6c54] hover:bg-transparent"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No products found in this category.</p>
          </div>
        )}

        <div className="mt-20 text-center">
          <p className="text-gray-400 italic text-lg">
            Discover unique art applied to premium products.
          </p>
        </div>
      </main>
      
      <footer className="mt-12">
        {/* MadeWithDyad removed */}
      </footer>
    </div>
  );
};

export default Index;