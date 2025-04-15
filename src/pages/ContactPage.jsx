import React from "react";
import BannerCustom from "../components/BannerCustom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {

  return (
    <>
    <Navbar />
    <BannerCustom name="Kontak Kami" />
    <div className="h-screen">
    <div className="flex justify-center items-center min-h-screen bg-white mt-20">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-lg font-semibold mb-6">Isi Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Kolom 1 */}
          <div>
            <label className="block text-sm mb-1">Label</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Value"
            />
          </div>
          {/* Kolom 2 */}
          <div>
            <label className="block text-sm mb-1">Label</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Value"
            />
          </div>
          {/* Kolom 3 */}
          <div>
            <label className="block text-sm mb-1">Label</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Value"
            />
          </div>
          {/* Kolom 4 */}
          <div>
            <label className="block text-sm mb-1">Label</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Value"
            />
          </div>
        </div>
        {/* Textarea */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Label</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            rows={3}
            placeholder="Value"
          ></textarea>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-medium transition">
          Daftar Hak Paten
        </button>
      </form>
    </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default ContactPage;
