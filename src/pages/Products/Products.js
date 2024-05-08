import React, {  createContext, useState } from 'react';
import img1 from "../../assets/Dell_latitude/41w0PuN4kIL.jpg"
import img2 from "../../assets/Dell_latitude/CD3866F2-C0DB-493B-864E-FF422AEFFC9E_58027_1800x1800.jpeg"
import img3 from "../../assets/Hp_Elitebook/c08183043.png"
import img4 from "../../assets/Hp_Probook/1069580911__15755.jpg"
import img5 from "../../assets/Dell_latitude/81nl-PjKCvL._SX679_.jpg"


export const ProductData=createContext();

export const Products=({children})=>{
 
  
    const initialProducts = [
        {
          id: 1,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-(Quad-Core,8MB...',
          image: img1,
          salePrice: 19.99,
          actualPrice: 29.99
        },
        {
          id: 2,
          name: 'HP ELITEBOOK 640 G9 12th Gen Intel® Core™ i5-1245G7(Quad-Core,8MB...',
          image: img3,
          salePrice: 24.99,
          actualPrice: 39.99
        },
        {
          id: 3,
          name: 'DELL LATITUDE 7390 -8th Gen Intel® Core™ i5-8350U(Quad-Core,6MB...',
          image: img2,
          salePrice: 14.99,
          actualPrice: 22.99
        },
        {
          id: 4,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U(Quad-Core,8MB..',
          image: img5,
          salePrice: 32.99,
          actualPrice: 49.99
        },
        {
          id: 5,
          name: 'HP PROBOOK X360 11 G6 EE 2-In-1 Touch 10th Gen Intel® Core™ i5-...',
          image: img4,
          salePrice: 27.99,
          actualPrice: 34.99
        },
        {
          id: 6,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-(Quad-Core,8MB...',
          image: img1,
          salePrice: 19.99,
          actualPrice: 29.99
        },
        {
          id: 7,
          name: 'HP ELITEBOOK 640 G9 12th Gen Intel® Core™ i5-1245G7(Quad-Core,8MB...',
          image: img3,
          salePrice: 24.99,
          actualPrice: 39.99
        },
        {
          id: 8,
          name: 'DELL LATITUDE 7390 -8th Gen Intel® Core™ i5-8350U(Quad-Core,6MB...',
          image: img2,
          salePrice: 14.99,
          actualPrice: 22.99
        },
        {
          id: 9,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U(Quad-Core,8MB..',
          image: img5,
          salePrice: 32.99,
          actualPrice: 49.99
        },
        {
          id: 10,
          name: 'HP PROBOOK X360 11 G6 EE 2-In-1 Touch 10th Gen Intel® Core™ i5-...',
          image: img4,
          salePrice: 27.99,
          actualPrice: 34.99
        },
        {
          id: 11,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-(Quad-Core,8MB...',
          image: img1,
          salePrice: 19.99,
          actualPrice: 29.99
        },
        {
          id: 12,
          name: 'HP ELITEBOOK 640 G9 12th Gen Intel® Core™ i5-1245G7(Quad-Core,8MB...',
          image: img3,
          salePrice: 24.99,
          actualPrice: 39.99
        },
        {
          id: 13,
          name: 'DELL LATITUDE 7390 -8th Gen Intel® Core™ i5-8350U(Quad-Core,6MB...',
          image: img2,
          salePrice: 14.99,
          actualPrice: 22.99
        },
        {
          id: 14,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U(Quad-Core,8MB..',
          image: img5,
          salePrice: 32.99,
          actualPrice: 49.99
        },
        {
          id: 15,
          name: 'HP PROBOOK X360 11 G6 EE 2-In-1 Touch 10th Gen Intel® Core™ i5-...',
          image: img4,
          salePrice: 27.99,
          actualPrice: 34.99
        }
      ];
      const [productList, setProductList] = useState(initialProducts);
      
      return(
        <ProductData.Provider value={{productList}}>
            {children}
        </ProductData.Provider>
      )
    
}