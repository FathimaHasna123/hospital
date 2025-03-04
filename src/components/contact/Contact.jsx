import React from "react"
import { ConfigProvider, Form, Input } from "antd"
import { FaClock, FaPhone } from "react-icons/fa6"
import { FiMapPin } from "react-icons/fi"

function Contact() {
  const [form] = Form.useForm();

  
  const onFinish = (values) => {
    console.log("Form Values: ", values)}

  return (
    <>
    <div className="w-full h-[800px] flex justify-center items-center">
  <div className="w-full flex justify-center items-center mb-6">
    <img className="w-full md:w-[800px] h-[700px] object-cover" src="https://medicare-shreethemes.vercel.app/static/media/contact.7f238cfabf05a94de88f.png" alt="" />
  </div>

  <div className="w-full flex justify-center items-center">
    <div className="w-full max-w-[600px] h-auto md:h-[500px] justify-center md:ml-[-400px]">
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 30,
              itemMarginBottom: 20,
            },
          },
        }}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input className="text-[20px] h-[60px] px-4 w-full" placeholder="Enter your name" />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 30,
              itemMarginBottom: 20,
            },
          },
        }}>
          <Form.Item name="phone" label="Phone" rules={[
            { required: true, message: "Please enter your phone number" },
            { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },
          ]}>
            <Input className="text-[20px] h-[60px] px-4 w-full" placeholder="Enter your phone number" />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 30,
              itemMarginBottom: 20,
            },
          },
        }}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your Email" }]}>
            <Input className="text-[20px] h-[60px] px-4 w-full" placeholder="Enter your Email" />
          </Form.Item>
        </ConfigProvider>

        <ConfigProvider theme={{
          components: {
            Form: {
              labelFontSize: 30,
              itemMarginBottom: 20,
            },
          },
        }}>
          <Form.Item name="address" label="Address" rules={[{ required: true, message: "Please enter your address" }]}>
            <Input.TextArea className="text-[20px] h-[60px] px-4 w-full" placeholder="Enter your address" />
          </Form.Item>
        </ConfigProvider>

        <Form.Item>
          <button type="submit" className="py-3 px-16 bg-blue-600 hover:bg-blue-800 text-white text-[30px] w-full md:w-auto">Send</button>
        </Form.Item>
      </Form>
    </div>
  </div>
</div>

<div className="w-full h-auto md:h-[500px] flex justify-center items-center space-y-6 md:space-x-9 md:space-y-0 flex-col md:flex-row">
  <div className="bg-blue-600 hover:bg-blue-800 w-full md:w-[400px] h-[200px] text-white rounded-md flex flex-col items-center justify-center">
    <FaPhone className="w-[80px] h-[60px]" />
    <h1 className="text-[25px] text-center mt-4">+152 534-468-854</h1>
    <h2 className="text-[20px] text-center mt-2">info@company.com</h2>
  </div>

  <div className="bg-blue-600 hover:bg-blue-800 w-full md:w-[400px] h-[200px] text-white rounded-md flex flex-col items-center justify-center">
    <FiMapPin className="w-[80px] h-[60px]" />
    <h1 className="text-[25px] text-center mt-4">2 Fir e Brigade Road</h1>
    <h2 className="text-[20px] text-center mt-2">Chittagonj, Lakshmipur</h2>
  </div>

  <div className="bg-blue-600 hover:bg-blue-800 w-full md:w-[400px] h-[200px] text-white rounded-md flex flex-col items-center justify-center">
    <FaClock className="w-[80px] h-[60px]" />
    <h1 className="text-[25px] text-center mt-4">Mon - Sat: 8am - 5pm</h1>
    <h2 className="text-[20px] text-center mt-2">Sunday Closed</h2>
  </div>
</div>

     
    </>
  )
}

export default Contact
