import React from "react";
import hero from "../assets/images/hero.png";

const BannerCustom = ({name}) => {
    return (
        <div className="relative -mt-[180px] md:-mt-[200px]">
            <img src={hero} alt="hero" className="object-cover w-full md:h-[25em] h-[30em] absolute opacity-20" />
            <div className="bannerContent flex flex-col items-center justify-center z-10 relative font-bold md:mt-10  font-spaceGrotesk text-center">
                <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl md:pt-[140px] pt-[285px] text-colorGreen mb-2">
                    {name}
                </h1>
                <h1 className="w-[75%] text-md sm:text-xl md:text-2xl lg:text-2xl text-white italic font-plusJakarta">
                    "Tester"
                </h1>
            </div>
        </div>
    );
};

export default BannerCustom;