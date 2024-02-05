import React from 'react'
import img1 from "../../assets/420140807_924816742693531_4764668901687945937_n.jpg"
import img2 from "../../assets/421220501_3672052593076733_8299361390558794083_n.jpg"
import img3 from "../../assets/Screenshot 2024-01-17 135502.png"
import img4 from "../../assets/421109000_3579057692310117_3831614934001987769_n.jpg"

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia earum possimus, maxime sit, magnam quidem minus, excepturi quasi ea cumque. Laboriosam cum laudantium eaque expedita voluptatum nisi blanditiis voluptas!"
    },

    {
        id: 2,
        img: img2,
           title: "Printed shirt Wear",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, ea iure. Et ipsa at repudiandae quam ea praesentium recusandae nobis dolores nam molestiae ducimus vel accusamus est temporibus, esse quia?"
    },

    {
        id: 3,
        img: img3,
             title: "Women shirt",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus recusandae, sed est nesciunt eius fuga explicabo dignissimos voluptates cumque, in reprehenderit dicta optio quaerat ut minima modi! Esse, excepturi!"
    },
    {
        id: 4,
        img: img4,
             title: "Women shirt",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus recusandae, sed est nesciunt eius fuga explicabo dignissimos voluptates cumque, in reprehenderit dicta optio quaerat ut minima modi! Esse, excepturi!"
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
    <section  className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-4 gap-20 md:gap-5 place-items-center'>
            {ProductsData.map((data) => (
                <div className='dark:bg-gray-800 rounded-2xl bg-white hover:bg-black/80
                dark:hover:bg-primary hover:text-white relative
                shadow-xl duration-300 group w-[70%] h-auto '>
                    {/* image Section */}
                    <div data-aos="fade-up" className='flex items-center justify-center object-cover'>
                        <img src={data.img} alt="" 
                        className=' h-[230px] w-[85%] object-cover rounded-md items-center justify-center flex'
                        />
                        <div>
                            {/* details Section */}
                        </div>
                    </div>
                </div>
            ))}
    </section>
</div>
  )
}
export default TopProducts