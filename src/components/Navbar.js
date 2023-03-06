import React from 'react'
import {pages} from '../data/nav'

function Navbar() {
  return (
    <div>
        <ul style={{display:'flex', marginLeft:650 }}>
        {pages.map((page,id) => {
             return <div key={id} style={{color: 'black', marginLeft:20}} >{page.name}</div>
        })}
        </ul>
        
    </div>
  )
}

export default Navbar
