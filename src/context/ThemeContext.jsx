import React, { createContext, useContext, useState, useEffect } from "react";

// Tạo context
const ThemeContext = createContext();

// Provider để bọc toàn bộ ứng dụng
export const ThemeProvider = ({ children }) => {
  // Khởi tạo dark mode từ localStorage (mặc định là false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // Thêm hoặc xóa class "dark" trên body để Tailwind áp dụng dark mode
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook để sử dụng ThemeContext dễ dàng
export const useTheme = () => useContext(ThemeContext);
