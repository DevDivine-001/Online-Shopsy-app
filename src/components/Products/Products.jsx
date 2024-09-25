import React from 'react'
import img1 from "../../assets/420140807_924816742693531_4764668901687945937_n.jpg"
import img2 from "../../assets/421220501_3672052593076733_8299361390558794083_n.jpg"
import img3 from "../../assets/Screenshot 2024-01-17 135502.png"
import img4 from "../../assets/421109000_3579057692310117_3831614934001987769_n.jpg"
import img5 from "../../assets/Screenshot 2023-11-15 224723.png"
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethinc",
        rating: "5.0",
        author: "white",
        aosDelay:"0"
    },

    {
        id: 2,
        img: img2,
        title: "Women bag",
        rating: "5.1",
        author: "black",
        aosDelay:"100"
    },

    {
        id: 3,
        img: img3,
        title: "FaceBook",
        rating: "7.8",
        author: "blue",
        aosDelay:"300"
    },
    {
        id: 3,
        img: img3,
        title: "FaceBook",
        rating: "7.8",
        author: "blue",
        aosDelay:"300"
    },
    {
        id: 3,
        img: img3,
        title: "FaceBook",
        rating: "7.8",
        author: "blue",
        aosDelay:"300"
    },
  

    {
        id: 4,
        img: img4,
        title: "Book",
        rating: "6.8",
        author: "React-all",
        aosDelay:"200"
    },
    {
        id: 4,
        img: img4,
        title: "Book",
        rating: "6.8",
        author: "React-all",
        aosDelay:"200"
    },

    {
        id: 5,
        img: img5,
        title: "Book",
        rating: "6.8",
        author: "green",
        aosDelay:"200"
    },

 

]

const Products = () => {
  return (
<div className='mt-5 mb-2'>
    <section className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptatem quaerat perspiciatis consectetur</p>
        </div>
        {/* <Link to="">Rout</Link> */}
    </section>

    {/* Body Section */}

    <section>
        <div className='grid grid-cols-1 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-4 place-items-center'>
            {/* Card Section */}
         {
            ProductsData.map((data) => (
                <div className='space-y-3' key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                
                >
                    <img src={data.img} alt="" className='
                    h-[230px] w-[190px] object-cover rounded-md items-center justify-center flex'/>


                    <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p>{data.color}</p>
                    </div>
        <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400'/>
                        <span>{data.rating}</span>
        </div>
                </div>
            ))
         }
 
        </div>
        <div className='flex justify-center'>
            <button className='text-center bg-primary cursor-pointer text-[#ffff] px-4 py-2 rounded-md'>View All Button</button>
        </div>
    </section>

</div>
  )
}

export default Products