import React from "react";
import BannerCustom from "../components/BannerCustom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const DocumentPage = () => {
  return (
    <>
    <Navbar />
    <BannerCustom name="Tabel Dokumen" />
    <div className="h-screen">

    </div>
    <Footer/>
    </>
  );
};

export default DocumentPage;
