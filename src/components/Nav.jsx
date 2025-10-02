import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {

  const navigate = useNavigate();

   const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed justify-center items-center top-4 w-fit px-2 shadow-md z-50 bg-opacity-30 backdrop:blur-3xl rounded-3xl transition-all duration-500 ease delay-75 ${scrolled ? 'bg-black/100 border border-white' : 'bg-black/50 border-none backdrop:blur-3xl'}`} >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <NavLink href="/" className="text-
        red-torii font-display text-2xl">
          JapanTours
        </NavLink>

        <nav className="hidden md:flex gap-8 text-ink-black font-heading uppercase text-sm tracking-wide md:px-20 lg:px-55 xl:px-85 2xl:px-95">
          <a href="#about" className="hover:text-red-torii transition-colors">About</a>
          <a href="#include" className="hover:text-red-torii transition-colors">Included</a>
          <a href="#contact" className="hover:text-red-torii transition-colors">Contact</a>
        </nav>

        <button className="hidden md:flex px-8 py-1 border cursor-pointer border-white text-white rounded-3xl hover:bg-white hover:text-black transition duration-300" onClick={() => navigate('/booking')}>
          Book
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 ps-20"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {isOpen && (
        <ul className="absolute top-16 right-4 bg-ink-black text-white p-6 flex flex-col gap-4 rounded-lg shadow-lg md:hidden bg-black/90 bg-opacity-70 backdrop:blur-3xl mt-2">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#include">Includes</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className=" px-4 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300" onClick={() => navigate('/booking')}>
          Book
        </button>
        </li>
        </ul>
      )}
      </div>
    </header>
  )
}

export default Nav