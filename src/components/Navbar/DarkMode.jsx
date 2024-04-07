// import { FaCartShopping } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import lightButton from "../../assets/120372651_716530878953579_4552147316240737550_n.jpg"
import DarkButton from "../../assets/37954098_447256419086479_8385634392277516288_n.jpg"
import React from "react";
import {TiAdjustBrightness, TiWeatherSunny} from "react-icons/ti"


const DarkMode = () => {
  const [ theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem
    ("theme") : ("light")
  );

  const element = document.documentElement;
  // console.log(element);

  React.useEffect(() =>{
    if(theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [theme])


  return (
    <div className="relative flex justify-center items-center">
        <TiAdjustBrightness
        onClick={() => setTheme (theme == "light" ? "dark" : "light")}
        src={lightButton} alt="" className={`
        w-12
        cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0
        z-10 text-white  bg-primary
        
        ${
          theme == "dark" ? "opacity-0" : "opacity-100"
        }`} size={30}/>
        
        <IoMdMoon 
         onClick={() => setTheme (theme === "light" ? "dark" : "light")} size={20}
        src={DarkButton} alt="" className="w-12
        cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 text-black"/>
    </div>
  )
}

export default DarkMode