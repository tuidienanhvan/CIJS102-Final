import React, { useState } from "react";
import { Input, Button, Alert } from "antd";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const ChangePass = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const text = {
    title:
      language === "Vietnamese"
        ? "Đổi mật khẩu"
        : language === "Japanese"
        ? "パスワード変更"
        : "Change Password",
    currentPasswordPlaceholder:
      language === "Vietnamese"
        ? "Mật khẩu hiện tại"
        : language === "Japanese"
        ? "現在のパスワード"
        : "Current Password",
    newPasswordPlaceholder:
      language === "Vietnamese"
        ? "Mật khẩu mới"
        : language === "Japanese"
        ? "新しいパスワード"
        : "New Password",
    confirmPasswordPlaceholder:
      language === "Vietnamese"
        ? "Xác nhận mật khẩu mới"
        : language === "Japanese"
        ? "新しいパスワード確認"
        : "Confirm New Password",
    buttonText:
      language === "Vietnamese"
        ? "Đổi mật khẩu"
        : language === "Japanese"
        ? "パスワードを変更"
        : "Change Password",
    errorEmpty:
      language === "Vietnamese"
        ? "Vui lòng điền đầy đủ thông tin!"
        : language === "Japanese"
        ? "すべてのフィールドを入力してください！"
        : "Please fill all fields!",
    errorMismatch:
      language === "Vietnamese"
        ? "Mật khẩu mới và xác nhận không khớp!"
        : language === "Japanese"
        ? "新しいパスワードと確認が一致しません！"
        : "New password and confirmation do not match!",
    successMessage:
      language === "Vietnamese"
        ? "Đổi mật khẩu thành công!"
        : language === "Japanese"
        ? "パスワードの変更に成功しました！"
        : "Password changed successfully!"
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError(text.errorEmpty);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(text.errorMismatch);
      return;
    }

    const user = auth.currentUser;
    if (user) {
      try {
        // Reauthenticate user using current password
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
        // Update password
        await updatePassword(user, newPassword);
        setSuccess(text.successMessage);
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("User not found.");
    }
  };

  // Lớp CSS chỉ sử dụng trắng và đen
  const lightThemeClasses = "bg-white text-black";
  const darkThemeClasses = "bg-black text-white";

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? darkThemeClasses : lightThemeClasses}`}>
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <h2 className="text-2xl font-bold text-center mb-6">{text.title}</h2>
        {error && <Alert message={error} type="error" showIcon className="mb-4" />}
        {success && <Alert message={success} type="success" showIcon className="mb-4" />}
        <form onSubmit={handleChangePassword} autoComplete="off" className="space-y-6">
          <div>
            <Input.Password
              id="current-password"
              placeholder={text.currentPasswordPlaceholder}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <div>
            <Input.Password
              id="new-password"
              placeholder={text.newPasswordPlaceholder}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div>
            <Input.Password
              id="confirm-password"
              placeholder={text.confirmPasswordPlaceholder}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div>
            <Button type="primary" htmlType="submit" className="w-full py-3">
              {text.buttonText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
