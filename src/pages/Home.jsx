import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import ServiceCards from "../components/card";
import NewsSection from "../components/NewsComponent";
import Footer from "../components/Footer";
import Team from "../components/Team";
import FAQ from "../components/Faq";

const Home = () => {
    return (
    <>
        <Navbar/>
        <Banner/>
        <ServiceCards/>
        <NewsSection/>
        <Team/>
        <FAQ/>
        <Footer/>
    </>
    )
}

export default Home
