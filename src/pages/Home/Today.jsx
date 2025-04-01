import React from "react";
import { Card, Button } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext"; // Import useCart để sử dụng addToCart
import leftArrow from "../../assets/icons_arrow-left.svg";
import rightArrow from "../../assets/icons arrow-right.svg";
import heartImage from "../../assets/Fill Heart.svg";
import eyeImage from "../../assets/Fill Eye.svg";
import starImage from "../../assets/Five star.svg";
import fourStarImage from "../../assets/Four Star.svg";
import fourHalfStarImage from "../../assets/Four Half Star.svg";

import product1Image from "../../assets/Frame 611.svg";
import product2Image from "../../assets/Frame 612.svg";
import product3Image from "../../assets/Frame 613.svg";
import product4Image from "../../assets/Frame 614.svg";

const Today = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const { addToCart } = useCart(); // Lấy hàm addToCart từ CartContext

  const text = {
    today:
      language === "Vietnamese"
        ? "Hôm nay"
        : language === "Japanese"
        ? "今日の"
        : "Today's",
    flashSales:
      language === "Vietnamese"
        ? "Giảm giá chớp nhoáng"
        : language === "Japanese"
        ? "フラッシュセール"
        : "Flash Sales",
    addToCart:
      language === "Vietnamese"
        ? "Thêm vào giỏ hàng"
        : language === "Japanese"
        ? "カートに追加"
        : "Add To Cart",
    viewAll:
      language === "Vietnamese"
        ? "Xem tất cả sản phẩm"
        : language === "Japanese"
        ? "すべての製品を見る"
        : "View All Products",
  };

  const products = [
    {
      id: 1,
      image: product1Image,
      name:
        language === "Vietnamese"
          ? "Tay cầm chơi game HAVIT HV-G92"
          : language === "Japanese"
          ? "HAVIT HV-G92 ゲームパッド"
          : "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      discount: "-40%",
      rating: starImage,
      reviews: 88,
    },
    {
      id: 2,
      image: product2Image,
      name:
        language === "Vietnamese"
          ? "Bàn phím có dây AK-900"
          : language === "Japanese"
          ? "AK-900 有線キーボード"
          : "AK-900 Wired Keyboard",
      price: "$960",
      oldPrice: "$1160",
      discount: "-35%",
      rating: fourStarImage,
      reviews: 75,
    },
    {
      id: 3,
      image: product3Image,
      name:
        language === "Vietnamese"
          ? "Màn hình chơi game IPS LCD"
          : language === "Japanese"
          ? "IPS LCD ゲーミングモニター"
          : "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      discount: "-30%",
      rating: starImage,
      reviews: 99,
    },
    {
      id: 4,
      image: product4Image,
      name:
        language === "Vietnamese"
          ? "Ghế thoải mái S-Series"
          : language === "Japanese"
          ? "Sシリーズ コンフォートチェア"
          : "S-Series Comfort Chair",
      price: "$375",
      oldPrice: "$400",
      discount: "-25%",
      rating: fourHalfStarImage,
      reviews: 99,
    },
  ];

  return (
    <div
      className={`today mt-20 px-4 lg:px-32 transition-colors duration-300 ${
        isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
      }`}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-5 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold text-lg ml-3">{text.today}</p>
      </div>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">{text.flashSales}</h1>
        <div className="flex items-center gap-2">
          {/* Left Arrow */}
          <Button
            shape="circle"
            className={`border transition-all duration-300 ${
              isDarkMode ? "!bg-white !border-white" : "!bg-black !border-gray-400"
            }`}
          >
            <img
              src={leftArrow}
              alt="Left Arrow"
              style={{ filter: isDarkMode ? "invert(0)" : "invert(1)" }}
            />
          </Button>

          {/* Right Arrow */}
          <Button
            shape="circle"
            className={`border transition-all duration-300 ${
              isDarkMode ? "!bg-white !border-white" : "!bg-black !border-gray-400"
            }`}
          >
            <img
              src={rightArrow}
              alt="Right Arrow"
              style={{ filter: isDarkMode ? "invert(0)" : "invert(1)" }}
            />
          </Button>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={
              <div className="relative">
                {/* Discount Tag */}
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md">
                  {product.discount}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-md transition-all duration-500 mt-4"
                />

                {/* Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <img
                    src={heartImage}
                    alt="Heart"
                    className="w-6 h-6 cursor-pointer"
                  />
                  <img
                    src={eyeImage}
                    alt="Eye"
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            }
            className={`shadow-lg rounded-lg transition-all duration-500 ${
              isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
            }`}
          >
            {/* Add To Cart Button */}
            <Button
              block
              onClick={() => addToCart(product)} // Gọi addToCart khi click
              className={`mt-4 !rounded-md transition-all duration-300 hover:grayscale hover:scale-105 active:scale-95 ${
                isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
              }`}
            >
              {text.addToCart}
            </Button>

            {/* Product Info */}
            <div className="mt-4">
              <h3 className="font-semibold">{product.name}</h3>
              <div className="flex gap-2">
                <span className="text-red-600 font-bold">{product.price}</span>
                <span className="line-through opacity-50">{product.oldPrice}</span>
              </div>
              <div className="flex items-center mt-2">
                <img src={product.rating} alt="Rating" className="w-20" />
                <p className="ml-2">({product.reviews})</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View All Products */}
      <div className="flex justify-center mt-16">
        <Button className="px-6 py-3">{text.viewAll}</Button>
      </div>
    </div>
  );
};

export default Today;
