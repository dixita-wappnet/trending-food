
import { Button, FormGroup, InputBase, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.borderRadius,
  width: "100%",
  
}))

function Example() {
  const [city, setCity] = useState("")

  const updateValue = (e, val) => {
    console.log(e.target.value)
    setCity(e.target.value)
  }
  
  return (
      <div style={{ backgroundImage: `url(./assets/i2.jpg)`, height: "80vh", display:"flex", opacity:"0.8", justifyContent:"center", alignItems:"center" }}>
        
        <FormGroup style={{ top: "70%",position: "absolute",flexDirection:"row", justifyContent: "center", alignContent: "center" }}>
          <Button  startIcon={<LocationOnIcon fontSize='large'/> } style={{ backgroundColor: "white",textAlign:"center", display:"flex" }}>
            <Select value={city} onChange={updateValue} displayEmpty style={{outline:'none'}}>
            <MenuItem value="" >Select Your City</MenuItem>
            <MenuItem value={1}>New York</MenuItem>
            <MenuItem value={2}>Surat</MenuItem>
            <MenuItem value={3}>Mahesana</MenuItem>
            <MenuItem value={4}>Ahemadabad</MenuItem>
            <MenuItem value={5}>Kalol</MenuItem>
            <MenuItem value={6}>Baroda</MenuItem>
            </Select>
          </Button>
          <Button endIcon={<SearchIcon/>} style={{ backgroundColor: "white",textAlign:"center", display:"flex" }}>
          <Search style={{display:"flex"}} >
            <InputBase placeholder='Search.....'/> 
            </Search>
            </Button>
        </FormGroup>
        
      </div>
  )
}

export default Example
