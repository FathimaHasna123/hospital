import { Carousel } from "antd"
import React from "react"
import './home.css'
import { FaQuoteLeft } from "react-icons/fa"
import { AiTwotoneMessage } from "react-icons/ai"
import { FaHome } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { BsEmojiSmile } from "react-icons/bs"
import { FaRegCalendarAlt } from "react-icons/fa"

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Home() {



 

  return (
    <>
    

 <Carousel autoplay={{dotDuration: true,}} autoplaySpeed={1000}> 

       <div className="w-full h-[845px] flex justify-center items-center">
        <div className="h-full w-full bg-cover  " style={{ backgroundImage: "url('https://preview.colorlib.com/theme/mediplus/images/bg_3.jpg.webp')" }}>

        <div className="py-40 px-4 sm:px-10 md:px-20 lg:px-28"> 
    <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-serif ">We Provide <span className="text-blue-600">Medical</span> Services <br /> That You Can <span className="text-blue-600">Trust</span> </h1> 
    <p className="text-[16px] sm:text-[18px] md:text-[20px] " >Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Mauris sed nisl pellentesque,faucibus libero eu, gravida quam.</p>

    <div className=" mt-6 space-x-4 text-[16px] sm:text-[18px] md:text-[20px]">
    <button className="bg-blue-600 text-white text-center hover:bg-blue-800 p-[18px] rounded">Get Appointment</button>
    <button className="bg-blue-600 text-white text-center hover:bg-blue-800 p-[18px] rounded">Learn More</button>
    </div>
        </div>
        </div>
      </div>

      <div className="w-full h-[845px] flex justify-center items-center">
     <div className="h-full w-full bg-cover" style={{backgroundImage:"url('https://ld-wt73.template-help.com/wt_prod-20176/images/slide-01.jpg')"}}>
     <div className="py-40 px-4 sm:px-10 md:px-20 lg:px-28">
      <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-mono">Take Care of <br /> Your <span className="text-blue-600">Health </span></h1>
      <p className="text-[16px] sm:text-[18px] md:text-[20px]">At Medina, we are dedicated to diagnosing all kinds of diseases.</p>
     <button className="bg-blue-600 text-white hover:bg-blue-800 p-[20px] mt-6 text-[16px] sm:text-[18px] md:text-[20px] rounded">Make an Appointment</button>

     </div>
     </div>
      </div> 


      <div className="w-full h-[845px] flex justify-center items-center">
      <div className="h-full w-full bg-cover" style={{backgroundImage:"url('https://ld-wt73.template-help.com/wt_prod-30370/images/slider-modern-slide-2-1920x660.jpg')"}}>
      <div className="py-40 px-4 sm:px-10 md:px-20 lg:px-28">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold">We Listen, <span className="text-blue-600">We Care, </span> <br /> We Heal</h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px]">Lorem ipsum dolor sit amet consectetur. Massa mauris convallis in egetvolutpat. <br /> Vitae nunc varius proin rhoncus cursus et nulla posuere. Eros.</p>

        <div className="space-x-5 mt-6 text-[16px] sm:text-[18px] md:text-[20px]">
          <button className="bg-blue-600 text-white text-center hover:bg-blue-800 p-[18px] rounded">Appointment</button>
          <button className="bg-blue-600 text-white text-center hover:bg-blue-800 p-[18px] rounded">Contact Us</button>
        </div>

      </div>
      </div>
      </div> 

  
     
    </Carousel> 

{/* 1 */}
    <div className="w-full h-[200px] flex justify-center  ">
      <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[500px] mt-[-80px] "  >

        <div className="h-[150px] bg-blue-600 hover:bg-blue-800 w-[500px] text-white flex justify-center items-center flex-col relative left-40" >
        <div class="w-28 h-28 bg-blue-400 rounded-full  flex justify-center items-center  absolute left-[-40px] ">
          <img className="w-14 h-14" src="https://uiparadox.co.uk/templates/medicare/v3/assets/media/icons/benefits-1.png" alt="" />
        </div>
          <h1 className="text-center text-[22px] mt-[-10px] ">Expert Doctors</h1>
          <p className="text-center text-[18px] ml-[40px] mt-4">Lorem ipsum dolor sit amet consect <br /> etur massa mauris convallis.</p>
        </div>

        <div className="h-[150px] bg-blue-600 hover:bg-blue-800 w-[500px] text-white flex justify-center items-center flex-col relative left-20 ">
        <div class="w-28 h-28 bg-blue-400 rounded-full  flex justify-center items-center  absolute left-[-40px] ">
          <img className="w-14 h-14" src="https://uiparadox.co.uk/templates/medicare/v3/assets/media/icons/benefits-2.png" alt="" />
        </div>
          <h1 className="text-center text-[22px] mt-[-10px] ">Emergency Care</h1>
          <p className="text-center text-[18px] ml-[40px] mt-4">Our emergency diagnostics services <br /> help you  get the most minimal time.</p>
        </div>

        <div className="h-[150px] bg-blue-600 hover:bg-blue-800 w-[500px] text-white flex justify-center items-center flex-col relative left-20 ">
        <div class="w-28 h-28 bg-blue-400 rounded-full  flex justify-center items-center  absolute left-[-40px] ">
          <img className="w-14 h-14" src="https://uiparadox.co.uk/templates/medicare/v3/assets/media/icons/benefits-3.png" alt="" />
        </div>
          <h1 className="text-center text-[22px] mt-[-10px] ">24/7 Availability</h1>
          <p className="text-center text-[18px] ml-[40px] mt-4">Lorem ipsum dolor sit amet consect <br /> etur massa mauris convallis.</p>
        </div>

      </div>
    </div>

{/* 2 */}
    <div className="w-full h-[500px] justify-center ">
      <h1 className="text-[60px] text-center font-bold ">What Makes Us Different</h1>
    <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">

<div className="flex flex-col justify-center items-center mt-20">
      <div className="w-40 h-40 border-4 border-blue-600 rounded-full  flex justify-center items-center">
      <img className="w-20 h-20 " src="src/assets/stethoscope.png" alt="" />
      </div>
      <h1 className="text-[30px] mt-6 ">Qualified Specialists</h1>
      <p className="text-[20px] mt-5">We hire the best specialists to deliver top-notch <br /> diagnostic services for you.</p>
</div>


<div className="flex flex-col justify-center items-center mt-20">
      <div className="w-40 h-40 border-4 border-blue-600 rounded-full  flex justify-center items-center">
      <img className="w-20 h-20 " src="src/assets/dentist-chair.png" alt="" />
      </div>
      <h1 className="text-[30px] mt-6">Modern Equipment</h1>
      <p className="text-[20px] mt-5">We use the first-class medical equipment for timely <br /> diagnostics of various diseases.</p>
</div>

<div className="flex flex-col justify-center items-center mt-20">
      <div className="w-40 h-40 border-4 border-blue-600 rounded-full  flex justify-center items-center">
      <img className="w-16 h-16 " src="https://media.istockphoto.com/id/1047906006/vector/first-aid-kit-icon-in-badge-style-one-of-fire-guard-collection-icon-can-be-used-for-ui-ux.jpg?s=1024x1024&w=is&k=20&c=t22Q3lsRBgXgpIPXtxpK1g6wP0l43xiJLL-nD_Px5oM=" alt="" />
      </div>
      <h1 className="text-[30px] mt-6">Emergency Diagnostics</h1>
      <p className="text-[20px] mt-5">Our emergency diagnostics services help you get the <br /> most accurate diagnosis in a minimal time.</p>
</div>
    </div>
</div>

{/* 3 */}
<div className="w-full h-[900px] flex justify-center items-center">
  <div className="h-full w-full bg-cover" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp')" }}>
 <div className="py-16 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 mt-[300px]">
  <h1 className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[80px]">Your <span className="text-blue-600">Health</span> is Our <span className="text-blue-600">Priority</span></h1>
  <p className="text-[16px] sm:text-[20px] md:text-[24px]"> We can manage your dream building. A small river named Duden flows by their place.</p>
   <button className="bg-blue-600 text-white hover:bg-blue-800 p-[20px] sm:p-[18px] md:p-[30px] text-[18px] sm:text-[16px] md:text-[18px] mt-8 sm:mt-10 ml-[0px] sm:ml-[100px] md:ml-[350px] lg:ml-[450px] rounded">Search places </button>
    </div>
  
  </div>
</div>



{/* 4 */}

<Carousel autoplay={{dotDuration: true,}} autoplaySpeed={2000}>
<section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-[60px] font-medium title-font text-center">Testimonials</h1>
    <div className="flex justify-center">

      <div className="p-4 md:w-1/2 w-full">
          <FaQuoteLeft className="text-blue-600 h-10 w-10"/>

          <h3 className="leading-relaxed mb-6 text-[26px] ">I had a colonoscopy at Medina Diagnostic Center. From the moment  I entered the center, I was greeted  and treated warmly and respectfully  and it was the best experience.</h3>
          <a className="inline-flex items-center">
            <img  className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"  src="https://ld-wt73.template-help.com/wt_prod-20176/images/users/user-bryan-green-60x60.jpg" alt=""/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-blue-600 text-[24px]">Bryan Green</span>
              <span className="text-gray-500 text-[14px]">Patient</span>
            </span>
          </a>
        
      </div>

      <div className="p-4 md:w-1/2 w-full">
      <FaQuoteLeft className="text-blue-600 h-10 w-10"/>
          
          <h3 className="leading-relaxed mb-6 text-[26px]">I would like to thank and compliment the staff at Medina, including the outpatient, laboratory staff and cardiac division during my stay at your facility on July 9th and 10th.</h3>
          <a className="inline-flex items-center">
            <img className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center" src="https://ld-wt73.template-help.com/wt_prod-20176/images/users/user-betty-wade-60x60.jpg"  alt=""/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-blue-600 text-[24px]">Betty Wade</span>
              <span className="text-gray-500 text-[14px]">Patient</span>
            </span>
          </a>
        
      </div>
    </div>
  </div>
</section>
<section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-[60px] font-medium title-font text-center">Testimonials</h1>
    <div className="flex justify-center">

      <div className="p-4 md:w-1/2 w-full">
          <FaQuoteLeft className="text-blue-600 h-10 w-10"/>

          <h3 className="leading-relaxed mb-6 text-[26px] ">DoseMedic is one of the best doctor directories. It has a variety of truly experienced and trustworthy doctors. I am personally thankful to Dr. Scott Riley who helped me during my recent visit.</h3>
          <a className="inline-flex items-center">
            <img  className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"  src="https://ld-wt73.template-help.com/wt_prod-30370/images/client-2-80x80.jpg" alt=""/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-blue-600 text-[24px]">Courtney Henry</span>
              <span className="text-gray-500 text-[14px]">Patient</span>
            </span>
          </a>
        
      </div>

      <div className="p-4 md:w-1/2 w-full">
      <FaQuoteLeft className="text-blue-600 h-10 w-10"/>
          
          <h3 className="leading-relaxed mb-6 text-[26px]">I would like to thank DoseMedic and compliment Dr. Katherine Wong, who helped me during the surgery I had at the local clinic. She is a true specialist in pain management.</h3>
          <a className="inline-flex items-center">
            <img className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center" src="https://ld-wt73.template-help.com/wt_prod-30370/images/client-1-80x80.jpg"  alt=""/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-blue-600 text-[24px]">Peter Baker</span>
              <span className="text-gray-500 text-[14px]">Patient</span>
            </span>
          </a>
        
      </div>
    </div>
  </div>
</section>
</Carousel>

{/* 5 */}

<div className="w-full h-[80vh]">
  <h1 className="text-[36px] sm:text-[50px] md:text-[60px] font-medium title-font text-center">Gets <span className="text-blue-600">Every</span> Single <span className="text-blue-600">Updates</span> Here</h1>
  <p className="text-[16px] sm:text-[18px] md:text-[20px] text-center"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

  <div className="flex justify-center items-center w-full mt-[60px] space-x-[20px] flex-wrap sm:space-x-[30px] md:space-x-[40px]">
    <div className="w-full sm:w-[400px] h-[400px] mb-6 sm:mb-0">
      <img className="w-full h-[300px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" src="https://preview.colorlib.com/theme/mediplus/images/image_4.jpg.webp" alt="" />
      <div className="flex mt-2">
        <h3 className="text-blue-600 hover:text-black text-[18px]">June 9, 2025 Admin</h3>
        <AiTwotoneMessage className="text-blue-600 hover:text-black ml-3" />
        <span className="text-blue-600 hover:text-black">4</span>
      </div>
      <h1 className="text-[24px] sm:text-[30px] font-medium title-font">Scary Thing That You Don't Get Enough Sleep</h1>
      <p className="text-[16px] sm:text-[18px] md:text-[21px] mt-3">Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there live the <br /> blind texts.</p>
      <button className="bg-blue-600 hover:bg-blue-800 text-white p-5 rounded mt-4">Read More</button>
    </div>

    <div className="w-full sm:w-[400px] h-[400px] mb-6 sm:mb-0">
      <img className="w-full h-[300px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" src="https://ld-wt73.template-help.com/wt_prod-20176/images/post-14-370x250.jpg" alt=""/>
      <div className="flex mt-2">
        <h3 className="text-blue-600 hover:text-black text-[18px]">March 10, 2025 Admin</h3>
        <AiTwotoneMessage className="text-blue-600 hover:text-black ml-3" />
        <span className="text-blue-600 hover:text-black">8</span>
      </div>
      <h1 className="text-[24px] sm:text-[30px] font-medium title-font">Picking the Right Diagnostic Services for Efficient Results</h1>
      <p className="text-[16px] sm:text-[18px] md:text-[21px] mt-3">There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical treatment.</p>
      <button className="bg-blue-600 hover:bg-blue-800 text-white p-5 rounded mt-4">Read More</button>
    </div>

    <div className="w-full sm:w-[400px] h-[400px]">
      <img className="w-full h-[300px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"src="https://lovecare.websitelayout.net/img/services/service-02.jpg" alt=""/>
      <div className="flex mt-2">
        <h3 className="text-blue-600 hover:text-black text-[18px]">July 24, 2024 Admin</h3>
        <AiTwotoneMessage className="text-blue-600 hover:text-black ml-3" />
        <span className="text-blue-600 hover:text-black">4</span>
      </div>
      <h1 className="text-[24px] sm:text-[30px] font-medium title-font">Reasons to Visit a Breast Specialist</h1>
      <p className="text-[16px] sm:text-[18px] md:text-[21px] mt-3">There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the importance of visiting.</p>
      <button className="bg-blue-600 hover:bg-blue-800 text-white p-5 rounded mt-4">Read More</button>
    </div>
  </div>
</div>


{/* 6 */}
<div className="w-full h-[300px] bg-blue-600 relative">
  <div className="h-full w-full bg-cover opacity-25" style={{ backgroundImage: "url('https://wpthemesgrid.com/themes/medikit/img/fun-bg.jpg')" }}></div>

  <div className="absolute inset-0 flex justify-center items-center space-x-6 flex-wrap sm:space-x-8 md:space-x-10 lg:space-x-12">
    

    <div className="flex items-center mb-4 sm:mb-0">
      <div className="rounded-full border-2 border-white p-4 bg-blue-500 cursor-pointer hover:bg-slate-50 duration-300">
        <FaHome className="text-white hover:text-blue-600 text-3xl transition-colors duration-300" />
      </div>
      <div className="text-white ml-4">
        <h1 className="text-[28px] sm:text-[32px] md:text-[38px]">4356</h1>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px]">Hospital Rooms</h3>
      </div>
    </div>

    
    <div className="flex items-center mb-4 sm:mb-0">
      <div className="rounded-full border-2 border-white p-4 bg-blue-500 cursor-pointer hover:bg-slate-50 duration-300">
        <FaUserDoctor className="text-white hover:text-blue-600 text-3xl transition-colors duration-300" />
      </div>
      <div className="text-white ml-4">
        <h1 className="text-[28px] sm:text-[32px] md:text-[38px]">321</h1>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px]">Specialist Doctors</h3>
      </div>
    </div>

  
    <div className="flex items-center mb-4 sm:mb-0">
      <div className="rounded-full border-2 border-white p-4 bg-blue-500 cursor-pointer hover:bg-slate-50 duration-300">
        <BsEmojiSmile className="text-white hover:text-blue-600 text-3xl transition-colors duration-300" />
      </div>
      <div className="text-white ml-4">
        <h1 className="text-[28px] sm:text-[32px] md:text-[38px]">5221</h1>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px]">Happy Patients</h3>
      </div>
    </div>

    <div className="flex items-center">
      <div className="rounded-full border-2 border-white p-4 bg-blue-500 cursor-pointer hover:bg-slate-50 duration-300">
        <FaRegCalendarAlt className="text-white hover:text-blue-600 text-3xl transition-colors duration-300" />
      </div>
      <div className="text-white ml-4">
        <h1 className="text-[28px] sm:text-[32px] md:text-[38px]">22</h1>
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px]">Years of Experience</h3>
      </div>
    </div>
    
  </div>
</div>


{/* 7 */}
<div className="w-full h-auto">
  <div className="flex flex-wrap justify-center items-center w-full space-x-[20px] sm:space-x-[30px] md:space-x-[40px] mt-[80px]">

    <div className=" pic-1 w-full sm:w-[350px] md:w-[400px] mb-8">
      <img className="image transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-full h-[300px]" src="https://wpthemesgrid.com/themes/medikit/img/pf1.jpg" alt="Senior Care" />
      <div className="img-overflow">
        <div className="text1">
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] text-white hover:text-black">Senior Care</h1>
          <h3 className="text-[18px] sm:text-[20px] text-white ml-6 hover:text-black">Personal-nurse</h3>
        </div>
      </div>
    </div>

    <div className="pic-2 w-full sm:w-[350px] md:w-[400px] mb-8">
      <img className="image-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-full h-[300px]" src="https://medicare-shreethemes.vercel.app/static/media/2.fda73e7bad8b1fb0d735.jpg" alt="Health Care" />
      <div className="img-overflow2">
        <div className="text2">
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] text-white hover:text-black">Health Care</h1>
          <h3 className="text-[18px] sm:text-[20px] text-white ml-6 hover:text-black">Doctor</h3>
        </div>
      </div>
    </div>

  
    <div className="pic-4 w-full sm:w-[350px] md:w-[400px] mb-8">
      <img className="image-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-full h-[300px]" src="https://lovecare.websitelayout.net/img/services/service-01.jpg" alt="Assisted Living" />
      <div className="img-overflow4">
        <div className="text4">
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] text-white hover:text-black">Assisted Living</h1>
          <h3 className="text-[18px] sm:text-[20px] text-white ml-6 hover:text-black">Care Taker</h3>
        </div>
      </div>
    </div>

    <div className="pic-2 w-full sm:w-[350px] md:w-[400px] mb-8">
      <img className="image-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 w-full h-[300px]" src="https://lovecare.websitelayout.net/img/content/about-02.jpg" alt="Eldery Nutrition" />
      <div className="img-overflow2">
        <div className="text2">
          <h1 className="text-[40px] sm:text-[45px] md:text-[50px] text-white hover:text-black">Eldery Nutrition</h1>
          <h3 className="text-[18px] sm:text-[20px] text-white ml-6 hover:text-black">Nutritionist</h3>
        </div>
      </div>
    </div>

  </div>
</div>





    </>
  )
}



export default Home