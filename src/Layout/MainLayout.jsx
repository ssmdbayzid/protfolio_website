import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const [selectedPage, setSelectedPage] = useState("home")
  
  return (
    <div>
        <Header setSelectedPage={setSelectedPage} selectedPage={selectedPage} />       
            <Outlet />       
        <Footer />
    </div>
  )
}

export default MainLayout