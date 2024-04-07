import Bannerimage from '../../assets/424743707_232856073215872_5045901212169111117_n.jpg'
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"
// import {GiFoodTruck} from "react-icons/gi"

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center sm:py-0'>
        <div className='container'>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
             {/* Image Section */}
                <div data-aos="zoom-out">
                    <img src={Bannerimage} alt="" className='w-[85%] h-[400px] object-cover drop-shadow-[-5px_5px_7px_rgba(0,0,0,1)] rounded-md cursor-pointer flex items-center justify-center'/>
                </div>
                {/* text details sections */}
             <div className='flex flex-col justify-center gap-6 sm:pt-0'> 
              <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Winter Sale upto 50% off</h1>
              <p data-aos="fade-up" className='text-sm text-gray-500
              tracking-wide leading-5 dark:text-[#ffff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod iste nostrum saepe. Laboriosam, sequi at! Voluptatibus itaque commodi doloribus quod dolorem nobis, libero impedit quidem consectetur, mollitia suscipit? Officiis!</p>
              <div className='flex flex-col gap-4'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GrSecure className='text-4xl h-12 w-12 
                shadow-sm p-4 rounded-full bg-violet-100
                dark:bg-violet-400'/>
                <span>Quality Products</span>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <IoFastFood className='text-4xl h-12 w-12 
                shadow-sm p-4 rounded-full  bg-orange-100
                dark:bg-orange-400 cursor-pointer'/>
                <span>Fast Delivery</span>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiFoodTruck className='text-4xl h-12 w-12 
                shadow-sm p-4 rounded-full  bg-green-100
                dark:bg-green-400 cursor-pointer'/>
                <span>Esay Payment method</span>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiFoodTruck className='text-4xl h-12 w-12 
                shadow-sm p-4 rounded-full bg-yellow-100
                dark:bg-yellow-400 cursor-pointer'/>
                <span>Get Offers</span>
              </div>
              </div>
             </div>
                
            </div>

        </div>
    </div>
  )
}

export default Banner