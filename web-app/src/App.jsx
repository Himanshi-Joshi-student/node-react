import { useState } from 'react'
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Men from './pages/Men'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'
function App() {
  return (
    <div>
   <Navbar />
   <Navbar2 />
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/product' element={<Product />} >
        <Route path='men' element={<Men />}/>
        <Route path='women' element={<Women />}/>
        <Route path='kids' element={<Kids />} />
       </Route>
       <Route path='/courses' element={<Courses />} />
       <Route path='/courses/:id' element={<CourseDetails />} />
       <Route path='*' element={<NotFound /> } />
  
    </Routes>
    <Footer />
  </div>)
}

export default App
