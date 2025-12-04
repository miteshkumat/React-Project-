import React from 'react'
import {Routes,  Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'



const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route  path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
        
    </div>
  )
}

export default App