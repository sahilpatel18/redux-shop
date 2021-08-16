import React, { useEffect } from "react";
import { useParam } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParam();
  
  const fetchSingleProduct = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/1').catch((err) => {
      console.log("Err",err)
    })
  }

  useEffect(() => {
    
  },[])

  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
