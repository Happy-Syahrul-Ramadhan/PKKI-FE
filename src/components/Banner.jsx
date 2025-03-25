import React from "react";
import { Link } from "react-router-dom";
import { IconFileDescription } from '@tabler/icons-react';
import hero from "../assets/images/hero.png";

const Banner = () => {
    return (
        <div className="bannerHome h-screen relative md:-mt-[120px]">
            <div className="overlay"></div>
            <img src={hero} alt="hero" className="object-cover w-full h-full absolute" />
            <div className="bannerContent z-10 relative font-bold mt-2 flex-row font-spaceGrotesk text-center">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-white mb-2">
                Starter FE
                </h1>
                <h1 className="text-colorGreen text-2xl sm:text-2xl md:text-3xl lg:text-3xl pt-5">
                Starter FE
                </h1>
                <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-white italic font-plusJakarta">
                Starter FE
                </h1>
            </div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Banner;