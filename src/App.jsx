import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/navbar'





function App() {
 

  return (
    <div>
    <Navbar />
    <Outlet/>
    <Footer />
    
  </div>
)
  
}

export default App
