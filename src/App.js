import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Quality from './components/quality/Quality'
import Teacher from './components/teacher/Teacher'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quality />
      <Teacher />
    </div>
  )
}

export default App