import React from "react";
import LoginForm from "./LoginForm";
import { useTheme } from "../../context/ThemeContext";

const LogIn = () => {
  const { isDarkMode } = useTheme();

  // Chỉnh màu nền theo theme
  const bgTheme = isDarkMode ? "!bg-black" : "!bg-white";

  return (
    <div className={`flex justify-center items-center min-h-screen px-4 transition-colors duration-300 ${bgTheme}`}>
      <LoginForm />
    </div>
  );
};

export default LogIn;
