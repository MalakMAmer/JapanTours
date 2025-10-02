import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black/80 text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      
      {/* Website Name */}
      <div className="text-lg font-bold">JapanTours</div>

      {/* Copyright */}
      <div className="text-sm">
        &copy; <Link to="/copyright" className="underline hover:text-yellow-400">2025 JapanTours</Link>. All rights reserved.
      </div>

      {/* Social Links */}
      <div className="flex gap-4 text-xl">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaInstagram />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
