import React from "react";
import { Select } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "./TopBar.css";

const { Option } = Select;

const TopBar = () => {
  const { language, setLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const containerClass = isDarkMode
    ? "bg-black text-white border-b border-white"
    : "bg-white text-black border-b border-black";

  const selectThemeClass = isDarkMode ? "custom-select-dark" : "custom-select-light";
  const dropdownThemeClass = isDarkMode ? "custom-dropdown-dark" : "custom-dropdown-light";

  return (
    <div className={`${containerClass} fixed top-0 w-full h-12 flex items-center px-4 z-50`}>
      <span className="text-sm flex-1">
        {language === 'Vietnamese'
          ? 'Khuyến mãi hè! Giảm giá 50% cho tất cả đồ bơi và giao hàng nhanh miễn phí!'
          : language === 'Japanese'
          ? '夏のセール！すべての水着が 50% オフ、無料の速達配送！'
          : 'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!'}
        <a href="./home" className="font-bold ml-2 hover:underline">
          {language === 'Vietnamese'
            ? 'Mua ngay'
            : language === 'Japanese'
            ? '今すぐ購入'
            : 'Shop Now'}
        </a>
      </span>
      <Select
        value={language}
        onChange={setLanguage}
        className={`custom-select ${selectThemeClass}`}
        popupClassName={`custom-dropdown ${dropdownThemeClass}`}
      >
        <Option value="English">English</Option>
        <Option value="Vietnamese">Tiếng Việt</Option>
        <Option value="Japanese">日本語</Option>
      </Select>
      <button className="ml-4 text-2xl" onClick={toggleTheme}>
        {isDarkMode 
          ? <MoonOutlined className="!text-white hover:!text-gray-400" />  
          : <SunOutlined className="!text-black hover:!text-gray-600" />}
      </button>
    </div>
  );
};

export default TopBar;
