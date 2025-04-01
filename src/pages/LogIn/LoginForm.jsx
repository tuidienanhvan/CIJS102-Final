import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import SideImage from "../../assets/Side Image.svg";

// Import Firebase Authentication function
import { signInWithEmailAndPassword } from "firebase/auth";
// Import auth từ file cấu hình Firebase (firebaseConfig.js)
import { auth } from "../../firebaseConfig";

function LoginForm() {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Nội dung đa ngôn ngữ
  const text = {
    title:
      language === "Vietnamese"
        ? "Đăng nhập vào Exclusive"
        : language === "Japanese"
        ? "Exclusiveにログイン"
        : "Log in to Exclusive",

    subtitle:
      language === "Vietnamese"
        ? "Nhập thông tin của bạn bên dưới"
        : language === "Japanese"
        ? "以下に情報を入力してください"
        : "Enter your details below",

    emailPlaceholder:
      language === "Vietnamese"
        ? "Email hoặc Số điện thoại"
        : language === "Japanese"
        ? "メールまたは電話番号"
        : "Email or Phone Number",

    passwordPlaceholder:
      language === "Vietnamese"
        ? "Mật khẩu"
        : language === "Japanese"
        ? "パスワード"
        : "Password",

    forgetPassword:
      language === "Vietnamese"
        ? "Quên mật khẩu?"
        : language === "Japanese"
        ? "パスワードを忘れた？"
        : "Forget Password?",

    loginButton:
      language === "Vietnamese"
        ? "Đăng nhập"
        : language === "Japanese"
        ? "ログイン"
        : "Log in",

    signupPrompt:
      language === "Vietnamese"
        ? "Bạn chưa có tài khoản?"
        : language === "Japanese"
        ? "アカウントをお持ちではありませんか？"
        : "Don't have an account?",

    signupLink:
      language === "Vietnamese"
        ? "Đăng ký"
        : language === "Japanese"
        ? "サインアップ"
        : "Sign up",

    errorMessage:
      language === "Vietnamese"
        ? "Email và mật khẩu không được để trống!"
        : language === "Japanese"
        ? "メールとパスワードを入力してください！"
        : "Email and password cannot be blank!",

    incorrectCredentials:
      language === "Vietnamese"
        ? "Tài khoản hoặc mật khẩu không đúng!"
        : language === "Japanese"
        ? "アカウントまたはパスワードが正しくありません！"
        : "Incorrect account or password!",

    successLogin:
      language === "Vietnamese"
        ? "Đăng nhập thành công!"
        : language === "Japanese"
        ? "ログイン成功！"
        : "Login successful!",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Kiểm tra các trường dữ liệu
    if (!email || !password) {
      setError(text.errorMessage);
      return;
    }

    // Gọi Firebase để đăng nhập với Email và Password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        alert(text.successLogin); // Hiển thị alert đăng nhập thành công
        // Reset state
        setEmail("");
        setPassword("");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError(error.message || text.incorrectCredentials);
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
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form đăng nhập */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8">
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
                autoComplete="off"
                placeholder={text.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-lg bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Quên mật khẩu */}
          <div className="flex justify-between items-center mt-4">
            <Link
              to="/forget-password"
              className={`font-medium hover:underline ${
                isDarkMode ? "!text-white" : "!text-black"
              }`}
            >
              {text.forgetPassword}
            </Link>
          </div>

          {/* Nút đăng nhập */}
          <Button
            type="primary"
            className={`w-full mt-6 !rounded-lg !py-3 !text-lg !font-semibold !shadow-md transition duration-300 ${
              isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white"
            }`}
            onClick={handleSubmit}
          >
            {text.loginButton}
          </Button>

          {/* Đăng ký tài khoản */}
          <p
            className={`mt-4 text-center ${
              isDarkMode ? "!text-white" : "!text-black"
            }`}
          >
            {text.signupPrompt}{" "}
            <Link
              to="/signup"
              className={`font-semibold hover:underline ${
                isDarkMode ? "!text-white" : "!text-black"
              }`}
            >
              {text.signupLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
