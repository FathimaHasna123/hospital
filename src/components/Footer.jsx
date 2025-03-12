import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import { FaGooglePlusG } from "react-icons/fa"
import { MdOutlineWifi } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi"
import { RiMapPin5Line } from "react-icons/ri"
import { CgMail } from "react-icons/cg"



const Footer = ({}) => {


    return (
        <>
<div className="w-full h-[400px] bg-blue-900 flex  justify-center items-center">
  <div className="w-[90%] sm:w-[70%] flex items-center sm:space-x-6">
    <img className="h-12 relative top-[-70px] left-[220px]" src="https://uiparadox.co.uk/templates/medicare/v3/assets/media/brand-logo.png" alt="Logo" />

    <div className="flex space-x-4 mt-10 sm:mt-0 sm:ml-[30px]">
      <div className="rounded-full p-3 bg-white hover:bg-blue-800">
        <FaFacebook className="text-blue-600" />
      </div>
      <div className="rounded-full p-3 bg-white hover:bg-sky-500">
        <FaTwitter className="text-blue-600" />
      </div>
      <div className="rounded-full p-3 bg-white hover:bg-red-600">
        <FaGooglePlusG className="text-blue-600" />
      </div>
      <div className="rounded-full p-3 bg-white hover:bg-orange-400">
        <MdOutlineWifi className="text-blue-600" />
      </div>
    </div>
  </div>

  <div className="px-10 sm:px-20 flex flex-col sm:flex-row justify-between w-full mt-10">
    <div className=" sm:w-[45%] flex flex-col">
      <h2 className="text-[30px] text-white border-b-2 w-40 border-white">Contact Us</h2>
      <div className="mt-8 flex items-center space-x-3">
        <HiOutlinePhone className="h-8 w-8 text-white" />
        <h3 className="text-[18px] text-white hover:text-gray-400">1-800-1234-567, 1-800-3214-321</h3>
      </div>

      <div className="mt-5 flex items-center space-x-3">
        <RiMapPin5Line className="h-8 w-8 text-white" />
        <h3 className="text-[18px] text-white hover:text-gray-400">2130 Fulton Street San Diego, CA 94117-1080 USA</h3>
      </div>

      <div className="mt-5 flex items-center space-x-3">
        <CgMail className="h-8 w-8 text-white" />
        <h3 className="text-[18px] text-white hover:text-gray-400">info@demolink.org</h3>
      </div>
    </div>

    <div className=" sm:w-[45%] mt-10 sm:mt-0 flex flex-col">
      <h2 className="text-[30px] text-white border-b-2 w-40 border-white">Newsletter</h2>
      <div className="mt-5 ml-[-200px] flex flex-col items-center space-y-6">
    <p className="text-[18px] text-white text-center sm:text-left">
          Enter your email address to receive up-to-date <br /> news, new patient information and other useful <br /> stuff, delivered right to your inbox.</p>
        <form action="" className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter your Email"
            className="text-black border border-gray-500 p-[10px] w-[250px] sm:w-full"/>
 <button className="p-[10px] bg-black text-white hover:bg-gray-400 text-center cursor-pointer sm:mt-0 mt-4 sm:w-auto w-[250px] pr-5">Submit </button>
        </form>
      </div>
    </div>
  </div>
</div>






        </>
    )
}











export default Footer