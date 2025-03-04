import { Link, useLocation } from "react-router-dom"
import React from "react"




function Navbar() {
  const pathName = useLocation().pathname



  
  return (
    <>
      <nav className="p-8 bg-gray-300 shadow sticky">
        <div className="container flex justify-between items-center mx-auto ">
          <img src="https://uiparadox.co.uk/templates/medicare/v3/assets/media/brand-logo.png"alt=""/>

          <ul className="text-[30px] flex  flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[40px] mx-auto md:flex ">
    <li><Link to={"/"} className={`${ pathName === "/" ? "text-blue-600" : "text-black"} hover:underline transition  `}>Home</Link></li>
    <li><Link to={"/about"} className={`${pathName === "/about" ? "text-blue-600" : "text-black"} hover:text-blue-600 transition  `}>About</Link></li>
    <li><Link to={"/services"} className={`${pathName === "/services" ? "text-blue-600" : "text-black" } hover:text-blue-600 transition  `}>Services</Link></li>
    <li><Link to={"/contact"} className={`${pathName === "/contact" ? "text-blue-600" : "text-black"} hover:text-blue-600 transition  `}>Contact Us</Link></li>
    <li><Link to={"/doctors"} className={`${pathName === "/doctors" ? "text-blue-600" : "text-black"} hover:text-blue-600 transition `}>Doctors</Link></li>
          </ul>
          

<Link to="/appointment"
  className="bg-blue-600 text-white py-[9px] px-[50px] text-[22px] rounded-md hover:bg-blue-800 transition-all ml-auto md:ml-0 mt-4 md:mt-0">Appointment</Link>
          

        </div>
      </nav>
    </>
  )
}

export default Navbar
