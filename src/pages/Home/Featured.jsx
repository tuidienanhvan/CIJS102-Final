import React from "react";
import { Button } from "antd";
import { useTheme } from "../../context/ThemeContext";
import ps5Image from "../../assets/ps5-slim-goedkope-playstation_large 1.svg";
import womanImage from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.svg";
import speakerImage from "../../assets/Frame 707.svg";
import perfumeImage from "../../assets/Frame 706.svg";

const Featured = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-36 px-4 lg:px-32 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-5 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold text-lg ml-4">Featured</p>
      </div>
      <h1
        className={`text-4xl md:text-5xl font-bold mb-10 transition-colors ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        New Arrival
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PS5 (50% - 2 hàng trên md trở lên) */}
        <div
          className={`md:row-span-2 p-8 rounded-lg shadow-lg flex flex-col transition-all ${
            isDarkMode
              ? "bg-gray-900 text-white shadow-gray-700"
              : "bg-white text-black shadow-gray-300"
          }`}
        >
          <img
            src={ps5Image}
            alt="PlayStation 5"
            className="w-full object-cover rounded-lg mb-6"
          />
          <div>
            <h3 className="text-3xl font-bold">PlayStation 5</h3>
            <p className="text-lg">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Button
              className={`mt-4 transition-all ${
                isDarkMode
                  ? "!bg-orange-600 !text-white hover:!bg-gray-800"
                  : "!bg-orange-600 !text-white hover:!bg-gray-200"
              }`}
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Women's Collection (50% - 1 hàng) */}
        <div
          className={`p-8 rounded-lg flex flex-col md:flex-row items-center shadow-lg transition-all ${
            isDarkMode
              ? "bg-gray-900 text-white shadow-gray-700"
              : "bg-white text-black shadow-gray-300"
          }`}
        >
          <div className="md:pr-4 mb-4 md:mb-0">
            <h3 className="text-3xl font-bold">Women's Collections</h3>
            <p className="text-lg">
              Featured woman collections that give you another vibe.
            </p>
            <Button
              className={`mt-4 transition-all ${
                isDarkMode
                  ? "!bg-orange-600 !text-white hover:!bg-gray-800"
                  : "!bg-orange-600 !text-white hover:!bg-gray-200"
              }`}
            >
              Shop Now
            </Button>
          </div>
          <img
            src={womanImage}
            alt="Women's Collections"
            className="w-full md:w-1/2 object-cover rounded-lg"
          />
        </div>

        {/* Speakers & Perfume (2 cột nhỏ, chuyển thành 1 cột trên mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Speakers */}
          <div
            className={`p-6 rounded-lg shadow-lg flex flex-col transition-all ${
              isDarkMode
                ? "bg-gray-900 text-white shadow-gray-700"
                : "bg-white text-black shadow-gray-300"
            }`}
          >
            <img
              src={speakerImage}
              alt="Speakers"
              className="w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Speakers</h3>
            <p className="text-lg">Amazon wireless speakers</p>
            <Button
              className={`mt-4 transition-all ${
                isDarkMode
                  ? "!bg-orange-600 !text-white hover:!bg-gray-800"
                  : "!bg-orange-600 !text-white hover:!bg-gray-200"
              }`}
            >
              Shop Now
            </Button>
          </div>

          {/* Perfume */}
          <div
            className={`p-6 rounded-lg shadow-lg flex flex-col transition-all ${
              isDarkMode
                ? "bg-gray-900 text-white shadow-gray-700"
                : "bg-white text-black shadow-gray-300"
            }`}
          >
            <img
              src={perfumeImage}
              alt="Perfume"
              className="w-full object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold">Perfume</h3>
            <p className="text-lg">GUCCI INTENSE OUD EDP</p>
            <Button
              className={`mt-4 transition-all ${
                isDarkMode
                  ? "!bg-orange-600 !text-white hover:!bg-gray-800"
                  : "!bg-orange-600 !text-white hover:!bg-gray-200"
              }`}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
