import React from "react";
import phoneIcon from "../../assets/icons-phone.svg";
import mailIcon from "../../assets/icons-mail.svg";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const ContactInfo = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  // Theme styles
  const containerTheme = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const textSecondary = isDarkMode ? "!text-gray-400" : "!text-gray-600";
  const borderTheme = isDarkMode ? "!border-gray-500" : "!border-gray-300";
  const shadowTheme = isDarkMode ? "!shadow-white/50" : "!shadow-black/50";
  const hoverShadow = isDarkMode ? "hover:!shadow-gray-400" : "hover:!shadow-gray-700";

  // Nội dung đa ngôn ngữ
  const text = {
    callToUs:
      language === "Vietnamese" ? "Gọi cho chúng tôi" : language === "Japanese" ? "お問い合わせ" : "Call To Us",

    callDesc:
      language === "Vietnamese"
        ? "Chúng tôi luôn sẵn sàng 24/7, 7 ngày trong tuần."
        : language === "Japanese"
        ? "私たちは24時間365日対応しています。"
        : "We are available 24/7, 7 days a week.",

    phone: language === "Vietnamese" ? "Điện thoại" : language === "Japanese" ? "電話" : "Phone",

    writeToUs:
      language === "Vietnamese"
        ? "Viết cho chúng tôi"
        : language === "Japanese"
        ? "お問い合わせフォーム"
        : "Write To Us",

    writeDesc:
      language === "Vietnamese"
        ? "Điền vào biểu mẫu của chúng tôi và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ."
        : language === "Japanese"
        ? "フォームに記入していただければ、24時間以内にご連絡いたします。"
        : "Fill out our form and we will contact you within 24 hours.",

    email: language === "Vietnamese" ? "Email" : language === "Japanese" ? "メール" : "Email",
  };

  return (
    <div className="flex justify-center md:justify-start">
      <div
        className={`p-8 rounded-xl w-full max-w-xl shadow-xl transition-shadow duration-300 !shadow-2xl ${shadowTheme} ${hoverShadow} ${containerTheme}`}
      >
        {/* Call To Us */}
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-3 text-lg font-semibold">
            <img src={phoneIcon} alt={text.callToUs} className="w-6 h-6" />
            {text.callToUs}
          </h3>
          <p className={`text-lg ${textSecondary}`}>{text.callDesc}</p>
          <p className="font-medium">{text.phone}: +8801611112222</p>
        </div>

        <hr className={`my-6 border-t-2 ${borderTheme}`} />

        {/* Write To Us */}
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-3 text-lg font-semibold">
            <img src={mailIcon} alt={text.writeToUs} className="w-6 h-6" />
            {text.writeToUs}
          </h3>
          <p className={`text-lg ${textSecondary}`}>{text.writeDesc}</p>
          <p className="font-medium">{text.email}: customer@exclusive.com</p>
          <p className="font-medium">{text.email}: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
