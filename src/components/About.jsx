import React from "react";
import { IconArrowRight,IconCircleCheck } from '@tabler/icons-react';
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <div className="h-screen flex justify-center relative items-center font-spaceGrotesk m-5">
                <div className="flex flex-col md:flex-row gap-6 md:gap-0">
                <div className="text-white flex flex-col gap-10 md:w-7/12">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-4xl font-bold">Starter FE</h1>
                        <p className="font-plusJakarta font-medium bg-gradient-to-b from-white to-[#181818] text-transparent bg-clip-text md:w-10/12">Starter FE</p>
                        <Link to="/information">
                        <button className="flex items-center gap-3 bg-colorGreen px-5 py-2 font-bold rounded-full w-fit text-lg text-black hover:bg-[#181818] hover:text-colorGreen border border-colorGreen hover:border-colorGreen">Read Information <IconArrowRight/></button>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-2xl font-bold">Starter FE</h1>
                        <p className="font-plusJakarta text-gray-400 md:w-10/12">Starter FEStarter FE</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
