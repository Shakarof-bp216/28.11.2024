import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout