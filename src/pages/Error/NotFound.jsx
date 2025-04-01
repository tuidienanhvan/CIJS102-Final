import React, { useState } from "react";
import { Input, Button, Slider } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

// Hàm nội suy màu giữa 2 màu hex theo factor (0-1)
function interpolateColor(color1, color2, factor) {
  let c1 = parseInt(color1.slice(1), 16);
  let c2 = parseInt(color2.slice(1), 16);
  let r1 = (c1 >> 16) & 0xff;
  let g1 = (c1 >> 8) & 0xff;
  let b1 = c1 & 0xff;
  let r2 = (c2 >> 16) & 0xff;
  let g2 = (c2 >> 8) & 0xff;
  let b2 = c2 & 0xff;
  let r = Math.round(r1 + factor * (r2 - r1));
  let g = Math.round(g1 + factor * (g2 - g1));
  let b = Math.round(b1 + factor * (b2 - b1));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)}`;
}

const NotFound = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [sliderValue, setSliderValue] = useState(50);

  const red = "#f56565";
  const green = "#48bb78";
  const purple = "#9f7aea";

  // Tính màu dựa trên sliderValue: 0->50: từ đỏ đến xanh; 50->100: từ xanh đến tím.
  let selectedColor;
  if (sliderValue <= 50) {
    const factor = sliderValue / 50;
    selectedColor = interpolateColor(red, green, factor);
  } else {
    const factor = (sliderValue - 50) / 50;
    selectedColor = interpolateColor(green, purple, factor);
  }

  // Nội dung đa ngôn ngữ
  const text = {
    title:
      language === "Vietnamese"
        ? "Ối! Trang này không tồn tại."
        : language === "Japanese"
        ? "おっと！ページが見つかりません。"
        : "Whoops, that page is gone.",
    description:
      language === "Vietnamese"
        ? "Trong lúc chờ đợi, bạn có thể ngắm những thiết kế nổi bật với màu sắc"
        : language === "Japanese"
        ? "この間、あなたの好みに合ったデザインをお楽しみください。"
        : "While you're here, feast your eyes upon these tantalizing popular designs matching the color",
    searchPlaceholder:
      language === "Vietnamese"
        ? "Tìm kiếm thiết kế hoặc nhà thiết kế"
        : language === "Japanese"
        ? "デザインまたはデザイナーを検索"
        : "Search for design or designers",
    goHome:
      language === "Vietnamese"
        ? "Về trang chủ"
        : language === "Japanese"
        ? "ホームに戻る"
        : "Go Home",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center px-4 transition-colors duration-300 ${
        isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
      }`}
    >
      {/* Tiêu đề */}
      <h1
        className="text-2xl md:text-3xl font-bold"
        style={{ color: selectedColor }}
      >
        {text.title}
      </h1>
      <p className="text-gray-500 text-sm md:text-base mt-2">
        {text.description}{" "}
        <span className="font-semibold" style={{ color: selectedColor }}>
          {selectedColor}
        </span>
        .
      </p>

      {/* Số 404 cực lớn */}
      <div className="text-[20vw] font-bold text-gray-200 leading-none mt-4 select-none">
        404
      </div>

      {/* Thanh chọn màu (Slider) */}
      <div className="w-2/3 md:w-1/2 mt-4">
        <Slider
          min={0}
          max={100}
          value={sliderValue}
          onChange={(value) => setSliderValue(value)}
          tooltipVisible={false}
          trackStyle={{ backgroundColor: selectedColor }}
          handleStyle={{ borderColor: selectedColor }}
        />
      </div>

      {/* Ô tìm kiếm */}
      <div className="mt-6 w-full max-w-md">
        <Input
          size="large"
          placeholder={text.searchPlaceholder}
          prefix={<SearchOutlined className="text-gray-400" />}
          className="rounded-full px-4 py-2 shadow-md"
        />
      </div>

      {/* Nút quay về trang chủ */}
      <Button
        type="primary"
        size="large"
        className={`mt-6 transition duration-300 ${
          isDarkMode
            ? "!text-white !bg-black !border-black hover:!bg-white hover:!text-black"
            : "!text-black !bg-white !border-white hover:!bg-black hover:!text-white"
        }`}
        onClick={() => navigate("/")}
      >
        {text.goHome}
      </Button>
    </div>
  );
};

export default NotFound;
