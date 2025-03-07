import React, { useState } from "react"

function Appointment() {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    department: "",
    doctor: "",
    time: ""
  });
  const [error, setError] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.address || !formData.department || !formData.doctor || !formData.time) {
      setError('All fields are required.')
      return;
    }
    setError('')
  }

  return (
    <>
      <div className="w-full h-full justify-center items-center">
        <h1 className="text-[70px] font-bold text-center">Book Appointment</h1>
        <div className="bg-gradient-to-r from-blue-600 w-full h-[800px]">
          <div className="flex justify-center w-[800px]">
            <div className="flex justify-center flex-col items-center">
              <h3 className="text-[27px] text-white ml-[-530px]">Working Hours</h3>
              <h1 className="text-[40px] font-bold ml-[-98px]">Book Appointment According to <br /> the Time Table</h1>
              <table className="border-collapse w-full border-b border-white">
                <thead>
                  <tr className="text-[25px] text-white my-[8px]">
                    <td className="p-[8px] py-4 border-b border-white">Monday</td>
                    <td className="border-b border-white">7 AM - 10PM</td>
                    <td className="text-blue-800 p-[8px] border-b  border-white">Book Now</td>
                  </tr>
                  <tr className="text-[25px] text-white my-[8px] ">
                    <td className="p-[8px] py-4 border-b border-white">Tuesday</td>
                    <td className="border-b border-white">7 AM - 10PM</td>
                    <td className="text-blue-800 p-[8px] border-b border-white">Book Now</td>
                  </tr>
                  <tr className="text-[25px] text-white my-[8px]">
                    <td className="p-[8px] py-4 border-b border-white">Wednesday</td>
                    <td className="border-b border-white">7 AM - 10PM</td>
                    <td className="text-blue-800 p-[8px] border-b border-white">Book Now</td>
                  </tr>
                  <tr className="text-[25px] text-white my-[8px]">
                    <td className="p-[8px] py-4 border-b border-white">Thursday</td>
                    <td className="border-b border-white">7 AM - 10PM</td>
                    <td className="text-blue-800 p-[8px] border-b border-white">Book Now</td>
                  </tr>
                  <tr className="text-[25px] text-white my-[8px]">
                    <td className="p-[8px] py-4 border-b border-white">Friday</td>
                    <td className="border-b border-white">7 AM - 10PM</td>
                    <td className="text-blue-800 p-[8px] border-b border-white">Book Now</td>
                  </tr>
                  <tr className="text-[25px] text-white my-[8px]">
                    <td className="p-[8px] py-4 border-b border-white">Saturday</td>
                    <td className="border-b border-white">7 AM - 10PM</td>
                    <td className="text-blue-800 p-[8px] border-b border-white">Book Now</td>
                  </tr>
                  <tr className="text-[25px] text-white my-[8px]">
                    <td className="p-[8px] py-4 border-b border-white">Sunday</td>
                    <td className="border-b border-white">8 AM - 12PM</td>
                    <td className="text-blue-800 p-[8px] border-b border-white">Book Now</td>
                  </tr>
                </thead>
              </table>
              <h2 className="text-[25px] mt-[30px] ml-[-500px]">Time's not Flexible</h2>
              <button className="p-[18px] text-[20px] rounded bg-blue-600 text-white hover:bg-blue-800 text-center mt-[-40px] ml-[500px] ">Make an Appointment</button>
            </div>
          </div>

          <div className="w-[80%] flex flex-col justify-center items-center ml-[600px] mt-[-700px]">
            <h2 className="text-[40px] font-black text-center mb-6 ">Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p style={{ color: 'red' }}>{error}</p>}

              <div>
                <label className="text-[25px]">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-[200%]" />
              </div>

              <div>
                <label className="text-[25px]">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 w-[200%]" />
              </div>

              <div>
                <label className="text-[25px]">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border p-2 w-[200%]" />
              </div>

              <div>
                <label className="text-[25px]">Department:</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="border p-2 w-[200%]" >
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="gynaecology">Gynaecology</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="general">General Medicine</option>
                  <option value="Pulmonologist">Pulmonologist</option>
                  <option value="dental">Dental Surgeon</option>
                  <option value="opthal">Ophthalmologist</option>
                </select>
              </div>

              <div>
                <label className="text-[25px]">Doctor:</label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="border p-2 w-[200%]" >
                  <option value="">Select Doctor</option>
                  <option value="dr_Aldin Powell">Dr.Aldin Powell</option>
                  <option value="dr_Amanal Frond">Dr.Amanal Frond</option>
                  <option value="dr_ollis Molate">Dr.ollis Molate</option>
                  <option value="dr_Rashmi Shettye">Dr.Rashmi Shetty</option>
                  <option value="dr_Rahul Bhargava">Dr.Rahul Bhargava</option>
                  <option value="dr_Swapna Patker">Dr.Swapna Patker</option>
                  <option value="dr_Hari Goyal">Dr.Hari Goyal</option>
                  <option value="dr_Ruby Umesh">Dr.Ruby Umesh</option>
                </select>
              </div>
              
              <label className="text-[25px]">Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-[200%]" />

              <div>
                <button type="submit" className="p-3 bg-blue-600 text-white w-full rounded text-[20px]"> Book an Appointment </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment
