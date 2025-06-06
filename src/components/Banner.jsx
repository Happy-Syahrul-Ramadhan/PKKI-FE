import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";

const bener = () => {
    return (
        <div className="bannerHome h-screen relative md:-mt-[120px]"> 
            <div className="overlay"></div>
            <img src={hero} alt="hero" className="object-cover w-full h-full absolute" />
            <div className="bannerContent z-10 relative mt-10 flex-row text-left px-5 md:px-12">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-white mb-2">
                    Selamat Datang <br />
                    <span className="font-bold">Pusat Kelola Karya Intelektual</span> <br />
                    Institut Teknologi Sumatera
                </h1>
                <p className="text-white mt-10 max-w-2xl text-base md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum orci tellus, vitae tempor sapien ultrices a. Donec ullamcorper laoreet mauris, nec tincidunt lorem aliquet vitae. Aenean consectetur arcu nulla, vitae feugiat nunc egestas ut. Curabitur vitae molestie turpis, nec pretium diam. Aenean interdum consectetur mauris, sed lobortis lacus vulputate eu. 
                </p>
                
                <div className="flex space-x-4 mt-8">
                    <Link 
                        to="/daftar-hak-paten" 
                        className="bg-[#B82132] text-white px-6 py-3 rounded-full hover:bg-red-800 transition duration-300">
                        Kontak Kami
                    </Link>
                    {/* <Link 
                        to="/kontak" 
                        className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Kontak Kami
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
      <div className="bannerHome h-screen relative md:-mt-[120px]">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
          modules={[Pagination, Autoplay]} // ⬅️ Tambah Autoplay
          autoplay={{
            delay: 2000,     // ⬅️ Ganti angka ini untuk durasi scroll (ms)
            disableOnInteraction: false,
          }}
        >
          {[hero, hero, hero].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={img}
                  alt={`hero-${index}`}
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="z-10 relative mt-10 flex-row text-left px-5 md:px-12 h-full flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl text-white mb-2">
                    Selamat Datang <br />
                    <span className="font-bold">Pusat Kelola Karya Intelektual</span> <br />
                    Institut Teknologi Sumatera
                  </h1>
                  <p className="text-white mt-10 max-w-2xl text-base md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum orci tellus, vitae tempor sapien ultrices a...
                  </p>
                  <div className="flex space-x-4 mt-8">
                    <Link
                      to="/daftar-hak-paten"
                      className="bg-[#B82132] text-white px-6 py-3 rounded-full hover:bg-red-800 transition duration-300"
                    >
                      Kontak Kami
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

export default Banner;