import React from 'react';

const newsData = [
    {
        id: 1,
        type: 'main',
        title: 'Perkembangan Hak Cipta Digital',
        description: 'Inovasi terbaru dalam perlindungan karya intelektual',
        date: '12 April 2025',
        image: 'https://placehold.co/600x400'
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

    return (
        <div className="container mx-auto px-4 py-12 mt-20">
            <h1 className='text-2xl font-bold'>Berita Terkini</h1>
            <p className='text-sm text-gray-600 mt-[-17px] mb-10'>Berita terbaru seputar Hak Kekayaan Intelektual</p>

            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
                <div className="col-span-1 row-span-2 relative bg-gray-300 rounded-lg overflow-hidden group">
                    <img 
                        src={mainNews.image} 
                        alt={mainNews.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-semibold">{mainNews.title}</h3>
                        <p className="text-sm">{mainNews.description}</p>
                        <p className="text-xs mt-2 opacity-80">{mainNews.date}</p>
                    </div>
                </div>
                
                <div className="col-span-3 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
                    <img 
                        src={secondaryNews[0].image} 
                        alt={secondaryNews[0].title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="col-span-2 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
                    <img 
                        src={secondaryNews[1].image} 
                        alt={secondaryNews[1].title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="col-span-1 row-span-1 bg-gray-300 rounded-lg overflow-hidden">
                    <img 
                        src={secondaryNews[2].image} 
                        alt={secondaryNews[2].title} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsSection;