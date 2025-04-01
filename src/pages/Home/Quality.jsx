import React from "react";
import { Card } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import freeDeliveryImage from "../../assets/Services.svg";
import customerServiceImage from "../../assets/Services (1).svg";
import moneyBackImage from "../../assets/Services (2).svg";

const Quality = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const services = [
    {
      id: 1,
      image: freeDeliveryImage,
      title:
        language === "Vietnamese"
          ? "GIAO HÀNG NHANH VÀ MIỄN PHÍ"
          : language === "Japanese"
          ? "無料かつ迅速な配送"
          : "FREE AND FAST DELIVERY",
      description:
        language === "Vietnamese"
          ? "Miễn phí giao hàng cho mọi đơn trên $140"
          : language === "Japanese"
          ? "すべての注文で140ドル以上の無料配送"
          : "Free delivery for all orders over $140",
    },
    {
      id: 2,
      image: customerServiceImage,
      title:
        language === "Vietnamese"
          ? "DỊCH VỤ KHÁCH HÀNG 24/7"
          : language === "Japanese"
          ? "24時間年中無休のカスタマーサービス"
          : "24/7 CUSTOMER SERVICE",
      description:
        language === "Vietnamese"
          ? "Hỗ trợ khách hàng thân thiện 24/7"
          : language === "Japanese"
          ? "フレンドリーな24時間対応のカスタマーサポート"
          : "Friendly 24/7 customer support",
    },
    {
      id: 3,
      image: moneyBackImage,
      title:
        language === "Vietnamese"
          ? "ĐẢM BẢO HOÀN TIỀN"
          : language === "Japanese"
          ? "返金保証"
          : "MONEY BACK GUARANTEE",
      description:
        language === "Vietnamese"
          ? "Hoàn tiền trong vòng 30 ngày"
          : language === "Japanese"
          ? "30日以内に返金します"
          : "We return money within 30 days",
    },
  ];

  return (
    <div
      className={`mt-20 px-4 lg:px-32 transition-colors duration-300 ${
        isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            hoverable
            className={`shadow-md rounded-lg !p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              isDarkMode
                ? "!bg-black !text-white !shadow-gray-700"
                : "!bg-white !text-black !shadow-gray-300"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="!w-20 !h-20 !mb-4"
            />
            <h3 className="!font-bold !text-lg">{service.title}</h3>
            <p className={isDarkMode ? "!text-gray-300" : "!text-gray-600"}>
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Quality;
