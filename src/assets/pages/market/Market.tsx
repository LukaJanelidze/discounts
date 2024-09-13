import ProductsData from "../../../ProductsData";
import { useParams } from "react-router-dom";
import DiscountsSectionOne from "../../components/discountsSectionOne/DiscountsSectionOne";

export default function RandomProductContainer() {

    const { marketId } = useParams<{ marketId: string }>();
    const filteredProducts = ProductsData.filter(
      (product) => !marketId || product.market.replace(' ','-') === marketId.replace(' ','-')
    );

  return filteredProducts.length > 0 ? (
    <div className="random-product-container">
      {filteredProducts.map(( product , index) => (
        <DiscountsSectionOne key={index} product={product}  />
      ))}
    </div>
  ): <h1 className="no-discounts-today">No discounts today</h1>;
}
