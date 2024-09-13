import { useState, useEffect } from "react";
import DiscountsSectionOne from "./DiscountsSectionOne";
import ProductsData from "../../../ProductsData";
import { ProductI } from "../../../ProductsData";

export default function RandomProductContainer() {
  const [randomProducts, setRandomProducts] = useState< ProductI []>([]);

  useEffect(() => {
    // Shuffle the selected products and display up to 5
    setRandomProducts(shuffleArray(ProductsData).slice(0, 9));
  }, []);

  // Helper function to shuffle an array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="random-product-container">
      {randomProducts.map(( product , index) => (
        <DiscountsSectionOne key={index} product={product}  />
      ))}
    </div>
  );
}
