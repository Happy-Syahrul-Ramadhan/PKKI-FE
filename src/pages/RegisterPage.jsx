import React from "react";
import Background from "../assets/images/Background.png";
import Logo from "../assets/images/logo.png";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 from-black/60 to-black/30 relative items-center justify-center">
        <img
          src={Background}
          alt="Dummy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-20 text-white">
          <h1 className="text-4xl font-bold mb-2">Pusat Kelola Karya Intelektual</h1>
          <h2 className="text-xl font-normal">Institut Teknologi Sumatera</h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center bg-white px-10">
        <div className="w-full max-w-md p-8">
          <img
            src={Logo}
            alt="Logo"
            className="mb-6 w-32"
          />
          <h2 className="text-2xl font-bold mb-2">Daftar Akun</h2>
          <p className="text-gray-600 text-sm mb-6">
            Itsavirus provides top-tier tech teams from Asia to businesses worldwide. Delivering high quality while cutting costs by up to 60%. Join us and leverage our expertise to build, innovate, and scale.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm mb-1">Label</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Value"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-1">Label</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Value"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-medium transition"
            >
              Daftar Hak Paten
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
