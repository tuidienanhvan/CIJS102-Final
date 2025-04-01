import React from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import QrCode from "../assets/Qr Code.svg";
import AppStore from "../assets/Appstore.svg";
import GooglePlay from "../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const bgClass = isDarkMode ? "!bg-black text-white !border-t !border-gray-600" : "!bg-white !text-black !border-t !border-gray-300";
  const inputClass = isDarkMode ? "!bg-black !text-white !border-gray-600" : "!bg-white !text-black !border-gray-400";
  const hoverTextClass = isDarkMode ? "hover:!text-gray-400" : "hover:!text-gray-600";

  const text = {
    Subscribe: language === "Vietnamese" ? "Đăng ký" : language === "Japanese" ? "購読する" : "Subscribe",
    GetDiscount: language === "Vietnamese" ? "Nhận giảm giá 10% cho đơn hàng đầu tiên" : language === "Japanese" ? "最初の注文で 10% 割引を受ける" : "Get 10% off your first order",
    EnterEmail: language === "Vietnamese" ? "Nhập email của bạn" : language === "Japanese" ? "メールアドレスを入力してください" : "Enter your email",
    Support: language === "Vietnamese" ? "Hỗ trợ" : language === "Japanese" ? "サポート" : "Support",
    Account: language === "Vietnamese" ? "Tài khoản" : language === "Japanese" ? "アカウント" : "Account",
    QuickLink: language === "Vietnamese" ? "Liên kết nhanh" : language === "Japanese" ? "クイックリンク" : "Quick Link",
    DownloadApp: language === "Vietnamese" ? "Tải ứng dụng" : language === "Japanese" ? "アプリをダウンロード" : "Download App",
    SaveMoney: language === "Vietnamese" ? "Tiết kiệm $3 với ứng dụng dành cho người dùng mới" : language === "Japanese" ? "新規ユーザー向けアプリで$3節約" : "Save $3 with App New User Only",
    Copyright: language === "Vietnamese" ? "Bản quyền Rimel 2022. Mọi quyền được bảo lưu." : language === "Japanese" ? "著作権 Rimel 2022. すべての権利予約済み。" : "Copyright Rimel 2022. All rights reserved.",
  };

  const accountLinks = [
    { en: "My Account", vi: "Tài khoản của tôi", jp: "マイアカウント" },
    { en: "Login / Register", vi: "Đăng nhập / Đăng ký", jp: "ログイン / 登録" },
    { en: "Cart", vi: "Giỏ hàng", jp: "カート" },
    { en: "Wishlist", vi: "Danh sách yêu thích", jp: "ウィッシュリスト" },
    { en: "Shop", vi: "Cửa hàng", jp: "ショップ" }
  ];

  const quickLinks = [
    { en: "Privacy Policy", vi: "Chính sách bảo mật", jp: "プライバシーポリシー" },
    { en: "Terms Of Use", vi: "Điều khoản sử dụng", jp: "利用規約" },
    { en: "FAQ", vi: "Câu hỏi thường gặp", jp: "よくある質問" },
    { en: "Contact", vi: "Liên hệ", jp: "お問い合わせ" }
  ];

  return (
    <div className={`${bgClass} mt-40 py-10 px-8`}>
      {/* Footer Top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center sm:text-left">
        {/* Column 1: Subscribe */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h2 className="text-3xl font-bold">Exclusive</h2>
          <h3 className="text-xl font-semibold">{text.Subscribe}</h3>
          <p className="text-base">{text.GetDiscount}</p>

          {/* Input email */}
          <div className="relative w-full max-w-xs">
            <Input
              placeholder={text.EnterEmail}
              className={`${inputClass} border rounded-lg px-4 py-2 w-full`}
              suffix={<SearchOutlined className={`text-lg cursor-pointer ${hoverTextClass}`} />}
            />
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h3 className="text-xl font-semibold">{text.Support}</h3>
          <p className="text-base">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-base">exclusive@gmail.com</p>
          <p className="text-base">+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h3 className="text-xl font-semibold">{text.Account}</h3>
          {accountLinks.map((item, index) => (
            <a key={index} href="#" className={`text-base ${hoverTextClass}`}>
              {language === "Vietnamese" ? item.vi : language === "Japanese" ? item.jp : item.en}
            </a>
          ))}
        </div>

        {/* Column 4: Quick Links */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h3 className="text-xl font-semibold">{text.QuickLink}</h3>
          {quickLinks.map((item, index) => (
            <a key={index} href="#" className={`text-base ${hoverTextClass}`}>
              {language === "Vietnamese" ? item.vi : language === "Japanese" ? item.jp : item.en}
            </a>
          ))}
        </div>

        {/* Column 5: Download App & Social Icons */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h3 className="text-xl font-semibold">{text.DownloadApp}</h3>
          <p className="text-base">{text.SaveMoney}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img src={QrCode} alt="QR Code" className="w-20 h-20" />
            <div className="flex flex-col gap-2">
              <img src={AppStore} alt="App Store" className="w-32" />
              <img src={GooglePlay} alt="Google Play" className="w-32" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-2xl">
            <TwitterOutlined className={`cursor-pointer ${hoverTextClass}`} />
            <LinkedinOutlined className={`cursor-pointer ${hoverTextClass}`} />
            <InstagramOutlined className={`cursor-pointer ${hoverTextClass}`} />
            <FacebookOutlined className={`cursor-pointer ${hoverTextClass}`} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 opacity-50">
        <p className="text-base">{text.Copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
