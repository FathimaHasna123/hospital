import React, { useState } from "react"
import DisgnosticsImaging from "./DiagnosticsImaging"
import UltrasoundDiagnostics from "./UltrasoundDiagnostics"
import XrayDiagnostics from "./XrayDianostics"
import Pediatrics from "./Pediatrics"
import LaboratoryServices from "./LaboratoryServices"
import PregnancyServices from "./PregnancyServices"
import { Link } from "react-router-dom"



function Services () {
    const [currentContent,setCurrentContent] = useState("DIAGNOSTICS IMAGING")

    return (
        <>

<div className="w-full h-[100vh] flex flex-col md:flex-row">
  <div className="w-full h-full flex items-center px-4 md:px-16 lg:px-60">
    <div className="flex w-full md:w-80 h-auto md:h-96 flex-col justify-center space-y-8 border-r-2 border-gray-300">

      <Link className={`text-[16px] md:text-[18px] ${currentContent === "DIAGNOSTICS IMAGING" ? 'text-blue-600' : 'hover:text-blue-600'}`}
        onClick={() => { setCurrentContent("DIAGNOSTICS IMAGING"); }}> DIAGNOSTICS IMAGING</Link>
      <Link className={`text-[16px] md:text-[18px] ${currentContent === "ULTRASOUND DIAGNOSTICS" ? 'text-blue-600' : 'hover:text-blue-600'}`}
        onClick={() => { setCurrentContent("ULTRASOUND DIAGNOSTICS"); }}>ULTRASOUND DIAGNOSTICS</Link>
      <Link className={`text-[16px] md:text-[18px] ${currentContent === "X-RAY DIAGNOSTICS" ? 'text-blue-600' : 'hover:text-blue-600'}`}
        onClick={() => { setCurrentContent("X-RAY DIAGNOSTICS"); }}>X-RAY DIAGNOSTICS</Link>
      <Link className={`text-[16px] md:text-[18px] ${currentContent === "PEDIATRICS" ? 'text-blue-600' : 'hover:text-blue-600'}`}
        onClick={() => { setCurrentContent("PEDIATRICS"); }}> PEDIATRICS</Link>
      <Link className={`text-[16px] md:text-[18px] ${currentContent === "LABORATORY SERVICES" ? 'text-blue-600' : 'hover:text-blue-600'}`}
        onClick={() => { setCurrentContent("LABORATORY SERVICES"); }}>LABORATORY SERVICES</Link>
      <Link className={`text-[16px] md:text-[18px] ${currentContent === "PREGNANCY SERVICES" ? 'text-blue-600' : 'hover:text-blue-600'}`}
        onClick={() => { setCurrentContent("PREGNANCY SERVICES"); }}> PREGNANCY SERVICES</Link>
    </div>
    

 {currentContent === "DIAGNOSTICS IMAGING" && (<DisgnosticsImaging/>)}
 {currentContent ==="ULTRASOUND DIAGNOSTICS" && (<UltrasoundDiagnostics/>)}
 {currentContent ==="X-RAY DIAGNOSTICS" && (<XrayDiagnostics/>)}
 {currentContent ==="PEDIATRICS" && (<Pediatrics/>)}
 {currentContent === "LABORATORY SERVICES" && <LaboratoryServices />}
 {currentContent === "PREGNANCY SERVICES" && <PregnancyServices />}
  </div>
</div>

 
       

       <div className="w-full h-[100vh] flex justify-center items-center">
       <div className="h-full w-full bg-cover  " style={{ backgroundImage: "url('https://img.freepik.com/free-photo/doctor-working-with-tablet_23-2147646687.jpg')" }}>
       <div className="w-[40%] h-[880px] bg-gradient-to-r from-blue-600 ml-[50px]">
  <div className="flex justify-center mt-[40px] w-[800px]">
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-[30px] text-white ml-[-560px]">Working Hours</h3>
      <h1 className="text-[40px] font-bold ml-[-100px]">Book Appointment According to <br /> the Time Table</h1>

      <table className="border-collapse w-full border-b border-white">
        <thead>
          <tr className="text-[20px] text-white my-[10px]">
            <td className="p-[15px] py-4 border-b border-white">Monday</td>
            <td className="border-b border-white">7 AM - 10PM</td>
            <td className="text-blue-600 p-[8px] border-b  border-white">Book Now</td>
          </tr>
          <tr className="text-[20px] text-white my-[10px] ">
            <td className="p-[15px] py-4 border-b border-white">Tuesday</td>
            <td className="border-b border-white">7 AM - 10PM</td>
            <td className="text-blue-600 p-[10px] border-b border-white">Book Now</td>
          </tr>
          <tr className="text-[20px] text-white my-[10px]">
            <td className="p-[15px] py-4 border-b border-white">Wednesday</td>
            <td className="border-b border-white">7 AM - 10PM</td>
            <td className="text-blue-600 p-[10px] border-b border-white">Book Now</td>
          </tr>
          <tr className="text-[20px] text-white my-[10px]">
            <td className="p-[15px] py-4 border-b border-white">Thursday</td>
            <td className="border-b border-white">7 AM - 10PM</td>
            <td className="text-blue-600 p-[10px] border-b border-white">Book Now</td>
          </tr>
          <tr className="text-[20px] text-white my-[10px]">
            <td className="p-[15px] py-4 border-b border-white">Friday</td>
            <td className="border-b border-white">7 AM - 10PM</td>
            <td className="text-blue-600 p-[10px] border-b border-white">Book Now</td>
          </tr>
          <tr className="text-[20px] text-white my-[10px]">
            <td className="p-[15px] py-4 border-b border-white">Saturday</td>
            <td className="border-b border-white">7 AM - 10PM</td>
            <td className="text-blue-600 p-[10px] border-b border-white">Book Now</td>
          </tr>
          <tr className="text-[20px] text-white my-[10px]">
            <td className="p-[15px] py-4 border-b border-white">Sunday</td>
            <td className="border-b border-white">8 AM - 12PM</td>
            <td className="text-blue-600 p-[10px] border-b border-white">Book Now</td>
          </tr>
        </thead>
      </table>
      <h2 className="text-[26px] mt-[50px] ml-[-500px]">Time's not Flexible</h2>
      <button className="p-[20px] text-[20px] rounded bg-blue-600 text-white hover:bg-blue-800 text-center mt-[-50px] ml-[300px] ">Make an Appointment</button>
    </div>
  </div>
</div>




       
       </div>
       </div>
        </>
    )
}










export default Services