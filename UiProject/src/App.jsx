import { useState } from 'react'
import './App.css'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const users=[
  {
    img:'https://media.istockphoto.com/id/2017192578/photo/photo-of-young-asian-man-at-coffee-shop.jpg?s=2048x2048&w=is&k=20&c=Fh3d7kYoAVbpvm4AOcqRjYQ4VG_VfyMLeAkBMCqrk0s=',
    intro:'',
    tag:'Satisfied'
  },
  {
    img:'https://media.istockphoto.com/id/1309790993/photo/head-shot-portrait-smiling-woman-waving-hand-at-camera.jpg?s=2048x2048&w=is&k=20&c=XqkYZdo0eC9pwtMDq6VWpYvdj1m6IF4_PHMVnJPh7-w=',
    intro:'',
    tag:'UnderServed'
  },
  {
    img:'https://media.istockphoto.com/id/2164216498/photo/portrait-of-cheerful-businesswoman-using-laptop-at-table-in-cafe.jpg?s=2048x2048&w=is&k=20&c=cIH68RphN8vssTqUSxZ8Tw6EGZqNT3r6RNIYRBPoSNU=',
    intro:'',
    tag:'UnderBanked'
  },
]
const App=()=>{

  return(
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
