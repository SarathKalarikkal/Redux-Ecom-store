import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'



function Root() {
  const location = useLocation();
const [isLoading, setIsLoading] =useState(true)

useEffect(()=>{
  setIsLoading(true);
   setTimeout(()=>{
    setIsLoading(false)
   },1000)
},[location])

  return (
    <>
        {
          isLoading ? (
            <Loader />
          )  : (
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          )
        }
    </>
  )
}

export default Root