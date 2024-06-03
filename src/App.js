import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Products } from "./pages/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Discription from "./pages/Discription";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProductList from "./pages/Products/ProductList";
import "./styles/custom.css";
import Contactus from "./pages/Contactus";
import WishList from "./pages/WishList";
import Faq from "./pages/Faq";
import { ToastContainer, toast } from "react-toastify";
import ProductBascedCategory from "./pages/Products/ProductBascedCategory";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import api from "./config/URL";

function App() {
  const [headerKey, setHeaderKey] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = sessionStorage.getItem("token");

  const handleLogin = () => {
    sessionStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    remountHeader();
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    remountHeader();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("isLoggedIn");
    const formData = new FormData();
    formData.append("Authorization", `Bearer ${token}`);
    try {
      const response = await api.post(`auth/logout`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error("Logout Unsuccessfull");
    }
  };

  useEffect(() => {
    const isLoginFromStorage = sessionStorage.getItem("isLoggedIn");
    const isLoginBoolean = isLoginFromStorage === "true";
    if (isLoggedIn !== isLoginBoolean) {
      setIsLoggedIn(isLoginBoolean);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remountHeader = () => {
    setHeaderKey((prevKey) => prevKey + 1);
  };

  return (
    <Products>
      <div className="App">
        <BrowserRouter basename="/yuaacart">
          <ToastContainer position="top-center" />
          <Header
            key={headerKey}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
          <div style={{ minHeight: "90vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route
                path="/catrgoryproduct/:slug"
                element={<ProductBascedCategory />}
              />
              <Route path="*" element={<Home />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/checkout"
                element={<Checkout onRemountHeader={remountHeader} />}
              />
              <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
              <Route
                path="/discription/:id"
                element={
                  <Discription
                    onRemountHeader={remountHeader}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Products>
  );
}

export default App;
