import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params=useParams()
  return (
    <div>
        <h2 className='bg-blue-900 text-4xl text-black m-4 p-5'>{params.id} this is a course details......</h2>
    </div>
  )
}

export default CourseDetails