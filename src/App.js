import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Quality from './components/quality/Quality'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quality />
    </div>
  )
}

export default App