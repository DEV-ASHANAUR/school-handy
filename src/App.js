import React from 'react'
import Client from './components/client/Client'
import Courses from './components/courses/Courses'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Newsletter from './components/newsletter/Newsletter'
import Quality from './components/quality/Quality'
import Teacher from './components/teacher/Teacher'
import Testimonial from './components/testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quality />
      <Teacher />
      <Courses />
      <Client />
      <Testimonial />
      <Newsletter />
    </div>
  )
}

export default App