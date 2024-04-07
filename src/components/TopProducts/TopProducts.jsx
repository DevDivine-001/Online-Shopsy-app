import React from 'react'
import img1 from "../../assets/420140807_924816742693531_4764668901687945937_n.jpg"
import img2 from "../../assets/421220501_3672052593076733_8299361390558794083_n.jpg"
import img3 from "../../assets/Screenshot 2024-01-17 135502.png"
import img4 from "../../assets/421109000_3579057692310117_3831614934001987769_n.jpg"
import { FaStar } from "react-icons/fa"

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia earum possimus, "
    },

    {
        id: 2,
        img: img2,
        title: "Printed shirt Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea iure. Et ipsa at "
    },

    {
        id: 3,
        img: img3,
        title: "Women shirt",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus "
    },
    {
        id: 4,
        img: img4,
        title: "Women shirt",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus "
    },
]

const TopProducts = () => {
    return (

        <div className=''>
            <section className='container'>
                {/* Header section */}
                <div className='text-left mb-10 max-w-[450px]'>
                    <p data-aos="fade-up" className='text-sm text-primary'>Rated Selling Products for you!</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products!</h1>
                    <p data-aos="fade-up" className='text-sm text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptatem quaerat perspiciatis consectetur</p>
                </div>
            </section>
            {/* Body Section */}
            <section className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 gap-20 md:gap-5 place-items-center'>
                {ProductsData.map((data) => (
                    <div className='dark:bg-gray-800 rounded-2xl bg-white hover:bg-black/80
                dark:hover:bg-primary hover:text-white relative
                shadow-xl duration-300 group w-[70%] h-auto cursor-pointer pt-2 pb-2'>
                        {/* image Section */}
                        <div data-aos="fade-up" className='flex items-center justify-center object-cover w-[100%] h-auto flex-col'>

                            <img src={data.img} alt=""
                                className=' h-[230px] w-[85%] object-cover rounded-md items-center justify-center flex'
                            />
                            <div className='w-[85%] h-auto flex  justify-center flex-col'>
                                {/* details Section */}
                                <span className='text-center font-semibold'>{data.title}</span>
                                <div className='flex justify-center items-center p-2'>   <FaStar className='text-primary' />
                                    <FaStar className='text-primary' />
                                    <FaStar className='text-primary' />
                                    <FaStar className='text-primary' />
                                </div>
                                <p className='w-[100%] h-[75px] flex items-center justify-center text-[15px] text-center'>{data.description}</p>
                                <div className='flex
                            justify-center items-center'>
                                    <button className='py-[7px] px-7 bg-primary flex
                           hover:scale-105 justify-center items-center rounded-full duration-300 group-hover:text-primary group-hover:bg-[#fff] text-[#fff]'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default TopProducts