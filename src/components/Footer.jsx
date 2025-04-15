import React from 'react';
import Logo from "../assets/images/logo.png";


const Footer = () => {
  return (
    <footer className="bg-[#B82132] text-white py-20 px-20">
      <div className="flex">
        <div>
            <img src={Logo} alt="Logo" className="w-36 mb-4" />
            <div className="w-1/2">
            <h3 className="text-lg font-bold mb-4">Project Footer</h3>
            <p className="text-sm">
                Kami memberikan informasi yang akurat dan terpercaya. Setiap informasi yang kami berikan telah melalui proses verifikasi dan penelitian mendalam untuk memastikan keakuratannya.
            </p>
            </div>
        </div>
        
        <div>
            asdsad
        </div>
          
        </div>
    </footer>
  );
};

export default Footer;