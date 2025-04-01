import React from "react";
import SignupForm from "./SignupForm";
import { useTheme } from "../../context/ThemeContext";

const SignUp = () => {
  const { isDarkMode } = useTheme();
  const bgTheme = isDarkMode ? "!bg-black" : "!bg-white";

  return (
    <div className={`flex justify-center items-center min-h-screen px-4 transition-colors duration-300 ${bgTheme}`}>
      <SignupForm />
    </div>
  );
};

export default SignUp;
