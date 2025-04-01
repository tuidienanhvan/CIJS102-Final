import React, { useState, useEffect } from "react";
import { Input, Button, Alert, Select } from "antd";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Profile = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const text = {
    title:
      language === "Vietnamese"
        ? "Thông tin cá nhân"
        : language === "Japanese"
        ? "プロフィール"
        : "Profile",
    editButton:
      language === "Vietnamese"
        ? "Chỉnh sửa"
        : language === "Japanese"
        ? "編集する"
        : "Edit",
    saveButton:
      language === "Vietnamese"
        ? "Lưu thay đổi"
        : language === "Japanese"
        ? "保存する"
        : "Save Changes",
    cancelButton:
      language === "Vietnamese"
        ? "Hủy"
        : language === "Japanese"
        ? "キャンセル"
        : "Cancel",
    logoutButton:
      language === "Vietnamese"
        ? "Đăng xuất"
        : language === "Japanese"
        ? "ログアウト"
        : "Logout",
    successUpdate:
      language === "Vietnamese"
        ? "Cập nhật thành công!"
        : language === "Japanese"
        ? "更新成功！"
        : "Profile updated successfully!",
    errorUpdate:
      language === "Vietnamese"
        ? "Cập nhật không thành công!"
        : language === "Japanese"
        ? "更新に失敗しました！"
        : "Failed to update profile!",
    emailLabel:
      language === "Vietnamese"
        ? "Email:"
        : language === "Japanese"
        ? "メール:"
        : "Email:",
    displayNameLabel:
      language === "Vietnamese"
        ? "Tên hiển thị:"
        : language === "Japanese"
        ? "表示名:"
        : "Display Name:",
    birthDateLabel:
      language === "Vietnamese"
        ? "Ngày sinh:"
        : language === "Japanese"
        ? "生年月日:"
        : "Birth Date:",
    genderLabel:
      language === "Vietnamese"
        ? "Giới tính:"
        : language === "Japanese"
        ? "性別:"
        : "Gender:",
    addressLabel:
      language === "Vietnamese"
        ? "Địa chỉ:"
        : language === "Japanese"
        ? "住所:"
        : "Address:",
    male:
      language === "Vietnamese"
        ? "Nam"
        : language === "Japanese"
        ? "男性"
        : "Male",
    female:
      language === "Vietnamese"
        ? "Nữ"
        : language === "Japanese"
        ? "女性"
        : "Female",
    other:
      language === "Vietnamese"
        ? "Khác"
        : language === "Japanese"
        ? "その他"
        : "Other"
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        // Lấy thông tin bổ sung từ Firestore
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setBirthDate(data.birthDate || "");
          setGender(data.gender || "");
          setAddress(data.address || "");
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSave = async () => {
    setError("");
    setSuccess("");
    try {
      // Cập nhật displayName qua Firebase Auth
      await updateProfile(user, { displayName });
      // Cập nhật thông tin bổ sung vào Firestore
      await setDoc(doc(db, "users", user.uid), { birthDate, gender, address }, { merge: true });
      setSuccess(text.successUpdate);
      alert(text.successUpdate); // Hiển thị alert popup giống SignupForm
      setEditing(false);
    } catch (err) {
      setError(err.message || text.errorUpdate);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // Lớp CSS chỉ dùng trắng và đen
  const lightTheme = "bg-white text-black";
  const darkTheme = "bg-black text-white";

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? darkTheme : lightTheme}`}>
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">{text.title}</h2>
        {error && <Alert message={error} type="error" showIcon className="mb-4" />}
        {success && <Alert message={success} type="success" showIcon className="mb-4" />}
        
        <div className="mb-4">
          <label className="block mb-1">{text.emailLabel}</label>
          <p className="border p-2 rounded">{user?.email}</p>
        </div>

        <div className="mb-4">
          <label className="block mb-1">{text.displayNameLabel}</label>
          {editing ? (
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter display name"
              autoComplete="off"
            />
          ) : (
            <p className="border p-2 rounded">{displayName || "No name set"}</p>
          )}
        </div>

        {/* Thông tin bổ sung */}
        <div className="mb-4">
          <label className="block mb-1">{text.birthDateLabel}</label>
          {editing ? (
            <Input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              autoComplete="off"
            />
          ) : (
            <p className="border p-2 rounded">{birthDate || "Not set"}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">{text.genderLabel}</label>
          {editing ? (
            <Select
              value={gender}
              onChange={(value) => setGender(value)}
              placeholder="Select gender"
              className="w-full"
            >
              <Option value="Male">{text.male}</Option>
              <Option value="Female">{text.female}</Option>
              <Option value="Other">{text.other}</Option>
            </Select>
          ) : (
            <p className="border p-2 rounded">{gender || "Not set"}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">{text.addressLabel}</label>
          {editing ? (
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              autoComplete="off"
            />
          ) : (
            <p className="border p-2 rounded">{address || "Not set"}</p>
          )}
        </div>

        <div className="flex justify-between">
          {editing ? (
            <>
              <Button type="primary" onClick={handleSave}>
                {text.saveButton}
              </Button>
              <Button
                onClick={() => {
                  setEditing(false);
                  setDisplayName(user.displayName || "");
                }}
              >
                {text.cancelButton}
              </Button>
            </>
          ) : (
            <Button type="primary" onClick={() => setEditing(true)}>
              {text.editButton}
            </Button>
          )}
          <Button danger onClick={handleLogout}>
            {text.logoutButton}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
