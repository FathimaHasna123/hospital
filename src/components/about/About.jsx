import React from "react";
import { IoIosStar } from "react-icons/io"
import { IoSchool } from "react-icons/io5"
import { LuPill } from "react-icons/lu"
import { FaTrophy } from "react-icons/fa6"
import { FaQuoteLeft } from "react-icons/fa6"


function About () {




    return (
        <>
 <div className="w-full h-[80vh] flex flex-col md:flex-row bg-gradient-to-r from-blue-600">
  
  <div className="w-full md:w-[60%] py-[40px] flex items-center justify-center">
    <img src="https://html.ditsolution.net/militant/assets/images/single.png" alt="Specialists Image" className="w-full md:w-auto" />
  </div>

  <div className="w-full md:w-[40%] py-[40px] md:py-[60px] space-y-6 text-center md:text-left">
    <h1 className="text-[30px] md:text-[45px] text-white font-bold">Good <span className="text-blue-600">Services</span> And Better <br />Health By Our <span className="text-blue-600">Specialists</span></h1>
    <p className="text-[16px] md:text-[24px] font-medium ">We value every human life placed in our hands and constantly work towards  meeting the expectations of our patients.</p>
    <p className="text-[16px] md:text-[24px] font-medium "> The most well-known dummy text is the 'Lorem Ipsum', which is said to have  originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin  language which more or less corresponds to 'proper' Latin. It contains a series  of real Latin words.</p>
    <button className="bg-blue-600 text-white text-center text-[18px] hover:bg-blue-800 p-[20px] w-full md:w-auto"> Make Appointment</button>
  </div>
</div>


<div className="w-full h-[500px] flex flex-col md:flex-row justify-between items-center">
    
    <div className="w-full md:w-[60%] h-auto mt-12 md:mt-10 md:ml-20 px-4">
        <h3 className="text-[24px] md:text-[28px] text-blue-600 font-mono">What we achieved?</h3>
        <h1 className="text-[30px] md:text-[38px] mt-2 font-semibold">Beyond Conventional <br /> Agencies.</h1>
        <p className="text-[16px] md:text-[20px] mt-4">
            As a leading college in Auckland, we look to engage with our student beyond <br />
            the conventional design and development school relationship, becoming a <br />
            partner to the people and companies we work with.
        </p>
    </div>

    
 <div className="w-full md:w-[40%] h-auto flex justify-center items-center relative mt-8 md:mt-0">
     <div className="p-[30px] md:p-[60px] bg-blue-600 w-[230px] md:w-[250px] h-[100px] mt-10 relative">

        
<div className="p-[40px] md:p-[100px] bg-white border border-gray-200 w-[200px] md:w-[250px] h-[80px] absolute z-6 left-[50px] md:left-[140px]">
<IoIosStar className="text-blue-600 h-[50px] md:h-[60px] w-[50px] md:w-[60px] relative top-[-50px] md:top-[-60px] left-[-30px]" />
<div className="flex justify-center items-center whitespace-nowrap mt-[-40px]">
 <h1 className="text-[18px] md:text-[20px]">Global Health Contributor</h1>
</div>
  </div>

            
<div className="p-[40px] md:p-[100px] bg-white border border-gray-200 w-[200px] md:w-[250px] h-[80px] absolute z-8 left-[-100px] md:left-[-140px]">
<IoSchool className="text-blue-600 h-[50px] md:h-[60px] w-[50px] md:w-[60px] relative top-[-50px] md:top-[-60px] left-[-30px]" />
<div className="flex justify-center items-center whitespace-nowrap mt-[-40px]">
<h1 className="text-[18px] md:text-[20px]">The Best Diagnostics Award</h1>
 </div>
    </div>

<div className="p-[40px] md:p-[100px] bg-white border border-gray-200 w-[200px] md:w-[250px] h-[80px] relative top-[-200px] md:top-[-230px] z-7 left-[60px] md:left-[80px]">
<LuPill className="text-blue-600 h-[50px] md:h-[60px] w-[50px] md:w-[60px] absolute top-[20px] md:top-[30px]" />
<div className="flex justify-center items-center whitespace-nowrap mt-[10px] md:mt-[20px]">
 <h1 className="text-[18px] md:text-[20px]">Certified by the AMA</h1>
 </div>
    </div>

 <div className="p-[40px] md:p-[100px] bg-white border border-gray-200 w-[200px] md:w-[250px] h-[80px] relative top-[-400px] md:top-[-430px] left-[-150px] md:left-[-200px]">
<FaTrophy className="text-blue-600 h-[50px] md:h-[60px] w-[50px] md:w-[60px] absolute top-[20px] md:top-[30px]" />
<div className="flex justify-center items-center whitespace-nowrap mt-[10px] md:mt-[20px]">
<h1 className="text-[18px] md:text-[19px]">The Best Medical Center 2015</h1>
</div>
    </div>

        </div>
    </div>
</div>

<div className="w-full h-[600px]  flex justify-center items-center bg-blue-200">
    
    <div className="h-full w-[70%]">
        <div className="w-full flex md:flex-row flex-col ">
            <div className="w-[100%] md:w-[30%]">
                <img className="rounded-[60%] relative top-[80px]" src="https://mccarthylebit.com/wp-content/uploads/2022/03/0028_Rabb-500x500.jpg" alt="" />
            </div>
    <div className="w-[70%] space-y-[50px]">
        <div className="text-center w-[80%] ml-9 mt-[40px]">
            <h1 className="text-[50px]  font-bold ">Words from Our Founder</h1>
            <h3 className="text-[40px] text-blue-600">Founder & Senior Gynae</h3>
            <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <FaQuoteLeft className="w-[200px] h-[80px] text-blue-600 " />
        <p className="text-[20px] italic ">Even the all-powerful Pointing has no control about the blind texts it <br /> is an almost unorthographic life One of blind text.</p>
        <h3 className="text-[20px] font-bold">- Dr. Harry Lawrence</h3>
        </div>
    </div>

        </div>
    </div>

</div>

<div className="w-full h-auto py-8">
    <div className="w-full flex justify-center items-center">
    
        <div className="flex flex-wrap justify-center items-center space-x-12 space-y-6 md:space-y-0">
            
            
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[130px]">
                <img className="w-full h-full object-contain" src="https://wwsthemes.com/themes/medwise/v2.0/images/logo-4.png" alt="Logo 1" />
            </div>

            
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[130px]">
                <img className="w-full h-full object-contain" src="https://wwsthemes.com/themes/medwise/v2.0/images/logo-1.png" alt="Logo 2" />
            </div>

        
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[130px]">
                <img className="w-full h-full object-contain" src="https://wwsthemes.com/themes/medwise/v2.0/images/logo-5.png" alt="Logo 3" />
            </div>

    
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[130px]">
                <img className="w-full h-full object-contain" src="https://wwsthemes.com/themes/medwise/v2.0/images/logo-2.png" alt="Logo 4" />
            </div>

            
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[130px]">
                <img className="w-full h-full object-contain" src="https://wwsthemes.com/themes/medwise/v2.0/images/logo-7.png" alt="Logo 5" />
            </div>

            
            <div className="w-[150px] h-[50px] md:w-[200px] md:h-[130px]">
                <img className="w-full h-full object-contain" src="https://wwsthemes.com/themes/medwise/v2.0/images/logo-6.png" alt="Logo 6" />
            </div>
        </div>
    </div>
</div>


        
        </>
    )
}



















export default About