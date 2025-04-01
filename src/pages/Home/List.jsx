import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import bannerImage from "../../assets/Frame 560.svg";

const List = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  // Nội dung đa ngôn ngữ
  const categories = [
    {
      name:
        language === "Vietnamese"
          ? "Thời trang nữ"
          : language === "Japanese"
          ? "カテゴリー"
          : "Women's Fashion",
    },
    {
      name:
        language === "Vietnamese"
          ? "Thời trang nam"
          : language === "Japanese"
          ? "メンズファッション"
          : "Men's Fashion",
    },
    {
      name:
        language === "Vietnamese"
          ? "Điện tử"
          : language === "Japanese"
          ? "電子機器"
          : "Electronics",
    },
    {
      name:
        language === "Vietnamese"
          ? "Nhà cửa & Đời sống"
          : language === "Japanese"
          ? "ホーム＆ライフスタイル"
          : "Home & Lifestyle",
    },
    {
      name:
        language === "Vietnamese"
          ? "Dược phẩm"
          : language === "Japanese"
          ? "医薬品"
          : "Medicine",
    },
    {
      name:
        language === "Vietnamese"
          ? "Thể thao & Ngoài trời"
          : language === "Japanese"
          ? "スポーツ＆アウトドア"
          : "Sports & Outdoor",
    },
    {
      name:
        language === "Vietnamese"
          ? "Đồ chơi & Em bé"
          : language === "Japanese"
          ? "おもちゃ＆ベビー用品"
          : "Baby's & Toys",
    },
    {
      name:
        language === "Vietnamese"
          ? "Tạp hóa & Thú cưng"
          : language === "Japanese"
          ? "食料品＆ペット用品"
          : "Groceries & Pets",
    },
    {
      name:
        language === "Vietnamese"
          ? "Sức khỏe & Làm đẹp"
          : language === "Japanese"
          ? "健康＆美容"
          : "Health & Beauty",
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-12 gap-6 px-6 lg:px-32 mt-10 items-center transition-colors duration-300 ${
        isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
      }`}
    >
      {/* Danh sách bên trái */}
      <div className="col-span-12 sm:col-span-4 flex flex-col gap-4 text-lg font-medium">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className={`flex justify-between items-center transition duration-300 ${
              isDarkMode
                ? "!text-white hover:!text-orange-600"
                : "!text-black hover:!text-orange-600"
            }`}
          >
            {category.name}
            {index < 2 && (
              <RightOutlined
                className={`transition duration-300 ${
                  isDarkMode ? "!text-white" : "!text-black"
                }`}
              />
            )}
          </a>
        ))}
      </div>

      {/* Đường kẻ dọc */}
      <div className="hidden lg:flex col-span-1 justify-center">
        <div
          className={`h-auto lg:h-[385px] opacity-80 transition-colors duration-300 border-l ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}
        ></div>
      </div>

      {/* Banner bên phải */}
      <div className="col-span-12 sm:col-span-7">
        <img
          src={bannerImage}
          alt="Banner"
          className={`w-full h-auto rounded-lg transition-shadow duration-300 ${
            isDarkMode ? "shadow-lg shadow-gray-700" : "shadow-md shadow-gray-300"
          }`}
        />
      </div>
    </div>
  );
};

export default List;
