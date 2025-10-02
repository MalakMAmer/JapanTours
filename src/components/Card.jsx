import React from 'react';

function Card({ text, image }) {
  return (
    <div
      className="relative w-30 md:w-30 lg:w-43 h-25 md:h-50 xl:h-70 rounded-xl overflow-hidden shadow-lg flex items-end p-4 text-white group cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
      <p className="relative z-10 text-sm sm:text-base md:text-lg font-semibold group-hover:-translate-y-2 transition-transform cursor-pointer">
        {text}
      </p>
    </div>
  );
}

export default Card;
