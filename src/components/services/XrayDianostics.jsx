import React from "react"



function XrayDiagnostics (){

    return (
        <>
       <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
  <h1 className="text-[40px] sm:text-[50px] md:text-[50px] mb-6 sm:mb-8 md:mb-[80px] text-center">X-ray Diagnostics</h1>
  <img className="w-full sm:w-[90%] md:w-[70%] h-auto max-w-[800px] mb-6 sm:mb-8 md:mb-[20px]" src="https://www.verywellhealth.com/thmb/VbBeoFcwSHp7bPKLw1OSQL2xQnc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/xray-5a75cc05eb97de0037e2791c.jpg" alt=""/>
  <p className="text-[16px] sm:text-[18px] md:text-[20px] text-center mx-[20px] sm:mx-[30px] md:mx-[30px] mb-6 sm:mb-8 md:mb-6">
    Aenean ac ex nunc. Phasellus tincidunt tempus enim. Pellentesque habitant morbi tristique senectus et. Sed elementum volutpat libero at pellentesque. Vestibulum interdum, dolor eget tristique dignissim.</p>
  <button className="p-[20px] sm:p-[25px] md:p-[20px] rounded text-center text-[16px] sm:text-[18px] md:text-[18px] bg-blue-600 hover:bg-blue-800 text-white mt-6 sm:mt-8 md:mt-6">
    Make An Appointment</button>
</div>

        </>


    )
}


export default XrayDiagnostics