import React from "react";
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
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Products>
      <div className="App">
        <BrowserRouter>
          <ToastContainer position="top-center" />
          <Header />
          <div style={{ minHeight: "90vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="*" element={<Home />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/discription/:id" element={<Discription />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Products>
  );
}

export default App;
