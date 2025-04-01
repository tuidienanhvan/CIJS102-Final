import React from "react";
import Story from "./Story";
import ButtonSection from "./ButtonSection";
import ExpertSection from "./ExpertSection";
import QualitySection from "./QualitySection";
import { Breadcrumb } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const bgClass = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const breadcrumbTextClass = isDarkMode ? "!text-white" : "!text-black";
  const breadcrumbHoverClass = "hover:!text-gray-400";
  const separatorClass = isDarkMode ? "!text-white" : "!text-black";

  const text = {
    Home:
      language === "Vietnamese"
        ? "Trang chủ"
        : language === "Japanese"
        ? "ホーム"
        : "Home",
    About:
      language === "Vietnamese"
        ? "Về chúng tôi"
        : language === "Japanese"
        ? "私たちについて"
        : "About",
  };

  return (
    <div className={`p-6 ${bgClass}`}>
      {/* Breadcrumb */}
      <Breadcrumb
        className="!font-medium"
        separator={<span className={`${separatorClass} mx-2`}>/</span>}
      >
        <Breadcrumb.Item>
          <a href="/" className={`${breadcrumbTextClass} ${breadcrumbHoverClass}`}>
            {text.Home}
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={breadcrumbTextClass}>
          {text.About}
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Các Section */}
      <Story />
      <ButtonSection />
      <ExpertSection />
      <QualitySection />
    </div>
  );
};

export default About;
