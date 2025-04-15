import React from "react";
import BannerCustom from "../components/BannerCustom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const NewsPage = () => {
  const newsData = [
    { title: "Berita Terkini", description: "Lorem ipsum dolor sit amet" },
    { title: "Berita Terkini", description: "Lorem ipsum dolor sit amet" },
    { title: "Berita Terkini", description: "Lorem ipsum dolor sit amet" },
    { title: "Berita Terkini", description: "Lorem ipsum dolor sit amet" },
  ];

  return (
    <>
    <Navbar />
    <BannerCustom name="Berita PKKI" />

      <div className="container mx-auto px-4 mt-[200px] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-[200px] md:h-[220px]">
            <img
              src="https://placehold.co/400x220"
              alt="hero"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
              <h2 className="text-lg font-bold text-white">Berita Terkini</h2>
            </div>
          </div>
          <div className="bg-gray-300 h-[220px] rounded-lg"></div>
        </div>

        <div className="mb-8 mt-20">
          <h2 className="font-bold text-lg mb-1">Berita Terkini</h2>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
                <div
                key={index}
                className="rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                >
                <img
                    src="https://placehold.co/400x220"
                    alt={news.title}
                    className="object-cover w-full h-[150px] rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.description}</p>
                </div>
            ))}
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default NewsPage;
