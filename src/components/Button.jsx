import React from 'react';

function Button({ text, onClick }) {
  return (
    <div className='flex items-center md:items-end justify-center md:justify-start w-100 pt-10 m-2'>
      <button
      onClick={onClick}
      className="px-6 py-2 font-medium bg-white text-black cursor-pointer w-45 h-12 transition-all shadow-[3px_3px_0px_pink] hover:shadow-none hover:-translate-x-[1px] hover:-translate-y-[1px]"
    >
      {text}
    </button>
    </div>
    
  );
}

export default Button;
