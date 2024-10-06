import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../../../ProductsData';
import './Search.css';

interface CloseProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Search: React.FC<CloseProps> = ({setIsOpen}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to control search input visibility

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const openSearch = () => {
    setIsSearchOpen(true); // Show the input and overlay
  };

  const closeSearch = () => {
    setIsSearchOpen(false); // Hide the input and overlay
  };


  const filteredProducts = ProductsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.englishName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredProducts)
  return (
    <div>
      {/* Button to trigger search input */}
      <button onClick={openSearch} className="search-button">
        პროდუქტის ძებნა
      </button>

      {/* Overlay and Search Input */}
      {isSearchOpen && (
        <>
          <div className="overlay"></div>
          <div className="search-container">
            <div className="close-box">
              <button onClick={closeSearch} className="close-button">✖</button>
            </div>
            <input
              type="text"
              placeholder="პროდუქტის ძებნა"
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus
            />

            {/* Display filtered products under the search input */}
            
              {searchQuery && filteredProducts.length > 0 ? (
                <div className="search-results">
                
                {filteredProducts.map((product) => (
                  <Link to={`/product/${product.id}`} 
                  key={product.id} 
                  className="product-item"
                  onClick={() => {setIsSearchOpen(false); setIsOpen(false)} }
                  >
                    <div className='search-product-image'>
                    <img src={product.image} alt={product.name} />
                      <div className='search-product-market-image'>
                      <img src={product.marketImage} alt={product.name} />
                      </div>
                    </div>

                    <div className='search-product-result-container'>
                    <div className='search-product-name'>დასახელება: {product.name}</div>
                    <div className='search-product-market'>მარკეტი: {product.market}</div>
                    <div className='search-product-price'>ფასი: {product.price} ლ</div>
                    <div className='search-product-expiredate'>ბოლო ვადა: {product.expireDate}</div>
                    </div>

                    <hr />

                  </Link>
                ))}
                </div>) : (
                searchQuery && <div className="no-results">პროდუქტი ვერ მოიძებნა</div>
              )}
            </div>
        </>
      )}
    </div>
  );
};

export default Search;
