import { useParams } from "react-router-dom";
import "./Product.css";
import ProductsData from "../../../ProductsData";

export default function Product() {
  const { id } = useParams<{ id: string }>(); // Type parameter for `useParams`
  
  // Find the product by its ID
  const product = ProductsData.find(product => product.id == id) 

  // Handle case where no product is found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="pb-container">
        <div className="pb-image-box">
            <img src={product.image} alt={product.name} className="pb-image"/>
            {product.marketImage && (
              <div className="pb-market-image-overlay">
                <img src={product.marketImage} alt="Market" className="market-image" />
              </div>
            )}
          </div>
        <div className="product-page-info">
          <h1 className="product-page-info-title">{product.name}</h1>
          <h3 className="product-page-info-description">{product.price}₾</h3>
        </div>
      </div>
    </div>
  );
}


