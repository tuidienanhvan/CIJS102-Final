import React from "react";
import { Card } from "antd";
import freeDeliveryImage from "../../assets/Services (7).svg";
import monthlySaleImage from "../../assets/Services (4).svg";
import activeCustomersImage from "../../assets/Services (5).svg";
import annualSalesImage from "../../assets/Services (6).svg";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const ButtonSection = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const bgClass = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const cardBgClass = isDarkMode ? "!bg-gray-900" : "!bg-gray-100";
  const textClass = isDarkMode ? "!text-white" : "!text-black";
  const hoverClass = "hover:!bg-red-800 hover:!text-white";
  const imgHoverClass = "group-hover:invert";

  const stats = [
    {
      img: freeDeliveryImage,
      number: "10.5k",
      text:
        language === "Vietnamese"
          ? "Người bán hoạt động trên trang web của chúng tôi"
          : language === "Japanese"
          ? "当サイトで活動中の販売者"
          : "Sellers active on our site",
    },
    {
      img: monthlySaleImage,
      number: "33k",
      text:
        language === "Vietnamese"
          ? "Sản phẩm được bán hàng tháng"
          : language === "Japanese"
          ? "月間製品販売"
          : "Monthly Product Sale",
    },
    {
      img: activeCustomersImage,
      number: "45.5k",
      text:
        language === "Vietnamese"
          ? "Khách hàng hoạt động trên trang web của chúng tôi"
          : language === "Japanese"
          ? "当サイトで活動中の顧客"
          : "Customers active on our site",
    },
    {
      img: annualSalesImage,
      number: "25k",
      text:
        language === "Vietnamese"
          ? "Tổng doanh số hàng năm trên trang web của chúng tôi"
          : language === "Japanese"
          ? "当サイトの年間総売上高"
          : "Annual gross sales on our site",
    },
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ${bgClass}`}>
      {stats.map((item, index) => (
        <Card
          key={index}
          hoverable
          className={`group flex flex-col items-center !p-6 shadow-lg transition-all duration-300 
                      ${cardBgClass} ${hoverClass} hover:shadow-2xl`}
        >
          <img src={item.img} alt={item.text} className={`mb-2 transition-all duration-300 ${imgHoverClass}`} />
          <h1 className={`font-bold text-2xl transition-all duration-300 ${textClass} group-hover:!text-white`}>
            {item.number}
          </h1>
          <p className={`text-gray-600 transition-all duration-300 ${textClass} group-hover:!text-white`}>
            {item.text}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ButtonSection;
