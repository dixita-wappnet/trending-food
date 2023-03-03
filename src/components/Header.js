import React from 'react'
// import { pages } from '../data/navbar'
import AppBar from '@mui/material/AppBar';
import { Button,Tab, Container, Tabs, Toolbar, Typography } from '@mui/material';
import Navbar from './Navbar'
function Header() {
    return (
         
         
            <AppBar sx={{backgroundColor:'white'}}>
                <Toolbar>
                <Button variant='outlined' color='error'><b>LOGO</b></Button>
                <Typography>
                    <Navbar/> 
                </Typography>
                <Button variant='contained' color='error' sx={{ml:2,borderRadius:20}}>GET APP</Button>
                </Toolbar>
            </AppBar>
           
           
        
    );
}

export default Header
