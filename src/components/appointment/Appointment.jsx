import React, { useState } from "react"
import { useCreateAppointment} from "../../utils/appointment/appointmentHook"
import { ConfigProvider, Form, Input, message, Select } from "antd"
import { Button } from "antd"
import { useQuery } from "react-query"
import { getDepartment } from "../../utils/appointment/appointmentApi"
import { getDoctors } from '../../utils/doctors/doctorsApi'

function Appointment() {
  
 
  const [form] = Form.useForm()
  const {mutate:Create } = useCreateAppointment()
  const { data: DepartmentData } = useQuery('getDepartment', getDepartment)
  const { data: DoctorsData } = useQuery('getDoctors',getDoctors)
  
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
  

 
  

  return (
    <>

<div className="w-full h-[90vh] flex justify-center items-center">
  <div className="bg-gradient-to-r from-blue-600 w-full h-full">
    <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col justify-center items-center py-10">
      <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-black text-center mb-6">Book Your Appointment</h2>

      <Form layout="vertical" onFinish={onFinish} form={form}>
        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 20,
              itemMarginBottom: 10,
            },
          },
        }}>
          <Form.Item name="name" label="Name:" rules={[{ required: true, message: "Please enter your name!" }]}>
            <Input className="text-[16px] sm:text-[18px] md:text-[20px] h-[50px] px-4 w-full sm:w-[120%]" placeholder="Enter your name" onChange={(e) => handleChange(e.target.value, "name")} />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 20,
              itemMarginBottom: 10,
            },
          },
        }}>
          <Form.Item name="phone" label="Phone" rules={[
            { required: true, message: "Please enter your phone number" },
            { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },
          ]}>
            <Input className="text-[16px] sm:text-[18px] md:text-[20px] h-[50px] px-4 w-full sm:w-[120%]" placeholder="Enter your phone number" onChange={(e) => handleChange(e.target.value, "phone")} />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 20,
              itemMarginBottom: 10,
            },
          },
        }}>
          <Form.Item name="address" label="Address:" rules={[{ required: true, message: "Please enter your address" }]}>
            <Input.TextArea className="text-[16px] sm:text-[18px] md:text-[20px] h-[50px] px-4 w-full sm:w-[120%]" placeholder="Enter your address" onChange={(e) => handleChange(e.target.value, "address")} />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 20,
              itemMarginBottom: 10,
            },
          },
        }}>
          <Form.Item name="department" label="Department" rules={[{ required: true, message: "Please select a department!" }]}>
            <Select className="text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-[200%]">
              {DepartmentData?.data?.map((item, index) => (
                <Select.Option value={item.id} key={index}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 20,
              itemMarginBottom: 10,
            },
          },
        }}>
          <Form.Item name="doctor" label="Doctor:" rules={[{ required: true, message: "Please select a doctor!" }]}>
            <Select className="w-full sm:w-[200%]">
              {DoctorsData?.data?.map((item, index) => (
                <Select.Option value={item.id} key={index}>{item.doctrosName}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 20,
              itemMarginBottom: 10,
            },
          },
        }}>
          <Form.Item name="time" label="Time:" rules={[{ required: true, message: "Please enter your appointment time!" }]}>
            <Input className="text-[16px] sm:text-[18px] md:text-[20px] h-[50px] px-4 w-full sm:w-[120%]" placeholder="Enter time" onChange={(e) => handleChange(e.target.value, "time")} />
          </Form.Item>
        </ConfigProvider>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="py-7 text-center bg-blue-600 hover:bg-blue-800 text-white text-[18px] sm:text-[20px] md:text-[20px] w-full sm:w-[120%]">
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
