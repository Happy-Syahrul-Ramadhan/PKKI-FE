import React from 'react';
import { Link } from 'react-router-dom';
import { IconTag, IconBulb, IconTool, IconCopyright, IconPalette  } from '@tabler/icons-react';


const ServiceCard = ({ icon, title, subtitle, link }) => {
    return (
        <div className="bg-[#B82132] text-white px-20 py-10 rounded-lg text-center transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
                {icon}
            </div>
            <h4 className="text-xl font-semibold">{title}</h4>
            <Link to={link} className="text-sm text-white underline mt-2">{subtitle}</Link>
        </div>
    );
};

const ServiceCards = () => {
    return (
        <div className="container mx-auto px-4 relative z-10 mt-[-50px] flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl w-full">
                <ServiceCard
                    icon={<IconBulb stroke={1.5} className="h-12 w-12" />}
                    title="Paten"
                    subtitle="Lihat Detail"
                    link="/panduan"
                />
                <ServiceCard
                    icon={<IconTool stroke={1.5} className="h-12 w-12" />}
                    title="Paten Sederhana"
                    subtitle="Lihat Detail"
                    link="/panduan"
                />
                <ServiceCard
                    icon={<IconTag stroke={1.5} className="h-12 w-12" />}
                    title="Merek Dagang"
                    subtitle="Lihat Detail"
                    link="/panduan"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mt-5">
                <ServiceCard
                    icon={<IconCopyright stroke={1.5} className="h-12 w-12" />}
                    title="Hak Cipta"
                    subtitle="Lihat Detail"
                    link="/panduan"
                />
                <ServiceCard
                    icon={<IconPalette stroke={1.5} className="h-12 w-12" />}
                    title="Desain Industri"
                    subtitle="Lihat Detail"
                    link="/panduan"
                />
            </div>
        </div>
    );
};


export default ServiceCards;