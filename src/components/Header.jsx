import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Vector5 from "../assets/Vector (5).svg";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Header = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Lắng nghe trạng thái đăng nhập của Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Chủ đề màu: chỉ trắng và đen
  const containerClass = isDarkMode ? "bg-black text-white" : "bg-white text-black";
  const inputClass = isDarkMode
    ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-gray-500"
    : "bg-gray-100 text-black placeholder-gray-600 focus:ring-red-400";

  const navText = {
    Home:
      language === "Vietnamese"
        ? "Trang chủ"
        : language === "Japanese"
        ? "ホーム"
        : "Home",
    Contact:
      language === "Vietnamese"
        ? "Liên hệ"
        : language === "Japanese"
        ? "連絡先"
        : "Contact",
    About:
      language === "Vietnamese"
        ? "Giới thiệu"
        : language === "Japanese"
        ? "概要"
        : "About",
    SignUp:
      language === "Vietnamese"
        ? "Đăng ký"
        : language === "Japanese"
        ? "サインアップ"
        : "Sign Up",
    SearchPlaceholder:
      language === "Vietnamese"
        ? "Bạn đang tìm gì?"
        : language === "Japanese"
        ? "何を探していますか？"
        : "What are you looking for?",
    Cart:
      language === "Vietnamese"
        ? "Giỏ hàng"
        : language === "Japanese"
        ? "カート"
        : "Cart"
  };

  // Menu cho dropdown của user
  const menu = (
    <Menu
      onClick={(e) => {
        if (e.key === "logout") {
          signOut(auth)
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.error("Logout error:", error);
            });
        } else if (e.key === "profile") {
          navigate("/profile");
        } else if (e.key === "changepass") {
          navigate("/changepass");
        }
      }}
      items={[
        {
          key: "profile",
          label:
            language === "Vietnamese"
              ? "Thông tin cá nhân"
              : language === "Japanese"
              ? "プロフィール"
              : "Profile"
        },
        {
          key: "changepass",
          label:
            language === "Vietnamese"
              ? "Đổi mật khẩu"
              : language === "Japanese"
              ? "パスワード変更"
              : "Change Password"
        },
        {
          key: "logout",
          label:
            language === "Vietnamese"
              ? "Đăng xuất"
              : language === "Japanese"
              ? "ログアウト"
              : "Logout"
        }
      ]}
    />
  );

  return (
    <header className={`py-6 shadow-md transition ${containerClass}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo và Navigation bên trái */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <h1 className="text-3xl font-bold">Exclusive</h1>
          {/* Navigation Links */}
          <nav className="hidden md:flex gap-10 text-lg font-medium">
            <Link to="/" className="hover:text-red-500 transition">
              {navText.Home}
            </Link>
            <Link to="/contact" className="hover:text-red-500 transition">
              {navText.Contact}
            </Link>
            <Link to="/about" className="hover:text-red-500 transition">
              {navText.About}
            </Link>
          </nav>
        </div>

        {/* Thanh Search giữa */}
        <div className="flex-1 mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder={navText.SearchPlaceholder}
              className={`w-full px-4 py-3 rounded-md outline-none focus:ring-2 transition ${inputClass}`}
            />
            <img
              src={Vector5}
              alt="Search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        {/* Phần bên phải: Cart và User Dropdown */}
        <div className="flex items-center gap-6">
          <Link to="/cart" className="flex items-center gap-1 hover:text-red-500 transition">
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            <span className="hidden md:inline">{navText.Cart}</span>
          </Link>
          {currentUser ? (
            <Dropdown overlay={menu} trigger={["click"]}>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="hidden md:inline">{currentUser.displayName || "User"}</span>
                <UserOutlined style={{ fontSize: "24px" }} />
              </div>
            </Dropdown>
          ) : (
            <Link to="/signup" className="hover:text-red-500 transition">
              {navText.SignUp}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
