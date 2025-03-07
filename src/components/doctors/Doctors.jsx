import React, { useState } from 'react'
import './doctors.css'
import { useQuery } from 'react-query'
import { getDoctors } from '../../utils/doctors/doctorsApi'

const Doctors = () => {
  // const [map,SetMap] = useState([1,2,3,4,5,6,7,8,9,10])
  const { data:DoctorsData} = useQuery('getDoctors',getDoctors)
  console.log(DoctorsData)
  return (
    <div className="w-full h-[140vh] flex flex-col justify-start items-center">
    <h1 className="text-[60px] text-center mt-10 poppins">Meet Our Qualified <span className="text-blue-600">Doctors</span></h1>
    <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] mt-20 px-5">
    { DoctorsData?.data?.map((item, index)=>(

      <div className="card-container" key={index}>
        <div className="card">
          <div className="front">
            <img className="h-[80%] w-[350px]"
              src={`http://127.0.0.1:8000/${item.image}`} alt=""/>
            <h1 className="text-[28px] text-blue-600">{item.doctrosName}</h1>
            <h4 className="text-[20px]">{item.department.name}</h4>
            
          </div>
          <div className="back">
            <p className="text-[20px]"> {item.description}</p>
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">{item.doctrosName}</h1>
            <h4 className="text-[20px]">{item.department.name}</h4>
           
          </div>
        </div>
      </div>
      ))}
    
      </div>
    </div>
  )
}

export default Doctors


