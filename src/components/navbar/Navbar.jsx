import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // To handle mobile menu open/close
  const [isSticky, setIsSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Controls active desktop dropdown
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null); // Controls active mobile dropdown

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

  const dropdownMenus = {
    home: [
      { label: 'Beranda Utama', path: '/' },
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Statistik', path: '/statistik' }
    ],
    layanan: [
      { label: 'Pendaftaran HKI', path: '/pendaftaran' },
      { label: 'Konsultasi', path: '/konsultasi' },
      { label: 'Pemeriksaan', path: '/pemeriksaan' }
    ],
    rekap: [
      { label: 'Data HKI', path: '/data' },
      { label: 'Laporan Bulanan', path: '/bulanan' },
      { label: 'Arsip', path: '/arsip' }
    ]
  };

  const toggleMobileDropdown = (menu) => {
    setMobileActiveDropdown(mobileActiveDropdown === menu ? null : menu);
  };

  const renderDesktopDropdown = (menuKey) => {
    return (
      <div className="absolute z-50 top-full left-0 mt-2 w-56 bg-white text-black shadow-lg rounded-lg overflow-hidden">
        {dropdownMenus[menuKey].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            onClick={() => setActiveDropdown(null)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  const renderMobileDropdown = (menuKey) => {
    return dropdownMenus[menuKey].map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className="block nav-link py-2 ml-8"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    ));
  };

  return (
    <nav className={`navbar md:sticky ${isSticky ? 'navbar-fixed' : 'absolute'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={Logo} alt="Logo" className='w-20 md:w-40' />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 font-manrope">
          <div 
            className="relative group"
            onClick={() => setActiveDropdown(activeDropdown === 'home' ? null : 'home')}
          >
            <div 
              className={`nav-link flex items-center cursor-pointer ${isSticky ? 'text-white' : 'text-white'}`}
            >
              Home
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'home' && renderDesktopDropdown('home')}
          </div>

          <div 
            className="relative group"
            onClick={() => setActiveDropdown(activeDropdown === 'layanan' ? null : 'layanan')}
          >
            <div 
              className={`nav-link flex items-center cursor-pointer ${isSticky ? 'text-white' : 'text-white'}`}
            >
              Layanan
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'layanan' && renderDesktopDropdown('layanan')}
          </div>

          <div 
            className="relative group"
            onClick={() => setActiveDropdown(activeDropdown === 'rekap' ? null : 'rekap')}
          >
            <div 
              className={`nav-link flex items-center cursor-pointer ${isSticky ? 'text-white' : 'text-white'}`}
            >
              Rekap
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {activeDropdown === 'rekap' && renderDesktopDropdown('rekap')}
          </div>

          <Link to="/panduan" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Panduan</Link>
          <Link to="/infografis" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Infografis</Link>
          <Link to="/news" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Berita</Link>
          <Link to="/katalog" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Katalog</Link>
          <Link to="/dokumen" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Dokumen</Link>
          <Link to="/kontak" className={`nav-link ${isSticky ? 'text-white' : 'text-white'}`}>Kontak</Link>
        </div>
        <div className="hidden md:flex space-x-4 font-manrope">
          <Link to="/login" className={`mt-2 nav-link ${isSticky ? 'text-white' : 'text-[#B82132]'}`}>Login</Link>
          <Link to="/register" className={`nav-link ${isSticky ? 'bg-white text-[#B82132]' : 'bg-[#B82132] text-white'} px-4 py-2 rounded-full`}>Register</Link>
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
          <div 
            className="flex items-center justify-between px-4 py-2 cursor-pointer"
            onClick={() => toggleMobileDropdown('home')}
          >
            <Link to="/" className="block nav-link">Home</Link>
            <svg 
              className={`w-4 h-4 transform transition-transform ${mobileActiveDropdown === 'home' ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {mobileActiveDropdown === 'home' && renderMobileDropdown('home')}

          <div 
            className="flex items-center justify-between px-4 py-2 cursor-pointer"
            onClick={() => toggleMobileDropdown('layanan')}
          >
            <Link to="/layanan" className="block nav-link">Layanan</Link>
            <svg 
              className={`w-4 h-4 transform transition-transform ${mobileActiveDropdown === 'layanan' ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {mobileActiveDropdown === 'layanan' && renderMobileDropdown('layanan')}

          <div 
            className="flex items-center justify-between px-4 py-2 cursor-pointer"
            onClick={() => toggleMobileDropdown('rekap')}
          >
            <Link to="/rekap" className="block nav-link">Rekap</Link>
            <svg 
              className={`w-4 h-4 transform transition-transform ${mobileActiveDropdown === 'rekap' ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {mobileActiveDropdown === 'rekap' && renderMobileDropdown('rekap')}

          <Link to="/panduan" className="block nav-link py-2 px-4">Panduan</Link>
          <Link to="/infografis" className="block nav-link py-2 px-4">Infografis</Link>
          <Link to="/berita" className="block nav-link py-2 px-4">Berita</Link>
          <Link to="/katalog" className="block nav-link py-2 px-4">Katalog</Link>
          <Link to="/dokumen" className="block nav-link py-2 px-4">Dokumen</Link>
          <Link to="/kontak" className="block nav-link py-2 px-4">Kontak</Link>
          <Link to="login" className="block nav-link bg-[#B82132] mx-4 px-4 py-2 text-black rounded-full my-3">Login</Link>
          <Link to="register" className="block nav-link bg-[#B82132] mx-4 px-4 py-2 text-black rounded-full my-3">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
