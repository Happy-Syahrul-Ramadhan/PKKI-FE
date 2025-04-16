import React from 'react';

const newsData = [
    {
        id: 1,
        type: 'main',
        title: 'Perkembangan Hak Cipta Digital',
        description: 'Inovasi terbaru dalam perlindungan karya intelektual',
        date: '12 April 2025',
        image: 'https://placehold.co/300x400'
    },
    {
        id: 2,
        type: 'secondary',
        title: 'Strategi Perlindungan Merk Dagang',
        description: 'Tips mengamankan identitas bisnis Anda',
        date: '10 April 2025',
        image: 'https://placehold.co/600x400'
    },
    {
        id: 3,
        type: 'secondary',
        title: 'Inovasi Paten di Sektor Teknologi',
        description: 'Tren baru dalam pengembangan teknologi',
        date: '8 April 2025',
        image: 'https://placehold.co/600x400'
    },
    {
        id: 4,
        type: 'secondary',
        title: 'Hukum Kekayaan Intelektual Global',
        description: 'Pembaruan regulasi internasional',
        date: '5 April 2025',
        image: 'https://placehold.co/600x400'
    }
];

const NewsSection = () => {
    const mainNews = newsData[0];
    const secondaryNews = newsData.slice(1);

    const NewsItem = ({ news, className, mainItem = false }) => (
        <div className={`relative overflow-hidden rounded-lg group ${className}`}>
            <div className="w-full h-full flex items-center justify-center">
                <img
                    src={news.image}
                    alt={news.title}
                    className="object-cover w-full h-full absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-end p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white transform translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className={`${mainItem ? 'text-xl' : 'text-lg'} font-semibold`}>{news.title}</h3>
                    <p className={`${mainItem ? 'text-base' : 'text-sm'} mt-1`}>{news.description}</p>
                    <p className={`${mainItem ? 'text-sm' : 'text-xs'} mt-2 opacity-80`}>{news.date}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-12 mt-20">
            <h1 className='text-2xl font-bold mb-2'>Berita Terkini</h1>
            <p className='text-sm text-gray-600 mb-8'>Berita terbaru seputar Hak Kekayaan Intelektual</p>

            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto">
                <NewsItem
                    news={mainNews}
                    className="row-span-1 md:col-span-1 md:row-span-2 min-h-[200px]"
                    mainItem={true}
                />

                <NewsItem
                    news={secondaryNews[0]}
                    className="row-span-1 md:col-span-1 md:row-span-1 min-h-[200px]"
                />

                <NewsItem
                    news={secondaryNews[1]}
                    className="row-span-1 md:col-span-2 md:row-span-1 min-h-[200px]"
                />

                <NewsItem
                    news={secondaryNews[2]}
                    className="row-span-1 md:col-span-1 md:row-span-1 min-h-[200px]"
                />
                <NewsItem
                    news={secondaryNews[2]}
                    className="row-span-1 md:col-span-1 md:row-span-1 min-h-[200px]"
                />
                <NewsItem
                    news={secondaryNews[2]}
                    className="row-span-1 md:col-span-1 md:row-span-1 min-h-[200px]"
                />                                
            </div>

        </div>
    );
};

export default NewsSection;