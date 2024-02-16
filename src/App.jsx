import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hore from './components/Navbar/Hore'
import Products from './components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials.jsx/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 300,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='bg-[#fff] dark:bg-gray-900 dark:text-[#fff] transition-all duration-300'>
      <Navbar/>
      <Hore/>
      <Products/>
  <TopProducts/>
  <Banner/>
  <Subscribe/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App