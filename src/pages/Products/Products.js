import React, { createContext, useEffect, useState } from "react";
import img1 from "../../assets/Dell_latitude/41w0PuN4kIL.jpg";
import img2 from "../../assets/Dell_latitude/CD3866F2-C0DB-493B-864E-FF422AEFFC9E_58027_1800x1800.jpeg";
import img3 from "../../assets/Hp_Elitebook/c08183043.png";
import img4 from "../../assets/Hp_Probook/1069580911__15755.jpg";
import img5 from "../../assets/Dell_latitude/81nl-PjKCvL._SX679_.jpg";
import axios from "axios";

export const ProductData = createContext();

export const Products = ({ children }) => {
  const getProductData = async () => {
    const response = await axios.get(
      "https://sgitjobs.com/ShoppingCart/public/api/saleProducts"
    );
    setInitialProducts(response.data.data.products);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const [initialProducts, setInitialProducts] = useState([]);
  const productList = initialProducts;
  console.log("Product List is", productList);

  return (
    <ProductData.Provider value={{ productList }}>
      {children}
    </ProductData.Provider>
  );
};
