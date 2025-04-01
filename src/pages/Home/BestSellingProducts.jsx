import React from "react";
import { Card, Button } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import product1Image from "../../assets/Frame 605.svg";
import product2Image from "../../assets/Frame 606.svg";
import product3Image from "../../assets/Frame 610.svg";
import product4Image from "../../assets/Frame 612 (1).svg";
import featuredImage from "../../assets/Frame 600.svg";
import heartImage from "../../assets/Fill Heart.svg";
import eyeImage from "../../assets/Fill Eye.svg";
import starImage from "../../assets/Five star.svg";
import fourHalfStarImage from "../../assets/Four Half Star.svg";

const BestSellingProducts = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const { addToCart } = useCart();

  // Nội dung đa ngôn ngữ
  const text = {
    thisMonth:
      language === "Vietnamese"
        ? "Tháng này"
        : language === "Japanese"
        ? "今月"
        : "This Month",

    bestSelling:
      language === "Vietnamese"
        ? "Sản phẩm bán chạy nhất"
        : language === "Japanese"
        ? "ベストセラー商品"
        : "Best Selling Products",

    viewAll:
      language === "Vietnamese"
        ? "Xem tất cả"
        : language === "Japanese"
        ? "すべてを見る"
        : "View All",

    addToCart:
      language === "Vietnamese"
        ? "Thêm vào giỏ hàng"
        : language === "Japanese"
        ? "カートに追加"
        : "Add To Cart",

    reviews:
      language === "Vietnamese"
        ? "(65 đánh giá)"
        : language === "Japanese"
        ? "(65レビュー)"
        : "(65 reviews)",

    products: [
      {
        id: 1,
        name:
          language === "Vietnamese"
            ? "Áo khoác The North"
            : language === "Japanese"
            ? "ザ・ノースコート"
            : "The North Coat",
        price: "$260",
        oldPrice: "$360",
        image: product1Image,
        rating: starImage,
      },
      {
        id: 2,
        name:
          language === "Vietnamese"
            ? "Túi du lịch Gucci"
            : language === "Japanese"
            ? "グッチのダッフルバッグ"
            : "Gucci Duffle Bag",
        price: "$960",
        oldPrice: "$1160",
        image: product2Image,
        rating: fourHalfStarImage,
      },
      {
        id: 3,
        name:
          language === "Vietnamese"
            ? "Tản nhiệt CPU RGB"
            : language === "Japanese"
            ? "RGB液体CPUクーラー"
            : "RGB Liquid CPU Cooler",
        price: "$160",
        oldPrice: "$170",
        image: product3Image,
        rating: fourHalfStarImage,
      },
      {
        id: 4,
        name:
          language === "Vietnamese"
            ? "Giá sách nhỏ"
            : language === "Japanese"
            ? "小型本棚"
            : "Small Bookshelf",
        price: "$360",
        oldPrice: null,
        image: product4Image,
        rating: starImage,
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
        <p className="text-red-600 font-bold text-lg ml-3">{text.thisMonth}</p>
      </div>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">{text.bestSelling}</h1>
        <Button
          className={`!px-6 !py-3 transition-all duration-300 hover:grayscale hover:scale-105 active:scale-95 ${
            isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
          }`}
        >
          {text.viewAll}
        </Button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {text.products.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-md transition-all duration-500 mt-4"
                />
                {/* Icons yêu thích + xem */}
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
            {/* Nút Add To Cart */}
            <Button
              block
              onClick={() => addToCart(product)}
              className={`!rounded-md transition-all duration-300 hover:grayscale hover:scale-105 active:scale-95 ${
                isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
              }`}
            >
              {text.addToCart}
            </Button>

            {/* Thông tin sản phẩm */}
            <div className="mt-4">
              <h3 className="font-semibold">{product.name}</h3>
              <div className="flex gap-2">
                <span className="text-red-600 font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="line-through opacity-50">
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-2">
                <img src={product.rating} alt="Rating" className="w-20" />
                <p className="ml-2">{text.reviews}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Featured Image */}
      <div className="flex justify-center mt-16">
        <img src={featuredImage} alt="Featured" className="w-full max-w-4xl" />
      </div>
    </div>
  );
};

export default BestSellingProducts;
