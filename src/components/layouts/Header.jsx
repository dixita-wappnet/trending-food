import React from 'react'
// import { pages } from '../data/navbar'
import AppBar from '@mui/material/AppBar';
import { Button,Tab,  Tabs,styled, Toolbar, Typography } from '@mui/material';
import Navbar from '../component/Navbar'
// import Items from './Items';

const StyledToolbar = styled(Toolbar)({
display:"flex",
justifyContent:"space-between",
})
function Header() {
    return (
            <AppBar position='sticky' sx={{backgroundColor:"white"}}>
                <StyledToolbar>
                <Button variant='outlined' color='error'><b>LOGO</b></Button>
                <Typography variant='h6'>
                    <Navbar /> 
                </Typography>
                <Button variant='contained' color='error' sx={{ml:1,borderRadius:20, "&:hover":{backgroundColor:"forestgreen"}}}>GET APP</Button>
                </StyledToolbar>
            </AppBar>   
    );
}

export default Header
