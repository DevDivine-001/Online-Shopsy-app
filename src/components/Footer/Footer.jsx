const footer = [
  {
    title: "Home",
    link:"/#",
  },
  {
    title: "About",
    link:"/#about",
  },
  {
    title: "Home",
    link:"/#contact",
  },
]
const project = [
  {
    title: "Bag",
    link:"/#",
  },
  {
    title: "Phone",
    link:"/#about",
  },
  {
    title: "Car",
    link:"/#contact",
  },
]

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,

} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="text-gray-200 mb-20 bg-[#000] dark:bg-gray-900">
      <div className="container">
        <div  className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company dlails */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 fllex items-center gap-3">Shopsy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sapiente dolor dolore totam dolorem id, ab illo natus ex itaque at odio pariatur aspernatur repudiandae delectus alias voluptatibus obcaecati iste.</p>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
<div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl
              font-bold sm:text-left text-justify mb-3">Important Links</h1>
              <ul>
                {footer.map((link) => (
                  <li key={link.title} className="cursor-pointer hover:text-primary
                  hover:translate-x-1 duration-300
                  text-gray-200">
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
  </div>          
    </div>
            <div>
<div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl
              font-bold sm:text-left text-justify mb-3">Products
 Links</h1>
              <ul>
                {project.map((link) => (
                  <li key={link.title} className="cursor-pointer hover:text-primary
                  hover:translate-x-1 duration-300
                  text-gray-200">
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
  </div>          
    </div>

  {/*  */}
     
          <div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram  size={20} className="text-3xl"/>
              </a>
              <a href="#">
                <FaFacebook  size={20} className="text-3xl"/>
              </a>
              <a href="#">
                <FaLinkedin  size={20} className="text-3xl"/>
              </a>
            </div>
            <div className="mt-6">
              <div  className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Divine DevCodes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3">
                   <FaMobileAlt/>
              <p>+2348072679674</p>
            </div>
          </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer