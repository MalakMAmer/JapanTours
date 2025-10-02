import React from 'react'
import ImagesBar from '../components/imagesBar'

function About() {
  return (
    <>
      <div id='about' className='flex justify-around pt-40 '>
        <div className='flex justify-around items-center w-10/12'>
          <div className="h-1 bg-white sm:w-20 lg:w-80"></div>
          <h2 className='text-4xl uppercase text-center'>About the Tour</h2>
          <div className="h-1 bg-white sm:w-20 lg:w-80"></div>
        </div>
      </div>
      
      
      <div className='flex flex-wrap flex-column gap-8 justify-center items-center p-3 md:p-12 pt-1'>
      {/* Right Section - Text */}
        <div id='rightDiv' className='lg:flex-1 space-y-4 text-lg leading-relaxed p-10'>
          <p className='p-10'>
            We’ve carefully planned a <span className='text-yellow-500 font-semibold'>10-day itinerary</span> for your trip to Japan. 
            You’ll explore three iconic cities: <span className='text-yellow-500 font-semibold'>Osaka, Kyoto, and Tokyo</span>.
          </p>
          <p className='p-10'>
            Forget the hassle of routes, schedules, or searching for spots. 
            Everything is <span className='text-yellow-500 font-semibold'>organized for you</span> — from where to go, to what to see, and even the best places to eat.  
          </p>
          <p className='p-10'>
            All that’s left for you is to <span className='text-yellow-500 font-semibold italic'>relax and enjoy the journey</span>.
          </p>
        </div>

        {/* Left Section - Images */}
        <ImagesBar className='lg:flex-1' />
      </div>
    </>
    
  )
}

export default About
