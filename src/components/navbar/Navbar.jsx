import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false); // To handle mobile menu open/close
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar md:sticky ${isSticky ? 'navbar-fixed' : 'absolute'} ${className}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-20 md:w-40" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 font-manrope">
          <Link to="/" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Home</Link>
          <Link to="/panduan" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Panduan</Link>
          <Link to="/infografis" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Infografis</Link> 
          <Link to="/kontak" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Kontak</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY9kAw3mCl7Q4OX0X6nOkpIQxvqhYPhzarVbqsF0W3NP9drQ/viewform?usp=dialog" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`} target="_blank" rel="noopener noreferrer">Lapor</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden p-2 font-manrope font-medium ${isSticky ? 'bg-[#B82132] bg-opacity-40 text-white' : 'bg-[#B82132] text-white'}`}>
          <Link to="/" className="block nav-link px-4">Home</Link>
          <Link to="/panduan" className="block nav-link py-2 px-4">Panduan</Link>
          <Link to="/infografis" className="block nav-link py-2 px-4">Infografis</Link>
          <Link to="/kontak" className="block nav-link py-2 px-4">Kontak</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeY9kAw3mCl7Q4OX0X6nOkpIQxvqhYPhzarVbqsF0W3NP9drQ/viewform?usp=dialog" className="block nav-link py-2 px-4" target="_blank" rel="noopener noreferrer">Lapor</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
