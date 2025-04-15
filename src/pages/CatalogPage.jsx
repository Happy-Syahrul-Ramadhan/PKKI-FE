import React from "react";
import BannerCustom from "../components/BannerCustom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const CatalogPage = () => {
  return (
    <>
    <Navbar />
    <BannerCustom name="Unduh Katalog" />
    <div className="h-screen">

    </div>
    <Footer/>
    </>
  );
};

export default CatalogPage;
