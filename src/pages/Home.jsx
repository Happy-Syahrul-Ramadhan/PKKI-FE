import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import ServiceCards from "../components/card";
import NewsSection from "../components/NewsComponent";
import Footer from "../components/Footer";

const Home = () => {
    return (
    <>
        <Navbar/>
        <Banner/>
        <ServiceCards/>
        <NewsSection/>
        
        <div className="h-screen text-black text-center text-xl font-bold mt-20">
            Helo
        </div>
        <Footer/>
    </>
    )
}

export default Home
