import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";

const Home = () => {
    return (
    <>
        <Navbar/>
        <Banner/>
        <div className="h-screen text-white text-center text-xl font-bold mt-20">
            Helo
        </div>
    </>
    )
}

export default Home
