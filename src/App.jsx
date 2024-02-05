import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hore from './components/Navbar/Hore'
import Products from './components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts'

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
    <div>
      <Navbar/>
      <Hore/>
      <Products/>
  <TopProducts/>
    </div>
  )
}

export default App