import {Routes , Route } from "react-router-dom"
import HomePage from './assets/pages/homepage/HomePage'
import Footer from './assets/components/footer/Footer'
import './App.css'
import Product from './assets/pages/product/Product'
import HeaderNavbar from './assets/components/headerNavbar/HeaderNavbar'
import Carousel from "./assets/components/carousel/Carousel"
import Market from "./assets/pages/market/Market"
import Category from "./assets/pages/category/Category"


function App() {

  return (
    <div className='main'>

      <HeaderNavbar/>

      <Carousel/>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/market/:marketId" element={<Market />} />
      <Route path="/category/:categoryId" element={<Category />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
