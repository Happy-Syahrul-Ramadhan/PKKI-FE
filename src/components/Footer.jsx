import React from 'react';
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#b21f2d] text-white py-10 md:px-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-[100px]">

          <div className="md:w-1/2 flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 mb-4">
              <img src={Logo} alt="Logo" className='w-40' />
            </div>

            <div>
              <p className="text-sm text-justify">
                Pusat Kreatif Karya Intelektual (PKKI), sebelumnya dikenal sebagai Sentra Hak Kekayaan Intelektual (HKI), adalah sebuah lembaga yang bertujuan dalam sistem manajemen data inovasi dan kekayaan intelektual melalui teknologi informasi (TI) di seluruh Indonesia. Mulai dari tahun 2017 hingga 2022, PKKI berada di bawah naungan Lembaga Penelitian dan Pengabdian Kepada Masyarakat (LPPM). PKKI sekarang berada di bawah pengelolaan Direktorat Inovasi dan Hilirisasi UPN "Veteran" Yogyakarta sejak Juni 2023.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col sm:flex-row gap-10 justify-between mt-10">
            <div className='md:ml-20'>
              <h4 className="text-lg font-semibold mb-2">Karya Intelektual</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:underline">Paten Intelektual</a></li>
                <li><a href="#" className="hover:underline">Paten Intelektual</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:underline">Paten Intelektual</a></li>
                <li><a href="#" className="hover:underline">Paten Intelektual</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black p-5 w-full">
        <p className='text-sm text-center text-white/20'>COPYRIGHT &copy; ITERA 2025</p>
      </div>
    </>
  );
};

export default Footer;
