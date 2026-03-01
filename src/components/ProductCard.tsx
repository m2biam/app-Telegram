import React from 'react';
import { Product, commonDesc, shopUrl } from '../data/products';
import { Button } from './ui/button';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full group"
    >
      <div className="w-full p-6 bg-gray-50 flex justify-center items-center min-h-[240px] relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-[#0a6c54]/10 text-[#0a6c54] hover:bg-[#0a6c54]/20 border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {product.category}
          </Badge>
        </div>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={product.image} 
          alt={product.title} 
          className="max-w-full h-auto rounded-lg object-contain drop-shadow-xl"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-[#0a6c54] mb-1 line-clamp-2 leading-tight group-hover:text-[#d4ac47] transition-colors duration-300">
          {product.title}
        </h2>
        {product.subtitle && (
          <p className="text-sm font-semibold text-[#d4ac47] mb-2 uppercase tracking-wide">
            {product.subtitle}
          </p>
        )}
        <p className="text-2xl font-black text-[#0a6c54] mb-4">
          {product.price}
        </p>
        <p className="text-sm text-gray-500 mb-8 line-clamp-3 italic leading-relaxed">
          {commonDesc}
        </p>
        <div className="flex flex-col gap-3 mt-auto">
          <Button 
            asChild
            className="bg-[#0a6c54] hover:bg-[#0f4c5c] text-white font-bold py-7 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#0a6c54]/20"
          >
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Buy Now
            </a>
          </Button>
          <Button 
            asChild
            variant="ghost"
            className="text-[#0a6c54] hover:text-[#0a6c54] hover:bg-[#9feab9]/20 font-bold py-7 rounded-2xl transition-all duration-300"
          >
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              See More
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;