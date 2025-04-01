import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Input, Button, message } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const ContactForm = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  // Theme: Chỉ trắng hoặc đen
  const containerTheme = isDarkMode ? "!bg-black !text-white" : "!bg-white !text-black";
  const inputBg = isDarkMode ? "!bg-black" : "!bg-white";
  const inputText = isDarkMode ? "!text-white" : "!text-black";
  const inputBorder = isDarkMode ? "!border-white" : "!border-black";
  const inputPlaceholder = isDarkMode ? "!placeholder-white/50" : "!placeholder-black/50";
  const errorText = isDarkMode ? "!text-red-400" : "!text-red-600";
  const buttonTheme = isDarkMode ? "!bg-white !text-black" : "!bg-black !text-white";
  const shadowTheme = isDarkMode ? "!shadow-white/50" : "!shadow-black/50";

  // Nội dung đa ngôn ngữ
  const text = {
    name:
      language === "Vietnamese"
        ? "Tên của bạn *"
        : language === "Japanese"
        ? "お名前 *"
        : "Your Name *",

    email:
      language === "Vietnamese"
        ? "Email của bạn *"
        : language === "Japanese"
        ? "メールアドレス *"
        : "Your Email *",

    phone:
      language === "Vietnamese"
        ? "Số điện thoại *"
        : language === "Japanese"
        ? "電話番号 *"
        : "Your Phone *",

    message:
      language === "Vietnamese"
        ? "Tin nhắn của bạn"
        : language === "Japanese"
        ? "メッセージ"
        : "Your Message",

    send:
      language === "Vietnamese"
        ? "Gửi tin nhắn"
        : language === "Japanese"
        ? "メッセージを送る"
        : "Send Message",

    success:
      language === "Vietnamese"
        ? "Yêu cầu hỗ trợ đã được gửi thành công!"
        : language === "Japanese"
        ? "サポートリクエストが正常に送信されました!"
        : "Support request sent successfully!",

    error:
      language === "Vietnamese"
        ? "Đã xảy ra lỗi khi gửi yêu cầu của bạn."
        : language === "Japanese"
        ? "リクエストの送信中にエラーが発生しました。"
        : "An error occurred while submitting your request.",

    requiredFields:
      language === "Vietnamese"
        ? "Tất cả các trường phải được điền!"
        : language === "Japanese"
        ? "すべてのフィールドを入力してください！"
        : "All fields must be filled in!",
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    supportRequest: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.supportRequest) {
      setError(text.requiredFields);
      return;
    }

    emailjs
      .send("service_5bcpm96", "template_wdelh9s", form, "B4-XH1oGjk1D4iAEl")
      .then(() => {
        message.success(text.success);
        setForm({ name: "", email: "", phone: "", supportRequest: "" });
        setError("");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setError(text.error);
      });
  };

  // Class chung cho Input và Textarea
  const inputClass = `p-3 border rounded-lg w-full text-lg ${inputBg} ${inputText} ${inputBorder} ${inputPlaceholder} !shadow-md ${shadowTheme}`;

  return (
    <div className={`p-8 rounded-xl shadow-xl w-full max-w-xl mx-auto !shadow-2xl ${shadowTheme} ${containerTheme}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Grid chia input thành 3 cột trên màn lớn, 1 cột trên mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            type="text"
            placeholder={text.name}
            className={inputClass}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder={text.email}
            className={inputClass}
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            placeholder={text.phone}
            className={inputClass}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          placeholder={text.message}
          className={`w-full p-3 border rounded-lg text-lg ${inputBg} ${inputText} ${inputBorder} ${inputPlaceholder} !shadow-md ${shadowTheme}`}
          rows="6"
          name="supportRequest"
          value={form.supportRequest}
          onChange={handleChange}
          required
        ></textarea>

        {error && <p className={`mt-2 text-lg ${errorText} !font-semibold`}>{error}</p>}

        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className={`${buttonTheme} !rounded-xl !px-8 !py-4 text-lg !shadow-lg transition-all`}
          >
            {text.send}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
