import React, { useState } from "react"
import { useCreateAppointment, useDeleteAppointment} from "../../utils/appointment/appointmentHook";
import { ConfigProvider, Form, Input, message, Select } from "antd";
import { Button } from "antd/es/radio";

function Appointment() {
  
 
  const [form] = Form.useForm()
  const {mutate:Create } = useCreateAppointment()
  const {mutate:Delete } = useDeleteAppointment()
  const handleChange = (value, field) => {
    form.setFieldsValue({ [field]: value })
  }


  
  
  const onFinish = (values) => {
    Create(values, {
      onSuccess(data) {
        console.log('Appointment created', data)
        message.success('Created successfully')
        setAddModal(false)
        form.resetFields()
        refetch()
      },
      onError() {
        message.error('faild')
      }
    })
  }
  

  const handleDelete = (values) => {
    Delete(values.id,{
      onSuccess(){
        message.success('Deleted successfully')
        refetch()
      },
      onError(){
        message.error('Delete failed')
      }
    })
  }
  

  return (
    <>

      <div className="w-full h-[90vh] justify-center items-center">
        <h1 className="text-[70px] font-bold text-center">Book Appointment</h1>
        <div className="bg-gradient-to-r from-blue-600 w-full h-[1000px]">
          <div className="flex justify-center w-[800px] ">
            <div className="flex justify-center flex-col items-center mt-9">
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


          

<Form  layout='vertical' onFinish={onFinish} form={form}>
<ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 28,
              itemMarginBottom: 10,
            },
          },
        }}>
              
<Form.Item name="name" label="Name:" rules={[{ required: true, message: "Please enter your name!" }]}>
     <Input className="text-[20px] h-[60px] px-4 w-[200%]" placeholder="Enter your name"
     onChange={(e) => handleChange(e.target.value, "name")} />
                </Form.Item>
                </ConfigProvider>

                <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 28,
              itemMarginBottom: 10,
            },
          },
        }}>             

 <Form.Item name="phone" label="Phone" rules={[
            { required: true, message: "Please enter your phone number" },
            { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },]}>
       <Input className="text-[20px] h-[60px] px-4 w-[200%]" placeholder="Enter your phone number" onChange={(e) => handleChange(e.target.value, "phone")} />
                </Form.Item>
                </ConfigProvider>

                <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 28,
              itemMarginBottom: 10,
            },
          },
        }}>             
              
 <Form.Item name={'address'} label='Address:' rules={[{ required: true, message: "Please enter your address" }]}>
      <Input.TextArea className="text-[20px] h-[50px] px-4 w-[200%]" placeholder='address'onChange={(e) => handleChange(e.target.value, "address")} />
                </Form.Item>
                </ConfigProvider>


           <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 28,
              itemMarginBottom: 10,
            },
          },
        }}>   
<Form.Item name={'department'} label='Department'rules={[{ required: true, message: "Please select a department!" }]}>
            <Select className="text-[18px] w-[200%]" onChange={(value) => handleChange(value, "department")}>
          <Select.Option value="cardiology">Cardiology</Select.Option>
          <Select.Option value="neurology">Neurology</Select.Option>
          <Select.Option value="orthopedics">Orthopedics</Select.Option>
          <Select.Option value="gynaecology">Gynaecology</Select.Option>
          <Select.Option value="pediatrician">Pediatrician</Select.Option>
          <Select.Option value="general">General Medicine</Select.Option>
          <Select.Option value="Pulmonologist">Pulmonologist</Select.Option>
          <Select.Option value="dental">Dental Surgeon</Select.Option>
          <Select.Option value="opthal">Ophthalmologist</Select.Option>
        </Select>
              
                 </Form.Item>
                 </ConfigProvider>


          <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 28,
              itemMarginBottom: 10,
            },
          },
        }}>    
<Form.Item name={'doctor'} label='Doctor:' rules={[{ required: true, message: "Please select a doctor!" }]}>
                 <Select onChange={(value) => handleChange(value, "doctor")}>
          <Select.Option value="dr_Aldin Powell">Dr. Aldin Powell</Select.Option>
          <Select.Option value="dr_Amanal Frond">Dr. Amanal Frond</Select.Option>
          <Select.Option value="dr_ollis Molate">Dr. Ollis Molate</Select.Option>
          <Select.Option value="dr_Rashmi Shettye">Dr. Rashmi Shetty</Select.Option>
          <Select.Option value="dr_Rahul Bhargava">Dr. Rahul Bhargava</Select.Option>
          <Select.Option value="dr_Swapna Patker">Dr. Swapna Patker</Select.Option>
          <Select.Option value="dr_Hari Goyal">Dr. Hari Goyal</Select.Option>
          <Select.Option value="dr_Ruby Umesh">Dr. Ruby Umesh</Select.Option>
        </Select>

                 </Form.Item>
                 </ConfigProvider>

                 <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 28,
              itemMarginBottom: 10,
            },
          },
        }}>
 <Form.Item name={'time'} label='Time:'rules={[{ required: true, message: "Please enter your appointment time!" }]}>
              <Input placeholder='Enter time' className="text-[20px] h-[60px] px-4 w-[200%]" 
              onChange={(e) => handleChange(e.target.value, "time")}  />
              </Form.Item>

        </ConfigProvider>
              
             

            <Form.Item>
            <Button type="primary" htmlType="submit" className="py-12 text-center pt-2 bg-blue-600 hover:bg-blue-800 text-white text-[30px] w-[200%]">
        Book Appointment
      </Button>
            </Form.Item>
              
            </Form>
         

   
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment
