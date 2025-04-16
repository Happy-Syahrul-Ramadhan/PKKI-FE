import React from "react";
import Background from "../assets/images/Background.png";
import Logo from "../assets/images/logo.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen md:flex-row flex flex-col">
      <div className="md:flex md:w-1/2 from-black/60 to-black/30 relative items-center justify-center">
        <img
          src={Background}
          alt="Dummy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-5 md:p-20 text-white">
          <h1 className="text-xl md:text-4xl font-bold mb-2">Pusat Kelola Karya Intelektual</h1>
          <h2 className="text-sm md:text-xl font-normal">Institut Teknologi Sumatera</h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center bg-white md:px-10">
        <div className="w-full max-w-md p-8">
          <img
            src={Logo}
            alt="Logo"
            className="mb-6 w-32 p-3 bg-red-700 rounded-lg"
          />
          <h2 className="text-2xl font-bold mb-2">Masuk Sistem PKKI</h2>
          <p className="text-gray-600 text-sm mb-6">
            Itsavirus provides top-tier tech teams from Asia to businesses worldwide. Delivering high quality while cutting costs by up to 60%. Join us and leverage our expertise to build, innovate, and scale.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-1">Password</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-medium transition"
            >
              Masuk Sistem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
