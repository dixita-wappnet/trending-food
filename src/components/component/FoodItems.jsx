import React,{useState} from 'react'
import { Container } from '@mui/material'
import items from '../../data/items'
import { Box } from '@mui/material'
import { foods } from '../../data/food'
import ChefDetails from '../component/ChefDetails'

function Items() {

  const [currFr, setCurrFr] = useState(items[0])
  const [chef, setChef] = useState(foods[0])
  const [active, setActive] = useState({
    activeObject: null,
    objects:items
  })
  

   function toggleActive(id) {
    console.log(toggleActive(id))
    setActive({...active, activeObject: active.objects[id]});
   }

   function toggleActiveStyle(id) {
    if(active.objects[id] === active.activeObject){
      return "box active";
    }
    else {
      return "box inactive";
    }
   }
 
  return (
    <>
      <Container>
        <div>
          <ul style={{ display: "flex", cursor:"pointer", alignContent: "center", justifyContent: "center", marginLeft:"-4.5%" }}>
            {active.objects.map((item,id) => {
              return (
                <Box sx={{border: 1, pointerEvents:"curser", borderRadius: '16px', margin:"0px 10px"}}>
                  <div key={id} value={currFr} onClick={() => {setCurrFr(items[item.id -1]); setChef(foods[item.id - 1]); toggleActive(id)}} className={toggleActiveStyle(id)} >
                    <img src={item.image} style={{ margin: "5px 5px" }} alt="" height="80" width="80" />
                     <div style={{margin: "0px 20px"}}>{item.item}</div>
                  </div>
                </Box>
              )
            })}
          </ul>
        </div>
        
      </Container>
      <br/>
      <br/>
      <Container maxWidth="md">
        <h1 className="h1">TRENDING CHEF</h1>
        <p style={{ marginLeft: "100px" }}>Sed ut perspiciatis uncle omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
      </Container>
      <br/>
      <br/>
      <ChefDetails chefs={chef}/>
      </>
    
  )
}

export default Items
