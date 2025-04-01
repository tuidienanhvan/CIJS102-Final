import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/Error/NotFound';

import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';  // Import trang Cart

import Profile from './pages/User/Profile';
import ChangePass from './pages/User/ChangePass';

import { useTheme } from './context/ThemeContext';

const App = () => {
  const { isDarkMode } = useTheme();
  const bgClass = isDarkMode ? "bg-black" : "bg-white"; 

  return (
    <Router>
      <div className={`app pt-12 min-h-screen flex flex-col ${bgClass}`}>
        <TopBar />
        <Header />
        <main className="content flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />  {/* Thêm route cho Cart */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepass" element={<ChangePass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
