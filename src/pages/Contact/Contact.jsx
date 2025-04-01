import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { Breadcrumb } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  // Áp dụng theme
  const bgClass = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const breadcrumbTextClass = isDarkMode ? "!text-white" : "!text-black";
  const breadcrumbHoverClass = "hover:!text-gray-400";
  const separatorClass = isDarkMode ? "!text-white" : "!text-black";

  // Nội dung đa ngôn ngữ
  const text = {
    home: language === "Vietnamese" ? "Trang chủ" 
         : language === "Japanese" ? "ホーム" 
         : "Home",
    
    contact: language === "Vietnamese" ? "Liên hệ" 
            : language === "Japanese" ? "お問い合わせ" 
            : "Contact",
  };

  return (
    <div className={`!p-6 ${bgClass}`}>
      {/* Breadcrumb */}
      <Breadcrumb
        className="!font-medium"
        separator={<span className={`${separatorClass} !mx-2`}>/</span>}
      >
        <Breadcrumb.Item>
          <a href="/" className={`${breadcrumbTextClass} ${breadcrumbHoverClass}`}>
            {text.home}
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={breadcrumbTextClass}>
          {text.contact}
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Grid Layout */}
      <div className="grid !grid-cols-12 !gap-10 !mt-14">
        {/* Contact Info */}
        <div className="!col-span-12 md:!col-span-5 !w-full !h-full !flex !flex-col">
          <div className="!p-6 !w-full !h-full">
            <ContactInfo />
          </div>
        </div>

        {/* Contact Form */}
        <div className="!col-span-12 md:!col-span-7 !w-full !h-full !flex !flex-col">
          <div className="!p-6 !w-full !h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
