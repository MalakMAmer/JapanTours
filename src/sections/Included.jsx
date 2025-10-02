import React, { useEffect } from 'react';
import IncludeCard from '../components/IncludeCard'
import { FaUtensils, FaBus, FaHotel, FaMapMarkedAlt } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Included() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation duration + only runs once
  }, []);


  return (
    <div id='include' className='p-20'>
      <div className='flex justify-center md:justify-start items-center w-10/12 mb-10'>
        <h2 className='text-2xl lg:text-4xl text-white uppercase sm:text-center pr-4'>
          What's Included ?
        </h2>
        <div className="h-1 bg-white lg:w-5/12"></div>
      </div>

      <div className="flex items-center w-full justify-center flex-wrap gap-3">
        <div data-aos="fade-up" data-aos-delay="0">
          <IncludeCard 
            icon={FaUtensils} 
            title="Meals" 
            description="Delicious Japanese breakfasts and dinners included during your stay." 
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <IncludeCard 
            icon={FaBus} 
            title="Transport" 
            description="All local transport, including buses and trains, is covered." 
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <IncludeCard 
            icon={FaHotel} 
            title="Accommodation" 
            description="Stay in premium hotels across Osaka, Kyoto, and Tokyo." 
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <IncludeCard 
            icon={FaMapMarkedAlt} 
            title="Guided Tours" 
            description="Explore Japan’s highlights with professional tour guides." 
          />
        </div>
      </div>
    </div>
  )
}

export default Included
