import { Link } from "react-router-dom";
import "./DiscountsSectionOne.css";
import { ProductI } from "../../../ProductsData";

interface DiscountsSectionOneProps {
  product: ProductI;
}

export default function DiscountsSectionOne({ product }: DiscountsSectionOneProps) {
  return (
    <Link to={`/product/${product.id}`} className="DiscountSectionOne">
      <div className="DSO-list">
        <div className="image-overlay">
          <div className="product-image-overlay">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
        <div className="description">
        {product.marketImage && (
              <div className="market-image-overlay">
                <img src={product.marketImage} alt="Market" />
              </div>
            )}
          <h1 className="product-name">{product.name}</h1>
          <h3 className="product-discount">{product.price}₾</h3>
        </div>
      </div>
    </Link>
  );
}
