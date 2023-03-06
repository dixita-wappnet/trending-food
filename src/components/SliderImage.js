
import { FormGroup, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import i2 from '../i2.jpg'
// import RoomSharpIcon from '@mui/icons-material/RoomSharp';

function Example() {
  const [city, setCity] = useState("")

  const updateValue = (e, val) => {
    console.log(e.target.value)
    setCity(e.target.value)
  }
  return (
      <div style={{ backgroundImage: `url(${i2})`, height: "80vh", marginTop: "55px", display:"flex", opacity:"0.8" }}>
        <FormGroup style={{ top: "70%", left: "40%", display: "flex", position: "absolute", justifyContent: "center", alignContent: "center" }}>
          {/* <RoomSharpIcon/> */}
          <Select value={city} onChange={updateValue} displayEmpty style={{ backgroundColor: "white",textAlign:"center" }}>

            <MenuItem value="" >Select Your City</MenuItem>
            <MenuItem value={1}>New York</MenuItem>
            <MenuItem value={2}>Surat</MenuItem>
            <MenuItem value={3}>Mahesana</MenuItem>
            <MenuItem value={4}>Ahemadabad</MenuItem>
            <MenuItem value={5}>Kalol</MenuItem>
            <MenuItem value={6}>Baroda</MenuItem>
          </Select>
          {/* <form className="d-flex" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

          </form> */}
        </FormGroup>
        
      </div>
  )
}

export default Example
