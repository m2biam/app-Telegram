import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-[#0a6c54] py-6 flex flex-col items-center justify-center border-b-4 border-[#d4ac47] shadow-md">
      <h1 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl m-0 leading-tight tracking-wide">
        LM Artes
      </h1>
      <p className="text-white text-sm md:text-base font-normal mt-1 opacity-90 tracking-widest uppercase">
        Redbubble Shop
      </p>
    </header>
  );
};

export default Header;