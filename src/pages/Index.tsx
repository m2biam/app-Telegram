import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const categories = ['All', 'Apparel', 'Home Decor', 'Accessories'];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fcfaf7] pb-12">
      <Header />
      
      <main className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black text-[#0a6c54] mb-6 relative inline-block tracking-tight">
            Best-Selling Designs
            <span className="block w-24 h-1.5 bg-[#d4ac47] mx-auto mt-6 rounded-full"></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
            Discover the designs our customers love the most, applied to premium products.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2",
                activeCategory === cat
                  ? "bg-[#0a6c54] border-[#0a6c54] text-white shadow-lg shadow-[#0a6c54]/20 scale-105"
                  : "bg-white border-gray-100 text-gray-500 hover:border-[#0a6c54] hover:text-[#0a6c54]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.title + index} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center border-t border-gray-100 pt-20"
        >
          <h3 className="text-2xl font-bold text-[#0a6c54] mb-4">Quality You Can Trust</h3>
          <p className="text-gray-400 italic text-lg max-w-xl mx-auto">
            Every product is printed on demand using high-quality materials and shipped directly to your door.
          </p>
        </motion.div>
      </main>
      
      <footer className="mt-20">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;