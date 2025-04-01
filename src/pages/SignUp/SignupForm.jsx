import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import SideImage from "../../assets/Side Image.svg";
import GoogleIcon from "../../assets/Icon-Google.svg";

// Import Firebase Authentication functions
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// Import auth từ file cấu hình Firebase (firebaseConfig.js)
import { auth } from "../../firebaseConfig";

const SignupForm = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Nội dung đa ngôn ngữ
  const text = {
    title:
      language === "Vietnamese"
        ? "Tạo tài khoản"
        : language === "Japanese"
        ? "アカウントを作成"
        : "Create an account",

    subtitle:
      language === "Vietnamese"
        ? "Nhập thông tin của bạn bên dưới"
        : language === "Japanese"
        ? "以下に情報を入力してください"
        : "Enter your details below",

    namePlaceholder:
      language === "Vietnamese"
        ? "Họ và Tên"
        : language === "Japanese"
        ? "氏名"
        : "Name",

    emailPlaceholder:
      language === "Vietnamese"
        ? "Email"
        : language === "Japanese"
        ? "Email"
        : "Email",

    passwordPlaceholder:
      language === "Vietnamese"
        ? "Mật khẩu"
        : language === "Japanese"
        ? "パスワード"
        : "Password",

    createButton:
      language === "Vietnamese"
        ? "Tạo tài khoản"
        : language === "Japanese"
        ? "アカウントを作成"
        : "Create Account",

    googleSignup:
      language === "Vietnamese"
        ? "Đăng ký với Google"
        : language === "Japanese"
        ? "Googleでサインアップ"
        : "Sign up with Google",

    loginPrompt:
      language === "Vietnamese"
        ? "Bạn đã có tài khoản?"
        : language === "Japanese"
        ? "すでにアカウントをお持ちですか？"
        : "Already have an account?",

    loginLink:
      language === "Vietnamese"
        ? "Đăng nhập"
        : language === "Japanese"
        ? "ログイン"
        : "Log in",

    errorEmptyFields:
      language === "Vietnamese"
        ? "Tất cả các trường phải được điền vào!"
        : language === "Japanese"
        ? "すべての項目を入力してください！"
        : "All fields must be filled in!",

    errorInvalidEmail:
      language === "Vietnamese"
        ? "Email không hợp lệ!"
        : language === "Japanese"
        ? "無効なメールアドレス！"
        : "Invalid email!",

    errorShortPassword:
      language === "Vietnamese"
        ? "Mật khẩu phải có ít nhất 6 ký tự"
        : language === "Japanese"
        ? "パスワードは6文字以上である必要があります"
        : "Password must be at least 6 characters",

    errorExistingAccount:
      language === "Vietnamese"
        ? "Tài khoản đã tồn tại!"
        : language === "Japanese"
        ? "アカウントは既に存在します！"
        : "Account already exists!",

    successMessage:
      language === "Vietnamese"
        ? "Đăng ký thành công!"
        : language === "Japanese"
        ? "登録成功！"
        : "Registration successful!",
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    // Kiểm tra các trường dữ liệu
    if (!name || !email || !password) {
      setError(text.errorEmptyFields);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || !email.endsWith(".com")) {
      setError(text.errorInvalidEmail);
      return;
    }

    if (password.length < 6) {
      setError(text.errorShortPassword);
      return;
    }

    // Tạo tài khoản mới qua Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Cập nhật displayName với giá trị từ ô nhập liệu tên
        updateProfile(user, { displayName: name })
          .then(() => {
            console.log("User created with displayName:", user.displayName);
            alert(text.successMessage);
            navigate("/login");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.error("Lỗi đăng ký:", error);
        setError(error.message);
      });
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-6 transition-colors duration-300 ${
        isDarkMode ? "!bg-black" : "!bg-white"
      }`}
    >
      {/* Container chứa ảnh + form */}
      <div
        className={`flex w-full max-w-4xl shadow-lg rounded-xl overflow-hidden ${
          isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
        }`}
      >
        {/* Ảnh bên trái */}
        <div className="hidden lg:block w-1/2">
          <img
            src={SideImage}
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form đăng ký */}
        <div
          className={`w-full lg:w-1/2 flex flex-col justify-center p-8 ${
            isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
          }`}
        >
          <h1 className="text-4xl font-bold !text-current">
            {text.title}
          </h1>
          <p className="text-lg mt-2 !text-current">{text.subtitle}</p>

          {error && (
            <Alert
              message={error}
              type="error"
              className="mt-4 rounded-lg !bg-red-500 !text-white"
            />
          )}

          {/* Ô nhập liệu */}
          <div className="mt-6 space-y-4">
            <div
              className={`p-3 rounded-md transition-all ${
                isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
              }`}
            >
              <Input
                 autoComplete="off"
                type="text"
                placeholder={text.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg bg-transparent focus:outline-none w-full"
              />
            </div>
            <div
              className={`p-3 rounded-md transition-all ${
                isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
              }`}
            >
              <Input
                autoComplete="off"
                type="text"
                placeholder={text.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg bg-transparent focus:outline-none w-full"
              />
            </div>
            <div
              className={`p-3 rounded-md transition-all ${
                isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black"
              }`}
            >
              <Input.Password
                placeholder={text.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-lg bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Nút đăng ký */}
          <Button
            type="primary"
            className={`w-full mt-6 !rounded-lg !py-3 !text-lg !font-semibold !shadow-md transition duration-300 ${
              isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
            }`}
            onClick={handleRegister}
          >
            {text.createButton}
          </Button>

          {/* Nút đăng ký bằng Google (hiện tại chỉ giao diện) */}
          <Button
            type="default"
            className={`w-full mt-4 flex items-center justify-center !border !py-3 !rounded-md transition-all ${
              isDarkMode ? "!bg-white !border-white" : "!bg-black !border-black"
            }`}
          >
            <img src={GoogleIcon} className="w-6 h-6 mr-3" alt="Google" />
            <span className={`${isDarkMode ? "!text-black" : "!text-white"}`}>
              {text.googleSignup}
            </span>
          </Button>

          {/* Link chuyển sang đăng nhập */}
          <p
            className={`mt-4 text-center ${
              isDarkMode ? "!text-white" : "!text-black"
            }`}
          >
            {text.loginPrompt}{" "}
            <Link
              to="/login"
              className={`font-semibold hover:underline ${
                isDarkMode ? "!text-white" : "!text-black"
              }`}
            >
              {text.loginLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
