import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Search from './Search';
import './HeaderNavbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'shops' | 'products'>('shops');
  const [isVisible, setIsVisible] = useState(true);
  const navbarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef<number>(0);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const showShops = () => {
    setActiveSection('shops');
  };

  const showProducts = () => {
    setActiveSection('products');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Wrapper to reserve space */}
      <div className="navbar-wrapper">
        <nav className={`navbar ${isVisible ? '' : 'hidden'}`} ref={navbarRef}>
          <div className="menu-icon" onClick={toggleNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className="homepage-button" onClick={() => navigate('/')}>
            <h1 className="main-logo">მთავარი</h1>
          </div>
        </nav>
      </div>

      {/* Overlay to handle clicks outside */}
      {isOpen && <div className="overlay" ref={overlayRef} onClick={closeNavbar} />}

      {/* Sliding Navbar */}
      <div ref={navbarRef} className={`side-navbar ${isOpen ? 'open' : ''}`}>

        < Search setIsOpen={setIsOpen} />

        <div className="section-tabs">
          <div
            className={`tab ${activeSection === 'shops' ? 'active' : ''}`}
            onClick={showShops}
          >
            მაღაზიები
          </div>
          <div
            className={`tab ${activeSection === 'products' ? 'active' : ''}`}
            onClick={showProducts}
          >
            კატეგორიები
          </div>
        </div>

        {activeSection === 'shops' && (
          <div className="section-content">
            {/* These links route to filtered product lists by market */}
            <Link to="/market/ორი-ნაბიჯი" onClick={closeNavbar}>ორი ნაბიჯი</Link>
            <Link to="/market/ლიბრე" onClick={closeNavbar}>ლიბრე</Link>
          </div>
        )}

        {activeSection === 'products' && (
          <div className="section-content">
            <Link to="/category/ცომეული" onClick={closeNavbar}>ცომეული</Link>
            <Link to="/category/ტკბილეული" onClick={closeNavbar}>ტკბილეული</Link>
            <Link to="/category/რძის-ნაწარმი" onClick={closeNavbar}>რძის ნაწარმი</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
