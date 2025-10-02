import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import Button from '../components/Button';
import card1 from '../assets/cards/card1.jpg';
import card2 from '../assets/cards/card2.jpg';
import card3 from '../assets/cards/card3.jpg';
import card4 from '../assets/cards/card4.jpg';
import card5 from '../assets/cards/card5.jpg';

import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-cover bg-center bg-no-repeat pt-32 sm:pt-40 px-4 sm:px-10 flex justify-center items-center"
      style={{ backgroundImage: "url('/girl.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 "></div>
        <Nav />
        <div className="relative z-10 flex flex-col justify-end items-center md:items-start h-screen sm:h-full xl:h-screen p-10">
          <h1 className="text-white text-center md:text-start text-3xl sm:text-4xl md:text-5xl font-bold uppercase pb-8">
            Welcome to Japan Tours
          </h1>
          <div className='flex w-60 sm:w-auto flex-wrap xl:flex-nowrap justify-center items-center md:justify-start md:items-end'>
            <Card text="3 cities in Japan" image={card1} />
            <Card text="10 days" image={card2} />
            <Card text="Alot of photos" image={card4} />
            <Card text="Eat local food" image={card3} />
            <Card text="Enjoy the vibe" image={card5} />
            <Button text="Book Now" onClick={() => navigate('/booking')} />
          </div>
        </div>
    </div>
  )
}

export default Header
