import { useState } from "react";
import DiscountsSectionOne from "./DiscountsSectionOne";
import ProductsData from "../../../ProductsData";
import "./Paginated.css"

export default function RandomProductContainer() {
  // Number of products per page
  const productsPerPage = 9;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(ProductsData.length / productsPerPage);

  // Calculate the indices of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get the products for the current page
  const currentProducts = ProductsData.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="paginated">
    <div className="random-product-container">
      {/* Render the products for the current page */}
      {currentProducts.map((product, index) => (
        <DiscountsSectionOne key={index} product={product} />
      ))}

    </div>


      <div className="paginated-buttons-box">
        <div className="pagination-controls">
          <button className="" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
          </button>

          {/* Generate page number buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? "active-page" : ""}
            >
              {page}
            </button>
          ))}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      </div>
      {/* Pagination controls */}


  </div>
  );
}
