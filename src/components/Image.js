
import React from 'react'
import  food  from '../food.jpg'

function Example() {
  return (
    <div>
      <div className='object-fit-cover' style={{backgroundImage:`url(${food})`, height:"90vh", marginTop:"50px",filter:"blur(1px)"}}></div>
      
    </div>
  )
}

export default Example
