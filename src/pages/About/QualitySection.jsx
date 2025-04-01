import React from "react";
import { Card } from "antd";
import freeDeliveryIcon from "../../assets/Services.svg";
import customerServiceIcon from "../../assets/Services (1).svg";
import moneyBackIcon from "../../assets/Services (2).svg";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const QualitySection = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const bgClass = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const cardBgClass = isDarkMode ? "!bg-gray-900 hover:!bg-gray-800" : "!bg-gray-100 hover:!bg-gray-200";
  const textClass = isDarkMode ? "!text-white" : "!text-black";
  const subTextClass = isDarkMode ? "!text-gray-400" : "!text-gray-600";
  const iconClass = isDarkMode ? "invert" : ""; // 💡 Icon đổi màu khi dark mode

  const services = [
    {
      img: freeDeliveryIcon,
      title:
        language === "Vietnamese"
          ? "GIAO HÀNG NHANH MIỄN PHÍ"
          : language === "Japanese"
          ? "無料で迅速な配送"
          : "FREE AND FAST DELIVERY",
      text:
        language === "Vietnamese"
          ? "Miễn phí giao hàng cho mọi đơn hàng trên $140"
          : language === "Japanese"
          ? "140ドル以上のすべての注文で無料配送"
          : "Free delivery for all orders over $140",
    },
    {
      img: customerServiceIcon,
      title:
        language === "Vietnamese"
          ? "DỊCH VỤ KHÁCH HÀNG 24/7"
          : language === "Japanese"
          ? "24時間年中無休のカスタマーサービス"
          : "24/7 CUSTOMER SERVICE",
      text:
        language === "Vietnamese"
          ? "Hỗ trợ khách hàng thân thiện 24/7"
          : language === "Japanese"
          ? "親切な24時間年中無休のカスタマーサポート"
          : "Friendly 24/7 customer support",
    },
    {
      img: moneyBackIcon,
      title:
        language === "Vietnamese"
          ? "ĐẢM BẢO HOÀN TIỀN"
          : language === "Japanese"
          ? "返金保証"
          : "MONEY BACK GUARANTEE",
      text:
        language === "Vietnamese"
          ? "Chúng tôi hoàn tiền trong vòng 30 ngày"
          : language === "Japanese"
          ? "30日以内に返金いたします"
          : "We return money within 30 days",
    },
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 px-4 md:px-10 ${bgClass}`}>
      {services.map((service, index) => (
        <Card
          key={index}
          bordered={false}
          className={`flex flex-col items-center text-center p-6 shadow-lg transition-all duration-300 
                      hover:shadow-2xl hover:scale-105 ${cardBgClass}`}
        >
          {/* 💡 Icon invert trong dark mode */}
          <img src={service.img} alt={service.title} className={`mb-4 w-16 h-16 transition-transform duration-300 hover:scale-110 ${iconClass}`} />
          <h3 className={`font-bold text-lg transition-all duration-300 ${textClass}`}>{service.title}</h3>
          <p className={`mt-2 transition-all duration-300 ${subTextClass}`}>{service.text}</p>
        </Card>
      ))}
    </div>
  );
};

export default QualitySection;
