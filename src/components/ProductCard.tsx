import React from 'react';
import { Product, shopUrl } from '../data/products';
import { Button } from './ui/button';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="w-full p-4 bg-gray-50 flex justify-center items-center min-h-[200px]">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-w-full h-auto rounded-lg object-contain"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-[#0a6c54] mb-1 line-clamp-2 leading-snug">
          {product.title}
        </h2>
        {product.subtitle && (
          <p className="text-sm font-normal text-gray-500 mb-2">
            {product.subtitle}
          </p>
        )}
        <p className="text-xl font-bold text-[#9feab9] mb-6">
          {product.price}
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          <Button 
            asChild
            className="bg-[#0a6c54] hover:bg-[#0f4c5c] text-white font-bold py-6 rounded-xl transition-all duration-300"
          >
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Buy Now
            </a>
          </Button>
          <Button 
            asChild
            className="bg-[#9feab9] hover:bg-[#43f2af] text-[#0a6c54] font-bold py-6 rounded-xl transition-all duration-300 border-none"
          >
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              See More
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;