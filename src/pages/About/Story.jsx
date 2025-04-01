import React from "react";
import { Image } from "antd";
import storyImage from "../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).svg";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const Story = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const bgClass = isDarkMode ? "!bg-black" : "!bg-white";
  const textClass = isDarkMode ? "!text-white" : "!text-black";
  const paragraphClass = isDarkMode ? "!text-gray-300" : "!text-gray-600";
  const hoverClass = "hover:!text-gray-400";

  const text = {
    title:
      language === "Vietnamese"
        ? "Câu chuyện của chúng tôi"
        : language === "Japanese"
        ? "私たちの物語"
        : "Our Story",

    paragraph1:
      language === "Vietnamese"
        ? "Ra mắt vào năm 2015, Exclusive là sàn thương mại điện tử hàng đầu tại Nam Á, với sự hiện diện tích cực tại Bangladesh. Với sự hỗ trợ từ nhiều chiến lược tiếp thị, dữ liệu và giải pháp dịch vụ, Exclusive có 10.500 người bán, 300 thương hiệu và phục vụ 3 triệu khách hàng trong khu vực."
        : language === "Japanese"
        ? "2015年に設立されたExclusiveは、南アジアでトップのオンラインショッピングマーケットプレイスであり、バングラデシュで積極的に展開しています。多様なマーケティング戦略、データ、サービスソリューションのサポートを受け、Exclusiveは10,500人の販売者、300のブランドを持ち、地域全体で300万人の顧客にサービスを提供しています。"
        : "Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.",

    paragraph2:
      language === "Vietnamese"
        ? "Exclusive có hơn 1 triệu sản phẩm, với tốc độ tăng trưởng nhanh chóng. Exclusive cung cấp nhiều danh mục sản phẩm đa dạng từ hàng tiêu dùng đến các sản phẩm cao cấp."
        : language === "Japanese"
        ? "Exclusiveは100万以上の製品を提供しており、非常に速いペースで成長しています。消費財から高級品まで、幅広いカテゴリーの商品を取り揃えています。"
        : "Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.",
  };

  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 mt-10 ${bgClass}`}>
      {/* Nội dung văn bản */}
      <div className="w-full md:w-1/2 space-y-4 !text-justify">
        <h1 className={`text-5xl font-bold text-center md:text-left ${textClass}`}>
          {text.title}
        </h1>
        <p className={`text-lg ${paragraphClass} ${hoverClass}`}>{text.paragraph1}</p>
        <p className={`text-lg ${paragraphClass} ${hoverClass}`}>{text.paragraph2}</p>
      </div>

      {/* Hình ảnh */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image src={storyImage} alt="Story" className="!rounded-lg !shadow-md" />
      </div>
    </div>
  );
};

export default Story;
