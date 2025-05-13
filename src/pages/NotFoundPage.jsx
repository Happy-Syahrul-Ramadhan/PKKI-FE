import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Background from "../assets/images/Background.png";

const NotFoundPage = () => {
  return (
    <>
      <Navbar className="relative z-20" />
      <div
        className="min-h-[70vh] flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center bg-white/70 rounded-xl p-8 shadow-lg">
          <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Silakan periksa URL atau kembali ke halaman utama.
          </p>
          <Link
            to="/"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg 
                     hover:bg-red-700 transition-colors duration-300 
                     font-medium text-lg"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage; 