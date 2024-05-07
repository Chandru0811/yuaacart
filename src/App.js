import React from "react";
import Home from "./components/Home";
import { Products } from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Discription from "./pages/Discrption";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Products>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/register" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/discription" element={<Discription />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Products>
  );
}

export default App;
