import React,{useState} from 'react'
import { Container } from '@mui/material'
import items from '../data/items'
import { Box } from '@mui/material'



function Items() {

  const [currFr, setCurrFr] = useState([0])


    const handleOnChange = (e) =>  {

      setCurrFr(e.target.value)
      
      
    }

  return (
      <Container>
        <div>
          <ul style={{ display: "flex", alignContent: "center", justifyContent: "center", marginLeft:"-4.5%" }}>
            {items.map((item,id) => {
              return (
                <Box sx={{border: 1, borderRadius: '16px', margin:"0px 10px"}}>
                
                  <div key={id} value={currFr} onClick={handleOnChange}>
                   
                     <img src={item.image} style={{ margin: "5px 5px" }} alt="" height="80" width="80" />
                     <div style={{margin: "0px 20px"}}>{item.item}</div>
                  </div>
                </Box>
              )
            })}
          </ul>
        </div>
      </Container>
    
  )
}

export default Items
