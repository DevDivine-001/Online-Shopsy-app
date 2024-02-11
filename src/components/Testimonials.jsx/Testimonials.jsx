import Slider from 'react-slick'

const TestimonialData = [
    {
        id: 1,
        name: "Divine",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quasi vitae, sequi non veniam voluptate officiis, asperiores quisquam dolorem atque nisi odio. Voluptatem omnis quam, id odio ut a ipsum!",
        img:"https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Itz Angela",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quasi vitae, sequi non veniam voluptate officiis, asperiores quisquam dolorem atque nisi odio. Voluptatem omnis quam, id odio ut a ipsum!",
        img:"https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Kevin Kelly",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quasi vitae, sequi non veniam voluptate officiis, asperiores quisquam dolorem atque nisi odio. Voluptatem omnis quam, id odio ut a ipsum!",
        img:"https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Kelly",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quasi vitae, sequi non veniam voluptate officiis, asperiores quisquam dolorem atque nisi odio. Voluptatem omnis quam, id odio ut a ipsum!",
        img:"https://picsum.photos/104/104",
    }
]

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        Infinity: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus:  true,
        responsive:[
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    Infinity: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                }
            },
        ],

    };
  return (
    <div className='py-10'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <span data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</span>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nihil optio soluta qui quam, voluptatem iste omnis tenetur, aliquam cupiditate, libero officia ducimus assumenda in laboriosam amet natus earum vero.</p>
            </div>
            {/* Testimonial cards */}
            <div data-aos="zoom-in">
                <Slider {... settings}>
                    {
                        TestimonialData.map((data) => (
                 <div className='p-3'>           
                            <div key={data.id} 
                            className='flex flex-col gap-3 shadow-md py-6 px-6 mx-4 rounded-xl dark:gray-800 bg-primary/10 cursor-pointer'>
                                <div className=''>
                                    <img src={data.img}
                                    className='rounded-full w-20 h-20'
                                     alt="" />
                                </div>
                                <div className='flex flex-col gap-1 space-y-2'>
                                    <span className='text-xs text-gray-500'>{data.text}</span>
                                    <h1 className='font-bold text-md *:text-black/80 dark:text-light'>{data.name}</h1>
                                </div>
                            </div></div>
                        ))
                    }
                </Slider>

            </div>

        </div>

    </div>
  )
}

export default Testimonials