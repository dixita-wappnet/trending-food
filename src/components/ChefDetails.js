import React from 'react'
import { Card, CardContent, Container, Typography } from '@mui/material'
import { details } from '../data/details'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'


function Details() {
    return (

        <Grid container style={{ justifyContent: "center" }}>

            {details.map((detail) => {
                return (
                    <Card sx={{ width: "275px", mr:3, height: "250px" }} className='card'>
                        <CardContent sx={{padding:"0px"}}>
                            <Typography sx={{ display: "flex",padding:"7px 7px" }}>
                                <img src={detail.icon} alt="lol" height="50px" width="50px" className='img' />
                                <div style={{ color: "white", margin: "10px" }}><strong>{detail.name}</strong></div>
                            </Typography>
                            <div className='bg'>
                                <div>
                                    <p sx={{padding:"5px 5px"}}>{detail.itemName} <br/>{detail.type}</p>
                                </div>
                                <div className='price'>
                                    <Button variant='contained' color='error' sx={{ borderRadius: 20 }}>$ 40.00</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </Grid>

    )
}

export default Details
