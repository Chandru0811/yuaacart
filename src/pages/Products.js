import React, {  createContext, useState } from 'react';
import im from "../assets/lap1.jpg"


export const ProductData=createContext();

export const Products=({children})=>{
    
    const initialProducts = [
        {
          id: 1,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-(Quad-Core,8MB...',
          image: im,
          salePrice: 19.99,
          actualPrice: 29.99
        },
        {
          id: 2,
          name: 'HP ELITEBOOK 640 G9 12th Gen Intel® Core™ i5-1245G7(Quad-Core,8MB...',
          image: 'product2.jpg',
          salePrice: 24.99,
          actualPrice: 39.99
        },
        {
          id: 3,
          name: 'DELL LATITUDE 7390 -8th Gen Intel® Core™ i5-8350U(Quad-Core,6MB...',
          image: 'product3.jpg',
          salePrice: 14.99,
          actualPrice: 22.99
        },
        {
          id: 4,
          name: 'DELL LATITUDE 7390 TOUCH 8th Gen Intel® Core™ i7-8650U(Quad-Core,8MB..',
          image: 'product4.jpg',
          salePrice: 32.99,
          actualPrice: 49.99
        },
        {
          id: 5,
          name: 'HP PROBOOK X360 11 G6 EE 2-In-1 Touch 10th Gen Intel® Core™ i5-...',
          image: 'product5.jpg',
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