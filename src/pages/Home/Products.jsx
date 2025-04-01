import React from "react";
import { Card, Button } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext"; // Import useCart
import product1Image from "../../assets/Frame 604.svg";
import product2Image from "../../assets/Frame 604 (1).svg";
import product3Image from "../../assets/Frame 604 (2).svg";
import product4Image from "../../assets/Frame 608.svg";
import starImage from "../../assets/Five star.svg";
import fourHalfStarImage from "../../assets/Four Half Star.svg";

const Products = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const { addToCart } = useCart(); // Lấy hàm addToCart

  const text = {
    ourProducts:
      language === "Vietnamese"
        ? "Sản phẩm của chúng tôi"
        : language === "Japanese"
        ? "私たちの製品"
        : "Our Products",

    exploreProducts:
      language === "Vietnamese"
        ? "Khám phá sản phẩm của chúng tôi"
        : language === "Japanese"
        ? "製品を探索する"
        : "Explore Our Products",

    viewAll:
      language === "Vietnamese"
        ? "Xem tất cả"
        : language === "Japanese"
        ? "すべて見る"
        : "View All",

    addToCart:
      language === "Vietnamese"
        ? "Thêm vào giỏ hàng"
        : language === "Japanese"
        ? "カートに追加"
        : "Add To Cart",

    products: [
      {
        id: 1,
        name:
          language === "Vietnamese"
            ? "Thức ăn khô cho chó"
            : language === "Japanese"
            ? "犬用ドライフード"
            : "Breed Dry Dog Food",
        price: "$100",
        image: product1Image,
        rating: starImage,
        reviews: 35,
      },
      {
        id: 2,
        name:
          language === "Vietnamese"
            ? "Máy ảnh CANON EOS DSLR"
            : language === "Japanese"
            ? "CANON EOS DSLR カメラ"
            : "CANON EOS DSLR Camera",
        price: "$360",
        image: product2Image,
        rating: starImage,
        reviews: 95,
      },
      {
        id: 3,
        name:
          language === "Vietnamese"
            ? "Laptop chơi game ASUS FHD"
            : language === "Japanese"
            ? "ASUS FHD ゲーミングノート"
            : "ASUS FHD Gaming Laptop",
        price: "$700",
        image: product3Image,
        rating: fourHalfStarImage,
        reviews: 325,
      },
      {
        id: 4,
        name:
          language === "Vietnamese"
            ? "Ô tô điện trẻ em"
            : language === "Japanese"
            ? "子供用電動車"
            : "Kids Electric Car",
        price: "$960",
        image: product4Image,
        rating: starImage,
        reviews: 65,
      },
    ],
  };

  return (
    <div
      className={`mt-36 px-4 lg:px-32 transition-colors duration-300 ${
        isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
      }`}
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-5 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold text-lg ml-3">
          {text.ourProducts}
        </p>
      </div>

      {/* Title + View All */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          {text.exploreProducts}
        </h1>
        <Button
          className={`!px-6 !py-3 transition-all duration-300 hover:grayscale hover:scale-105 active:scale-95 ${
            isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
          }`}
        >
          {text.viewAll}
        </Button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
        {text.products.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover mt-4 transition-all duration-500"
                />
                {/* Icons yêu thích + xem */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <HeartOutlined
                    className={`text-xl cursor-pointer transition-all duration-300 ${
                      isDarkMode
                        ? "!text-white hover:!text-red-500"
                        : "text-gray-600 hover:!text-red-500"
                    }`}
                  />
                  <EyeOutlined
                    className={`text-xl cursor-pointer transition-all duration-300 ${
                      isDarkMode
                        ? "!text-white hover:!text-blue-500"
                        : "text-gray-600 hover:!text-blue-500"
                    }`}
                  />
                </div>
              </div>
            }
            className={`shadow-lg rounded-lg transition-all duration-500 ${
              isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
            }`}
          >
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <div className="flex gap-2">
                <span className="text-red-600 font-bold">{product.price}</span>
              </div>
              <div className="flex items-center mt-2">
                <img src={product.rating} alt="Rating" className="w-20" />
                <p className="ml-2">({product.reviews})</p>
              </div>
              <Button
                block
                onClick={() => addToCart(product)} // Gọi addToCart khi click
                className={`mt-4 !rounded-md transition-all duration-300 hover:grayscale hover:scale-105 active:scale-95 ${
                  isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
                }`}
              >
                {text.addToCart}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
