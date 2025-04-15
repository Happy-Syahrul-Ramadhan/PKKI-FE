import React from 'react';

const Team = () => {
  return (
    <section className="bg-[#b21f2d] text-white py-16 mt-20 px-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">TIM PKKI ITERA</h2>
        <p className="text-sm mb-8">
          Dari sudut pandang yang berbeda, kita bisa melihat bahwa inovasi adalah kunci untuk mencapai keberhasilan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Member 1 */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">Bu Siapa Ini</h4>
            <p className="text-sm">Bu Siapa Ini</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">Bu Siapa Ini</h4>
            <p className="text-sm">Bu Siapa Ini</p>
          </div>

          {/* Member 3 */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">Bu Siapa Ini</h4>
            <p className="text-sm">Bu Siapa Ini</p>
          </div>

          {/* Member 4 */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
            <h4 className="font-semibold text-lg">Bu Siapa Ini</h4>
            <p className="text-sm">Bu Siapa Ini</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
