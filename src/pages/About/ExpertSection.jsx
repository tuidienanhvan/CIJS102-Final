import React from "react";
import { Card, Avatar } from "antd";
import tomCruiseImage from "../../assets/Frame 874.svg";
import emmaWatsonImage from "../../assets/Frame 875.svg";
import willSmithImage from "../../assets/Frame 876.svg";
import twitterIcon from "../../assets/Icon-Twitter (1).svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import linkedinIcon from "../../assets/Icon-Linkedin.svg";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const ExpertSection = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const bgClass = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const cardBgClass = isDarkMode ? "!bg-gray-900" : "!bg-gray-100";
  const textClass = isDarkMode ? "!text-white" : "!text-black";
  const hoverClass = "hover:!bg-red-800 hover:!text-white hover:scale-105";

  // Đổi màu icon theo theme
  const iconClass = isDarkMode
    ? "filter brightness-0 invert hover:!invert-0 hover:!brightness-75" // Icon màu trắng, hover thành đỏ nhạt
    : "filter brightness-0 hover:!brightness-50"; // Icon màu đen, hover thành đỏ đậm

  const experts = [
    {
      img: tomCruiseImage,
      name: "Tom Cruise",
      role:
        language === "Vietnamese"
          ? "Người sáng lập & Chủ tịch"
          : language === "Japanese"
          ? "創設者兼会長"
          : "Founder & Chairman",
    },
    {
      img: emmaWatsonImage,
      name: "Emma Watson",
      role:
        language === "Vietnamese"
          ? "Giám đốc điều hành"
          : language === "Japanese"
          ? "マネージングディレクター"
          : "Managing Director",
    },
    {
      img: willSmithImage,
      name: "Will Smith",
      role:
        language === "Vietnamese"
          ? "Nhà thiết kế sản phẩm"
          : language === "Japanese"
          ? "プロダクトデザイナー"
          : "Product Designer",
    },
  ];

  return (
    <div className={`mt-16 px-6 ${bgClass}`}>
      <h2 className="text-3xl font-bold text-center mb-12">{language === "Vietnamese" ? "Chuyên gia của chúng tôi" : language === "Japanese" ? "私たちの専門家" : "Our Experts"}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {experts.map((expert, index) => (
          <Card
            key={index}
            className={`flex flex-col items-center text-center !p-6 shadow-lg transition-all duration-300 
                        ${cardBgClass} ${hoverClass} hover:shadow-2xl`}
          >
            <Avatar src={expert.img} size={100} className="transition-transform duration-300 hover:scale-110" />
            <h3 className={`font-bold text-xl mt-4 transition-all duration-300 ${textClass} group-hover:!text-white`}>
              {expert.name}
            </h3>
            <p className={`text-gray-500 transition-all duration-300 ${textClass} group-hover:!text-white`}>
              {expert.role}
            </p>
            <div className="flex gap-4 mt-4">
              <img src={twitterIcon} alt="Twitter" className={`w-6 h-6 ${iconClass}`} />
              <img src={instagramIcon} alt="Instagram" className={`w-6 h-6 ${iconClass}`} />
              <img src={linkedinIcon} alt="LinkedIn" className={`w-6 h-6 ${iconClass}`} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExpertSection;
