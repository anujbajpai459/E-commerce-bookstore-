import React from 'react'
import Navbar from '../Navbar'
import Courses from '../Courses'
import Footer from '../Footer'

const Course = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen" >
      <Courses/>
      </div>
      <Footer/>
    </>
  )
}

export default Course
