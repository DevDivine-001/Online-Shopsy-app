import React from 'react'
import log from "../../assets/react.svg"
import {IoMdSearch} from "react-icons/io"
import {FaCaretDown, FaCartShopping} from "react-icons/fa6"
import DarkMode from './DarkMode'

const Menu = [
  {
    id: 1,
    name: "Home",
    link:"/#",
  },
  {
    id: 2,
    name: "About Us",
    link:"/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link:"/#",
  },
  {
    id: 4,
    name: "Kids Wear",
    link:"/#",
  },
  {
    id: 5,
    name: "Mens Wear",
    link:"/#",
  }
]

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link:"/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link:"/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link:"/#",
  },
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-[#fff] dark:bg-gray-900
     dark:text-[#fff] duration-200 relative z-40'>
      {/* upper Navbar */}                                                   
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="" className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={log} alt="" className='w-10 uppercase'/>
              <span>Shopsy</span>
            </a>
          </div>
          {/* Search Bar and order button */}
          <div className='flex items-center justify-between gap-4'> 
            <div className='group relative sm:block hidden'>
              <input type="text" name="" id="" className='w-[150px] sm:w-[150px] text-[#000] group-hover:w-[180px] transition-all duration-300
                   rounded-full border border-gray-300 px-2 py-1
                   focus:outline-none focus:border-1
                   focus:border-primary' placeholder='search'/>
                   <IoMdSearch className='text-gray-500
                   group-hover:text-primary  top-1/2 -translate-y-1/2 right-3 absolute'/>
            </div>
          {/* order  button */}
          <button
          onClick={({}) =>({}) }
          className='bg-gradient-to-r from-primary
          to-secondary transition-all duration-300
          text-[#fff] py-1 px-4 rounded-full flex 
          items-center gap-3 group'
          >
           <span
           className='group-hover:block hidden transition-all duration-200'
           > Order</span>
           <FaCartShopping 
           className='text-[#fff] drop-shadow-sm cursor-pointer'/>
          </button>
          {/* darkMode */}
          <div>
            <DarkMode/>
          </div>
           </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data) =>(
              <li key={data.id}>
                <a href={data.link} 
                className='inline-block px-4 hover:text-primary duration-300'
                >{data.name}

                </a>
              </li>
            ))
          }
          {/* Simple Dropdown and Links */}
          <li className='group relative'>
            <a href="" className='flex items-center gap-[2px] py-2'>Trending Post
            <span>
              <FaCaretDown 
              className='transition-all duration-300 group-hover:rotate-180'
              />
            </span>
            </a>
            <div className='absolute z-[9999] rounded-md bg-[#fff] p-2 text-[#000] hidden group-hover:block shadow-md w-[200px]'>
              <ul>
                {DropdownLinks.map((data) =>(
                  <li key={data.id}>
                    <a href={data.link}
                    className='inline-block rounded-md  w-full p-2
                    hover:bg-primary'
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar