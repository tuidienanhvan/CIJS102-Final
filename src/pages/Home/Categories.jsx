import React from "react";
import { Button } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import leftArrow from "../../assets/icons_arrow-left.svg";
import rightArrow from "../../assets/icons arrow-right.svg";
import phoneImage from "../../assets/Category-CellPhone.svg";
import computerImage from "../../assets/Category-Computer.svg";
import smartwatchImage from "../../assets/Category-SmartWatch.svg";
import cameraImage from "../../assets/Category-Camera.svg";
import headphoneImage from "../../assets/Category-Headphone.svg";
import gamepadImage from "../../assets/Category-Gamepad.svg";

const Categories = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  // Nội dung đa ngôn ngữ
  const text = {
    categories:
      language === "Vietnamese"
        ? "Danh mục"
        : language === "Japanese"
        ? "カテゴリー"
        : "Categories",

    browseByCategory:
      language === "Vietnamese"
        ? "Duyệt theo danh mục"
        : language === "Japanese"
        ? "カテゴリで閲覧"
        : "Browse By Category",

    categoryList: [
      {
        id: 1,
        name:
          language === "Vietnamese"
            ? "Điện thoại"
            : language === "Japanese"
            ? "携帯電話"
            : "Phones",
        image: phoneImage,
      },
      {
        id: 2,
        name:
          language === "Vietnamese"
            ? "Máy tính"
            : language === "Japanese"
            ? "コンピューター"
            : "Computers",
        image: computerImage,
      },
      {
        id: 3,
        name:
          language === "Vietnamese"
            ? "Đồng hồ thông minh"
            : language === "Japanese"
            ? "スマートウォッチ"
            : "SmartWatch",
        image: smartwatchImage,
      },
      {
        id: 4,
        name:
          language === "Vietnamese"
            ? "Máy ảnh"
            : language === "Japanese"
            ? "カメラ"
            : "Camera",
        image: cameraImage,
      },
      {
        id: 5,
        name:
          language === "Vietnamese"
            ? "Tai nghe"
            : language === "Japanese"
            ? "ヘッドホン"
            : "HeadPhone",
        image: headphoneImage,
      },
      {
        id: 6,
        name:
          language === "Vietnamese"
            ? "Trò chơi"
            : language === "Japanese"
            ? "ゲーム"
            : "Gaming",
        image: gamepadImage,
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
        <p className="text-red-600 font-bold text-lg ml-3">{text.categories}</p>
      </div>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">{text.browseByCategory}</h1>
        <div className="flex gap-2">
          <Button
            className={`!rounded-full !p-3 transition-all duration-300 hover:!bg-orange-600 ${
              isDarkMode ? "!bg-black !border-white" : "!bg-white !border-gray-400"
            }`}
          >
            <img
              src={leftArrow}
              alt="Left Arrow"
              style={{ filter: isDarkMode ? "invert(1)" : "invert(0)" }}
            />
          </Button>
          <Button
            className={`!rounded-full !p-3 transition-all duration-300 hover:!bg-orange-600 ${
              isDarkMode ? "!bg-black !border-white" : "!bg-white !border-gray-400"
            }`}
          >
            <img
              src={rightArrow}
              alt="Right Arrow"
              style={{ filter: isDarkMode ? "invert(1)" : "invert(0)" }}
            />
          </Button>
        </div>
      </div>

      {/* Category List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {text.categoryList.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center border rounded-md p-4 transition-all hover:scale-105 ${
              isDarkMode
                ? "!border-white hover:!bg-orange-700 !bg-black !text-white"
                : "!border-gray-300 hover:!bg-orange-700 !bg-white !text-black"
            }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16"
              style={{ filter: isDarkMode ? "invert(1)" : "invert(0)" }}
            />
            <p className="mt-2 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
