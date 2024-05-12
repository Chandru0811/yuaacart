import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductData = createContext();

export const Products = ({ children }) => {

  const getTopProduct = async () => {
    const response = await axios.get(
      "https://sgitjobs.com/ShoppingCart/public/api/topProducts"
    );
    setInitialTopProducts(response.data.data.products);
    
  };


  const getProductData = async () => {
    const response = await axios.get(
      "https://sgitjobs.com/ShoppingCart/public/api/saleProducts"
    );
    setInitialProducts(response.data.data.products);
  };

  useEffect(() => {
    getProductData();
    getTopProduct();
  }, []);

  const [initialProducts, setInitialProducts] = useState([]);
  const [initialTopProducts, setInitialTopProducts] = useState([]);
  const productList = initialProducts;
  const topProductlist =initialTopProducts
  console.log("Product List is", productList);
  console.log("Product top List is", topProductlist);

  return (
    <ProductData.Provider value={{ productList ,topProductlist }}>
      {children}
    </ProductData.Provider>
  );
};
