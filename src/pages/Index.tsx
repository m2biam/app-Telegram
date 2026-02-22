import React from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Index = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 italic text-lg">
            Discover unique art applied to premium products.
          </p>
        </div>
      </main>
      
      <footer className="mt-12">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;