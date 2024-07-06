import React from "react";
import Navbar from "../components/navbar/Navbar";
import FAQ from "../components/Faq";
import BannerFaq from "../components/BannerFaq";

const FaqPage = () => {
    return (
        <>
            <Navbar/>
            <BannerFaq/>
            <div className="aitems-center">
                <h1 className="md:mt-[120px] mt-[130px] text-center md:text-3xl text-2xl text-white font-spaceGrotesk font-bold">Frequently Asked Questions</h1>
            </div>
            <hr  width='100' className="text-center m-auto mt-5 border border-colorGreen"/>
            <FAQ/>
        </>
    )
}

export default FaqPage